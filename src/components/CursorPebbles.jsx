import React, { useEffect } from 'react';

const CursorPebbles = () => {
    useEffect(() => {
        const colors = [
            'rgb(212, 175, 55)', // Gold
            'rgb(232, 213, 181)', // Champagne
            'rgb(255, 255, 255)', // White
            'rgb(176, 141, 85)' // Deep Bronze
        ];

        let lastDraw = 0;

        const handleMouseMove = (e) => {
            const now = Date.now();
            // Continuous fine stream
            if (now - lastDraw < 15) return;
            lastDraw = now;

            // Spawn 1 to 3 soft glowing orbs at an time
            const numGrains = Math.floor(Math.random() * 3) + 1;

            for (let i = 0; i < numGrains; i++) {
                const grain = document.createElement('div');
                grain.className = 'cursor-pebble';

                // Varied sizes from tiny (3px) to medium (8px)
                const size = Math.random() * 5 + 3;
                const color = colors[Math.floor(Math.random() * colors.length)];

                grain.style.width = `${size}px`;
                grain.style.height = `${size}px`;
                grain.style.backgroundColor = color;
                // Add a very soft, beautiful glow
                grain.style.boxShadow = `0 0 ${Math.random() * 10 + 5}px ${color}`;

                // Spawn accurately on cursor tip, with slight jitter so they don't look like a single line
                const jitterX = (Math.random() - 0.5) * 10;
                const jitterY = (Math.random() - 0.5) * 10;

                grain.style.left = `${e.clientX + jitterX}px`;
                grain.style.top = `${e.clientY + jitterY}px`;
                grain.style.borderRadius = '50%'; // Perfect circles

                document.body.appendChild(grain);

                // Force layout
                void grain.offsetWidth;

                // PREMIUM BOKEH PHYSICS:
                // Instead of falling falling heavily, they gently drift outwards in a cloud, slightly shrinking and fading.
                const angle = Math.random() * Math.PI * 2;
                // Very slow drift speed, making it look like dust hanging in the air
                const driftDistance = Math.random() * 30 + 10;

                const targetX = Math.cos(angle) * driftDistance;
                // Slightly bias drift upwards like light dust/embers
                const targetY = Math.sin(angle) * driftDistance - 15;

                grain.style.transform = `translate(${targetX}px, ${targetY}px) scale(0)`;
                // They stay bright momentarily, then CSS transitions handle the fade

                // Clean up DOM after animation completes (1500ms max from CSS)
                setTimeout(() => {
                    if (grain.parentNode) grain.parentNode.removeChild(grain);
                }, 1500);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return null;
};

export default CursorPebbles;
