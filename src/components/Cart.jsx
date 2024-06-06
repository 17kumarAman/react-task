import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../redux/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.items);

    const handleIncreaseQuantity = (id) => {
        const item = cart.find(item => item.id === id);
        if (item) {
            dispatch(updateQuantity({ id, quantity: item.quantity + 1 }));
        }
    };

    const handleDecreaseQuantity = (id) => {
        const item = cart.find(item => item.id === id);
        if (item && item.quantity > 1) {
            dispatch(updateQuantity({ id, quantity: item.quantity - 1 }));
        } else {
            dispatch(removeFromCart({ id }));
        }
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div>
            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    <ul>
                        {cart.map(item => (
                            <li key={item.id}>
                                <img src={item.image} alt={item.title} width="50" />
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <p>${item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                                <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                            </li>
                        ))}
                    </ul>
                    <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
                    <button onClick={handleClearCart}>Clear Cart</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
