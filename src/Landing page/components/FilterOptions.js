import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Dropdown from './Dropdown/Dropdown';
import locationsList from '../utilits/location';

const FilterOptions = React.memo(({ filters, onFiltersChange }) => {
  console.log(Object.values(filters));

  // State to hold the date range, location, and price
  const [dateRange, setDateRange] = useState([null, null]);
  const [location, setLocation] = useState(null);
  const [price, setPrice] = useState(null);

  // Destructure the start and end dates from the dateRange
  const [startDate, endDate] = dateRange;

  // Handle changes in dropdown selections
  const handleSelect = (value, type) => {
    if (type === 'location') {
      setLocation(value);
    } else if (type === 'price') {
      setPrice(value);
    }
  };

  // Options for the dropdowns
  const priceOptions = ['0 - 100', '100 - 500', '500+'];
  const moreFiltersOptions = ['WIFI', '1 Bed', 'Rare Find'];
  const locationOptions = locationsList.map(location => location.name);

  // useEffect hook to send filter values to the parent component whenever they change
  useEffect(() => {
    // Send the updated filter values to the parent component
    onFiltersChange({
      location,
      dateRange: { startDate, endDate },
      price
    });
  }, [location, startDate, endDate, price, onFiltersChange]);

  // Update state when the filters prop is updated
  useEffect(() => {
    if (filters.location === null) {
      setLocation(null);
    }
    if (filters.dateRange.startDate === null && filters.dateRange.endDate === null) {
      setDateRange([null, null]);
    }
    if (filters.price === null) {
      setPrice(null);
    }
  }, [filters]);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className='d-flex gap-3'>
          {/* Location Dropdown */}
          <div className="dropdown-container locationList_con">
          <Dropdown
              label="Select Location"
              options={locationOptions}
              onSelect={(value) => handleSelect(value, 'location')}
              leftIcon="bi-geo-alt"
              rightIcon={true}
              selectedValue={location}  // Pass selectedValue for location
            />
          </div>

          {/* Date Picker */}
          <div className='position-relative' style={{ 'width': '210px' }}>
            <div className="input-group border p-1 rounded" style={{ 'flexWrap': 'nowrap' }}>
              <span className="input-group-text bg-white border-0">
                <i className="bi bi-calendar3"></i>
              </span>
              <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => setDateRange(update)}
                className="form-control border-0"
                placeholderText="Select date range"
                dateFormat="MMM d"
              />
              <span className="input-group-text bg-white border-0">
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </div>
          </div>

          {/* Price Dropdown */}
          <div className="dropdown-container">
          <Dropdown
              label="Any price"
              options={priceOptions}
              onSelect={(value) => handleSelect(value, 'price')}
              leftIcon="bi-currency-dollar"
              rightIcon={true}
              selectedValue={price}  // Pass selectedValue for price
            />
          </div>
        </div>

        {/* More Filters Dropdown */}
        <div>
          <div className="dropdown-container more_filters">
            <Dropdown
              label="More Filters"
              options={moreFiltersOptions}
              onSelect={handleSelect}
              leftIcon="bi-filter"
              rightIcon={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default FilterOptions;
