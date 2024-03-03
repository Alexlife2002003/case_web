import React from 'react';
import {useNavigate } from 'react-router-dom';  // Import the useHistory hook
import IMG from '../../assets/CASE.png';
import './style.css';

const Header = () => {
  const navigate=useNavigate()
  const handleImageClick = () => {
    console.log("clicked")
    navigate('/home');
  }

  return (
    <div className="header-container">
      <img
        className='header-image'
        src={IMG}
        alt="CASE"
        onClick={handleImageClick}
        onTouchStart={handleImageClick}
    
      />
    </div>
  );
}

export default Header;
