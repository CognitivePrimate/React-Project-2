import { useContext } from "react";
import { ItemContext } from "../../Context/ItemContextProvider";


function Favorites(){
    const {favorites = useContext(ItemContext);
    
    return (
        
        <div className="FavoritesWrapper">  
        <ul>
            {Favorites.map((favorites, index) => 
                <li>{favorites.label}</li>
            )}
            </ul>
        </div>
    )
}

// {items.map((item, index) => 
//     <Item 
//         key={`${item.recipe.label}-${index}`}
//         item={item.recipe}
//     />
// )}
 

export default Favorites;
