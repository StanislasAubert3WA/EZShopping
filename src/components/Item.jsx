import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
import styled from 'styled-components';

const Item = (item, key) => {  
    
const dispatch = useDispatch();
const handleClick = item => {
    dispatch(cartActions.addItem(item));
}
    return(
        <div key={key}>
            <div>
                <img src={item.item.image} alt="image" />
                <div>
                    <h2>{item.item.title}</h2>
                    <h5>{item.item.price}</h5>
                    <p>{item.item.description}</p>
                </div>
            </div>
            
            <div>
                <button 
                    onClick={() => {handleClick(item.item)}}>Add to Cart
                </button>
            </div>
        </div>
    )
}

export default Item;