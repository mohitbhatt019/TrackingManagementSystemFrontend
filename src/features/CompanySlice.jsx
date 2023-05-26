import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CompanyService from "../services/CompanyService";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const companyDetails=createSlice({
  name:"companyDetails",
  initialState: {
      companies: [],
      loading: false,
      error: "",
    },
    reducers: {
      resetLogoutStateInCompany: (state) => {
        //debugger
        state.companies = "";
        state.loading = false;
        state.error = null;
      },
    },
    extraReducers: (builder) => {
     // debugger
      builder
      //Display case
        .addCase(getAllCompany.pending, (state) => {
          state.loading = true;
        })
        .addCase(getAllCompany.fulfilled, (state, action) => {
          state.loading = false;
          state.companies = action.payload;
          
        })
        .addCase(getAllCompany.rejected, (state, action) => {
         
          state.error = action.error.message;
         // localStorage.setItem("currentUser", "");
        })

        //Create Case
      
        .addCase(createNewCompany.pending, (state) => {
          state.loading = true;
        })
        .addCase(createNewCompany.fulfilled, (state, action) => {
          state.loading = false;
          state.companies.push(action.payload);
        })
        .addCase(createNewCompany.rejected, (state, action) => {
          state.error = action.error.message;
        })

        //Update company
        .addCase(updateCompany.pending,(state)=>{
          state.loading=true;
        })
        .addCase(updateCompany.fulfilled,(state,action)=>{
          state.loading=false;

          //Will resove later
          state.companies=state.companies.map((ele)=>
    ele.id===action.payload.data?action.payload:ele)

        })
        .addCase(updateCompany.rejected,(state,action)=>{
          state.error=action.payload
        })

        //delete Case
        .addCase(deleteCompanybyId.pending, (state) => {
          state.loading = true;
        })
        .addCase(deleteCompanybyId.fulfilled, (state, action) => {
          const  id  = action.payload.data;
          if (id) {
            state.companies = state.companies.filter((ele) => ele.id !== id);}
          state.loading = false;
        })
        .addCase(deleteCompanybyId.rejected, (state, action) => {
          state.error = action.error.message;
        })
    },
})


//this reducer is to get comapny
export const getAllCompany=createAsyncThunk(
  
    "getAllCompany",
    
    async(args,{rejectWithValue})=>{
        //debugger
       // const companyData = useSelector((state) => state.companyData.companies);
       // if(companyData.length>0){ return}
        const response =await CompanyService.getAllCompany();
        try{
            return response
        }
        catch(error){
            rejectWithValue(error);
        }
    }
)

//this Action is to create new company
export const createNewCompany=createAsyncThunk(
  "createNewCompany",
  async(data,{rejectWithValue})=>{
      
      const response=CompanyService.createCompany(data);
      try{
        //debugger
        console.log(response,"result async")
        return response;
      }
      catch(error){
         console.log(error,"error async")
          return rejectWithValue(error)
      }
  }
)

//This reducer is to update data from Company table

export const updateCompany=createAsyncThunk(
  "updateCompany",
  async(data,{rejectWithValue})=>{
    //debugger
    const response=CompanyService.updateCompany(data);
    try{
      return response;
    }
    catch(error){
      return rejectWithValue(error)
    }
  }
)

export const deleteCompanybyId=createAsyncThunk(
  "deleteCompanybyId",
  async(id,{rejectWithValue})=>{
   // debugger
    const response=await CompanyService.deleteCompany(id);
    try{
      return response;
    }
    catch(error){
      return rejectWithValue(error)
    }
  }
)

// this action is to reset all the value of store after logout
export const resetLogoutStateInCompany = createAction("companyDetails/resetLogoutStateInCompany");




export default companyDetails.reducer;
