import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Projects.css';
import Polaroid from './Polaroid';
import storybookai from '../assets/StorybookAI_cover.png';

const Projects = () => {
    const stickers = [
        'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
    ];

    const projects = [
        { imageSrc: storybookai, label: 'StoryBookAI', stickers },
        { imageSrc: storybookai, label: 'StoryBookAI', stickers },
        { imageSrc: storybookai, label: 'StoryBookAI', stickers },
        { imageSrc: storybookai, label: 'StoryBookAI', stickers },
        { imageSrc: storybookai, label: 'StoryBookAI', stickers },
        { imageSrc: storybookai, label: 'StoryBookAI', stickers },
    ];

    return (
        <div className="project-page">
            <div className="project-grid">
                {projects.map((project, index) => (
                    <Polaroid
                        key={index}
                        imageSrc={project.imageSrc}
                        label={project.label}
                        stickers={project.stickers}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;