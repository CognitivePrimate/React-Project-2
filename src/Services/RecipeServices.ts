import axios from "axios";

// access API
const RecipeAPIUrlAll: string = "https://api.edamam.com/api/recipes/v2";

// grabs all data
export const fetchAllRecipes = () => {
    return axios.get(RecipeAPIUrlAll).then((response) => {
        return response.data
    })
}

// narrows data down to recipe objects
export const fetchRecipe = () => {
    return axios.get(RecipeAPIUrlAll).then((response) => {
        return response.data.recipe;
    })
}

