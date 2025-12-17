import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  fillOpacity?: number;
}
export const BackgroundBlur = ({ size = 649,fillOpacity = 0.38, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 649 649"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_f_351_365)">
      <circle
        cx={324.5}
        cy={324.5}
        r={124.5}
        fill="#C5FF7D"
        fillOpacity={fillOpacity}
      />
      <circle cx={324.5} cy={324.5} r={124} stroke="black" />
    </g>
    <defs>
      <filter
        id="filter0_f_351_365"
        x={0}
        y={0}
        width={649}
        height={649}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={100}
          result="effect1_foregroundBlur_351_365"
        />
      </filter>
    </defs>
  </svg>
);
