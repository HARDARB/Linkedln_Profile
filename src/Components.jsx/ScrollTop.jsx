// ScrollLink.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ScrollLink = ({ to, children, className }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    e.preventDefault(); // Prevent immediate navigation

    // If already on target route, just scroll
    if (location.pathname === to) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Trigger loading and scroll
    setLoading(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Wait a bit, then navigate
    setTimeout(() => {
      setLoading(false);
      navigate(to);
    }, 500); // Adjust timing as needed
  };

  return (
    <>
      {loading && (
        <div className="fixed top-0 left-0 w-full h-screen z-[999] flex items-center justify-center bg-white/70 dark:bg-black/70 backdrop-blur-sm">
          <div className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <a href={to} className={className} onClick={handleClick}>
        {children}
      </a>
    </>
  );
};

export default ScrollLink;
