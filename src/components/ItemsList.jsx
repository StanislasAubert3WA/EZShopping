import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../store/itemsSlice";
import { cartActions } from "../store/cartSlice";

const ItemsList = () => {
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems())
  }, [])

  const handleClick = (e) => {
    dispatch(cartActions.addItem(e));
  }

  const item = items.map((e, key) => (
    <div key={key} style={{ border: "1px black solid" }}>
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
    <div style={{ marginTop: 200 }}>
      <div style={{ marginTop: 40 }}>{item}</div>
    </div>
  );
};

export default ItemsList;
