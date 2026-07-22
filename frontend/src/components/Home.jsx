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
                <div className="banner-title">
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
                </div>
                <p className="banner-subtitle">PhD Student in Computer Science · Virginia Tech</p>
            </div >
            <div className="content-container">
                {/* <div class="vignette-overlay"></div> */}
                <div className="about-me">
                    <p>
                        Hello! I'm Joanne, a PhD student in Computer Science at Virginia Tech, advised by Dr. Ryan P. McMahan in the Xrai Lab. My research focuses on machine learning and virtual reality. I am also a "hackathon addict", creative innovator, and photographer. Welcome to my portfolio!
                    </p>
                    <div className="about-links">
                        <a href="#" className="about-link">Curriculum Vitae (PDF)</a>
                        <a href="mailto:qidiwang@vt.edu" className="about-link">qidiwang@vt.edu</a>
                        <a href="https://xrtlab.github.io/xrtlab-site/" className="about-link">Xrai Lab →</a>
                    </div>
                </div>
                <div className="photo">
                    <img src={profile} alt="Joanne's Profile" />
                </div>
            </div>
            <div className="news-section">
                <h2>News</h2>
                <ul className="news-list">
                    <li className="news-item">
                        <span className="news-date">June 2026</span>
                        <span className="news-text">FutureHCI Workshop Paper Accepted.</span>
                    </li>
                    <li className="news-item">
                        <span className="news-date">April 2026</span>
                        <span className="news-text">Presented at the CHCI Student Research Symposium.</span>
                    </li>
                    <li className="news-item">
                        <span className="news-date">April 2026</span>
                        <span className="news-text">Hosted the inaugural iXR Ideathon.</span>
                    </li>
                    <li className="news-item">
                        <span className="news-date">January 2026</span>
                        <span className="news-text">Became Vice President of the Center for Human-Computer Interaction (CHCI) Student Council.</span>
                    </li>
                    <li className="news-item">
                        <span className="news-date">August 2025</span>
                        <span className="news-text">Started PhD at Virginia Tech.</span>
                    </li>
                </ul>
            </div>
            <div className="publications-section">
                <h2>Publications</h2>
                <ul className="publications-list">
                    <li className="publication-item">
                        <div className="publication-title">Cross-Domain Gender Identification Using VR Tracking Data</div>
                        <div className="publication-meta">Qidi J. Wang, Alec G. Moore, Nayan N. Chawla, Ryan P. McMahan — IEEE ISMAR, 2024</div>
                    </li>
                    <li className="publication-item">
                        <div className="publication-title">Gender Identification of VR Users by Machine Learning Tracking Data</div>
                        <div className="publication-meta">Qidi J. Wang, Ryan P. McMahan — IEEE VRW, 2024</div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Home;