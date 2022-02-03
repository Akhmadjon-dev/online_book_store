import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';



const initialState = {
    isAuthenticated: false,
    user: {
        
    },
    token: null,
    error: null,
    loading: false,
    isAdmin: false,
}


const authLoginIn = createAsyncThunk(
    'auth/login',
    async (data, thunkAPI) => {
        try {
            const res = await axios.post('/auth/login', data);
            return res.data;
        } catch (err) {
            return err.response.data;
        }
    }
)

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
    }, 
    extraReducers: (builder) => {
        builder.addCase(authLoginIn.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(authLoginIn.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAdmin = action.payload.isAdmin;
        });
    },
});

export const { loginLoading, loginSuccess, loginFailure } = authSlice.actions;

// const UserSignIn = () => async (dispatch, getState) => {
//     dispatch(loginLoading());
//     const response = await axios.post('/auth/login', {
//         email: getState().auth.email,
//         password: getState().auth.password,
//     });
//     if (response.status === 200) {
//         dispatch(loginSuccess({
//             user: response.data.user,
//             token: response.data.token,
//             isAdmin: response.data.isAdmin,
//         }));
//     } else {
//         dispatch(loginFailure({
//             error: response.data.error,
//         }));    
//     }
// }


export default authSlice.reducer;
