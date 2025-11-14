import React from 'react';

interface ShieldIconProps {
  className?: string;
  width?: number;
  height?: number;
}

export const ShieldIcon: React.FC<ShieldIconProps> = ({
  className = '',
  width = 16,
  height = 16
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13.3334 8.66762C13.3334 12.001 11.0001 13.6676 8.22675 14.6343C8.08152 14.6835 7.92377 14.6811 7.78008 14.6276C5.00008 13.6676 2.66675 12.001 2.66675 8.66762V4.00095C2.66675 3.82414 2.73699 3.65457 2.86201 3.52955C2.98703 3.40452 3.1566 3.33428 3.33341 3.33428C4.66675 3.33428 6.33341 2.53428 7.49341 1.52095C7.63465 1.40028 7.81432 1.33398 8.00008 1.33398C8.18585 1.33398 8.36551 1.40028 8.50675 1.52095C9.67342 2.54095 11.3334 3.33428 12.6667 3.33428C12.8436 3.33428 13.0131 3.40452 13.1382 3.52955C13.2632 3.65457 13.3334 3.82414 13.3334 4.00095V8.66762Z"
        stroke="#F5993D"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
