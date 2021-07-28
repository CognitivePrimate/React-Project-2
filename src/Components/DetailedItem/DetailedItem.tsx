

import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemContext } from "../../Context/ItemContextProvider";
import Item from "../../Model/ItemInterface";


interface RouteParams {
    label: string
}

function DetailedItem(){
    // instantiate context
    const {items} = useContext(ItemContext);
    const {label} = useParams<RouteParams>();

    const foundItem: Item | undefined = items.find((item) => item.label === label);
    console.log(foundItem);
    
    return (
        <div className="DetailedItemWrapper">
            <h2>{foundItem?.label}</h2>
            <div className="ItemWrapperLeft">
                <img src={foundItem?.image} alt="food-pic"/>
            </div>
            <div className="ItemWrapperRight">
                <p>Servings: <div className="numberBubble">{foundItem?.yield}</div></p>
                <p>Calories: <div className="numberBubble">{foundItem?.calories}</div></p>
            </div>


        </div>
    )

}

export default DetailedItem;