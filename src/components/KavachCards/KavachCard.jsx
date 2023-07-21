import React from 'react';
import './KavachCard.css'
const KavachCards = ({ image, planName, imageHeight, imageWidth,desc }) => {
  return (
    <div className="kavachCard">
      <div className="">
        <img src={image} alt="" className="box-icon" style={{ height: imageHeight, width: imageWidth }} />
      </div>
      <p className="kavach-text1">{planName}</p>
      <p className="kavach-text2">{desc}</p>

    </div>
  );
};

export default KavachCards;
