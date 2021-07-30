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
            <p>some weird shit is happening</p>
            <div className="ItemWrapperLeft">
                <h3>{item.label}</h3>
                <img src={item.image} alt="food-pic"/>
            </div>
            <div className="ItemWrapperRight">
                <p>Servings: <div className="numberBubble">{item.yield}</div></p>
                <p>Calories: <div className="numberBubble">{item.calories}</div></p>
            </div>
        </Link>
    )

}

export default ItemComponent;