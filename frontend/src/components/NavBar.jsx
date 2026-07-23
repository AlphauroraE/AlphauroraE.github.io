import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ animate = false }) => {
    const [showNav, setShowNav] = useState(!animate);

    useEffect(() => {
        if (animate) {
            const timer = setTimeout(() => setShowNav(true), 2900);
            return () => clearTimeout(timer);
        }
    }, [animate]);

    return (
        <div className="navbar">
            <div className={`nav-links ${animate ? 'slide-in' : ''} ${showNav ? 'visible' : ''}`}>
                <Link to="/">Home</Link>
                <Link to="/projects" className="nav-link-hidden">Projects</Link>
                <Link to="/experience">Experience</Link>
                <Link to="/publications">Publications</Link>
                <Link to="/photography">Photography</Link>
            </div>
        </div>
    );
};

export default NavBar;