import { ItemContext } from "../../Context/ItemContextProvider";

import { useContext, useEffect } from "react";
import Item from "../Item/Item";
import { fetchAllRecipes } from "../../Services/RecipeServices";

function FoundItems(){
    const { items, fetchRecipes } = useContext(ItemContext);
    

    
    return (
        
        <div className="FoundItemsWrapper">
            <p>some weirdstuff in FoundItems Component</p>
            
            {items.map((item, index) => 
                <Item 
                    key={`${item.recipe.label}-${index}`}
                    item={item.recipe}
                />
            )}

        </div>
    )

}

export default FoundItems;