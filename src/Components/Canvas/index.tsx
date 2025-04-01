import React from 'react';
import Flower from '../Designs/Flower';

interface PatternProps {
  width?: number;
  height?: number;
  spacing?: number; // Unified spacing for X and Y
  iconSize?: number;
  rotation?: number;
  backgroundColor?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

const PatternGenerator: React.FC<PatternProps> = ({
  width = 800,
  height = 600,
  spacing = 30, // Single spacing value for both directions
  iconSize = 60,
  rotation = 0,
  backgroundColor = 'transparent',
  primaryColor = 'red',
  secondaryColor = 'black',
}) => {
  // Calculate total space needed per icon (icon + spacing)
  const cellSize = iconSize + spacing;

  // Calculate how many complete icons fit without overlapping
  const cols = Math.max(1, Math.floor(width / cellSize));
  const rows = Math.max(1, Math.floor(height / cellSize));

  // Calculate centering offsets
  const offsetX = (width - cols * cellSize) / 2 + iconSize / 2;
  const offsetY = (height - rows * cellSize) / 2 + iconSize / 2;

  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      style={{ backgroundColor }}
    >
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: cols }).map((_, col) => (
          <g
            key={`${row}-${col}`}
            transform={`translate(${offsetX + col * cellSize},${
              offsetY + row * cellSize
            }) rotate(${rotation} ${iconSize / 2} ${iconSize / 2})`}
          >
            <Flower
              width={iconSize}
              height={iconSize}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
            />
          </g>
        ))
      )}
    </svg>
  );
};

export default PatternGenerator;
