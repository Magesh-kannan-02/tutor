import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const ArrowDownIcon = ({
  size = 15,
  color = "white",
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={(size * 8) / 15} // maintain aspect ratio
      viewBox="0 0 15 8"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M7.49386 7.5C7.33403 7.5 7.18101 7.44194 7.06921 7.33867L0.668557 1.42035C0.43992 1.20873 0.444368 0.870017 0.678936 0.663474C0.913208 0.457198 1.28893 0.461479 1.51757 0.672838L7.49357 6.19867L13.4823 0.661334C13.7113 0.449707 14.087 0.445961 14.321 0.65197C14.5555 0.858245 14.5603 1.19722 14.3313 1.40885L7.91852 7.33867C7.80672 7.44194 7.6537 7.5 7.49386 7.5Z"
        fill={color}
        stroke={color}
        className={className}
      />
    </svg>
  );
};
