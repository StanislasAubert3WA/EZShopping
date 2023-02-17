import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../store/itemsSlice";
import { cartActions } from "../store/cartSlice";
import styled from 'styled-components';
import Item from "./Item";


const ItemsList = () => {
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems())
  }, [])

  return (
      <ItemsContainer >
        {
          items.map((i, key) => {
          
            return <Item item={i} key={key}/>
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
