import axiosPublic from "./axiosPublic";
// CRUD
// Create
const createUser = async (userData) => {
  try {
    const response = await axiosPublic.post("/users", userData);
    return response;
  } catch (error) {
    console.error("Error creating user", error);
    throw error;
  }
};

const createAlbum = async (albumData) => {
  try {
    const response = await axiosPublic.post("/albums", albumData);
    return response;
  } catch (error) {
    console.error("Error creating album", error);
    throw error;
  }
};
// Read
const getUsers = async() =>{
    try {
        const response = await axiosPublic.get('/users');
        return response
    } catch (error) {
        console.error("Error getting users", error);
        throw error;
        
    }
}
// getting user by id
const getUsersByID = async (id) => {
  try {
    const response = await axiosPublic.get(`/users/${id}`);
    return response;
  } catch (error) {
    console.error("Error getting user", error);
    throw error;
  }
};
// Get albums
const getAlbums = async () => {
  try {
    const response = await axiosPublic.get("/albums");
    return response;
  } catch (error) {
    console.error("Error getting albums", error);
    throw error;
  }
};
// getting album by id
const getAlbumsByID = async (id) => {
  try {
    const response = await axiosPublic.get(`/albums/${id}`);
    return response;
  } catch (error) {
    console.error("Error getting album", error);
    throw error;
  }
};

// Update photo
const updatePhotos = async(id,titleObj) =>{
    try {
        const response = await axiosPublic.patch(`/photos/${id}`,titleObj);
        return response;
        
    } catch (error) {
        console.error("Error getting album", error);
        throw error;
        
    }
}
export {createUser, createAlbum, getUsers,getAlbums,getUsersByID,getAlbumsByID, updatePhotos}