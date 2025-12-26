import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export const PlayIcon: React.FC<IconProps> = ({
  width = 13,
  height = 14,
  fill = "white",
  className = "",...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 13 14"
      className={className}
      fill="none"
      {...props}
    >
      <path
        d="M1.46549 0.00114593C0.7014 0.0313761 0 0.654763 0 1.49464V11.7668C0 12.8866 1.24759 13.6213 2.22721 13.0786L11.4967 7.94255C12.5046 7.38412 12.5046 5.87728 11.4967 5.31885L2.22721 0.182787C1.98231 0.0471082 1.72019 -0.0089308 1.46549 0.00114593Z"
        fill={fill}
      />
    </svg>
  );
};
