import React from 'react';
import './Card.css'; // Import CSS for styling
import RatingStar from '../ratings/RatingStar';
import '../ratings/RatingStar.css'

const Card = ({ image, title, description, rating, reviews, location, features, price, rareFind,endDate }) => {
  

  // Helper function to map features to icons
function getFeatureIcon(feature) {
  switch (feature.toLowerCase()) {
    case '1 bed':
      return <i className="bi bi-house-door"></i>;
    case '2 beds':
      return <i className="bi bi-house-door"></i>;
    case '3 beds':
      return <i className="bi bi-house-door"></i>;
    case 'wi-fi':
      return <i className="bi bi-wifi"></i>;
    case 'free wi-fi':
      return <i className="bi bi-wifi"></i>;
    case 'studio':
      return <i className="bi bi-house-door"></i>;
    case 'kitchen':
      return <i className="bi bi-utensils"></i>;
    case 'pool':
      return <i className="bi bi-water"></i>;
    case 'fireplace':
      return <i className="bi bi-fire"></i>;
    case 'hot tub':
      return <i className="bi bi-bath"></i>;
    case 'gym':
      return <i className="bi bi-person-workout"></i>;
    default:
      return null;
  }
}

  return (
    <div className="card-container w-100">
      {/* Image Section */}
      <div className="card-image">
        <img src={image} alt="Property" />
        {rareFind && <span className="badge"> <i class="bi bi-arrow-up"></i> Rare Find</span>}
      </div>

      {/* Details Section */}
      <div className="card-details">
        <div>
            <h4 className="card-description">{description}</h4>
            <h3 className="card-title">{title}</h3>
        </div>
        <div className="card-rating">
        <RatingStar rating={rating} />
          <span>{rating}</span>
          <span className="reviews">{reviews} reviews</span>
        </div>

        <div className="card-features">
        <p className="feature"><span><i class="bi bi-geo-alt"></i></span> {location}</p>
        {features.map((feature, index) => (
            <p key={index} className="feature">
              {getFeatureIcon(feature)} {feature}
            </p>
          ))}         
        </div>
      </div>

      {/* Price and Favorite */}
      <div className="card-footer">
      <p className="card-price mb-0"><span className='fw-light' style={{'fontSize':'10px'}} >{endDate}</span></p>
        <p className="card-price mb-0">${price} <span className='fw-light' > AUD total</span></p>        
      </div>
    </div>
  );
};

export default Card;
