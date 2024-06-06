import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        firstname: '',
        lastname: '',
        city: '',
        street: '',
        number: '',
        zipcode: '',
        phone: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://fakestoreapi.com/users', {
                email: formData.email,
                username: formData.username,
                password: formData.password,
                name: {
                    firstname: formData.firstname,
                    lastname: formData.lastname
                },
                address: {
                    city: formData.city,
                    street: formData.street,
                    number: formData.number,
                    zipcode: formData.zipcode,
                    geolocation: {
                        lat: '-37.3159',
                        long: '81.1496'
                    }
                },
                phone: formData.phone
            });
            console.log(response.data);
            setSuccess('Registration successful! Redirecting to login...');
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (error) {
            setError('Error registering. Please try again.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Email" 
                    required 
                />
                <input 
                    type="text" 
                    name="username" 
                    value={formData.username} 
                    onChange={handleChange} 
                    placeholder="Username" 
                    required 
                />
                <input 
                    type="password" 
                    name="password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    placeholder="Password" 
                    required 
                />
                <input 
                    type="text" 
                    name="firstname" 
                    value={formData.firstname} 
                    onChange={handleChange} 
                    placeholder="First Name" 
                    required 
                />
                <input 
                    type="text" 
                    name="lastname" 
                    value={formData.lastname} 
                    onChange={handleChange} 
                    placeholder="Last Name" 
                    required 
                />
                <input 
                    type="text" 
                    name="city" 
                    value={formData.city} 
                    onChange={handleChange} 
                    placeholder="City" 
                    required 
                />
                <input 
                    type="text" 
                    name="street" 
                    value={formData.street} 
                    onChange={handleChange} 
                    placeholder="Street" 
                    required 
                />
                <input 
                    type="number" 
                    name="number" 
                    value={formData.number} 
                    onChange={handleChange} 
                    placeholder="Number" 
                    required 
                />
                <input 
                    type="text" 
                    name="zipcode" 
                    value={formData.zipcode} 
                    onChange={handleChange} 
                    placeholder="Zipcode" 
                    required 
                />
                <input 
                    type="text" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    placeholder="Phone" 
                    required 
                />
                <button type="submit">Register</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
            </form>
        </div>
    );
};

export default Register;
