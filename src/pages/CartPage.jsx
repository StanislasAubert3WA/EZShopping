import React from "react";

function Cart(){
    return (
        <div className="cart__left">
        <div>
            <h3>Shopping Cart</h3>
            {cart?.map((item) => (
            <CartItem
                title={item.title}
                image={item.image}
                description={item.description}
                price={item.price} 
                quantity={item.quantity}
            />
            ))}
        </div>
        </div>
    )
}

