import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

export const ProgressBarLine = ({ height = 62,width= 7, color = "#D9D9D9", ...props }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 7 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={7} height={65} rx={3.5} fill={color} />
  </svg>
);
