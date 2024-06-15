import { createSlice } from "@reduxjs/toolkit";
import {ordered as icecreamOfferCakeSe } from "../cake/CakeSlice"


const IceCreamSlice=createSlice({
    name:"icecream",
    initialState:{numOfIceCreams:15},
    reducers:{
        ordered:(state)=>{
            state.numOfIceCreams--;
        },
        restocked:(state,action)=>{
            state.numOfIceCreams=state.numOfIceCreams+action.payload
        },
       reset: (state,action)=>{
            state.numOfIceCreams=0;

    }},
    extraReducers:(builder)=>{
        builder.addCase(icecreamOfferCakeSe,(state,action)=>{
            state.numOfIceCreams=state.numOfIceCreams-1;
        })
    }
   
    
})
export default IceCreamSlice.reducer;
export const {ordered,restocked, reset}=IceCreamSlice.actions