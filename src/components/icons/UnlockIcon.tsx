import React from 'react';

interface UnlockIconProps {
  className?: string;
  width?: number;
  height?: number;
}

export const UnlockIcon: React.FC<UnlockIconProps> = ({
  className = '',
  width = 24,
  height = 15
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.29883 5.50233L9.47389 8.34718L15.7001 5.75752L16.6222 7.98853L19.6239 6.74L18.7023 4.50898L19.7028 4.09295L20.6244 6.32396L23.6266 5.07543L22.7046 2.84441L21.7141 0.44603L21.5295 0L8.29883 5.50233Z"
        fill="currentColor"
      />
      <path
        d="M3.19482 4.02801C0.554407 5.12612 -0.698642 8.16399 0.395826 10.8132C1.49029 13.4624 4.51806 14.7197 7.15847 13.6215C9.79889 12.5234 11.0519 9.48556 9.95747 6.83634C8.863 4.18711 5.83523 2.92989 3.19482 4.02801ZM6.17666 11.2462C4.84389 11.8005 3.31571 11.1658 2.76327 9.82856C2.21084 8.49134 2.84343 6.95806 4.1762 6.40379C5.50897 5.84951 7.03715 6.48421 7.58959 7.82143C8.14202 9.15865 7.50943 10.6919 6.17666 11.2462Z"
        fill="currentColor"
      />
    </svg>
  );
};
