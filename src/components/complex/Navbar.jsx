import { Link } from "react-router-dom";
import "../../styling/navbar.css";
import { useState } from "react";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDark = () => {
        setDarkMode(!darkMode);
    };

    return (
        <>
            <nav
                className={`navbar ${
                    darkMode ? "navbar-dark" : "navbar-light"
                }`}
            >
                <ul
                    className={`navbar-links ${
                        darkMode ? "navbar-links-dark" : "navbar-links-light"
                    }`}
                >
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <button onClick={toggleDark}>Switch Mode</button>
        </>
    );
};

export default Navbar;
