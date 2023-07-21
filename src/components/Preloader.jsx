import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations";
import './preloader.css';
import shield from '../assets/KavachEng.png';
const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        {/* <span className="items">Presenting</span> */}
        
        <span className="items">Protecting what matters the most</span>
      </div>
    </div>
  );
};

export default PreLoader;
