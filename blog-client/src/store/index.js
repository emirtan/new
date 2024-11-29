import {configureStore} from '@reduxjs/toolkit'
import authSlice from "@/store/auth";
import siteSlice from "@/store/site";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        site: siteSlice
    },
})