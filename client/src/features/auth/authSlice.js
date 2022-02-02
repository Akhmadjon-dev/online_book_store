import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    isAuthenticated: false,
    user: {
        
    },
    token: null,
    error: null,
    loading: false,
    isAdmin: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginLoading: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.loading = false;
            state.error = null;
            state.isAdmin = action.payload.isAdmin;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
        }
    }   
});

export const { loginLoading, loginSuccess, loginFailure } = authSlice.actions;

export default authSlice.reducer;
