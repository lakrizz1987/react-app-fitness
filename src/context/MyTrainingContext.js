import {createContext} from "react";

const MyTrainigContext = createContext();

const MyTrainigProvider = ({children}) => {
    //TO DO .... Tomorow...

    return (
        <MyTrainigContext.Provider>
            {children}
        </MyTrainigContext.Provider>
    )
}