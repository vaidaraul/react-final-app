import { Link } from "react-router-dom";
import "../../styling/navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
