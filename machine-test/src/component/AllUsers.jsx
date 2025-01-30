import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/Users.css";
import { useNavigate } from "react-router";

const GetUser = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const url = import.meta.env.VITE_SERVER_URL;
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(`${url}/getusers`);
        setUsers(response.data.users);
      } catch (error) {
        setError(error.response.data.message);
      }
    };
    getUsers();
  }, [url]);

  if (error) {
    return <div>{error}</div>;
  }

  

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${url}/deleteuser/${id}`); // remove the user from the backend
      setUsers(users.filter((user) => user.id !== id)); // remove the user from the frontend
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleUpdate = (id) => {

    
    navigate(`/updateuser/${id}`);  //redirect to update user page
  };

  const handleGetUser = (id) => {
    navigate(`/getuser/${id}`); //redirect to user details page
  };

  return (
    <div className="container">
      <h1>All Users</h1>
      {users.length==0?<h1>No Users</h1> :( users.map((user) => (
        <div key={user._id} className="user">
          <h2>username: {user.username}</h2>
        
          <button onClick={() => handleGetUser(user._id)}>get user</button>
          <button onClick={() => handleUpdate(user._id)}>Update</button>
          <button onClick={() => handleDelete(user._id)}>Delete</button>
        </div>
      )))}
    </div>
  );
};

export default GetUser;
