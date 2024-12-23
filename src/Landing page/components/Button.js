import React, { useState } from 'react';

const Button = ({ label, onClick, className,icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`btn ${className} ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
        {icon && <span className="icon">{icon}</span>} {/* Render icon if provided */}
      {label}
    </button>
  );
};

export default Button;