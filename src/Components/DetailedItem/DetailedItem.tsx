import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemContext } from "../../Context/ItemContextProvider";
import {Hit} from "../../Model/ItemInterface";

// css
import "./DetailedItemStyles.css";

interface RouteParams {
    label: string
}

function DetailedItem(){
    // instantiate context
    const {items} = useContext(ItemContext);
    const {label} = useParams<RouteParams>();

    

    const foundItem: Hit | undefined = items.find((item) => item.recipe.label === label);
    console.log("found item:", foundItem);
    
    // image variable
    let background = `${foundItem?.recipe.image}`

    return (
        <div className="DetailedItemWrapper" style={{backgroundImage: `url(${background})`}}>
            <h2>{foundItem?.recipe.label}</h2>
            <div className="DetailedItemWrapperLeft">
                {/* <img src={foundItem?.recipe.image} alt="food-pic"/> */}
            </div>
            <div className="DetailedItemWrapperRight">
                <p>Servings: <div className="DetailedNumberBubble">{foundItem?.recipe.yield}</div></p>
                <p>Calories: <div className="DetailedNumberBubble">{foundItem?.recipe.calories}</div></p>
            </div>


        </div>
    )

}

export default DetailedItem;