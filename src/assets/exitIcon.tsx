import React from "react";

export interface LogoutIconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  primaryColor?: string;
  arrowColor?: string;
  className?: string;
}

export const ExitIcon: React.FC<LogoutIconProps> = ({
  width = 32,
  height = 32,
  primaryColor = "white",
  arrowColor = "white",
  className,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      {...props}
      className={className}
    >
      <path
        d="M20.709 24.3346C20.8925 23.6216 21.619 23.1923 22.332 23.3757C23.0451 23.5592 23.4744 24.2856 23.291 24.9987C22.8349 26.7708 21.1497 28 19.3333 28H8C5.79095 28 4 26.209 4 24V8C4 5.79095 5.79095 4 8 4H19.3333C21.1497 4 22.8349 5.22922 23.291 7.0013C23.4744 7.71436 23.0451 8.44082 22.332 8.62435C21.619 8.80774 20.8925 8.37842 20.709 7.66536C20.573 7.13755 20.0022 6.66667 19.3333 6.66667H8C7.26371 6.66667 6.66667 7.26371 6.66667 8V24C6.66667 24.7363 7.26371 25.3333 8 25.3333H19.3333C20.0022 25.3333 20.573 24.8624 20.709 24.3346Z"
        fill={primaryColor}
      />
      <path
        d="M25.3333 14.6667C26.0697 14.6667 26.6667 15.2636 26.6667 16C26.6667 16.7364 26.0697 17.3334 25.3333 17.3334H11.3333C10.597 17.3334 10 16.7364 10 16C10 15.2636 10.597 14.6667 11.3333 14.6667H25.3333Z"
        fill={primaryColor}
      />
      <path
        d="M21.7245 11.0573C22.2452 10.5366 23.0892 10.5366 23.6099 11.0573L27.6099 15.0573C28.1306 15.578 28.1306 16.422 27.6099 16.9427L23.6099 20.9427C23.0892 21.4634 22.2452 21.4634 21.7245 20.9427C21.2038 20.422 21.2038 19.578 21.7245 19.0573L24.7818 16L21.7245 12.9427C21.2038 12.422 21.2038 11.578 21.7245 11.0573Z"
        fill={arrowColor}
      />
    </svg>
  );
};
