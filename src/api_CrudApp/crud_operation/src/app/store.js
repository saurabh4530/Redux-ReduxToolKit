//@ts-nocheck
import { configureStore } from "@reduxjs/toolkit";
import gitUser  from "../features/GitUserSlice";
import  userDetail  from "../featuresCRUD/UserDetailsSlice";


export const store=configureStore({
    reducer:{
        app:gitUser,
        appCrud:userDetail

    }
})

