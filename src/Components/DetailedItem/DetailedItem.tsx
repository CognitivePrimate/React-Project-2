import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemContext } from "../../Context/ItemContextProvider";
import {Hit, Item} from "../../Model/ItemInterface";


interface RouteParams {
    label: string
}

function DetailedItem(){
    // instantiate context
    const {items} = useContext(ItemContext);
    const {label} = useParams<RouteParams>();

    const foundItem: Hit | undefined = items.find((item) => item.recipe.label === label);
    console.log(foundItem);
    
    return (
        <div className="DetailedItemWrapper">
            <h2>{foundItem?.recipe.label}</h2>
            <div className="ItemWrapperLeft">
                <img src={foundItem?.recipe.image} alt="food-pic"/>
            </div>
            <div className="ItemWrapperRight">
                <p>Servings: <div className="numberBubble">{foundItem?.recipe.yield}</div></p>
                <p>Calories: <div className="numberBubble">{foundItem?.recipe.calories}</div></p>
            </div>


        </div>
    )

}

export default DetailedItem;