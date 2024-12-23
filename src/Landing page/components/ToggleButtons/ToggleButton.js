import React, { useState } from 'react';
import './ToggleButton.css'

const ToggleButton = ({ options, onToggle }) => {
  const [activeOption, setActiveOption] = useState(options[0].value); // Default active option

  const handleToggle = (value) => {
    setActiveOption(value); // Update active state
    onToggle(value); // Pass selected option to parent
  };

  return (
    <div className="toggle-container">
      {options.map((option, index) => (
        <button
          key={index}
          className={`toggle-btn ${activeOption === option.value ? 'active' : ''}`}
          onClick={() => handleToggle(option.value)}
        >
          {option.icon || option.label} {/* Render icon or label */}
        </button>
      ))}
    </div>
  );
};

export default ToggleButton;
