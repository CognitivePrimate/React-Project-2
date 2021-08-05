import { ItemContext } from "../../Context/ItemContextProvider";

import { useContext } from "react";
import Item from "../Item/Item";

// css
import "./FoundItemsStyles.css";

function FoundItems(){
    const { items } = useContext(ItemContext);
    
    return (
        
        <div className="FoundItemsWrapper">  
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