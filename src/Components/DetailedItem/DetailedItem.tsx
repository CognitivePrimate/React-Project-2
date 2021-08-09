import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ItemContext } from "../../Context/ItemContextProvider";
import {Hit} from "../../Model/ItemInterface";

// css
import "./DetailedItemStyles.css";

// import icons
import tofavoriteIcon from "../../Icons/to-favorite.svg";
import favoritedIcon from "../../Icons/favorited.svg";
import expand from "../../Icons/expand.svg";
import { isGetAccessorDeclaration } from "typescript";

interface RouteParams {
    label: string
}

function DetailedItem(){
    // instantiate context
    const {items, addFavorite, removeFavorite, favorites} = useContext(ItemContext);
    const {label} = useParams<RouteParams>();

    // for handling icon display
    const [icon, setIcon] = useState(tofavoriteIcon);
    // 

    // displays the item chosen from initial search page based on a name (label) match
    const foundItem: Hit | undefined = items.find((item) => item.recipe.label === label);
    
    // checks if recipe is already favorited and sets icon accordingly --- useEffect stops from cycling into infinite loop
    useEffect(() => {
        foundItem?.recipe.favorite ? setIcon(favoritedIcon) : setIcon(tofavoriteIcon);
    },[foundItem?.recipe.favorite])
    
    console.log("found item:", foundItem);

    // accordion function for health and ingredient display expansion
    const accordion = () => {
        let accordionButton = document.getElementsByClassName("Accordion");
        for (let i=0; i < accordionButton.length; i++){
            
        }
    }

    //  handle adding/removing favorites   
    const handleFavorites = () => {

        let index = -1;
        if (foundItem?.recipe){
            
            // if recipe is favorited, will unfavorite and vice versa
            foundItem.recipe.favorite = !foundItem.recipe.favorite;
            
            // if recipe is favorited icon sets to favorited
            foundItem.recipe.favorite ? setIcon(favoritedIcon) : setIcon(tofavoriteIcon);
            
            
            // to get index for removal from favorites --- IS THIS BEST WAY? ASK KYLE
            for (const favorite of favorites) {
                // favorite.label === favorite.label ? break : continue;
                index++;
                if  (foundItem.recipe.label === favorite.label) {
                    
                    break;
                } else {
                    continue;
                }
            }
            
            // to add item to favorites
            foundItem.recipe.favorite ? addFavorite(foundItem.recipe) : removeFavorite(index);
            index = -1;
            
        }
    }

    // image variable & initial check to determine which icon to show -- to-favorite or favorited
    let background = `${foundItem?.recipe.image}`;
    
    // changing hyphenated healthLabels from API to spaces instead
    const healthLabel: string[] | undefined = foundItem?.recipe.healthLabels;
    const healthLabelSplit: string | undefined = healthLabel?.join(", ");

    // variable for changing ingredient list from comma formatting to bulleted list -- to be used below in return
    const ingredientList: string[] | undefined = foundItem?.recipe.ingredientLines;

    // variable for button click to take user to actual recipe page externally
    const link: string = foundItem ? foundItem.recipe.url : "";

    // const externalLink: void = useEffect(() => {
    //     // if (foundItem) const definitelyFound: Hit = foundItem;
    //       window.location.href = link;
    // }, [link])
    //     console.log("link", link);

    return (
        <div className="DetailedItemWrapperImage" style={{backgroundImage: `url(${background})`}}>
            <div className="DetailedItemWrapper">
                <div className="DetailedItemImageAndTitleWrapper">
                    <img className="HiddenImage"src={foundItem?.recipe.image} alt="food-pic"/>
                    <h2 className="DetailedHeaderText">{foundItem?.recipe.label}</h2>
                </div>
                <div className="DetailsWrapper">
                    <div className="DetailedItemInfoWrapper">
                        <p className="DetailedItemInfoBit DetailedItemText">Servings</p>
                        <p className="DetailedItemInfoBit DetailedItemText">Calories</p>
                        <p className="DetailedItemInfoBit DetailedItemText">PrepTime</p>
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
                <div className="DetailedItemDietLabels Accordion">
                    <p className="DetailedItemText"><b className="DetailedItemText">Health Labels: </b>{healthLabelSplit}</p>
                    <img src={expand} alt="see more" onClick={accordion}/>
                </div>
                <div className="DetailedItemIngredients Accordion">
                    {/* <p className="DetailedItemText"><b className="DetailedItemText">Ingredients: </b>{foundItem?.recipe.ingredientLines}</p> */}
                    <p className="DetailedItemText"><b className="DetailedItemText">Ingredients:</b> 
                        {ingredientList?.map((ingredient, index) =>
                            <li className="DetailedItemText" key={`${ingredient}-${index}`}>
                                {ingredient}
                            </li>
                        )}
                    </p>
                    <img src={expand} alt="see more" onClick={accordion}/>
                </div>
                <div className="DetailedItemFooter">
                    <Link to="/"><button className="backButton">Back</button></Link>
                    <Link className="DetailedRecipeButton" target="blank" to={{pathname: link}}>Recipe</Link>
                    <img className="DetailedItemfavoriteIcon" src={icon} alt="favorite-icon" onClick={() => {handleFavorites()}}/>
                </div>
            </div>
            {/* <div className="Reflection" style={{backgroundImage: `url(${background})`}}></div> */}
        </div>
    )
}

export default DetailedItem;

