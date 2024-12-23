import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import Button from './Button';

function SearchResultContainer() {
  return (
    <div className="container mt-4">
      <div className='row'>
      <div className='col-12'>
      <div className=" d-flex flex-column flex-md-row pb-3 pb-md-0 border_bottom_primary justify-content-between align-items-start">
        <div>
          <h4 className='fw-bold'>232 stays in Melbourne</h4>
          <p className="search_info_label">Book your next stay at one of our properties.</p>
        </div>
        <div>
          <Button label='Clear' className="btn primary-btn-UI-Header me-2"  onClick={() => console.log('Clear')} />
          <Button label='Save search' className="btn secondary-btn-UI-Header" icon={<FontAwesomeIcon icon={faStarRegular} />}   onClick={() => console.log('Share')} />
        </div>
      </div>
      </div>
      </div>
      
    </div>
    
  )
}

export default SearchResultContainer