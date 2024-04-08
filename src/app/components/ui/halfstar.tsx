import React, { CSSProperties } from "react";

type HalfStarProps = {
  animationDelay?: number;
  style?: CSSProperties;
  className?: string;
};

const HalfStar: React.FC<HalfStarProps> = ({ animationDelay, className }) => {
  const style = animationDelay ? { animationDelay: `${animationDelay}s` } : {};

  return (
    <div className="relative w-6 h-6">
      {/* Full star in gray as the background */}
      <svg
        className="absolute top-0 left-0 h-6 w-6 text-gray-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
      </svg>
      {/* Overlay for half-star effect */}
      <div className="absolute top-0 left-0 h-6 w-3 overflow-hidden">
        <svg
          className={`h-6 w-6 text-yellow-500 ${className}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          style={style}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
        </svg>
      </div>
    </div>
  );
};

export default HalfStar;
