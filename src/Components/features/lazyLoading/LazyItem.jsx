import { useEffect, useState, useMemo } from "react";
import { getUsers } from "../axios/apis";
const LazyItem = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = useMemo(
    () => async () => {
      try {
        const data = await getUsers();
        // console.log(data);
        setUsers(data);
      } catch (error) {
        console.error("Error fetching user", error);
      }
    },
    []
  );
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  // console.log("Users", users);

  // console.log("Users",users)
  return(
 <>
    {users.map((user, index) => (
      <div key={index}>{user.name}</div>
    ))}
  </>
  )
 
};
export default LazyItem;
