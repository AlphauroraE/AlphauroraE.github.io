import React, { useState } from "react";
import './Experience.css';

const TIMELINE_MILESTONES = [
    { year: '2022', label: 'Started Undergrad' },
    { year: '2024', label: 'First Publication' },
    { year: '2025', label: 'Graduated UCF' },
    { year: '2025', label: 'Started PhD' },
    { year: '2026', label: 'CHCI VP' },
];

const EDUCATION = [
    {
        degree: 'Ph.D. in Computer Science',
        institution: 'Virginia Tech',
        location: 'Blacksburg, VA',
        period: '2025 – Present',
        description: 'Advised by Dr. Ryan P. McMahan in the Xrai Lab. Research focus on machine learning and virtual reality, specifically investigating user identification and behavioral analysis through VR tracking data.',
    },
    {
        degree: 'B.S. in Computer Science',
        institution: 'University of Central Florida',
        location: 'Orlando, FL',
        period: '2022 – 2025',
        description: 'Graduated Summa Cum Laude. Engaged in undergraduate research, hackathons, and various leadership roles.',
    },
];

const RESEARCH = [
    {
        role: 'Graduate Research Assistant',
        organization: 'Xrai Lab, Virginia Tech',
        period: '2025 – Present',
        description: 'Conducting research on machine learning applications in virtual reality. Investigating cross-domain user identification using VR tracking data and exploring privacy implications of behavioral biometrics.',
    },
    {
        role: 'Undergraduate Research Assistant',
        organization: 'University of Central Florida',
        period: '2022 – 2025',
        description: 'Contributed to research on gender identification in VR environments using machine learning. First-authored papers published at IEEE ISMAR and IEEE VRW.',
    },
];

const TEACHING = [
    {
        role: 'Python Workshop Instructor',
        organization: 'Knight Hacks, University of Central Florida',
        period: '2025',
        description: 'Designed and led advanced Python programming workshop for computer science students.',
    },
    {
        role: 'Research Workshop Facilitator',
        organization: 'University of Central Florida',
        period: '2025 – 2026',
        description: 'Organized and taught workshops introducing undergraduate students to research opportunities. Returned to participate in a research panel as an alumna in 2026.',
    },
];

const LEADERSHIP = [
    {
        role: 'Vice President',
        organization: 'Center for Human-Computer Interaction (CHCI) Student Council',
        period: '2026 – Present',
        description: 'Leading initiatives to foster community among HCI students, organizing events, and facilitating collaboration between students and faculty.',
    },
    {
        role: 'iXR Ideathon Organizer',
        organization: 'Virginia Tech',
        period: '2026',
        description: 'Founded and organized the inaugural iXR Ideathon, bringing together students to innovate in the extended reality space.',
    },
];

const SKILLS = {
    'Programming': ['Python', 'Java', 'C'],
    'ML/AI': ['Scikit-Learn', 'Pandas', 'NumPy', 'PyTorch'],
    'VR/XR': ['Unity'],
    'Tools': ['Git', 'LaTeX', 'Jupyter Notebook'],
};

const SectionIcon = ({ type }) => {
    const icons = {
        education: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
            </svg>
        ),
        research: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
                <path d="M11 8v6M8 11h6" />
            </svg>
        ),
        teaching: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        leadership: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        ),
        skills: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
        ),
    };
    return <span className="section-icon">{icons[type]}</span>;
};

const ExperienceCard = ({ item, showRole = true }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="experience-card">
            <div className="card-header" onClick={() => setExpanded(!expanded)}>
                <div className="card-main">
                    {showRole ? (
                        <>
                            <h3 className="card-title">{item.role || item.degree}</h3>
                            <p className="card-organization">{item.organization || item.institution}</p>
                        </>
                    ) : (
                        <>
                            <h3 className="card-title">{item.degree}</h3>
                            <p className="card-organization">{item.institution}{item.location && `, ${item.location}`}</p>
                        </>
                    )}
                </div>
                <div className="card-meta">
                    <span className="card-period">{item.period}</span>
                    <span className={`expand-icon ${expanded ? 'expanded' : ''}`}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </span>
                </div>
            </div>
            {expanded && (
                <div className="card-description">
                    <p>{item.description}</p>
                </div>
            )}
        </div>
    );
};

const Experience = () => {
    return (
        <div className="experience-page">
            {/* Cloud shapes */}
            <div className="cloud cloud-1"></div>
            <div className="cloud cloud-2"></div>
            <div className="cloud cloud-3"></div>

            <div className="experience-container">
                <h1 className="experience-title">Experience</h1>
                <p className="experience-subtitle">My journey in research, teaching, and leadership</p>

                {/* Mini Timeline */}
                <div className="timeline-container">
                    <div className="timeline-line"></div>
                    {TIMELINE_MILESTONES.map((milestone, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="timeline-year">{milestone.year}</span>
                                <span className="timeline-label">{milestone.label}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Education Section */}
                <section className="experience-section">
                    <div className="section-header">
                        <SectionIcon type="education" />
                        <h2>Education</h2>
                    </div>
                    <div className="section-cards">
                        {EDUCATION.map((item, index) => (
                            <ExperienceCard key={index} item={item} showRole={false} />
                        ))}
                    </div>
                </section>

                {/* Research Section */}
                <section className="experience-section">
                    <div className="section-header">
                        <SectionIcon type="research" />
                        <h2>Research</h2>
                    </div>
                    <div className="section-cards">
                        {RESEARCH.map((item, index) => (
                            <ExperienceCard key={index} item={item} />
                        ))}
                    </div>
                </section>

                {/* Teaching Section */}
                <section className="experience-section">
                    <div className="section-header">
                        <SectionIcon type="teaching" />
                        <h2>Teaching & Mentorship</h2>
                    </div>
                    <div className="section-cards">
                        {TEACHING.map((item, index) => (
                            <ExperienceCard key={index} item={item} />
                        ))}
                    </div>
                </section>

                {/* Leadership Section */}
                <section className="experience-section">
                    <div className="section-header">
                        <SectionIcon type="leadership" />
                        <h2>Leadership</h2>
                    </div>
                    <div className="section-cards">
                        {LEADERSHIP.map((item, index) => (
                            <ExperienceCard key={index} item={item} />
                        ))}
                    </div>
                </section>

                {/* Skills Section */}
                <section className="experience-section">
                    <div className="section-header">
                        <SectionIcon type="skills" />
                        <h2>Skills</h2>
                    </div>
                    <div className="skills-grid">
                        {Object.entries(SKILLS).map(([category, skills]) => (
                            <div key={category} className="skill-category">
                                <h4 className="skill-category-title">{category}</h4>
                                <div className="skill-tags">
                                    {skills.map((skill, index) => (
                                        <span key={index} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Experience;
