import { Hit } from '../Model/ItemInterface'
import axios from "axios";
import { QueryParams } from '../Context/ItemContextProvider';

// access API
const RecipeAPIUrlAll: string = "https://api.edamam.com/api/recipes/v2";

// API KEY AND ID
const id = process.env.REACT_APP_API_ID;
const key = process.env.REACT_APP_EDAMAM_API_KEY;
// const key = "3132e804";
console.log(id);
console.log(key);


interface Params {
    app_id: string | undefined;
    app_key: string | undefined;
    q: string;
    type: string;
    calories?: number;
}

// grabs all data
export const fetchAllRecipes = (fetchParams: QueryParams): Promise<Hit[]> => {
    const parameters: Params = {
        app_id: id,
        app_key: key,
        q: fetchParams.q,
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


