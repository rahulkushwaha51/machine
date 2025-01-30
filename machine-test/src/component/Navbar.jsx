import { Link } from "react-router"; 
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav  >
        <menu>
          <li>
            <Link to="/">Add User</Link>
          </li>
          
          <li>
            <Link to="/alluser">Get Users</Link>
          </li>
        </menu>
      </nav>
    </>
  );
};

export default Navbar;
