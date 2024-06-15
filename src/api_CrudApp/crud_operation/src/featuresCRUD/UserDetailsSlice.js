//@ts-nocheck
// https://666c260649dbc5d7145cd7eb.mockapi.io/userDetail
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// create action
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://666c260649dbc5d7145cd7eb.mockapi.io/userDetail",
        data
      );
      return response.data;
    } catch (error) {
      // Handle errors

      return rejectWithValue(error);
    }
  }
);

//read action
export const showUser = createAsyncThunk(
  "showUser",
  async (args, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://666c260649dbc5d7145cd7eb.mockapi.io/userDetail"
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//delete action
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `https://666c260649dbc5d7145cd7eb.mockapi.io/userDetail/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
//update action
export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `https://666c260649dbc5d7145cd7eb.mockapi.io/userDetail/${data.id}`,
        data
      );
      return response.data;
    } catch (error) {
      // Handle errors

      return rejectWithValue(error);
    }
  }
);

export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
    searchData:[]
  },
  reducers:{
    searchUser:(state,action)=>{
      state.searchData=action.payload
    }

  },
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false;
      state.users = action.payload.message;
    });
    builder.addCase(showUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(showUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(showUser.rejected, (state, action) => {
      state.loading = false;
      state.users = action.payload.message;
    });
    builder.addCase(deleteUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = false;
      const {id}=action.payload
      if (id) {
        state.users.filter((ele)=>ele.id!==id)
        
      }
      
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.loading = false;
      state.users = action.payload.message;
    });
    builder.addCase(updateUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users=state.users.map((ele)=>{
       return ele.id===action.payload.id?action.payload:ele
      })
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = false;
      state.users = action.payload.message;
    });
  },
});
export default userDetail.reducer;
export const {searchUser}=userDetail.actions
