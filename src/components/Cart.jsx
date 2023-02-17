import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
      <div>
        
              {cartItems.length === 0 ? (
                <h5 className="text-center">Your cart is empty</h5>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Titre</th>
                      <th>Prix</th>
                      <th>Description</th>
                      <th>Image</th>
                      <th>Quantity</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}

              <div>
                <h6>
                  Subtotal: $
                  <span>{totalAmount}</span>
                </h6>
              </div>
      </div>
  );
};

const Tr = (props) => {
  const { id, title, price, description, image, quantity } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <tr>
      <td>{title}</td>
      <td>${price}</td>
      <td>{description}</td>
      <td >
        <img src={image} alt="" />
      </td>
      <td>{quantity} unité(s)</td>
      <td>
        <button onClick={deleteItem}>Delete</button> 
      </td>
    </tr>
  );
};

export default Cart;