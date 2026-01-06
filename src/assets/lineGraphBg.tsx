import type { SVGProps } from "react";
import type { JSX } from "react/jsx-runtime";

export const LineGraphBg = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width={370}
    height={493}
    viewBox="0 50 380 350"
    style={{ overflow: "visible" }}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_f_131_1236)">
      <path
        d="M180.368 251.183C144.936 295.7 84.026 298.011 58 293.602V383H321V92C294.974 99.2978 306.389 116.174 267.578 130.77C228.767 145.365 224.658 195.538 180.368 251.183Z"
        fill="#0756FB"
        fillOpacity={0.35}
      />
    </g>
    <defs>
      <filter
        id="filter0_f_131_1236"
        x={-42}
        y={-8}
        width={463}
        height={491}
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
          stdDeviation={50}
          result="effect1_foregroundBlur_131_1236"
        />
      </filter>
    </defs>
  </svg>
);
