import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
      <div>
        {cartItems.length === 0 ? (
          <h5 className="text-center">Your cart is empty</h5>
        ) : (
            <table>
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
              <tfooter>
                <Tfooter /> 
              </tfooter>
            </table>
          )}
          <div>
            <h6>
              Total price: $
              <span>{totalPrice}</span>
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

const Tfooter = () => {
  const dispatch = useDispatch();

  const clearCart = () => {
  dispatch(cartActions.clearCart());
  };
  return (
    <button className="text-center" onClick={clearCart}>clearCart</button> 
  );
};

export default Cart;