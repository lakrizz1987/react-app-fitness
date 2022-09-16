import AuthContext from "./AuthContext";

import {createContext, useContext, useEffect, useState} from "react";

import { getFavoritesIds } from "../services/api";
import { getUserFavoriteExercises } from "../services/FavoriteExerciseService";

const MyTrainigContext = createContext();

export const MyTrainigProvider = ({children}) => {
    
    const { user } = useContext(AuthContext);
    const [traningsId, setTraningsId] = useState([]);
    const [exercises, setExercises] = useState([]);
    

    useEffect(() => {

        getFavoritesIds()
            .then(data => {
                const filter = data.filter(x => x._ownerId === user._id);
                const arr = [];
                filter.forEach(x => arr.push(x.favorites))
                setTraningsId(arr)
            })
            .catch(err => {
                alert(err)
            });

    }, [user._id]);


    useEffect(() => {

        const fetchExercises = async () => {
            const exercises = await getUserFavoriteExercises(traningsId);
            setExercises(exercises);
        }
        fetchExercises();

    }, [traningsId]);

    return (
        <MyTrainigContext.Provider value={{traningsId, setTraningsId,exercises, setExercises}}>
            {children}
        </MyTrainigContext.Provider>
    );

};

export default MyTrainigContext;