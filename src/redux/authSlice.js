import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: sessionStorage.getItem('token') || null,
    username: sessionStorage.getItem('username') || null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.token = action.payload.token;
            state.username = action.payload.username;
            sessionStorage.setItem('token', action.payload.token);
            sessionStorage.setItem('username', action.payload.username);
        },
        logout(state) {
            state.token = null;
            state.username = null;
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('username');
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
