//@ts-nocheck
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
  
export const getAllData=createAsyncThunk("gitUsers",async(args,{rejectWithValue})=>{
   try {
    
    const response=await fetch("https://api.github.com/users");
    const result =response.json();
    return result
   } catch (error) {
    return rejectWithValue("you got error")
    
   }


})
  const gitUser=createSlice({
    name:"gitUser",
    initialState:{
        users:[],
        loading:false,
        error:null


    },
    reducers:{
         deleteGitUsers:(state,action)=>{
                state.users=[];
         }
    },
    extraReducers:(builder)=>{

       builder
       .addCase (getAllData.pending,(state,action)=>{
            state.loading=true;
        })
        .addCase(getAllData.fulfilled,(state,action)=>{
            state.loading=false;
            state.users=action.payload
        })
        .addCase(getAllData.rejected ,(state,action)=>{
            state.loading=false;
            state.error=action.payload
        })
    }

   
})


export default gitUser.reducer
export const {deleteGitUsers}=gitUser.actions





