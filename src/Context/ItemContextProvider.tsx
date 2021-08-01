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

// export interface HealthOptionsSearch {
//     gluten?: string;
// }

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

    // TEST
    const [favorites, setFavorites] = useState<Item[]>([]);
    // TEST
    useEffect(() => {
        fetchAllRecipes({q: "chicken"}).then((data) => {
            setItems(data)
        })
    },[])
    
    // TEST
    const fetchRecipes = ({query, health}: Query): void => {
        let glutenOption = "";
        console.log(health);
        if (health?.gluten){
            glutenOption = "gluten-free"
        } else {
            glutenOption = "";
        }
    
        const parameters: QueryParams = {
            q: query,
            health: [glutenOption]
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
        setFavorites(prevFavorites => [
            ...prevFavorites,
            item
        ])
    }

    // remove from favorites
    const removeFavorite = (index: number): void => {
        setFavorites(prevFavorites => [
            ...prevFavorites.slice(0, index),
            ...prevFavorites.slice(index + 1)
        ]);
    }

    return (<ItemContext.Provider value={ {items, favorites, fetchRecipes, addFavorite, removeFavorite} }>
                {children}
            </ItemContext.Provider>)
};
