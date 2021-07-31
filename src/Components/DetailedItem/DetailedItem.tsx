import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ItemContext } from "../../Context/ItemContextProvider";
import {Hit} from "../../Model/ItemInterface";

// css
import "./DetailedItemStyles.css";

// import icons
import favorite from "../../Icons/to-favorite.svg";
import favorited from "../../Icons/favorited.svg";

interface RouteParams {
    label: string
}

function DetailedItem(){
    // instantiate context
    const {items, addFavorite, removeFavorite} = useContext(ItemContext);
    const {label} = useParams<RouteParams>();

    // displays the item chosen from initial search page based on a name (label) match
    const foundItem: Hit | undefined = items.find((item) => item.recipe.label === label);
    console.log("found item:", foundItem);

     // handle adding/removing favorites
     const handleFavorites = () => {
        if (foundItem){
            foundItem.recipe.favorite = !foundItem.recipe.favorite;
        }
    }
    
    // image variable
    let background = `${foundItem?.recipe.image}`

    // changing hyphenated healthLabels from API to spaces instead
    const healthLabel: string[] | undefined = foundItem?.recipe.healthLabels;
    const healthLabelSplit: string | undefined = healthLabel?.join(", ");

    // variable for changing ingredient list from comma formatting to bulleted list -- to be used below in return
    const ingredientList: string[] | undefined = foundItem?.recipe.ingredientLines;

    // variable for button click to take user to actual recipe page externally
    const link: string = foundItem ? foundItem.recipe.url : "";
        console.log("link", link);
    

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
                <div className="DetailedItemHealthLabels">
                    {/* VV if dietlabels exist, display below. otherwise nothing displays */}
                    {foundItem?.recipe.dietLabels ? <p className="DetailedItemText"><b className="DetailedItemText">Diet Labels:</b> {foundItem?.recipe.dietLabels}</p> : null}
                </div>
                <div className="DetailedItemDietLabels">
                    <p className="DetailedItemText"><b className="DetailedItemText">Health Labels: </b>{healthLabelSplit}</p>
                </div>
                <div className="DetailedItemIngredients">
                    {/* <p className="DetailedItemText"><b className="DetailedItemText">Ingredients: </b>{foundItem?.recipe.ingredientLines}</p> */}
                    <p className="DetailedItemText"><b className="DetailedItemText">Ingredients:</b> 
                        {ingredientList?.map((ingredient, index) =>
                            <li className="DetailedItemText" key={`${ingredient}-${index}`}>
                                {ingredient}
                            </li>
                        )}
                    </p>
                </div>
                <div className="DetailedItemFooter">
                    <Link className="DetailedRecipeButton" target="blank" to={link}>Recipe</Link>
                    <img className="DetailedItemfavoriteIcon" src={favorite} alt="favorite-icon"/>
                </div>
            </div>
            {/* <div className="Reflection" style={{backgroundImage: `url(${background})`}}></div> */}
        </div>
    )
}
    
    // url: string;
    // favorite: boolean;


export default DetailedItem;