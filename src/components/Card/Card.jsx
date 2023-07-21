import React from 'react';
import './Card.css'
const Footer = ({ image, planName, imageHeight, imageWidth }) => {
  return (
    <div className="box">
      <div className="image-container">
        <img src={image} alt="" className="box-icon" style={{ height: imageHeight, width: imageWidth }} />
        <div className="overlay"></div>
      </div>
      <p className="box-text">{planName}</p>
    </div>
  );
};

export default Footer;
