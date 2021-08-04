import { useContext } from "react";
import { ItemContext } from "../../Context/ItemContextProvider";
import Item from "../Item/Item";


function Favorites(){
    const {favorites} = useContext(ItemContext);
    console.log(favorites);
    return (
        
        <div className="FavoritesWrapper">  
        {favorites.map((recipe, index) => 
                <Item 
                    key={`${recipe.label}-${index}`}
                    item={recipe}
                />
            )}
        </div>
    )
}

 
export default Favorites;

 

// function index(favorites: import("../../Model/ItemInterface").Item[], index: any): string | number | boolean | {} | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | import("react").ReactNodeArray | import("react").ReactPortal | null | undefined {
//     throw new Error("Function not implemented.");
// }

