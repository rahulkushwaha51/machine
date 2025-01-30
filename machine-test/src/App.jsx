import "./App.css";
import { Routes, Route } from "react-router";

import AddUser from "./component/AddUser";
import DeleteUser from "./component/DeleteUser";
import AllUsers from "./component/AllUsers";
import UpdateUser from "./component/UpdateUser";
import Navbar from "./component/Navbar";
import UserDetails from "./component/UserDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AddUser />} />
        <Route path="/alluser" element={<AllUsers />} />
        <Route path="/getuser/:id" element={<UserDetails />} />
        <Route path="/updateuser/:id" element={<UpdateUser />} />
        <Route path="/deleteuser" element={<DeleteUser />} />
      </Routes>
    </>
  );
}

export default App;
