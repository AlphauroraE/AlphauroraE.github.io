import React, { useState } from "react";
import './Publications.css';

const PUBLICATIONS = [
    {
        type: 'Conference Paper',
        title: 'Cross-Domain Gender Identification Using VR Tracking Data',
        authors: 'Qidi J. Wang, Alec G. Moore, Nayan N. Chawla, Ryan P. McMahan',
        venue: 'IEEE International Symposium on Mixed and Augmented Reality (ISMAR)',
        year: '2024',
        doi: 'https://doi.org/10.1109/ISMAR62088.2024.00032',
        abstract: 'This paper investigates cross-domain gender identification using VR tracking data. We explore how machine learning models trained on one VR application can generalize to identify user gender in different VR contexts, examining the transferability of behavioral patterns across virtual environments.',
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
        type: 'Poster',
        title: 'Gender Identification of VR Users by Machine Learning Tracking Data',
        authors: 'Qidi J. Wang, Ryan P. McMahan',
        venue: 'IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops (VRW)',
        year: '2024',
        doi: 'https://doi.org/10.1109/VRW62533.2024.00210',
        abstract: 'We present a machine learning approach to identify the gender of VR users based on their tracking data. Our method analyzes head and hand movement patterns captured during VR sessions to predict user gender with high accuracy.',
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

const Publications = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [copiedIndex, setCopiedIndex] = useState(null);

    const toggleAbstract = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const copyBibtex = async (bibtex, index) => {
        try {
            await navigator.clipboard.writeText(bibtex);
            setCopiedIndex(index);
            setTimeout(() => setCopiedIndex(null), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <div className="publications-page">
            <div className="publications-container">
                <h1 className="publications-title">Publications</h1>
                <p className="publications-subtitle">My research contributions to the academic community</p>

                <div className="publications-grid">
                    {PUBLICATIONS.map((pub, index) => (
                        <div key={index} className="publication-card">
                            <span className="publication-type">{pub.type}</span>
                            <h2 className="publication-card-title">
                                <a href={pub.doi} target="_blank" rel="noopener noreferrer">
                                    {pub.title}
                                </a>
                            </h2>
                            <p className="publication-authors">{pub.authors}</p>
                            <p className="publication-venue">{pub.venue}, {pub.year}</p>

                            <div className="publication-actions">
                                <button
                                    className="action-btn abstract-btn"
                                    onClick={() => toggleAbstract(index)}
                                    aria-expanded={expandedIndex === index}
                                >
                                    {expandedIndex === index ? 'Hide Abstract' : 'Abstract'}
                                </button>
                                <button
                                    className={`action-btn cite-btn ${copiedIndex === index ? 'copied' : ''}`}
                                    onClick={() => copyBibtex(pub.bibtex, index)}
                                >
                                    {copiedIndex === index ? 'Copied!' : 'Copy BibTeX'}
                                </button>
                                <a
                                    href={pub.doi}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="action-btn doi-btn"
                                >
                                    DOI
                                </a>
                            </div>

                            {expandedIndex === index && (
                                <div className="publication-abstract">
                                    <p>{pub.abstract}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Publications;
