import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import LoginService from "../services/LoginService";

export const loginUser = createAsyncThunk(
  "loginUser",
  async (data, { rejectWithValue }) => {
    //debugger
    const response = await LoginService.loginApi(data);
    debugger
    try {
      //const result = await response.json();
      //console.log(result.result,"aa")
      if (response.token.length > 0) {
        return response;
      } else {
        return rejectWithValue(response); // Return the error response
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const resetLogoutState = createAction("userDetails/resetLogoutState");

export const userDetails = createSlice({
  name: "userDetails",
  initialState: {
    applicationUser: "",
    id: "",
    token: "",
    loading: false,
    error: null,
  },
  reducers: {
    resetLogoutState: (state) => {
      debugger
      state.id = "";
      state.applicationUser = "";
      state.loading = "";
      state.error = null;
      state.token = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        debugger
        state.loading = false;
        localStorage.setItem("currentUser", action.payload.token);
        state.token = localStorage.getItem("currentUser");
        state.applicationUser = action.payload;
        state.id = action.payload.id;
        state.loading = false;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        localStorage.setItem("currentUser", "");
        state.token = "";
        state.applicationUser = "";
        state.id = "";
      });
  },
});

export default userDetails.reducer;
