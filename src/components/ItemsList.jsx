import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../store/itemsSlice";

const ItemsList = () => {
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();

  const itemsListComponents = items.map((e, key) => (
    <div key={key} style={{ border: "1px black solid" }}>
      {e.title}
      {e.price}
    </div>
  ));
  return (
    <div style={{ marginTop: 200 }}>
      <button onClick={() => dispatch(fetchItems())}>Fetch Items List</button>
      <div style={{ marginTop: 40 }}>{itemsListComponents}</div>
    </div>
  );
};

export default ItemsList;
