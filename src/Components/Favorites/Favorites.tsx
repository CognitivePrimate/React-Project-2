import { useContext } from "react";
import { ItemContext } from "../../Context/ItemContextProvider";
import Item from "../Item/Item";


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

// {items.map((item, index) => 
//     <Item 
//         key={`${item.recipe.label}-${index}`}
//         item={item.recipe}
//     />
// )}
 

export default Favorites;

 

function index(favorites: import("../../Model/ItemInterface").Item[], index: any): string | number | boolean | {} | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | import("react").ReactNodeArray | import("react").ReactPortal | null | undefined {
    throw new Error("Function not implemented.");
}

