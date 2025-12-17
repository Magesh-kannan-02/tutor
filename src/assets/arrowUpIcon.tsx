import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const ArrowUpIcon: React.FC<IconProps> = ({
  className,
  width = 15,
  height = 8,
  fill = "#D6D6D6",
  stroke = "#D1D1D1",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 15 8"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M7.50614 0.500002C7.66597 0.500002 7.81899 0.558059 7.93079 0.66133L14.3314 6.57965C14.5601 6.79127 14.5556 7.12998 14.3211 7.33653C14.0868 7.5428 13.7111 7.53852 13.4824 7.32716L7.50643 1.80133L1.51768 7.33867C1.28875 7.55029 0.913023 7.55404 0.679049 7.34803C0.44448 7.14176 0.439735 6.80278 0.66867 6.59115L7.08148 0.66133C7.19328 0.558059 7.3463 0.500002 7.50614 0.500002Z"
        fill={fill}
        stroke={stroke}
      />
    </svg>
  );
};
