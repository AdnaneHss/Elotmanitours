import React, { useState } from "react";
import './navbar.css';
import { IoIosCloseCircle } from "react-icons/io";
import { PiDotsNineBold } from "react-icons/pi";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <section className="navBarSection">
                <header className="header">
                    <div className="logoDiv">
                        <a href="#" className="logo">
                            <img src="./logoé.png" alt="logo png" style={{ maxWidth: '160px', height: 'auto' }}   />
                        </a>
                    </div>
                    <div className={`navBar ${isMenuOpen ? "active" : ""}`}>
                        <div className="navLists flex">
                            <ul className="navLists flex">
                                <li className="navItem">
                                    <a href="#" className="navLink">Home</a>
                                </li>
                                <li className="navItem">
                                    <a href="#" className="navLink">Products</a>
                                </li>
                                <li className="navItem">
                                    <a href="#" className="navLink">Resources</a>
                                </li>
                                <li className="navItem">
                                    <a href="#" className="navLink">Contact</a>
                                </li>
                                <li className="navItem">
                                    <a href="#" className="navLink">Blog</a>
                                </li>
                            </ul>
                            <div className="buttonGroup">
                                <button className="btn loginBtn">Login</button>
                                <button className="btn signUpBtn">Sign Up</button>
                            </div>
                            <div className="closeNavbar" onClick={toggleMenu}>
                                <IoIosCloseCircle className="icon" />
                            </div>
                        </div>
                    </div>
                    <div className="toggleNavbar" onClick={toggleMenu}>
                        <PiDotsNineBold className="icon" />
                    </div>
                </header>
            </section>
        </>
    );
};

export default Navbar;
