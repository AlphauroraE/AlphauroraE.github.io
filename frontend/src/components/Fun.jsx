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

    return (
        <div className="fun-page">
            <svg
                className="skyline"
                viewBox={`0 0 ${TOTAL_WIDTH} ${SKY_HEIGHT}`}
                preserveAspectRatio="xMidYMax slice"
            >
                {stars.map((s, i) => (
                    <circle key={`star-${i}`} cx={s.cx} cy={s.cy} r={s.r} fill="#fff" />
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
