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
            <div className="ItemWrapperLeft">
                <h3>{item.label}</h3>
                <img className="ItemImage" src={item.image} alt="food-pic"/>
            </div>
            <div className="ItemWrapperRight">
                <div className="ItemInfoWrapper">
                    <p className="ItemInfoBit">Servings | </p>
                    <div className="NumberBubble">{item.yield}</div>
                </div>
                <div className="ItemInfoWrapper">
                    <p className="ItemInfoBit">Calories</p>
                    <div className="NumberBubble">{(item.calories / item.yield).toFixed(0)}</div>
                </div>
            </div>
        </Link>
    )

}

export default ItemComponent;