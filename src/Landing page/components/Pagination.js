import React from 'react'

function Pagination({ totalCards, cardsPerPage, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalCards / cardsPerPage);
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
    
  return (
    <div className='container'>
        <div className="pagination mt-3 mb-5">
          <div>
            <button className='pagination_btn border-0 bg-transparent' onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
              <span><i class="bi bi-arrow-left"></i></span> Previous
            </button>
          </div>
          <div>
          {pages.map((page, index) => (
  <button 
    key={index}
    onClick={() => onPageChange(page)}
    className={`border-0 pg_num ${currentPage === page ? 'active' : ''}`}
  >
    {page}
  </button>
))}

      </div>
      <div>
        <button className='pagination_btn border-0 bg-transparent' onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
         Next <span className='ps-1'><i class="bi bi-arrow-right"></i></span>
        </button>
      </div>      
    </div>
    </div>
  )
}

export default Pagination