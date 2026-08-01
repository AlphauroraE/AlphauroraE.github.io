import React, { useState, useEffect, useRef, useCallback } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Home.css';
import profile from '../images/profile.jpg';
import pyth_workshop from '../images/Me_Teaching_Python.jpg';
import research_workshop_back from '../images/Research_Workshop_Behind.JPG';
import coffee_chat from '../images/Coffee_Chat.JPG';
import kh_research from '../images/Intro_to_Research.JPG';
import research_workshop_front from '../images/Research_Workshop_Front.JPG';

import Bottom from './Bottom';

// News carousel images (excluding profile)
// Optional 'position' field controls which part of the image is shown (default: 'center')
// Examples: 'top', 'bottom', 'left', 'right', 'center top', '50% 25%'
const NEWS_CAROUSEL_IMAGES = [
    { src: coffee_chat, alt: "Joanne at Coffee Chat", position: '80% 60%'},
    { src: research_workshop_back, alt: "Joanne Teaching Research Workshop", position: "45% 40%" },
    { src: research_workshop_front, alt: "Joanne Teaching Research Workshop"},
    { src: kh_research, alt: "Joanne at Intro to Research"},
    { src: pyth_workshop, alt: "Joanne Teaching Python" },
];

// { src: kh_research, alt: "Joanne at Intro to Research", fit: 'contain' },

const PUBLICATIONS = [
    {
        title: 'Cross-Domain Gender Identification Using VR Tracking Data',
        meta: 'Qidi J. Wang, Alec G. Moore, Nayan N. Chawla, Ryan P. McMahan — IEEE ISMAR, 2024',
        doi: 'https://doi.org/10.1109/ISMAR62088.2024.00032',
        bibtex: `@inproceedings{wang2024crossdomain,
  title={Cross-Domain Gender Identification Using VR Tracking Data},
  author={Wang, Qidi J. and Moore, Alec G. and Chawla, Nayan N. and McMahan, Ryan P.},
  booktitle={2024 IEEE International Symposium on Mixed and Augmented Reality (ISMAR)},
  publisher={IEEE},
  year={2024},
  month={Oct},
  pages={180--189},
  doi={10.1109/ISMAR62088.2024.00032}
}`,
    },
    {
        title: 'Gender Identification of VR Users by Machine Learning Tracking Data',
        meta: 'Qidi J. Wang, Ryan P. McMahan — IEEE VRW, 2024',
        doi: 'https://doi.org/10.1109/VRW62533.2024.00210',
        bibtex: `@inproceedings{wang2024gender,
  title={Gender Identification of VR Users by Machine Learning Tracking Data},
  author={Wang, Qidi J. and McMahan, Ryan P.},
  booktitle={2024 IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops (VRW)},
  publisher={IEEE},
  year={2024},
  month={Mar},
  pages={827--828},
  doi={10.1109/VRW62533.2024.00210}
}`,
    },
];

const Home = () => {
    const [openCiteIndex, setOpenCiteIndex] = useState(null);
    const [showHi, setShowHi] = useState(false);
    const [showIm, setShowIm] = useState(false);
    const [showJoanne, setShowJoanne] = useState(false);
    const [showSubtitle, setShowSubtitle] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [carouselIndex, setCarouselIndex] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        const hiTimer = setTimeout(() => setShowHi(true), 500);
        const imTimer = setTimeout(() => setShowIm(true), 1150);
        const joanneTimer = setTimeout(() => setShowJoanne(true), 1650);
        const subtitleTimer = setTimeout(() => setShowSubtitle(true), 2350);
        const contentTimer = setTimeout(() => setShowContent(true), 2900);

        return () => {
            clearTimeout(hiTimer);
            clearTimeout(imTimer);
            clearTimeout(joanneTimer);
            clearTimeout(subtitleTimer);
            clearTimeout(contentTimer);
        };
    }, []);

    // Auto-rotate news carousel
    const startAutoRotate = useCallback(() => {
        if (NEWS_CAROUSEL_IMAGES.length <= 1) return;
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCarouselIndex((prev) => (prev + 1) % NEWS_CAROUSEL_IMAGES.length);
        }, 4000);
    }, []);

    useEffect(() => {
        startAutoRotate();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [startAutoRotate]);

    const toggleCite = (index) => {
        setOpenCiteIndex((current) => (current === index ? null : index));
    };

    const prevImage = () => {
        setCarouselIndex((prev) => (prev - 1 + NEWS_CAROUSEL_IMAGES.length) % NEWS_CAROUSEL_IMAGES.length);
        startAutoRotate(); // Reset timer after manual navigation
    };

    const nextImage = () => {
        setCarouselIndex((prev) => (prev + 1) % NEWS_CAROUSEL_IMAGES.length);
        startAutoRotate(); // Reset timer after manual navigation
    };

    return (
        <div>
            <div
                className="banner"
                style={{
                    backgroundImage: `url(/images/sunset.jpeg)`,
                }}
            >
                <div className="banner-title">
                    <h1>
                        <span className={`intro-text hi ${showHi ? 'visible' : ''}`}>Hi!</span>
                        {' '}
                        <span className={`intro-text im ${showIm ? 'visible' : ''}`}>I'm</span>
                        {' '}
                    </h1>
                    <svg
                        className={`signature blur-in ${showJoanne ? 'visible' : ''}`}
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
                <p className={`banner-subtitle ${showSubtitle ? 'visible' : ''}`}>PhD Student in Computer Science · Virginia Tech</p>
            </div >
            <div className="content-container">
                {/* <div class="vignette-overlay"></div> */}
                <div className="about-me">
                    <p className={`fade-up ${showContent ? 'visible' : ''}`}>
                        Hello! I'm Joanne, a PhD student in Computer Science at Virginia Tech, advised by Dr. Ryan P. McMahan in the Xrai Lab. My research focuses on machine learning and virtual reality. I am also a "hackathon addict", creative innovator, and photographer. Welcome to my portfolio!
                    </p>
                    <div className={`about-links fade-up ${showContent ? 'visible' : ''}`}>
                        <a href="/CV.pdf" className="about-link" target="_blank" rel="noopener noreferrer">Curriculum Vitae (PDF)</a>
                        <a href="mailto:qidiwang@vt.edu" className="about-link">qidiwang@vt.edu</a>
                        <a href="https://xrtlab.github.io/xrtlab-site/" className="about-link">Xrai Lab →</a>
                    </div>
                </div>
                <div className={`photo-container fade-up ${showContent ? 'visible' : ''}`}>
                    <div className="photo">
                        <img src={profile} alt="Joanne's Profile" style={{ objectPosition: '50% 55%' }} />
                    </div>
                </div>
            </div>
            <div className="news-section">
                <h2 className={`fade-up ${showContent ? 'visible' : ''}`}>News</h2>
                <div className="news-content">
                    <ul className={`news-list fade-up ${showContent ? 'visible' : ''}`}>
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
                    <div className={`news-carousel-container fade-up ${showContent ? 'visible' : ''}`}>
                        <div className="news-carousel-wrapper">
                            {NEWS_CAROUSEL_IMAGES.length > 1 && (
                                <button className="carousel-btn carousel-btn-left" onClick={prevImage} aria-label="Previous image">
                                    &#8249;
                                </button>
                            )}
                            <div className="news-carousel">
                                {NEWS_CAROUSEL_IMAGES.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image.src}
                                        alt={image.alt}
                                        className={`carousel-image ${index === carouselIndex ? 'active' : ''}`}
                                        style={{
                                            ...(image.position && { objectPosition: image.position }),
                                            ...(image.fit && { objectFit: image.fit })
                                        }}
                                    />
                                ))}
                            </div>
                            {NEWS_CAROUSEL_IMAGES.length > 1 && (
                                <button className="carousel-btn carousel-btn-right" onClick={nextImage} aria-label="Next image">
                                    &#8250;
                                </button>
                            )}
                        </div>
                        {NEWS_CAROUSEL_IMAGES.length > 1 && (
                            <div className="carousel-dots">
                                {NEWS_CAROUSEL_IMAGES.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`carousel-dot ${index === carouselIndex ? 'active' : ''}`}
                                        onClick={() => {
                                            setCarouselIndex(index);
                                            startAutoRotate();
                                        }}
                                        aria-label={`Go to image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="publications-section">
                <h2 className={`fade-up ${showContent ? 'visible' : ''}`}>Publications</h2>
                <ul className={`publications-list fade-up ${showContent ? 'visible' : ''}`}>
                    {PUBLICATIONS.map((pub, i) => (
                        <li className="publication-item" key={pub.doi}>
                            <a
                                className="publication-title"
                                href={pub.doi}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {pub.title}
                            </a>
                            <div className="publication-meta">{pub.meta}</div>
                            <button
                                type="button"
                                className="cite-button"
                                onClick={() => toggleCite(i)}
                                aria-expanded={openCiteIndex === i}
                            >
                                {openCiteIndex === i ? 'Hide citation' : 'Cite'}
                            </button>
                            {openCiteIndex === i && (
                                <pre className="bibtex">{pub.bibtex}</pre>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;