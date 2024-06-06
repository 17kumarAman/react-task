import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import Home from './components/Home';
import Products from './components/Products';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Register from './components/Register';

const App = () => {
    const auth = useSelector((state) => state.auth);

    return (
        <div>
            <Navbar />
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/login" element={auth.token ? <Navigate to="/" /> : <Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={auth.token ? <Products /> : <Navigate to="/login" />} />
                <Route path="/cart" element={auth.token ? <Cart /> : <Navigate to="/login" />} />
            </Routes>
        </div>
    );
};

export default App;
