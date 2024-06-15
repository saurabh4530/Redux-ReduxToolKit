// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import { reset as fullReset } from "../icecream/IceCreamSlice";


const CakeSlice=createSlice({
name:"cake",
initialState:{numOfCakes:10},
reducers:{
    ordered:(state)=>{
        state.numOfCakes--;
        
    },
    restocked:(state,action)=>{
        state.numOfCakes=state.numOfCakes+action.payload
    }
   

},
extraReducers:(builder)=>{
    builder.addCase(fullReset,(state,action)=>{
        state.numOfCakes=500;
    })
}


})
export default CakeSlice.reducer;
export const {ordered,restocked}=CakeSlice.actions