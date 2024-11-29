import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: false,
        token: localStorage.getItem('_token') || ''
    },
    reducers: {
        _setToken(state, action) {
            state.token = action.payload
            localStorage.setItem('_token', action.payload)
        },
        _removeToken(state) {
            state.token = ''
            localStorage.removeItem('_token')
        },
        _setUser(state, action) {
            state.user = action.payload
        },
        _removeUser(state) {
            state.user = false
        },
        _logout(state) {
            state.user = false
            state.token = ''
            state.guestToken = ''
            localStorage.removeItem('_token')
            localStorage.removeItem('_guestToken')
        }
    }
})

export const {_setToken, _removeToken, _removeUser, _setUser, _logout } = authSlice.actions
export default authSlice.reducer