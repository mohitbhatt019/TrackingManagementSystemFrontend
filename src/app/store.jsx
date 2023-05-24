import { configureStore } from "@reduxjs/toolkit";
import  userDetails  from "../features/LoginSlice";

export const store=configureStore({
    reducer:{
        app:userDetails
    }
})