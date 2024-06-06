import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const Product = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({ ...product, quantity: 1 }));
    };

    return (
        <div>
            <img src={product.image} alt={product.title} className='object-cover w-40' />
            <h3>{product.title}</h3>
            {/* <p>{product.description}</p> */}
            <p>${product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default Product;
