import { useState, useEffect } from "react";
import { addToCart, incrementQuantity, decrementQuantity, removeItem, } from "../store/cartSlice";

function Cart() {
  const [items, setItems] = useState(
    localStorage.getItem("items") || []
  );

  // Whenever items change save to localStorage
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
    console.log(`Saved ${items.length} items to localstorage`);
    console.log(localStorage.items.items);
  }, [items]); //dependency is items


  return (
    <div>
      <button type="button" onClick={addToCart}>
        Add To Cart
      </button>
    </div>
  );
}

export default Cart;