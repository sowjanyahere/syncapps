import React, { useState, useEffect } from 'react';
import Card from './Card/Card';
import Pagination from './Pagination';
import cardDataList from '../utilits/cardDataList';
import ToggleContainer from './ToggleContainer';

const CardComponent = React.memo(({ searchData }) => {
  console.log('Rendering CardComponent with searchData:', searchData);

  // Destructure searchData and provide default values for dateRange to avoid undefined errors
  const { searchInputValue, location, dateRange = { startDate: null, endDate: null }, price } = searchData;
  
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState('');
  const [filteredCards, setFilteredCards] = useState(cardDataList); // Start with all card data
  const [sortedCards, setSortedCards] = useState(cardDataList); // To store the sorted data
  const cardsPerPage = 4;

  // Function to filter cards based on search data
  const filterCards = () => {
    let filteredData = cardDataList;

    // Apply searchInputValue filter
    if (searchInputValue) {
      filteredData = filteredData.filter((card) =>
        card.title.toLowerCase().includes(searchInputValue.toLowerCase()) ||
        card.location.toLowerCase().includes(searchInputValue.toLowerCase())
      );
    }

    // Apply location filter
    if (location) {
      filteredData = filteredData.filter((card) =>
        card.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    // Apply date range filter
    if (dateRange.startDate && dateRange.endDate) {
      filteredData = filteredData.filter((card) => {
        const cardStartDate = new Date(card.startDate); // Card's start date
        const cardEndDate = new Date(card.endDate); // Card's end date
        const inputStartDate = new Date(dateRange.startDate); // Input start date
        const inputEndDate = new Date(dateRange.endDate); // Input end date
        
        // Check if card date falls within the input date range
        return cardStartDate <= inputEndDate && cardEndDate >= inputStartDate;
      });
    }

    // Apply price range filter
    if (price) {
      const [minPrice, maxPrice] = price.split(' - ').map(Number);
      
      if (price.includes('+')) { // For prices like "500+"
        const min = parseInt(price, 10);
        filteredData = filteredData.filter((card) => card.price >= min);
      } else if (maxPrice) { // For ranges like "0-100"
        filteredData = filteredData.filter((card) => card.price >= minPrice && card.price <= maxPrice);
      }
    }

    return filteredData;
  };

  // Sorting logic based on selected option (price or date)
  const sortCards = (option, cards) => {
    let sortedData = [...cards];
  
    if (option === 'price') {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (option === 'date') {
      sortedData.sort((a, b) => {
        const dateA = new Date(a.startDate); // Use startDate for sorting
        const dateB = new Date(b.startDate); // Use startDate for sorting
        return dateB - dateA;
      });
    }
  
    return sortedData;
  };

  // Effect to filter and sort cards when searchData or sortOption changes
  useEffect(() => {
    let filteredData = filterCards(); // First filter based on searchData
    let sortedData = sortCards(sortOption, filteredData); // Then sort based on the selected sort option
    setFilteredCards(filteredData); // Update the filtered cards
    setSortedCards(sortedData); // Update the sorted cards
  }, [searchData, sortOption]); // Re-run when either searchData or sortOption changes

  // Pagination logic
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = sortedCards.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSortToggle = (selectedOption) => {
    setSortOption(selectedOption);
    setCurrentPage(1); // Reset to the first page when sorting changes
  };

  return (
    <div>
      <ToggleContainer onToggle={handleSortToggle} />
      <div className="container">
        <div className="row">
          {currentCards.length > 0 ? (
            currentCards.map((card, index) => (
              <div key={index} className="col-12">
                <Card {...card} />
              </div>
            ))
          ) : (
            <div className="col-12">
              <p>No such data available</p> {/* Message if no data matches */}
            </div>
          )}
        </div>
      </div>
      
      <Pagination
        totalCards={sortedCards.length}
        cardsPerPage={cardsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
});

export default CardComponent;
