import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const CloseIcon = ({
  className,
  width = 11,
  height = 11,
  fill = "white",
  ...props
}:IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 11 11"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M10.5 1.0575L9.4425 0L5.25 4.1925L1.0575 0L0 1.0575L4.1925 5.25L0 9.4425L1.0575 10.5L5.25 6.3075L9.4425 10.5L10.5 9.4425L6.3075 5.25L10.5 1.0575Z"
        fill={fill}
      />
    </svg>
  );
};
