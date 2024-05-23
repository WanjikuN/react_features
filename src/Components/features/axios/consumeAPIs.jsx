import React, { useEffect, useState } from "react";
import {
  createUser,
  createAlbum,
  getUsers,
  getAlbums,
  getUsersByID,
  getAlbumsByID,
  updatePhotos,
} from "./apis";
const ConsumeAPIs = () => {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photoData, setPhotoData] = useState({
    title: "",
  });
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        console.log(data);
        setUsers(users);
      } catch (error) {
        console.error("Error fetching user", error);
      }
    };
    
    fetchUsers();
    
  }, []);
  const handleUpdate = async () => {
    const updatedPhotoData = { title: "Hey" };
    setPhotoData(updatedPhotoData);
    try {
      const data = await updatePhotos(601, updatedPhotoData);
      setPhotoData(data);
    } catch (error) {
      console.error("Error updating photo data:", error);
    }
  };
  return (
    <>
      <button onClick={handleUpdate}>Update</button>
    </>
  );
};
export default ConsumeAPIs;
