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
      <h2>{e.title}</h2>
      <h5>{e.price}</h5>
      <p>{e.description}</p>
      <img src={e.image} alt="image" />
    </div>
  ));
  return (
    <div style={{ marginTop: 200 }}>
      <div style={{ marginTop: 40 }}>{itemsListComponents}</div>
    </div>
  );
};

export default ItemsList;
