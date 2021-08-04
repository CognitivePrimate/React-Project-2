import { createContext, ReactNode, useEffect, useState } from "react";
import { Item, Hit, Query } from "../Model/ItemInterface";
import { fetchAllRecipes } from "../Services/RecipeServices";

export interface QueryParams {
    q: string;
    calories?: number;
    health?: string[];
}

export interface HealthOptionsState {
    gluten?: boolean | undefined;
}

export interface ItemContextModel {
    items: Hit[];
    favorites: Item[];
    addFavorite: (item: Item) => void;
    removeFavorite: (index: number) => void;
    fetchRecipes: ({query, health}: Query) => void;
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

    // set favorites state and pass to children
    const [favorites, setFavorites] = useState<Item[]>([]);

    // TEST
    useEffect(() => {
        fetchAllRecipes({q: "chicken"}).then((data) => {
            setItems(data)
        })
    },[])
    
 
    const fetchRecipes = ({query, health, calories}: Query): void => {
        
        console.log(query)
        console.log(calories);
        // gluten option conversion
        let glutenOption = "";
        console.log(health);
        if (health?.gluten){
            glutenOption = "gluten-free"
        } else {
            glutenOption = "";
        }
        // calorie count conversion from string to integer
        let caloriesAmount = calories;

        const parameters: QueryParams = {
            q: query
        }
        

        if (glutenOption){
            parameters.health = [glutenOption]
        }
        if (caloriesAmount){
            parameters.calories = parseInt(caloriesAmount);
        }

        console.log(parameters);
        console.log(parameters.q);
        console.log(parameters.health);
        console.log(parameters.calories);
        fetchAllRecipes(parameters).then((data) => {
            console.log("data:", data)
            setItems(data);
        })
    }
    // TEST
    // to be added to favorites section dependant on function call by click
    const addFavorite = (item: Item): void => {
        let newFavorites: Item[] = favorites;
        newFavorites.push(item);
        setFavorites(newFavorites);
    }

    // remove from favorites
    const removeFavorite = (index: number): void => {
        // setFavorites(prevFavorites => [
        //     ...prevFavorites.slice(0, index),
        //     ...prevFavorites.slice(index + 1)
        // ]);
        // TEST
        let newFavorites: Item[] = favorites;
        newFavorites.splice(index, 1);
        setFavorites(newFavorites);
        // TEST


        console.log("in removeFav Context Provider");
    }
  
    return (<ItemContext.Provider value={ {items, favorites, fetchRecipes, addFavorite, removeFavorite} }>
                {children}
            </ItemContext.Provider>)
};
