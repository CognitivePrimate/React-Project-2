import { useContext } from "react";
import { ItemContext } from "../../Context/ItemContextProvider";
import Item from "../Item/Item";


function DisplayFavorites(){
    const {favorites} = useContext(ItemContext);
    console.log(favorites);
    return (
        <div className="FavoritesWrapper">  
        {favorites.map((item, index) => <Item key={`$item.recipe.label-${index}`} item={item.recipe} />)}
        </div>
    )
}
export default DisplayFavorites;
