import { createContext, ReactNode, useEffect, useState } from "react";
import { Item, Hit, Query } from "../Model/ItemInterface";
import { fetchAllRecipes } from "../Services/RecipeServices";

export interface QueryParams {
    q: string;
    calories?: number;
    health?: string[];
    diet?: string[];
}

export interface HealthOptionsState {
    gluten?: boolean | undefined;
    vegetarian?: boolean | undefined;
}

export interface DietOptionsState {
    balanced?: boolean | undefined;
    lowFat?: boolean | undefined;
}

export interface ItemContextModel {
    items: Hit[];
    favorites: Item[];
    addFavorite: (item: Item) => void;
    removeFavorite: (index: number) => void;
    fetchRecipes: ({query, health, diet}: Query) => void;
}

const defaultValue: ItemContextModel = {
    items: [],
    favorites: [],
    addFavorite: () => {},
    removeFavorite: () => {},
    fetchRecipes: () => {}
}

export const ItemContext = createContext(defaultValue);

export const ItemContextProvider = ({children}: {children: ReactNode}) => {
    // set state and pass to children
    const [items, setItems] = useState<Hit[]>([]);

    const [favorites, setFavorites] = useState<Item[]>([]);
 
    useEffect(() => {
        fetchAllRecipes({q: ""}).then((data) => {
            setItems(data)
        })
    },[])
    
 
    const fetchRecipes = ({query, health, calories, diet}: Query): void => {

        // gluten option conversion
        let glutenOption = "";
        if (health?.gluten){
            glutenOption = "gluten-free"
        } else {
            glutenOption = "";
        }
        
        // vegetarian option conversion
        let vegetarianOption = "";
        if (health?.vegetarian){
            vegetarianOption = "vegetarian"
        }

        // calorie count conversion from string to integer
        let caloriesAmount = calories;

        let balancedOption = "";
        if (diet?.balanced){
            balancedOption = "balanced"
        }
        let lowFatOption = ""
        if (diet?.lowFat){
            lowFatOption = "low-fat"
        }

        // object that will be used to filter the data in the fetch.
        const parameters: QueryParams = {
            q: query
        }
        console.log(parameters)
        // adding each additional parameter key to the parameters object if it exists so there is no an empty string when it passes through.
        // have to check each to make sure each is true in combinations so it goes into the string array. This will add many more combinations for each additional option.
        if (glutenOption && !vegetarianOption){
            parameters.health = [glutenOption]
        } else if (!glutenOption && vegetarianOption){
            parameters.health = [vegetarianOption]
        } else if (glutenOption && vegetarianOption){
            parameters.health = [glutenOption, vegetarianOption]
        } 

        // checking for diet array of strings
        if (balancedOption && !lowFatOption){
            parameters.diet = [balancedOption]
        } else if (!balancedOption && lowFatOption){
            parameters.diet = [lowFatOption]
        } else if (balancedOption && lowFatOption){
            parameters.diet = [balancedOption, lowFatOption]
        }

        // checking if we need to add calorie count
        if (caloriesAmount){
            parameters.calories = parseInt(caloriesAmount);
        }

        fetchAllRecipes(parameters).then((data) => {
            setItems(data);
        })
    }
    // to be added to favorites section dependant on function call by click
    const addFavorite = (item: Item): void => {
        let newFavorites: Item[] = favorites;
        newFavorites.push(item);
        setFavorites(newFavorites);
    }

    // remove from favorites
    const removeFavorite = (index: number): void => {
        let newFavorites: Item[] = favorites;
        newFavorites.splice(index, 1);
        setFavorites(newFavorites);



    }
  
    return (<ItemContext.Provider value={ {items, favorites, fetchRecipes, addFavorite, removeFavorite} }>
                {children}
            </ItemContext.Provider>)
};
