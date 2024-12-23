import React, { useState } from 'react';
import cardDataList from '../utilits/cardDataList';
import SearchableDropdown from './SearchableDropdown/SearchableDropdown';
import Button from './Button';

function SearchContainer({ onSelectedValueChange, onSearch, onClearFilters }) {
  const [value, setValue] = useState("");

  // Handle value change for the dropdown
  const handleChange = (val) => {
    setValue(val);
    if (onSelectedValueChange) {
      onSelectedValueChange(val);
    }
  };

  // Handle clear button click
  const handleClear = () => {
    setValue('');
    if (onSelectedValueChange) {
      onSelectedValueChange('');
    }

    // Notify the parent to reset filters
    if (onClearFilters) {
      onClearFilters();  // This will call the clear filters logic in Bookings
    }
  };

  // Handle search button click, collect all the necessary data and send to parent
  const handleSearch = () => {
    // Pass all the required values to the parent
    if (onSearch) {
      onSearch(value);  // Sending the search value from SearchContainer to parent
    }
  };

  return (
    <div className="container mt-4">
      <div className='row'>
        <div className='col-12'>
          <div className="d-flex gap-3">
            <div className='w-100'>
              <SearchableDropdown
                options={cardDataList}
                label="title"
                id="id"
                selectedVal={value}
                handleChange={handleChange}
              />
            </div>

            <div className="d-flex gap-3">
              <Button label='Clear' className="btn primary-btn-UI-Header" onClick={handleClear} />
              <Button label='Search' className="btn secondary-btn-UI-Header me-2" onClick={handleSearch} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchContainer;
