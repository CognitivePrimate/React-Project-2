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

    // changing hyphenated healthLabels from API to spaces instead
    // let healthLabelFormatting = () => {
        const healthLabel: string[] | undefined = foundItem?.recipe.healthLabels;
        const healthLabelSplit: string | undefined = healthLabel?.join(", ");
        
    

    return (
        <div className="DetailedItemWrapperImage" style={{backgroundImage: `url(${background})`}}>
            <div className="DetailedItemWrapper">
                <div className="DetailedItemImageAndTitleWrapper">
                    <img className="HiddenImage"src={foundItem?.recipe.image} alt="food-pic"/>
                    <h2 className="DetailedHeaderText">{foundItem?.recipe.label}</h2>
                </div>
                <div className="DetailsWrapper">
                    <div className="DetailedItemInfoWrapper">
                        <p className="ItemInfoBit DetailedItemText">Servings</p>
                        <p className="ItemInfoBit DetailedItemText">Calories</p>
                        <p className="ItemInfoBit DetailedItemText">PrepTime</p>
                    </div>
                    <div className="DetailedItemBubbleWrapper">
                        <div className="DetailedNumberBubble">{foundItem?.recipe.yield}</div>
                        <div className="DetailedNumberBubble">{(foundItem ? (foundItem.recipe.calories / foundItem.recipe.yield).toFixed(0) : "")}</div>
                        <div className="DetailedNumberBubble">{foundItem?.recipe.totalTime}</div>
                    </div>
                </div>
                <div className="DetailedItemDietLabels">
                    {/* VV if dietlabels exist, display below. otherwise nothing displays */}
                    {foundItem?.recipe.dietLabels ? <p className="DetailedItemText"><b className="DetailedItemText">Diet Labels:</b> {foundItem?.recipe.dietLabels}</p> : null}
                    <p className="DetailedItemText"><b className="DetailedItemText">Health Labels: </b>{healthLabelSplit}</p>
                </div>
                <div className="DetailedItemIngredients">
                    <p className="DetailedItemText"><b className="DetailedItemText">Ingredients: </b>{foundItem?.recipe.ingredientLines}</p>
                </div>
                <div className="DetailedItemFooter">

                </div>
            </div>
        </div>
    )
}
    
    // url: string;
    // ingredientLines: string[];
    // favorite: boolean;


export default DetailedItem;