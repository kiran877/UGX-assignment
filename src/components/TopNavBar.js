import React from 'react';
import { FaBell, FaUserCircle, FaSearch } from 'react-icons/fa';
import './TopNavBar.css';

const TopNavBar = () => {
  return (
    <div className="top-navbar">
      <div className="search-bar">
        <FaSearch />
        <input type="text" placeholder="Search here..." />
      </div>
      <div className="icons">
        <FaBell className="icon" />
        <FaUserCircle className="icon" />
      </div>
    </div>
  );
};

export default TopNavBar;
