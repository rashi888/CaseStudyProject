import React, { useState, useEffect } from 'react';
import './Scroll.css'; // Import the CSS file for styling

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
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4l8 8h-6v8h-4v-8h-6l8-8z" />
          </svg> */}
          <i class="ri-arrow-down-line"></i>
        </div>
      )}
    </div>
  );
};

export default ScrollToBottom;
