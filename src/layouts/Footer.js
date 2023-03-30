import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";

const Footer = () => {
    return (
        <footer>
            <Link to="/">
                <img src={Logo} alt="Little Lemon Logo" />
            </Link>
            <nav>
                <h3>Contact Us</h3>
                <br />
                <p>Address: 123 Test Street</p>
                <p>Email: order@littlelemon.com</p>
                <p>Phone: 032 329 5733</p>

            </nav>
            <nav>
                <h3>Opening times</h3>
                <br />
                <p>Monday - Friday: 9:00 - 22:00</p>
                <p>Saturday - Sunday: 10:00 - 24:00</p>
            </nav>
        </footer>
    );
};

export default Footer;