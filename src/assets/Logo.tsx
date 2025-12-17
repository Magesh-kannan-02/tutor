import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

export const Logo = ({ height = 31,width= 26, color = "#73CD03", ...props }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 26 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.9714 3.19572V15.2497L10.1591 13.6799C5.16562 10.8766 2.06624 5.66258 2.06624 0H0V13.792C0 18.2773 2.6402 22.4261 6.83009 24.3884L13.0288 27.3037V15.2497L15.8412 16.8196C20.8347 19.6228 23.934 24.8369 23.934 30.4995H26.0003V16.7074C26.0003 12.2222 23.3601 8.07338 19.1702 6.1111L12.9714 3.19572Z"
      fill={color}
    />
  </svg>
);
