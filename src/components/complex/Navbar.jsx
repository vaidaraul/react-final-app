import { NavLink } from "react-router-dom";
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
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "active-link" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? "active-link" : ""
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <button onClick={toggleDark}>Switch Mode</button>
        </>
    );
};

export default Navbar;
