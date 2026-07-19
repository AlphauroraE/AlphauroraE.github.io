import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experience">Experience</Link>
                <Link to="/publications">Publications</Link>
                <Link to="/photography">Photography</Link>
            </div>
        </div>
    );
};

export default NavBar;