    import React, { useState } from 'react';
    import { useDispatch } from 'react-redux';
    import { login } from '../redux/authSlice';
    import axios from 'axios';
    import { useNavigate } from 'react-router-dom';

    const Login = () => {
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const users = [
            { username: 'johnd', password: 'm38rmF$' },
            { username: 'mor_2314', password: '83r5^_' },
            { username: 'kevinryan', password: 'kev02937@' },
            { username: 'donero', password: 'ewedon' },
            { username: 'derek', password: 'jklg*_56' },
            { username: 'david_r', password: '3478*#54' },
            { username: 'snyder', password: 'f238&@*$' },
            { username: 'hopkins', password: 'William56$hj' },
            { username: 'kate_h', password: 'kfejk@*_' },
            { username: 'jimmie_k', password: 'klein*#%*' }
        ]

        const handleLogin = async (e) => {
            e.preventDefault();
            try {
                const response = await axios.post('https://fakestoreapi.com/auth/login', {
                    username,
                    password
                });
                const data = response.data;
                if (data.token) {
                    dispatch(login({ token: data.token, username }));
                    navigate('/products');
                } else {
                    console.error('Login failed');
                }
            } catch (error) {
                console.error('Login error:', error);
            }
        };

        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>
                
                <div className='m-20 border text-center w-96'>
                <h3>List of Users   please login with this id and password</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
            </div>
        );
    };

    export default Login;
