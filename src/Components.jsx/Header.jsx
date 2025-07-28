import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import ThemeToggle from "./Effects/ThemeToggle.jsx";
import { CgArrowsExpandUpRight } from 'react-icons/cg';
import { X, MenuIcon } from 'lucide-react';
import { Logo } from './logo/Logo.jsx';
import { motion} from "framer-motion";
import { hoverEffect } from './Effects/animationsHome.jsx';
import { h1 } from 'framer-motion/client';
import Adebayo_image from '../../src/assets/Adebayo_image.jpg'


export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [loading, setLoading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  let lastScrollY = window.scrollY;

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Meet me", to: "https://calendly.com/adeyinkaadebayo032/30min" },
    { label: "All articles", to: "https://medium.com/@adeyinkaadebayo032" },
    { label: "Connect", to: "/footer" },
  ];

  const handleNavigation = (to) => {
    if (to.startsWith("http")) {
      window.open(to, "_blank");
      setMobileMenuOpen(false);
      return;
    }

    if (location.pathname !== to) {
      setLoading(true);
      setMobileMenuOpen(false);
      setTimeout(() => {
        navigate(to);
        setLoading(false);
      }, 600);
    } else {
      setMobileMenuOpen(false);
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 60) {
        setIsScrolled(true);
        if (currentScrollY > lastScrollY) {
          setShowHeader(false); // scroll down
        } else {
          setShowHeader(true); // scroll up
        }
      } else {
        setIsScrolled(false);
        setShowHeader(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // === ANIMATION VARIANTS ===
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <div className="font-poppins px-6 max-w-5xl mx-auto  text-black dark:text-white transition-colors duration-300 relative z-50">
      {/* Loader */}
      {loading && (
        <div className="top-0 fixed left-0 w-full h-screen z-[999] flex items-center justify-center bg-white/70 dark:bg-black/70 backdrop-blur-sm">
          <div className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* HEADER */}
      <div>
        {showHeader && (
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full left-0 z-50 transition-all duration-500 ease-in-out 
  ${isScrolled ? 'bg-white max-w-5xl mx-auto shadow-md backdrop-blur-md left-1/2 -translate-x-1/2 rounded-full' : 'bg-transparent'}
`}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center justify-between gap-1 md:gap-4 max-w-5xl mx-auto px-4 md:px-6 py-2"
            >
              {/* LOGO */}
              <motion.div variants={itemVariants}>
                {isScrolled ? (
                  <div className='flex justify-center items-center gap-2 md:gap-6'>
                    <img
                      src={Adebayo_image}
                      alt="Profile"
                      className="md:w-12 w-10 h-10 md:h-12 rounded-full object-cover border-4 border-white"
                    />
                    <h1 className='text-black text-xs md:text-lg font-bold'>Adeyinka Adebayo</h1>
                  </div>
                ) : <Logo />}


              </motion.div>


              {/* CTA + THEME */}
              <motion.div whileHover={hoverEffect} variants={itemVariants} className="flex items-center gap-4">
                <button className="md:px-4 px-1 py-1.5 hidden md:block md:py-2 hover:text-white hover:bg-black text-black  border  rounded md:text-sm text-xs font-medium shadow-2xl">
                  <a
                    href="https://calendly.com/adeyinkaadebayo032/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Meet me <CgArrowsExpandUpRight className="inline  text-sm md:text-lg ml-2" />
                  </a>
                </button>
                <ThemeToggle />

                {/* Mobile Button */}
                <motion.button
                  variants={itemVariants}
                  onClick={() => setMobileMenuOpen(true)}
                  className="md:px-4 px-1 md:py-2 py-1 hover:text-white hover:bg-black text-black  border  rounded md:text-sm text-xs font-medium shadow-2xl"
                >
                  <MenuIcon size={24} />
                </motion.button>

              </motion.div>


            </motion.div>



          </motion.header>
        )}


        {/* Mobile Nav */}
        <div
          className={`fixed top-0 right-0 h-full w-[85%] max-w-[340px] bg-neutral-900 text-white z-[999] transition-transform duration-300 ease-in-out shadow-xl ${mobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
            }`}
        >
          <div className="flex items-center justify-between px-6 pt-6 pb-3 border-b border-white/10">
            <span className="text-sm font-medium tracking-wide text-white/80">Navigation</span>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X size={26} className="text-white" />
            </button>
          </div>

          <ul className="px-6 py-4 space-y-6 text-sm font-light text-white/90">
            {navLinks.map(({ label, to }) => (
              <motion.li
                key={`${label}-${to}`} // safer and more descriptive
                whileHover={hoverEffect}
                className="border-b border-white/10 pb-2 cursor-pointer hover:text-teal-400 transition"
                onClick={() => handleNavigation(to)}
              >
                {label}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Backdrop */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 z-[998] bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
        
      </div>


    </div>
  );
};

