import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Home.css';
import profile from '../assets/photo.jpg';
import Bottom from './Bottom';

const Home = () => {
    return (
        <div>
            <div
                className="banner"
                style={{
                    backgroundImage: `url(/images/sunset.jpeg)`,
                }}
            >
                <h1>Hi! I'm           </h1>
                <svg
                    className="signature"
                    viewBox="0 0 560 300"
                    aria-label="Joanne"
                >
                    <text x="20" y="210">
                        {"Joanne".split("").map((letter, i) => (
                            <tspan
                                key={i}
                                className="letter"
                                style={{ '--i': i }}
                            >
                                {letter}
                            </tspan>
                        ))}
                    </text>
                </svg>
            </div >
            <div className="content-container">
                {/* <div class="vignette-overlay"></div> */}
                <div className="about-me">
                    Hello! I'm Joanne, a software engineer with a passion for creating innovative solutions. I love coding, photography, and exploring new technologies. Welcome to my portfolio!
                </div>
                <div className="photo">
                    <img src={profile} alt="Joanne's Profile" />
                </div>
            </div>
        </div>
    );
};

export default Home;