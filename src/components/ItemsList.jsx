import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../store/itemsSlice";

const ItemsList = () => {
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();

  const itemsListComponents = items.map((e) => (
    <div key={e} style={{ border: "1px black solid" }}>
      {e}
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
