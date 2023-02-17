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
            <ItemContainer>
                <img src={item.item.image} alt="image" />
                <ItemInfo>
                    <h2>{item.item.title} <span>{item.item.category}</span></h2>
                    <h2>{item.item.price} $</h2>
                    <p>{item.item.description}</p>
                </ItemInfo>
            </ItemContainer>
            
            <ButtonContainer>
                <button 
                    onClick={() => {handleClick(item.item)}}>Add to Cart
                </button>
            </ButtonContainer>
        </div>
    )
}

export default Item;

const ItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5%;
    img{
        align-self: center;
    }

`

const ItemInfo = styled.div`
    padding: 5%;
    text-align: left;

    span{
        font-size: 0.8rem;
        color: white;
        background: lightgrey;
        padding: 1%;
        border-radius: 0.5rem;
    }

    p{
        font-size: 18px;
    }

`

const ButtonContainer = styled.div`
    button{
        border: none;
        background: gold;
        padding: 1% 5%;
        cursor: pointer;
    }


`