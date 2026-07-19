import React from 'react';
import './ArtFrame.css';

const ArtFrame = ({ imageSrc, label, index = 0 }) => {
    return (
        <div className="art-frame" style={{ '--tilt': index % 2 === 0 ? 1 : -1 }}>
            <div className="frame">
                <img src={imageSrc} alt={label} className="frame-image" />
            </div>
            <div className="plaque">{label}</div>
        </div>
    );
};

export default ArtFrame;
