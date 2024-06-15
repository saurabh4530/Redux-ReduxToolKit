import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./features/cake/CakeSlice";
import iceCreamReducer from "./features/icecream/IceCreamSlice";
import userReducer from "./slices/UserSlice"



const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        users:userReducer
    },
})
export default store;
