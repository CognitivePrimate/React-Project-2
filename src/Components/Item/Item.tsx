import { Link } from "react-router-dom";

// importing Item interface to use as props for component
import {Item} from "../../Model/ItemInterface";

// import css
import "./Item.css";

interface Props {
    item: Item;
}

const ItemComponent = ({item}: Props) => {

    return (
        <Link className="ItemWrapper" to="/DetailedItem">
            <div className="ItemWrapperLeft">
                <h3>{item.label}</h3>
                <img className="ItemImage" src={item.image} alt="food-pic"/>
            </div>
            <div className="ItemWrapperRight">
                <div>
                    <p>Servings:</p>
                    <div className="numberBubble">{item.yield}</div>
                </div>
                <div>
                    <p>Calories:</p>
                    <div className="numberBubble">{item.calories}</div>
                </div>
            </div>
        </Link>
    )

}

export default ItemComponent;