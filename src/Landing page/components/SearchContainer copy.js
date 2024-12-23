import React, { useState } from 'react';


function SearchContainer() {
  // State for the search input text
  const [searchText, setSearchText] = useState('');
  // State for filtered results
  const [filteredResults, setFilteredResults] = useState([]);
  // State to manage visibility of the dropdown
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Sample data (location list)
  const locations = [
    'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 
    'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'
  ];

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchText(value);

    // Filter the locations based on the search text
    const results = locations
      .filter(location => location.toLowerCase().includes(value.toLowerCase())) // Filter by text
      .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())); // Sort results alphabetically

    setFilteredResults(results); // Update the filtered results state
  };

  // Handle mouse enter to show dropdown
  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  // Handle mouse leave to hide dropdown
  const handleMouseLeave = () => {
    // Only hide the dropdown if mouse is not on the input or the dropdown list
    setIsDropdownVisible(false);
  };

  // Handle item selection
  const handleItemClick = (item) => {
    setSearchText(item); // Set the selected item in the input field
    setFilteredResults([]); // Clear the filtered results (hide the dropdown)
    setIsDropdownVisible(false); // Hide the dropdown after selection
  };

  // Handle clear button click
  const handleClear = () => {
    setSearchText('');
    setFilteredResults([]);
    setIsDropdownVisible(false); // Hide the dropdown when clearing the input
  };

  return (
    <div className="container mt-4">
      <div className="d-flex gap-3">
        <div 
          className="input-group"
          onMouseEnter={handleMouseEnter}    // Show dropdown on mouse enter
          onMouseLeave={handleMouseLeave}    // Hide dropdown on mouse leave
        >
          <span className="input-group-text">
            <i className="bi bi-search"></i>
          </span>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search" 
            value={searchText}
            onChange={handleSearchChange}
            onFocus={() => setIsDropdownVisible(true)}  // Show dropdown on focus
            onBlur={() => setIsDropdownVisible(false)}   // Hide dropdown when focus is lost
          />
          <span className="input-group-text">
            <i className="bi bi-search"></i>
          </span>
        </div>

        <div className="d-flex gap-3">
          <button className="btn btn-outline-secondary" onClick={handleClear}>Clear</button>
          <button className="btn btn-primary">Search</button>
        </div>
      </div>

      {/* Results dropdown - Only show when mouse is over the input and there are results */}
      {isDropdownVisible && searchText && (
        <div className="dropdown search_dropdown mt-2">
          {filteredResults.length > 0 ? (
            <ul className="list-group">
              {filteredResults.map((result, index) => (
                <li 
                  key={index} 
                  className="list-group-item"
                  onClick={() => handleItemClick(result)}  // Handle item click to select it
                >
                  {result}
                </li>
              ))}
            </ul>
          ) : (
            <div className="no-results">
              <span>No search results available</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchContainer;
