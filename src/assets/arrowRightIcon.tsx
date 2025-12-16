import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const ArrowRightIcon: React.FC<IconProps> = ({
  className,
  width = 8,
  height = 15,
  fill = "#D6D6D6",
  stroke = "#D1D1D1",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 8 15"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M7.5 7.50614C7.5 7.66597 7.44194 7.81899 7.33867 7.93079L1.42035 14.3314C1.20873 14.5601 0.870017 14.5556 0.663474 14.3211C0.457198 14.0868 0.461479 13.7111 0.672838 13.4824L6.19867 7.50643L0.661334 1.51768C0.449707 1.28875 0.445962 0.913023 0.65197 0.679049C0.858245 0.44448 1.19722 0.439735 1.40885 0.66867L7.33867 7.08148C7.44194 7.19328 7.5 7.3463 7.5 7.50614Z"
        fill={fill}
        stroke={stroke}
      />
    </svg>
  );
};
