import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ animate = false }) => {
    const [showNav, setShowNav] = useState(!animate);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (animate) {
            const timer = setTimeout(() => setShowNav(true), 2900);
            return () => clearTimeout(timer);
        }
    }, [animate]);

    // Close mobile menu when clicking a link
    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    const words = [
        { text: 'Home', to: '/' },
        { text: 'Projects', to: '/projects', hidden: true },
        { text: 'Experience', to: '/experience' },
        { text: 'Publications', to: '/publications' },
        { text: 'Photography', to: '/photography', hidden: true },
        { text: 'Music', to: '/music' },
    ];

    const wordDuration = 0.2; // seconds per word reveal
    let cumulativeDelay = 0;

    return (
        <div className="navbar">
            <button
                className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={`nav-links ${animate ? 'with-animation' : ''} ${showNav ? 'animate-words' : ''} ${mobileMenuOpen ? 'mobile-open' : ''}`}>
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
                            onClick={handleLinkClick}
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