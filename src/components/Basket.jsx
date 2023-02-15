import { useState, useEffect } from "react";

function Basket() {
  let [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  // Whenever items change save to localStorage
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
    console.log(`Saved ${items.length} items to localstorage`);
  }, [items]); //dependency is items

  // Add a new item
  const addToCart = () => {
    setItems([...items, `Product ${Date.now()}`]);
  };

  return (
    <div>
      <button type="button" onClick={addToCart}>
        Add To Cart
      </button>
    </div>
  );
}

export default Basket;