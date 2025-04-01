import React from 'react';

interface FlowerProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
  strokeColor?: string;
}

const Circles: React.FC<FlowerProps> = ({
  primaryColor = 'red',
  secondaryColor = 'black',
  width = 200,
  height = 200,
}) => {
  // Calculate scale factors to maintain proportions
  const center = width / 2;
  const innerRadius = width * 0.3; // 30% of container size
  const outerRadius = width * 0.45; // 45% of container size

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle (unfilled) */}
      <circle
        cx={center}
        cy={center}
        r={outerRadius}
        fill="none"
        stroke={secondaryColor}
        strokeWidth={secondaryColor}
      />

      {/* Inner circle (filled) */}
      <circle
        cx={center}
        cy={center}
        r={innerRadius}
        fill={primaryColor}
        stroke={primaryColor}
        strokeWidth={2}
      />
    </svg>
  );
};

export default Circles;
