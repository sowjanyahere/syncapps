import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import {  faLocationDot } from '@fortawesome/free-regular-svg-icons';
import ToggleButton from './ToggleButtons/ToggleButton';

function ToggleContainer({ onToggle }) {
  const handleToggle = (selectedOption) => {
    onToggle(selectedOption); // Pass selected option to the parent (CardComponent)
  };

  return (
    <div className="container mb-3">
      <div className='row'>
        <div className='col-12'>
        <div className="toggle_container d-flex justify-content-between">
        {/* Sorting Toggle */}
        <ToggleButton
          options={[
            { value: 'date', label: 'Sort by Date' },
            { value: 'price', label: 'Sort by Price' },
          ]}
          onToggle={handleToggle}
        />

        {/* View Mode Toggle */}
        <ToggleButton
          options={[
            { value: 'list', icon: <FontAwesomeIcon icon={faList} /> },
            { value: 'map', icon: <i class="bi bi-geo-alt fw-bold"></i>},
          ]}
          onToggle={handleToggle}
        />
      </div>
        </div>
      </div>
      
    </div>
  );
}

export default ToggleContainer;
