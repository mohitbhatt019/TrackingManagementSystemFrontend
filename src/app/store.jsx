import { configureStore } from "@reduxjs/toolkit";
import  userDetails  from "../features/LoginSlice";
import  companyDetails  from "../features/CompanySlice";

export const store=configureStore({
    reducer:{
        // app:userDetails,
        // companyData:companyDetails
        app:userDetails,
        companyData:companyDetails
    }
})