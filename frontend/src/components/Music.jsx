import React, { useState, useEffect } from "react";
import './Music.css';

// Cassette data - mix of playlists and albums
// Replace spotifyId with your actual Spotify playlist/album IDs
// type: 'playlist' or 'album'
const CASSETTES = [
    {
        id: 1,
        name: 'Late Night Coding',
        spotifyId: '37i9dQZF1DX5trt9i14X7j',
        type: 'playlist',
        color: '#e84393',
        accentColor: '#fd79a8',
        labelStyle: 'pink',
    },
    {
        id: 2,
        name: 'Chill Vibes',
        spotifyId: '37i9dQZF1DX4WYpdgoIcn6',
        type: 'playlist',
        color: '#00cec9',
        accentColor: '#81ecec',
        labelStyle: 'teal',
    },
    {
        id: 3,
        name: 'Road Trip Mix',
        spotifyId: '37i9dQZF1DXdPec7aLTmlC',
        type: 'playlist',
        color: '#fdcb6e',
        accentColor: '#ffeaa7',
        labelStyle: 'yellow',
    },
    {
        id: 4,
        name: 'Study Session',
        spotifyId: '37i9dQZF1DX8Uebhn9wzrS',
        type: 'playlist',
        color: '#a29bfe',
        accentColor: '#dfe6e9',
        labelStyle: 'purple',
    },
    {
        id: 5,
        name: 'Throwback Hits',
        spotifyId: '37i9dQZF1DX4o1oenSJRJd',
        type: 'playlist',
        color: '#ff7675',
        accentColor: '#fab1a0',
        labelStyle: 'coral',
    },
    {
        id: 6,
        name: 'Indie Favorites',
        spotifyId: '37i9dQZF1DX2Nc3B70tvx0',
        type: 'playlist',
        color: '#55a3ff',
        accentColor: '#74b9ff',
        labelStyle: 'blue',
    },
];

const Cassette = ({ cassette, isSelected, isInPlayer, onClick, side }) => {
    return (
        <div
            className={`cassette ${isSelected ? 'selected' : ''} ${isInPlayer ? 'in-player' : ''} cassette-${side}`}
            onClick={onClick}
            style={{
                '--cassette-color': cassette.color,
                '--cassette-accent': cassette.accentColor,
            }}
        >
            <div className="cassette-body">
                <div className="cassette-top-edge">
                    <div className="cassette-hole"></div>
                    <div className="cassette-hole"></div>
                    <div className="cassette-hole"></div>
                    <div className="cassette-hole"></div>
                    <div className="cassette-hole"></div>
                </div>
                <div className="cassette-label">
                    <div className="cassette-label-inner">
                        <span className="cassette-title">{cassette.name}</span>
                        <span className="cassette-type">{cassette.type === 'playlist' ? 'MIXTAPE' : 'ALBUM'}</span>
                    </div>
                </div>
                <div className="cassette-window">
                    <div className="cassette-reel left-reel">
                        <div className="reel-center"></div>
                        <div className="reel-spoke"></div>
                        <div className="reel-spoke"></div>
                        <div className="reel-spoke"></div>
                    </div>
                    <div className="cassette-tape"></div>
                    <div className="cassette-reel right-reel">
                        <div className="reel-center"></div>
                        <div className="reel-spoke"></div>
                        <div className="reel-spoke"></div>
                        <div className="reel-spoke"></div>
                    </div>
                </div>
                <div className="cassette-bottom">
                    <div className="cassette-grip"></div>
                    <div className="cassette-grip"></div>
                    <div className="cassette-grip"></div>
                    <div className="cassette-grip"></div>
                    <div className="cassette-grip"></div>
                </div>
            </div>
        </div>
    );
};

const CassettePlayer = ({ currentCassette, isPlaying, isInserting, isEjecting }) => {
    return (
        <div className="cassette-player">
            <div className="player-top">
                <div className="player-brand">RETRO SOUND</div>
                <div className="player-model">RS-8000</div>
            </div>

            <div className="player-display">
                <div className="display-screen">
                    {currentCassette ? (
                        <>
                            <span className="display-title">{currentCassette.name}</span>
                            <span className="display-status">{isPlaying ? 'PLAYING' : 'READY'}</span>
                        </>
                    ) : (
                        <span className="display-empty">INSERT TAPE</span>
                    )}
                </div>
                <div className="vu-meters">
                    <div className="vu-meter">
                        <div className={`vu-bar ${isPlaying ? 'active' : ''}`} style={{ '--delay': '0s' }}></div>
                        <div className={`vu-bar ${isPlaying ? 'active' : ''}`} style={{ '--delay': '0.1s' }}></div>
                        <div className={`vu-bar ${isPlaying ? 'active' : ''}`} style={{ '--delay': '0.2s' }}></div>
                        <div className={`vu-bar ${isPlaying ? 'active' : ''}`} style={{ '--delay': '0.15s' }}></div>
                        <div className={`vu-bar ${isPlaying ? 'active' : ''}`} style={{ '--delay': '0.05s' }}></div>
                    </div>
                    <div className="vu-meter">
                        <div className={`vu-bar ${isPlaying ? 'active' : ''}`} style={{ '--delay': '0.08s' }}></div>
                        <div className={`vu-bar ${isPlaying ? 'active' : ''}`} style={{ '--delay': '0.18s' }}></div>
                        <div className={`vu-bar ${isPlaying ? 'active' : ''}`} style={{ '--delay': '0.12s' }}></div>
                        <div className={`vu-bar ${isPlaying ? 'active' : ''}`} style={{ '--delay': '0.22s' }}></div>
                        <div className={`vu-bar ${isPlaying ? 'active' : ''}`} style={{ '--delay': '0.02s' }}></div>
                    </div>
                </div>
            </div>

            <div className={`player-deck ${isInserting ? 'inserting' : ''} ${isEjecting ? 'ejecting' : ''}`}>
                <div className="deck-slot">
                    {currentCassette && (
                        <div
                            className={`deck-cassette ${isPlaying ? 'playing' : ''}`}
                            style={{
                                '--cassette-color': currentCassette.color,
                                '--cassette-accent': currentCassette.accentColor,
                            }}
                        >
                            <div className="deck-cassette-window">
                                <div className={`deck-reel left ${isPlaying ? 'spinning' : ''}`}>
                                    <div className="reel-center"></div>
                                    <div className="reel-spoke"></div>
                                    <div className="reel-spoke"></div>
                                    <div className="reel-spoke"></div>
                                </div>
                                <div className={`deck-reel right ${isPlaying ? 'spinning' : ''}`}>
                                    <div className="reel-center"></div>
                                    <div className="reel-spoke"></div>
                                    <div className="reel-spoke"></div>
                                    <div className="reel-spoke"></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="player-controls">
                <div className="led-indicator">
                    <div className={`led ${isPlaying ? 'on' : ''}`}></div>
                    <span>PLAY</span>
                </div>
            </div>
        </div>
    );
};

const Music = () => {
    const [selectedCassette, setSelectedCassette] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isInserting, setIsInserting] = useState(false);
    const [isEjecting, setIsEjecting] = useState(false);

    const leftCassettes = CASSETTES.filter((_, i) => i % 2 === 0);
    const rightCassettes = CASSETTES.filter((_, i) => i % 2 === 1);

    const handleCassetteClick = (cassette) => {
        if (selectedCassette?.id === cassette.id) return;

        if (selectedCassette) {
            // Eject current cassette first
            setIsEjecting(true);
            setIsPlaying(false);
            setTimeout(() => {
                setIsEjecting(false);
                setSelectedCassette(null);
                // Then insert new cassette
                setTimeout(() => {
                    setIsInserting(true);
                    setSelectedCassette(cassette);
                    setTimeout(() => {
                        setIsInserting(false);
                        setIsPlaying(true);
                    }, 600);
                }, 200);
            }, 500);
        } else {
            // Insert cassette
            setIsInserting(true);
            setSelectedCassette(cassette);
            setTimeout(() => {
                setIsInserting(false);
                setIsPlaying(true);
            }, 600);
        }
    };

    const getSpotifyEmbedUrl = (cassette) => {
        if (!cassette) return '';
        const type = cassette.type === 'album' ? 'album' : 'playlist';
        return `https://open.spotify.com/embed/${type}/${cassette.spotifyId}?utm_source=generator&theme=0&autoplay=1`;
    };

    return (
        <div className="music-page">
            <div className="music-background">
                {/* <div className="sun"></div> */}
            </div>

            <div className="music-content">
                <h1 className="music-title">MY MIXTAPES</h1>

                <div className="music-layout">
                    <div className="cassette-rack left-rack">
                        {leftCassettes.map((cassette) => (
                            <Cassette
                                key={cassette.id}
                                cassette={cassette}
                                isSelected={selectedCassette?.id === cassette.id}
                                isInPlayer={selectedCassette?.id === cassette.id && !isEjecting}
                                onClick={() => handleCassetteClick(cassette)}
                                side="left"
                            />
                        ))}
                    </div>

                    <div className="player-section">
                        <CassettePlayer
                            currentCassette={selectedCassette}
                            isPlaying={isPlaying}
                            isInserting={isInserting}
                            isEjecting={isEjecting}
                        />

                        <div className="spotify-container">
                            {selectedCassette ? (
                                <iframe
                                    key={selectedCassette.id}
                                    src={getSpotifyEmbedUrl(selectedCassette)}
                                    width="100%"
                                    height="700"
                                    frameBorder="0"
                                    allowFullScreen=""
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                    loading="lazy"
                                    className="spotify-embed"
                                ></iframe>
                            ) : (
                                <div className="spotify-placeholder">
                                    <p>Select a cassette to play</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="cassette-rack right-rack">
                        {rightCassettes.map((cassette) => (
                            <Cassette
                                key={cassette.id}
                                cassette={cassette}
                                isSelected={selectedCassette?.id === cassette.id}
                                isInPlayer={selectedCassette?.id === cassette.id && !isEjecting}
                                onClick={() => handleCassetteClick(cassette)}
                                side="right"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Music;
