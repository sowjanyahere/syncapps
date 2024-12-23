import React , {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

function FilterOptions() {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center justify-content-between gap-3">
        <div className='d-flex gap-3'>
        <div className="dropdown">
          <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="bi bi-geo-alt me-2"></i> Melbourne, AU
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Sydney, AU</a></li>
            <li><a className="dropdown-item" href="#">Brisbane, AU</a></li>
          </ul>
        </div>
        <div>
        <div className="input-group border rounded">
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
            dateFormat="MMM d" // Format to display date like 'Aug 8 - Sep 28'
          />
        </div>

        </div>

        <div className="dropdown">
          <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="bi bi-currency-dollar me-2"></i> Any price
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">$0 - $50</a></li>
            <li><a className="dropdown-item" href="#">$50 - $100</a></li>
          </ul>
        </div>
        </div>
        
        <div>
        <button className="btn btn-outline-secondary">
          <i className="bi bi-filter"></i> More filters
        </button>
        </div>
      </div>
    </div>
  )
}

export default FilterOptions