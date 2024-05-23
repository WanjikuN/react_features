import axiosPublic from "./axiosPublic";
// CRUD
const createUser = async (userData) =>{
    try{
        const response = await axiosPublic.post('/users', userData);
        return response

    }
    catch(error){
        console.error('Error creating user',error);
        throw error
        
    }
}