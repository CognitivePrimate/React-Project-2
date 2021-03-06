import { DietOptionsState, HealthOptionsState } from "../Context/ItemContextProvider";

// blueprint for individual recipe searched and returned item or items
export interface Item {
    label: string;
    image: string;
    url: string;
    yield: number;
    dietLabels: string[];
    healthLabels: string[];
    ingredientLines: string[];
    calories: number;
    totalTime: number;
    favorite: boolean;
}

export interface Hit {
    recipe: Item;
} 

export interface Query {
    query: string;
    calories?: string;
    health?: HealthOptionsState | undefined;
    diet?: DietOptionsState | undefined;
}
