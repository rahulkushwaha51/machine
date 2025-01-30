import { useState } from "react";
import axios from "axios";
import "../styles/forms.css";
import { useParams } from "react-router";

const url = import.meta.env.VITE_SERVER_URL;


const UpdateUser = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
    dob: "",
    address: "",
    phone: "",
    role: "user",
  });
  const {id} = useParams();
 
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.put(`${url}/updateuser/${id}`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setSuccess(response.data.message);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>User Registration</h2>
      <input
        type="text"
        name="username"
        placeholder="New Username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="New Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="New Password"
        value={formData.password}
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        placeholder="New Full Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        placeholder="New Address"
        value={formData.address}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phone"
        placeholder="New Phone Number"
        value={formData.phone}
        onChange={handleChange}
      />
      <select name="New role" value={formData.role} onChange={handleChange}>
        <option value="user">User </option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">{`${loading ? "...updating" : "Update"}`}</button>
      {error && <p>{error}</p>} {success && <p>{success}</p>}
    </form>
  );
};

export default UpdateUser;
