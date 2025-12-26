import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

export const ProfileIcon = ({ height = 28, width = 28, fill = "#C0C0C0", ...props }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="-2 -2 31 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.3333 0C5.98133 0 0 5.98133 0 13.3333C0 20.6853 5.98133 26.6667 13.3333 26.6667C20.6853 26.6667 26.6667 20.6853 26.6667 13.3333C26.6667 5.98133 20.6853 0 13.3333 0ZM13.3333 6C15.174 6 16.6667 7.49267 16.6667 9.33333C16.6667 11.174 15.174 12.6667 13.3333 12.6667C11.4927 12.6667 10 11.174 10 9.33333C10 7.49267 11.4927 6 13.3333 6ZM19.3333 17.0253C19.3333 18.9313 16.902 20.6667 13.3333 20.6667C9.76467 20.6667 7.33333 18.9313 7.33333 17.0253V16.5747C7.33333 15.8893 7.88933 15.3333 8.57467 15.3333H18.092C18.7773 15.3333 19.3333 15.8893 19.3333 16.5747V17.0253Z"
      stroke={fill}
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);
