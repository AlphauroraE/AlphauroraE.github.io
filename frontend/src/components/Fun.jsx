import React, { useMemo } from "react";
import './Fun.css';

const BUILDINGS = [
    { width: 70, height: 47 },
    { width: 50, height: 68 },
    { width: 90, height: 37 },
    { width: 60, height: 84, spire: true },
    { width: 80, height: 53 },
    { width: 55, height: 100, tiered: true },
    { width: 75, height: 42 },
    { width: 65, height: 63 },
    { width: 100, height: 32 },
    { width: 50, height: 79 },
    { width: 85, height: 47 },
    { width: 60, height: 68 },
    { width: 70, height: 89, spire: true },
    { width: 90, height: 40 },
    { width: 55, height: 58 },
    { width: 80, height: 74 },
    { width: 65, height: 45 },
    { width: 95, height: 53 },
];

const SKY_HEIGHT = 400;
const TOTAL_WIDTH = BUILDINGS.reduce((sum, b) => sum + b.width, 0);
const WINDOW_SIZE = 3;
const WINDOW_GAP = 3;
const WINDOW_LIT_CHANCE = 0.35;
const SHOOTING_STAR_COUNT = 7;

function buildWindows(offsetX, offsetY, width, height) {
    const cols = Math.floor((width - WINDOW_GAP) / (WINDOW_SIZE + WINDOW_GAP));
    const rows = Math.floor((height - 20) / (WINDOW_SIZE + WINDOW_GAP));
    const windows = [];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (Math.random() < WINDOW_LIT_CHANCE) {
                windows.push({
                    x: offsetX + WINDOW_GAP + c * (WINDOW_SIZE + WINDOW_GAP),
                    y: offsetY + 10 + r * (WINDOW_SIZE + WINDOW_GAP),
                });
            }
        }
    }
    return windows;
}

const Fun = () => {
    // City skyline temporarily disabled:
    // const { buildings, windows } = useMemo(() => {
    //     let x = 0;
    //     const buildings = [];
    //     const windows = [];
    //     BUILDINGS.forEach((b) => {
    //         const y = SKY_HEIGHT - b.height;
    //         buildings.push({ ...b, x, y });
    //         windows.push(...buildWindows(x, y, b.width, b.height));
    //         x += b.width;
    //     });
    //     return { buildings, windows };
    // }, []);

    const stars = useMemo(() => (
        Array.from({ length: 140 }).map(() => ({
            cx: Math.random() * TOTAL_WIDTH,
            cy: Math.random() * (SKY_HEIGHT - 60),
            r: Math.random() * 0.5 + 0.15,
        }))
    ), []);

    const shootingStars = useMemo(() => (
        Array.from({ length: SHOOTING_STAR_COUNT }).map(() => {
            // Right to left, slight downward diagonal.
            const angle = (12 + Math.random() * 10) * (Math.PI / 180);
            const travel = 90 + Math.random() * 60;
            const dx = -travel * Math.cos(angle);
            const dy = travel * Math.sin(angle);
            const trailRatio = 0.65;

            // Keep the whole path (start through end) clear of the display edges.
            const marginX = TOTAL_WIDTH * 0.12;
            const marginYTop = SKY_HEIGHT * 0.08;
            const usableMinX = marginX + travel;
            const usableMaxX = TOTAL_WIDTH - marginX;
            const sx = usableMinX + Math.random() * Math.max(usableMaxX - usableMinX, 0);
            const usableMaxY = SKY_HEIGHT * 0.45 - dy;
            const sy = marginYTop + Math.random() * Math.max(usableMaxY - marginYTop, 0);

            return {
                sx,
                sy,
                ex: sx + dx,
                ey: sy + dy,
                // Anti-parallel to the motion vector so the tail always traces
                // the star's actual path rather than a separately guessed angle.
                trailX: -dx * trailRatio,
                trailY: -dy * trailRatio,
                r: Math.random() * 0.5 + 0.15,
                delay: Math.random() * 8,
                duration: 5 + Math.random() * 5,
            };
        })
    ), []);

    return (
        <div className="fun-page">
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
                {stars.map((s, i) => (
                    <circle key={`star-${i}`} cx={s.cx} cy={s.cy} r={s.r} fill="#fff" />
                ))}
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
                {/* City skyline temporarily disabled:
                {buildings.map((b, i) => (
                    <g key={`building-${i}`}>
                        <rect x={b.x} y={b.y} width={b.width} height={b.height} fill="#0c0c16" />
                        {b.spire && (
                            <rect x={b.x + b.width / 2 - 1} y={b.y - 12} width={2} height={12} fill="#0c0c16" />
                        )}
                        {b.tiered && (
                            <rect x={b.x + b.width * 0.2} y={b.y - 8} width={b.width * 0.6} height={8} fill="#0c0c16" />
                        )}
                    </g>
                ))}
                {windows.map((w, i) => (
                    <rect key={`window-${i}`} x={w.x} y={w.y} width={WINDOW_SIZE} height={WINDOW_SIZE} fill="#ffd873" opacity={0.85} />
                ))}
                */}
            </svg>
        </div>
    );
};

export default Fun;
