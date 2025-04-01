import React from 'react';

interface FlowerProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
  strokeColor?: string;
  strokeWidth?: number;
}

const Flower: React.FC<FlowerProps> = ({
  primaryColor = 'red',
  secondaryColor = 'black',
  width = 200,
  height = 200,
  strokeColor = 'black',
  strokeWidth = 2,
}) => {
  // Calculate scale factors to maintain proportions
  const scale = Math.min(width, height) / 200;
  const offsetX = (width - 200 * scale) / 2;
  const offsetY = (height - 200 * scale) / 2;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Group containing all flower elements with proper scaling */}
      <g transform={`translate(${offsetX},${offsetY}) scale(${scale})`}>
        {/* Outline Circle - now scales with the flower */}
        <circle
          cx="100"
          cy="100"
          r="85"
          stroke={strokeColor}
          strokeWidth={strokeWidth / scale} // Adjust stroke width for scaling
          fill="none"
        />

        {/* Flower Petals */}
        <path d="M100 40 Q140 70 100 100 Q60 70 100 40" fill={primaryColor} />
        <path
          d="M160 100 Q140 70 100 100 Q140 130 160 100"
          fill={primaryColor}
        />
        <path
          d="M100 160 Q140 130 100 100 Q60 130 100 160"
          fill={primaryColor}
        />
        <path d="M40 100 Q60 130 100 100 Q60 70 40 100" fill={primaryColor} />

        {/* Flower Center */}
        <circle cx="100" cy="100" r="10" fill={secondaryColor} />
      </g>
    </svg>
  );
};

export default Flower;
