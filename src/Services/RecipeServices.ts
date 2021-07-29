import { queryAllByAltText } from "@testing-library/react";
import axios from "axios";

// access API
const RecipeAPIUrlAll: string = "https://api.edamam.com/api/recipes/v2";

// API KEY AND ID
const id = "267485f9";
const key = process.env.REACT_APP_EDAMAM_API_KEY

interface Params {
    app_id: string;
    app_key: string | undefined;
    q: string;
    type: string;
    calories?: string;
}

// grabs all data
export const fetchAllRecipes = (fetchParams: any) => {
    const parameters: Params = {
        app_id: id,
        app_key: key,
        q: fetchParams.query,
        type: "public"
    }
    // FAKE STUFF FROM KYLE
    if (fetchParams.calories) {
        parameters.calories = fetchParams.calories;
    }
    // FAKE STUFF FROM KYLE


    return axios.get(RecipeAPIUrlAll, {
        params: parameters
    }).then((response) => {
        return response.data.hits
    })
}

// narrows data down to recipe objects
// export const fetchRecipe = (query: string = "") => {
//     return axios.get(RecipeAPIUrlAll, {
//             params: {
//                 app_id: id,
//                 app_key: key,
//                 q: query,
//                 type: "public"
//             }
    
//         }).then((response) => {
//         return response.data.hits
//     })
// }

