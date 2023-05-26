import axios from "axios";

const ApiBaseUrl = process.env.REACT_APP_APIURL;
const getAllCompany=async()=>{
   // debugger
    try{
        debugger
        const response = await axios.get(ApiBaseUrl+`/GetAllCompany`);
        return response.data;
    }
    catch(error){
        throw error
    }
}

const createCompany=async(data)=>{
    //debugger
    try{
        const response=await axios.post(ApiBaseUrl+`/CreateCompany`,data)
        console.log(response.data,"response data")
        return response.data
    }
    catch(error){
        throw error
    }
}


  



const updateCompany=(data)=>{
   // debugger 
    try{
        const response= axios.put(ApiBaseUrl+ "/UpdateCompany",data)
        return response.data;
    }
    catch(error){
        throw error;
    }
}

const deleteCompany=async(id)=>{
    //debugger
    try{
        const response=await axios.delete(ApiBaseUrl+ `/DeleteCompany?id=${id}`)
        return response.data;
    }
    catch(error){
        throw error;
    }
}

export default {getAllCompany,createCompany,updateCompany,deleteCompany};