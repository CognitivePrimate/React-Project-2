import { Link } from "react-router-dom";

// importing Item interface to use as props for component
import {Item} from "../../Model/ItemInterface";

// import css
import "./Item.css";

// sets Prop item as Item determined by ItemInterface model
interface Props {
    item: Item;
}

const ItemComponent = ({item}: Props) => {
    // returns individual item component as set by props, to be laid out as defined below
    // with properties as set in ItemInterface model
    return (
        <Link className="ItemWrapper" to={`/DetailedItem/${item.label}`}>
            <div className="ItemWrapperTop">
                <img className="ItemImage" src={item.image} alt="food-pic"/>
                <h3 className="cardHead">{item.label}</h3>
            </div>
            <div className="ItemWrapperMiddle">
                <div className="ItemInfoBottom">
                    <p className="ItemInfoBit">Servings</p>
                    <div className="NumberBubble">{item.yield}</div>
                </div>
                <span>|</span>
                <div className="ItemInfoBottom">
                    <p className="ItemInfoBit">Calories</p>
                    <div className="NumberBubble">{(item.calories / item.yield).toFixed(0)}</div>
                </div>
            </div>
        </Link>
    )

}

export default ItemComponent;