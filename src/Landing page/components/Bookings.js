import React, { useState, useCallback } from 'react';
import SearchResultContainer from './SearchResultContainer';
import FilterOptions from './FilterOptions';
import SearchContainer from './SearchContainer';
import MapComponent from './MapComponent';
import CardComponent from './CardComponent';

function Bookings() {
  const [filters, setFilters] = useState({
    location: null,
    dateRange: { startDate: null, endDate: null },
    price: null,
    searchInputValue: ''
  });

  // Memoize the filter change handler to prevent unnecessary re-renders
  const handleFiltersChange = useCallback((updatedFilters) => {
    setFilters((prevFilters) => {
      if (
        prevFilters.location !== updatedFilters.location ||
        prevFilters.price !== updatedFilters.price ||
        prevFilters.dateRange.startDate !== updatedFilters.dateRange.startDate ||
        prevFilters.dateRange.endDate !== updatedFilters.dateRange.endDate
      ) {
        return updatedFilters;
      }
      return prevFilters;
    });
  }, []);

  const [selectedValue, setSelectedValue] = useState("");

  // Callback to receive the selected value from SearchContainer
  const handleSelectedValueChange = (value) => {
    setSelectedValue(value);
  };

  // Track the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Callback for when the search button is clicked in SearchContainer
  const handleSearch = (searchInput) => {
    // Send all the filter values to the CardComponent
    const searchData = {
      searchInputValue: selectedValue,
      location: filters.location,
      dateRange: filters.dateRange,
      price: filters.price
    };

    setSearchQuery(searchData);  // Update state with the full search data
  };

  // Clear all filters and reset the search state
  const handleClearFilters = () => {
    setFilters({
      location: null,
      dateRange: { startDate: null, endDate: null },
      price: null,
      searchInputValue: ''
    });
    setSelectedValue('');
    setSearchQuery({});  // Reset search query to initial state
  };

  return (
    <div>
      <SearchResultContainer />
      <FilterOptions filters={filters} onFiltersChange={handleFiltersChange} />
      <SearchContainer
        onSelectedValueChange={handleSelectedValueChange}
        onSearch={handleSearch}
        onClearFilters={handleClearFilters} // Pass clear filters handler to SearchContainer
      />
      
      {/* Pass location to MapComponent */}
      <MapComponent searchData={searchQuery} />
      
      {/* Pass the complete search data to CardComponent */}
      <CardComponent searchData={searchQuery} />
    </div>
  );
}

export default Bookings;
