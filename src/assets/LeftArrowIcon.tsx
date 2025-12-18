import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

export const LeftArrowIcon = ({ height = 15,width= 8, color = "white", ...props }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 8 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.500001 7.49386C0.500001 7.33403 0.558058 7.18101 0.661329 7.06921L6.57965 0.668557C6.79127 0.43992 7.12998 0.444368 7.33653 0.678936C7.5428 0.913208 7.53852 1.28893 7.32716 1.51757L1.80133 7.49357L7.33867 13.4823C7.55029 13.7113 7.55404 14.087 7.34803 14.321C7.14175 14.5555 6.80278 14.5603 6.59115 14.3313L0.661329 7.91852C0.558058 7.80672 0.500001 7.6537 0.500001 7.49386Z"
      fill={color}
      stroke={color}
    />
  </svg>
);
