import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../store/itemsSlice";

const ItemsList = () => {
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems())
  }, [])

  const itemsListComponents = items.map((e, key) => (
    <div key={key} style={{ border: "1px black solid" }}>
      {e.title}
      {e.price}
    </div>
  ));
  return (
    <div style={{ marginTop: 200 }}>
      <div style={{ marginTop: 40 }}>{itemsListComponents}</div>
    </div>
  );
};

export default ItemsList;
