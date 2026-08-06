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
        abstract: 'Recently, much work has been done to research personal identifiability of extended reality (XR) users. Many of these prior studies are task-specific and involve identifying users completing a specific XR task. On the other hand, some studies have been domainspecific and focus on identifying users completing different XR tasks from the same domain, such as watching 360° videos or assembling structures. In this paper, we present one of the few studies to investigate cross-domain identification (i.e., identifying users completing XR tasks from different domains). To facilitate our investigation, we used open-source datasets from two different virtual reality (VR) studies-one from an assembly domain and one from a gaming domain-to investigate the feasibility of cross-domain gender identification, as personal identification is not possible between these datasets. The results of our machine learning experiments clearly demonstrate that cross-domain gender identification is more difficult than domain-specific gender identification. Furthermore, our results indicate that head position is important for gender identification and demonstrate that the k-nearest neighbors (kNN) algorithm is not suitable for cross-domain gender identification, which future researchers should be aware of.',
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
        abstract: 'Gender identification of virtual reality (VR) users by machine learning tracking data could afford personalized experiences, including mitigation of expected human factors or psychology issues. While much research has recently been conducted to identify individual users given their VR tracking data, little research has investigated gender identification. Furthermore, nearly all prior studies have only considered positions and rotations of all the devices. We present a systematic investigation of different combinations and spatial representations of VR tracked devices for predicting a user\'s gender. Our results indicate head rotations are integral to gender identification while head positions are surprisingly not as important.',
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
                {/* <p className="publications-subtitle">Contributions to the Human-Computer Interaction and Machine Learning Communities</p> */}

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
