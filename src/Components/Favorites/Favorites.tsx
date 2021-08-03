import { useContext } from "react";
import { ItemContext } from "../../Context/ItemContextProvider";


function Favorites(){
    const {favorites} = useContext(ItemContext);
    return (
        <div className="FavoritesWrapper">  
        <ul>
            {favorites.map((favorite, index) => 
                <li>{favorite.label}</li>
            )}
        </ul>
        </div>
    )
}


export default Favorites;
