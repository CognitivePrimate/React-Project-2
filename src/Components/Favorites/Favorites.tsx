import { useContext } from "react";
import { ItemContext } from "../../Context/ItemContextProvider";
import Item from "../Item/Item";

import "./FavoritesStyles.css";

function Favorites(){
    const {favorites} = useContext(ItemContext);
    console.log("favorites from Favorites Component", favorites);
    return (
        <div className="FavoritesWrapper">
            <p className="PaddingParagraph">""</p>
            <h2>Favorites</h2>
            {favorites.map((item, index) => 
                <Item 
                    key={`${item.label}-${index}`}
                    item={item}
                />
            )}
        </div>
    )
}
export default Favorites;
