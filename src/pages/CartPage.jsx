import { cartActions } from "../store/cartSlice";
import { useSelector, useDispatch } from 'react-redux';

function CartPage() {

    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    return (
        <div>
            {cartItems.length === 0 ? (
                <h5>Your cart is empty</h5>
              ) : (
                <table>
                  <thead>
                    <tr>
                      <th>Nom du produit</th>
                      <th>Prix</th>
                      <th>Description</th>
                      <th>Image</th>
                      <th>Quantity</th>
                      <th>Delete</th>
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
                  Total: $
                  <span>{totalAmount}</span>
                </h6>
              </div>
        </div>
    );
  };
  
  const Tr = (props) => {
    const { id, image01, title, price, quantity } = props.item;
    const dispatch = useDispatch();
  
    const deleteItem = () => {
      dispatch(cartActions.deleteItem(id));
    };
    return (
      <tr>
        <td>
          <img src={image} alt="" />
        </td>
        <td>{title}</td>
        <td>${price}</td>
        <td>{quantity} unité(s)</td>
        <td>
          <button onClick={deleteItem}></button>
        </td>
      </tr>
    );
}

export default CartPage;


