import { createContext, ReactNode, useState } from "react";
import Item from "../Model/ItemInterface";


export interface ItemContextModel {
    items: Item[];
    favorites: Item[];
    addFavorite: (item: Item) => void;
    removeFavorite: (index: number) => void;
    addItem: (newItem: Item[]) => void;
}

const defaultValue: ItemContextModel = {
    items: [],
    favorites: [],
    addFavorite: () => {},
    removeFavorite: () => {},
    addItem: () => {}
}

export const ItemContext = createContext(defaultValue);

export const ItemContextProvider = ({children}: {children: ReactNode}) => {
    // set state and pass to children
    const [items, setItems] = useState<Item[]>([]);

    // TEST
    const [favorites, setFavorites] = useState<Item[]>([]);
    // TEST

    // FUNCTIONS
    // to be called dependent on search params? ***delete if not useable***
    // const addItem = (newItems: Item[]): void => {
    //     console.log(`in addItems`, newItems);
    //     setItems(newItems);
    // }
    // TEST
    const addItem = (items: Item[]): void => {
        console.log(`in addItems: items:`, items);
        setItems(items);
        console.log(`in addItems post-Set: items:`, items);
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

    return (<ItemContext.Provider value={ {items, favorites, addItem, addFavorite, removeFavorite} }>
                {children}
            </ItemContext.Provider>)
};
