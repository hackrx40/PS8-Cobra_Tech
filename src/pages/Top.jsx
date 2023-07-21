import React, { useState, useEffect } from 'react';
import './Top.css';
import arrow from '../assets/arrowUp.png';
const GoToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className={`go-to-top-button ${showButton ? 'show' : ''}`} onClick={scrollToTop}>
     <img src={arrow} alt="" id='arrowUp' />
    </button>
  );
};

export default GoToTopButton;
