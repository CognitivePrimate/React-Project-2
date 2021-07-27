import axios from "axios";

const RecipeAPIUrlAll: string = "https://api.edamam.com/api/recipes/v2";

export const fetchAllRecipes = () => {
    return axios.get(RecipeAPIUrlAll).then((response) => {
        return response.data
    })
}

export const fetchRecipe = () => {
    return axios.get(RecipeAPIUrlAll).then((response) => {
        return response.data.recipe;
    })
}

