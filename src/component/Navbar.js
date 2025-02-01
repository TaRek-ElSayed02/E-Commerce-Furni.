import React, { useState } from "react";
import "./navbar.css";  // Ensure custom styles are imported

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <a className="navbar-brand1" href="#">
                Furni<span>.</span>
            </a>
            <button 
                className="navbar-toggler" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen ? "true" : "false"}
                aria-label="Toggle navigation"
            >
                ☰
            </button>
            <div className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
                <ul className="navbar-nav1">
                    <li className="nav-1 active">
                        <a className="nav-link home link" href="#">Home</a>
                    </li>
                    <li className="nav-1 ">
                        <a className="nav-link link" href="#">Shop</a>
                    </li>
                    <li className="nav-1 ">
                        <a className="nav-link link" href="#">About Us</a>
                    </li>
                    <li className="nav-1 ">
                        <a className="nav-link link" href="#">Services</a>
                    </li>
                    <li className="nav-1 ">
                        <a className="nav-link link" href="#">Blog</a>
                    </li>
                    <li className="nav-1 ">
                        <a className="nav-link link" href="#">Contact Us</a>
                    </li>
                    <li className="nav-1 icon">
                        <a className="nav-link" href="#">
                            <i className="fa-regular fa-user"></i>
                        </a>
                    </li>
                    <li className="nav-1 icon">
                        <a className="nav-link" href="#">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
