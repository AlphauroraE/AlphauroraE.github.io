import React, { useMemo, useState, useEffect } from "react";
import './Fun.css';

// Placeholder photos - replace with your actual photos
// Each photo needs: src, alt, caption (optional), and aspect ratio hint for masonry
const PHOTOS = [
    {
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        alt: 'Mountain landscape',
        caption: 'Chasing sunrises',
    },
    {
        src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800',
        alt: 'Starry mountain',
        caption: 'Under the stars',
    },
    {
        src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800',
        alt: 'Forest path',
        caption: 'Finding peace in nature',
    },
    {
        src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800',
        alt: 'Autumn forest',
        caption: 'Fall colors',
    },
    {
        src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800',
        alt: 'Waterfall',
        caption: 'Peaceful moments',
    },
    {
        src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
        alt: 'Foggy mountains',
        caption: 'Morning mist',
    },
];

const SKY_HEIGHT = 400;
const TOTAL_WIDTH = 1400;
const SHOOTING_STAR_COUNT = 7;

const Fun = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    // Generate stars with density gradient (denser at top)
    const stars = useMemo(() => (
        Array.from({ length: 140 }).map(() => {
            // Use quadratic distribution to concentrate stars at the top
            const yRandom = Math.random();
            const cy = yRandom * yRandom * (SKY_HEIGHT - 60);
            return {
                cx: Math.random() * TOTAL_WIDTH,
                cy,
                r: Math.random() * 0.5 + 0.15,
                twinkle: Math.random() > 0.7, // 30% of stars twinkle
                delay: Math.random() * 3,
            };
        })
    ), []);

    const shootingStars = useMemo(() => (
        Array.from({ length: SHOOTING_STAR_COUNT }).map(() => {
            const angle = (12 + Math.random() * 10) * (Math.PI / 180);
            const travel = 90 + Math.random() * 60;
            const dx = -travel * Math.cos(angle);
            const dy = travel * Math.sin(angle);
            const trailRatio = 0.65;

            const marginX = TOTAL_WIDTH * 0.12;
            const marginYTop = SKY_HEIGHT * 0.08;
            const usableMinX = marginX + travel;
            const usableMaxX = TOTAL_WIDTH - marginX;
            const sx = usableMinX + Math.random() * Math.max(usableMaxX - usableMinX, 0);
            const usableMaxY = SKY_HEIGHT * 0.45 - dy;
            const sy = marginYTop + Math.random() * Math.max(usableMaxY - marginYTop, 0);

            return {
                sx, sy,
                ex: sx + dx,
                ey: sy + dy,
                trailX: -dx * trailRatio,
                trailY: -dy * trailRatio,
                r: Math.random() * 0.5 + 0.15,
                delay: Math.random() * 8,
                duration: 5 + Math.random() * 5,
            };
        })
    ), []);

    const openLightbox = (photo) => {
        setSelectedPhoto(photo);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedPhoto(null);
        document.body.style.overflow = '';
    };

    const navigatePhoto = (direction) => {
        const currentIndex = PHOTOS.findIndex(p => p.src === selectedPhoto.src);
        const newIndex = (currentIndex + direction + PHOTOS.length) % PHOTOS.length;
        setSelectedPhoto(PHOTOS[newIndex]);
    };

    // Close lightbox on escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') navigatePhoto(-1);
            if (e.key === 'ArrowRight') navigatePhoto(1);
        };

        if (selectedPhoto) {
            window.addEventListener('keydown', handleKeyDown);
            return () => window.removeEventListener('keydown', handleKeyDown);
        }
    }, [selectedPhoto]);

    return (
        <div className="fun-page">
            {/* Star background */}
            <svg
                className="skyline"
                viewBox={`0 0 ${TOTAL_WIDTH} ${SKY_HEIGHT}`}
                preserveAspectRatio="xMidYMax slice"
            >
                <defs>
                    {shootingStars.map((s, i) => (
                        <linearGradient
                            key={`shooting-gradient-${i}`}
                            id={`shootingTrail-${i}`}
                            gradientUnits="userSpaceOnUse"
                            x1={0}
                            y1={0}
                            x2={s.trailX}
                            y2={s.trailY}
                        >
                            <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                        </linearGradient>
                    ))}
                </defs>

                {/* Stars */}
                {stars.map((s, i) => (
                    <circle
                        key={`star-${i}`}
                        cx={s.cx}
                        cy={s.cy}
                        r={s.r}
                        fill="#fff"
                        className={s.twinkle ? 'twinkle' : ''}
                        style={s.twinkle ? { animationDelay: `${s.delay}s` } : undefined}
                    />
                ))}

                {/* Shooting stars */}
                {shootingStars.map((s, i) => (
                    <g key={`shooting-${i}`}>
                        <line
                            x1={0}
                            y1={0}
                            x2={s.trailX}
                            y2={s.trailY}
                            pathLength={100}
                            stroke={`url(#shootingTrail-${i})`}
                            strokeWidth="0.4"
                            strokeLinecap="round"
                            strokeDasharray={100}
                        >
                            <animate
                                attributeName="stroke-dashoffset"
                                values="100; 100; 0; 100; 100"
                                keyTimes="0; 0.8; 0.95; 0.98; 1"
                                dur={`${s.duration}s`}
                                begin={`${s.delay}s`}
                                repeatCount="indefinite"
                            />
                        </line>
                        <circle cx={0} cy={0} r={s.r} fill="#fff">
                            <animate
                                attributeName="opacity"
                                values="0; 0; 1; 1; 0; 0"
                                keyTimes="0; 0.795; 0.8; 0.95; 0.96; 1"
                                dur={`${s.duration}s`}
                                begin={`${s.delay}s`}
                                repeatCount="indefinite"
                            />
                        </circle>
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            values={`${s.sx},${s.sy}; ${s.sx},${s.sy}; ${s.ex},${s.ey}; ${s.ex},${s.ey}`}
                            keyTimes="0; 0.8; 0.95; 1"
                            dur={`${s.duration}s`}
                            begin={`${s.delay}s`}
                            repeatCount="indefinite"
                        />
                    </g>
                ))}
            </svg>

            {/* Page content */}
            <div className="photography-container">
                {/* <h1 className="photography-title">Photography</h1>
                <p className="photography-subtitle">Moments captured through my lens</p> */}

                {/* Masonry grid */}
                <div className="photo-grid">
                    {PHOTOS.map((photo, index) => (
                        <div
                            key={index}
                            className="photo-item"
                            onClick={() => openLightbox(photo)}
                        >
                            <img src={photo.src} alt={photo.alt} loading="lazy" />
                            {photo.caption && (
                                <div className="photo-caption">
                                    <p>{photo.caption}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selectedPhoto && (
                <div className="lightbox" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                    <button
                        className="lightbox-nav lightbox-prev"
                        onClick={(e) => { e.stopPropagation(); navigatePhoto(-1); }}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedPhoto.src} alt={selectedPhoto.alt} />
                        {selectedPhoto.caption && (
                            <p className="lightbox-caption">{selectedPhoto.caption}</p>
                        )}
                    </div>
                    <button
                        className="lightbox-nav lightbox-next"
                        onClick={(e) => { e.stopPropagation(); navigatePhoto(1); }}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Fun;
