import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { username } = useSelector((state) => state.auth);
    const cart = useSelector((state) => state.cart.items);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {username ? (
                    <div className="flex items-center">
                        <span className="text-white mr-4">Welcome, {username}</span>
                        <Link to="/" className="text-white mr-4">Home</Link>
                        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">Logout</button>
                        <button onClick={() => navigate('/cart')} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded ml-4">Cart ({cart?.length || 0})</button>
                    </div>
                ) : (
                    <div>
                        <Link to="/login" className="text-white mr-4">Login</Link>
                        <Link to="/register" className="text-white">Register</Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
