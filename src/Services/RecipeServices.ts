import { queryAllByAltText } from "@testing-library/react";
import axios from "axios";

// access API
const RecipeAPIUrlAll: string = "https://api.edamam.com/api/recipes/v2";

// API KEY AND ID
const id = "267485f9";
const key = "7bb9564a25957111629d170d6fe16d2c"

// grabs all data
export const fetchAllRecipes = (query: string = "") => {
    return axios.get(RecipeAPIUrlAll, {
        params: {
            app_id: id,
            app_key: key,
            q: query,
            type: "public"
        }
    }).then((response) => {
        return response.data
    })
}

// narrows data down to recipe objects
export const fetchRecipe = () => {
    return axios.get(RecipeAPIUrlAll).then((response) => {
        return response.data.recipe;
    })
}

