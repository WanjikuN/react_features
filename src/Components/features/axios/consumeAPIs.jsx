// import React, { useEffect, useState } from "react";
// import {
//   createUser,
//   createAlbum,
//   getUsers,
//   getAlbums,
//   getUsersByID,
//   getAlbumsByID,
//   updatePhotos,
// } from "./apis";
// const ConsumeAPIs = () => {
//   const [users, setUsers] = useState([]);
//   const [albums, setAlbums] = useState([]);
//   const [photoData, setPhotoData] = useState({
//     title: "",
//   });
//   const fetchUsers = async () => {
//     try {
//       const data = await getUsers();
//       console.log("Users", data);
//       setUsers((prevUsers) => [...prevUsers, ...data]);
//     } catch (error) {
//       console.error("Error fetching user", error);
//     }
//   };

//   useEffect(() => {
    
//     fetchUsers();
//     // const encodedString = decodeURIComponent("Hello%2C%20world%21");

//     // console.log(encodedString);
//   }, []);
//   console.log("Users", users.length);
//   const handleUpdate = async () => {
//     const updatedPhotoData = { title: "Hey" };
//     setPhotoData(updatedPhotoData);
//     try {
//       const data = await updatePhotos(601, updatedPhotoData);
//       setPhotoData(data);
//     } catch (error) {
//       console.error("Error updating photo data:", error);
//     }
//   };
//   return (
//     <>
//       <button onClick={handleUpdate}>Update</button>
//       {users.map((user) => {
//         return user.name;
//       })}
//     </>
//   );
// };
// export default ConsumeAPIs;
import React, { useEffect, useState } from "react";
import { getUsers } from "./apis";

const ConsumeAPIs = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers((prev)=>{
        if(users.length === 0){
          return data
        }else{
          return prev
        }
      });
    } catch (error) {
      console.error("Error fetching user", error);
    }
  };

  useEffect(() => {
    
      fetchUsers();
    
  }, [users]);
      console.log("Users", users);

  return (
    <>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default ConsumeAPIs;
