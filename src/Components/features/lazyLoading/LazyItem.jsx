import { useEffect,useState } from "react";
import { getUsers } from "../axios/apis";
const LazyItem = () => {
      const [users, setUsers] = useState([]);

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const data = await getUsers();
          // console.log(data);
          setUsers(data);
        } catch (error) {
          console.error("Error fetching user", error);
        }
      };

      fetchUsers();
    }, []);
  return <div>This is a lazy-loaded component!</div>;
};
export default LazyItem;
