import React, { useState, useEffect } from 'react';
import "./BackToTop.css"

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setIsVisible(scrollTop > 300); // Show the button when scrolled down 300 pixels
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup: Remove scroll event listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button onClick={scrollToTop} className="back-to-top-button">
         <i class="ri-arrow-up-line"></i>  Back to Top
        </button>
      )}
    </div>
  );
}

export default BackToTop;
