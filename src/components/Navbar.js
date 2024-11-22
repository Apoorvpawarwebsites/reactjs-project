import React, { useState } from "react";
import { FaBars, FaTimes, FaArrowDown } from "react-icons/fa";
import "./Navbar.css";


const Navbar = () => {


    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleMenu = () => {

        setIsOpen(!isOpen);
    }

    const toggleDropdown = () => {

        setDropdownOpen(!dropdownOpen);
    }



    return (

        <nav className="navbar">

            <div className="navbar-container">

                <div className="logo">JONY.</div>

                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={`nav-links ${isOpen ? "active" : ""}`}>

                    <li>Home</li>
                    <li>Works</li>
                    <li>Services</li>

                    <li className="dropdown">
                        <span onClick={toggleDropdown}>
                            Pages <span className="dropdown-icon"><FaArrowDown /></span>
                            {dropdownOpen && (

                                <ul className="dropdown-menu">

                                    <li>Work Details</li>
                                    <li>Elements</li>
                                </ul>
                            )}
                        </span>
                    </li>

                    <li>About</li>
                    <li>BLog</li>
                    <li>Contact Us</li>


                </ul>

                <button className="talk">Let's Talk</button>

            </div>
        </nav>
    )


};

export default Navbar;

