import React from 'react';
import Img1 from "../../assets/images/Lower_banner.jpeg"

const lowerBanner = () => {

  return (
    <div className="w-full container-box">
      <img 
        src= {Img1} 
        alt="Banner"
        className="w-full h-auto"
      />
    </div>
  );
};

export default lowerBanner;