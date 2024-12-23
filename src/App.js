import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

import Header from "./Landing page/components/Header";
import Home from './Landing page/components/Home';
import 'leaflet/dist/leaflet.css';
import Bookings from './Landing page/components/Bookings';

function App() {
  return (
    <Router>
      <div className='border_bottom_primary'>
          <Header />
      </div>
    <Routes>
      <Route path="/bookings" element={<Bookings/>} />
      <Route path="/" element= {<Home />}/>
      <Route path="/projects" element={<h1>Projects Page</h1>} />
      <Route path="/tasks" element={<h1>Tasks Page</h1>} />
      <Route path="/reporting" element={<h1>Reporting Page</h1>} />
      <Route path="/users" element={<h1>Users Page</h1>} />
    </Routes>
  </Router>
  );
}

export default App;
