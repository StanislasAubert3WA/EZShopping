import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../store/itemsSlice";
import { cartActions } from "../store/cartSlice";
import styled from 'styled-components';


const ItemsList = () => {
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems())
  }, [])

  const handleClick = item => {
    dispatch(cartActions.addItem(item));
  }

  const item = items.map((e, key) => (
    <div key={key}>
      <h2>{e.title}</h2>
      <h5>{e.price}</h5>
      <p>{e.description}</p>
      <img src={e.image} alt="image" />
      <div>
        <button 
          onClick={() => {handleClick(e)}}>Add to Cart
        </button>
      </div>
    </div>
  ));
  return (
      <ItemsContainer >
        {item}
        {
          items.map((i) => {
            <p>{i.title}</p>
          })
        }
      </ItemsContainer>

  );
};

export default ItemsList;

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
`
