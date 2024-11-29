import { createSlice } from "@reduxjs/toolkit";

export const siteSlice = createSlice({
    name: 'site',
    initialState: {
        hideFooter: false,
        hideNavbar: false,
    },
    reducers: {
        _hideFooterAndNavbar(state) {
            state.hideFooter = true;
            state.hideNavbar = true;
        },
        _showFooterAndNavbar(state) {
            state.hideFooter = false;
            state.hideNavbar = false;
        }
    }
})

export const { _hideFooterAndNavbar, _showFooterAndNavbar } = siteSlice.actions
export default siteSlice.reducer