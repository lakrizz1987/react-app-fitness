import { getOne } from "./api";

export const getUserFavoriteExercises = async (trainingIds) => {
    let exercises = [];

    const result = await trainingIds.map(async (id) => {
        const exercise = await getOne(id);
        exercises.push(exercise);
    });

    await Promise.all(result);

    return exercises;
}