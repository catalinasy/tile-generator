import React from 'react';

interface GridProps {
  width?: number;
  height?: number;
  gridSize?: number;
  squareSize?: number;
  secondaryColor: string;
  primaryColor: string;
}

const UniformGrid: React.FC<GridProps> = ({
  width = 200,
  height = 200,
  gridSize = 52,
  squareSize = 10,
  secondaryColor,
  primaryColor,
}) => {
  // Calculate number of complete grid cells that fit
  const cols = Math.floor(width / gridSize);
  const rows = Math.floor(height / gridSize);

  return (
    <svg
      width={width}
      height={height}
      viewBox={`-4 -4 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Horizontal grid lines */}
      {Array.from({ length: rows + 1 }).map((_, i) => (
        <line
          key={`h${i}`}
          x1={0}
          y1={i * gridSize}
          x2={width}
          y2={i * gridSize}
          stroke={secondaryColor}
          strokeWidth={1}
        />
      ))}

      {/* Vertical grid lines */}
      {Array.from({ length: cols + 1 }).map((_, i) => (
        <line
          key={`v${i}`}
          x1={i * gridSize}
          y1={0}
          x2={i * gridSize}
          y2={height}
          stroke={secondaryColor}
          strokeWidth={1}
        />
      ))}

      {/* Uniform squares at each intersection */}
      {Array.from({ length: rows + 1 }).map((_, row) =>
        Array.from({ length: cols + 1 }).map((_, col) => (
          <rect
            key={`${row}-${col}`}
            x={col * gridSize - squareSize / 2}
            y={row * gridSize - squareSize / 2}
            width={squareSize}
            height={squareSize}
            fill={primaryColor}
            rx={1}
            stroke={primaryColor}
            strokeWidth={0.5}
          />
        ))
      )}
    </svg>
  );
};

export default UniformGrid;
