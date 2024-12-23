import React, { useState, useEffect } from 'react';
import Card from './Card/Card';
import Pagination from './Pagination';
import cardDataList from '../utilits/cardDataList';
import ToggleContainer from './ToggleContainer';

function CardComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState(null); // State to track the selected sort option
  const [sortedCards, setSortedCards] = useState(cardDataList); // State to store sorted cards
  
  const cardsPerPage = 4;
  
  // Function to handle sorting based on the selected option
  const sortCards = (option) => {
    console.log('SorCards Block')
    let sortedData = [...cardDataList]; // Create a copy of the data to avoid mutating the original

    if (option === 'price') {
      sortedData.sort((a, b) => a.price - b.price); // Sort by price (ascending)
    } else if (option === 'date') {
      sortedData.sort((a, b) => b.reviews - a.reviews); // Sort by reviews (assuming reviews as a proxy for date, can change this to date property if available)
    }

    setSortedCards(sortedData); // Update the state with sorted cards
  };

  // Effect to re-sort cards whenever the sortOption changes
  useEffect(() => {
    if (sortOption) {
      console.log(sortOption)
      sortCards(sortOption);
    }
  }, [sortOption]); // Trigger sort when sortOption changes

  // Calculate the start and end index based on pagination
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = sortedCards.slice(startIndex, endIndex); // Slice the sorted cards

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle toggle change from the ToggleContainer
  const handleSortToggle = (selectedOption) => {
    setSortOption(selectedOption.value); // Update the selected sort option
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <ToggleContainer onToggle={handleSortToggle} />
        </div>
      </div>
      <div className="row">
        {currentCards.map((card, index) => (
          <div key={index} className="col-12">
            <Card {...card} />
          </div>
        ))}
      </div>

      <Pagination
        totalCards={sortedCards.length} // Use sortedCards for pagination
        cardsPerPage={cardsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default CardComponent;
