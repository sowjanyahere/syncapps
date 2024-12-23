import React, { useState, useEffect } from 'react';
import './dropdown.css';

const Dropdown = ({ label, options, onSelect, leftIcon, rightIcon, className, selectedValue }) => {
  const [selectedOption, setSelectedOption] = useState(label);

  useEffect(() => {
    // Update selectedOption if selectedValue prop changes (useful when resetting filters)
    setSelectedOption(selectedValue || label);  // If selectedValue is null or undefined, use the label as default
  }, [selectedValue, label]);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option); // Call the parent function with selected option
  };

  return (
    <div className={`dropdown ${className}`}>
      <button className="dropdown-btn">
        {leftIcon && <i className={`bi ${leftIcon} left-icon`}></i>} {/* Dynamic left icon */}
        <p className="mb-0 w-100 ms-2 text-start">{selectedOption || 'Select an option'}</p>
        {rightIcon && <i className="bi bi-chevron-down dropdown-icon"></i>} {/* Conditional down arrow */}
      </button>
      <ul className="dropdown-menu">
        {options.length > 0 ? (
          options.map((option, index) => (
            <li key={index} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))
        ) : (
          <li>No options available</li>
        )}
      </ul>
    </div>
  );
};

export default Dropdown;
