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

    const words = [
        { text: 'Home', to: '/' },
        { text: 'Projects', to: '/projects', hidden: true },
        { text: 'Experience', to: '/experience' },
        { text: 'Publications', to: '/publications' },
        { text: 'Photography', to: '/photography' }
    ];

    const wordDuration = 0.2; // seconds per word reveal
    let cumulativeDelay = 0;

    return (
        <div className="navbar">
            <div className={`nav-links ${animate ? 'with-animation' : ''} ${showNav ? 'animate-words' : ''}`}>
                {words.map((word, index) => {
                    const currentDelay = cumulativeDelay;
                    if (!word.hidden) {
                        cumulativeDelay += wordDuration;
                    }
                    return (
                        <Link
                            key={index}
                            to={word.to}
                            className={`nav-link-animated ${word.hidden ? 'nav-link-hidden' : ''}`}
                            style={{ '--word-delay': `${currentDelay}s` }}
                        >
                            {word.text}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default NavBar;