import { createContext, ReactNode, useEffect, useState } from "react";
import { Item, Hit, Query } from "../Model/ItemInterface";
import { fetchAllRecipes } from "../Services/RecipeServices";

export interface QueryParams {
    q: string;
    calories?: number;
    gluten?: string
}

export interface ItemContextModel {
    items: Hit[];
    favorites: Item[];
    addFavorite: (item: Item) => void;
    removeFavorite: (index: number) => void;
    fetchRecipes: (query: Query) => void;
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

    /// potential change in code to not do if statements over and over for each key.

    // calories: query.calories || undefined,
    // ^ 

    // TEST
    const fetchRecipes = ({query, gluten}: Query): void => {
        let glutenOption = "";
        if (gluten){
            glutenOption = "Gluten-Free"
        } else {
            glutenOption = "";
        }
        const parameters: QueryParams = {
            q: query,
            gluten: glutenOption
        }
        console.log(parameters);
        // Real STUFF FROM KYLE 
        console.log(parameters.q)
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
