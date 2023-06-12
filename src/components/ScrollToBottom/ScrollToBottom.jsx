import React, { useState, useEffect } from 'react';
import './Scroll.css'; 

const ScrollToBottom = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false);
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []);

  return (
    <div className="scroll-to-bottom">
      {showScroll && (
        <div className="bottom-arrow" onClick={scrollToBottom}>
          <i class="ri-arrow-down-line"></i>
        </div>
      )}
    </div>
  );
};

export default ScrollToBottom;
