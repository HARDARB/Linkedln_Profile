import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from "react-icons/fa"; 
import { FaArrowCircleDown } from "react-icons/fa"; 

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showUp, setUp] = useState(true);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const toggleUp = () => {
    setUp(!showUp);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed lg:bottom-4 bottom-2 md:right-4 lg:right-20 right-2 z-22">
      {isVisible && (
        <button
          type="button"
          onClick={() => {
            scrollToTop();
            toggleUp();
          }}
          className="p-3 bg-amber-48 dark:text-white text-black text-2xl rounded-full shadow-lg hover:bg-orange-225 transition duration-300"
        >
          {showUp ? <FaArrowCircleUp /> : <FaArrowCircleDown />}
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;