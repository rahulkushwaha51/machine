import axios from "axios";
import { useEffect, useState } from "react";

import { useParams } from "react-router";

const UserDetails = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  const url = import.meta.env.VITE_SERVER_URL;
  const { id } = useParams();
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${url}/getuser/${id}`); // getting the user from the backend
        setUser(response.data.user);
      } catch (error) {
        setError(error.response.data.message);
      } 
    };
    fetchUser();
  }, [id]);

 
  return (
    <div className="container">
      <h1>User Details</h1>

      {user && (
        <div className="user">
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Name: {user.name}</p>
          <p>DOB: {user.dob}</p>
          <p>Address: {user.address}</p>
          <p>Phone: {user.phone}</p>
          <p>Role: {user.role}</p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default UserDetails;
