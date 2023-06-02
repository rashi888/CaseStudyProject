import React, { useState,useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {

    const [isScrollingDisabled, setIsScrollingDisabled] = useState(false);

    useEffect(() => {
      // Enable/disable scrolling on the body element based on modal visibility
      const handleScrolling = () => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
      };
  
      handleScrolling(); // Call on initial render
  
      // Cleanup function
      return () => {
        document.body.style.overflow = 'auto'; // Restore default scrolling
      };
    }, [isOpen]);


  const modalStyle = {
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    zIndex: 111,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgba(0,0,0,0.4)',
  };

  const modalContentStyle = {
    backgroundColor: '#fefefe',
    margin: 'auto',
    padding: '40px',
    border: '1px solid #888',
    width: '90%',
    maxWidth: '800px',
  };

  const closeModal = () => {
    onClose();
  };

  return (
    <div className="modal" style={modalStyle}>
      <div className="modal-content" style={modalContentStyle}>
        <span className="close" onClick={closeModal}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
