import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';  
import './RatingStar.css';

// Function to render the rating stars based on the rating
const RatingStar = ({ rating }) => {
  const fullStars = Math.floor(rating);  // Number of full stars
  const halfStar = rating % 1 !== 0;     // Whether there’s a half star
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Remaining empty stars

  // Create the stars
  const stars = [];

  // Full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FontAwesomeIcon key={`full-${i}`} icon={faStar} className="full" />);
  }

  // Half star
  if (halfStar) {
    stars.push(<FontAwesomeIcon key="half" icon={faStarHalfAlt} className="half" />);
  }

  // Empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FontAwesomeIcon key={`empty-${i}`} icon={faStar} className="empty" />);
  }

  return <div className="rating-stars">{stars}</div>;
};

export default RatingStar;
