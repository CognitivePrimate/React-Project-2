import { useContext } from "react";
import { ItemContext } from "../../Context/ItemContextProvider";
import Item from "../Item/Item";


function Favorites(){
    const {items, favorites} = useContext(ItemContext);
    
    return (
        <p>FAVORITES ROUTE TEST</p>
        // <div className="FavoritesWrapper">  
        // <ol>
        //     {Favorites.map(favorites, index) => {
        //         <li>{favorites.text}</li>
        //     }
            
        //     </ol>
        // </div>
    )

}

 

export default Favorites;

 

// function index(favorites: import("../../Model/ItemInterface").Item[], index: any): string | number | boolean | {} | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | import("react").ReactNodeArray | import("react").ReactPortal | null | undefined {
//     throw new Error("Function not implemented.");
// }

