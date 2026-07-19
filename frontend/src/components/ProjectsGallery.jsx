import React from "react";
import './Projects.css';
import ArtFrame from './ArtFrame';
import storybookai from '../assets/StorybookAI_cover.png';

const ProjectsGallery = () => {
    const projects = [
        { imageSrc: storybookai, label: 'StoryBookAI' },
        { imageSrc: storybookai, label: 'StoryBookAI' },
        { imageSrc: storybookai, label: 'StoryBookAI' },
        { imageSrc: storybookai, label: 'StoryBookAI' },
        { imageSrc: storybookai, label: 'StoryBookAI' },
        { imageSrc: storybookai, label: 'StoryBookAI' },
    ];

    return (
        <div className="project-page">
            <div className="project-grid">
                {projects.map((project, index) => (
                    <ArtFrame
                        key={index}
                        imageSrc={project.imageSrc}
                        label={project.label}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectsGallery;
