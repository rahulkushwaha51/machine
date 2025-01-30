import { useState } from "react";
import axios from "axios";
import "../styles/forms.css";
const url = import.meta.env.VITE_SERVER_URL;
const UserForm = () => {
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
      const response = await axios.post(`${url}/signup`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setSuccess(response.data.message);
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>User Registration</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        required
        placeholder="Date of Birth"
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <select
        name="role"
        value={formData.role}
        onChange={handleChange}
        required
      >
        <option value="user">User </option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">{`${loading ? "...submitting" : "Submit"}`}</button>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
    </form>
  );
};

export default UserForm;
