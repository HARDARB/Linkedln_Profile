import React from 'react';
import { FaGithubSquare, FaTelegram } from 'react-icons/fa';
import { ImLinkedin } from 'react-icons/im';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import { motion } from 'framer-motion';
// import { hoverEffect } from '../Effects/animationsHome';

const bounceVariants = {
  animate: (i) => ({
    y: [0, -5, -2, 0],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 1.5,
      delay: i * 0.3, // stagger delay per icon
      ease: "easeInOut",
    },
  }),
};

export const IconsLand = () => {
  const footerLinks = [
    {
      href: "https://www.linkedin.com/in/adebayoadeyinka",
      icon: <ImLinkedin className="dark:text-teal-500 text-teal-800 text-2xl" />,
    },
    {
      href: "https://x.com/omoweadebayo",
      icon: <FaSquareXTwitter className="dark:text-teal-500 text-teal-800 text-2xl" />,
    },
    {
      href: "https://github.com/HARDARB",
      icon: <FaGithubSquare className="dark:text-teal-500 text-teal-800 text-2xl" />,
    },
    {
      href: "https://t.me/HARDARB",
      icon: <FaTelegram className="dark:text-teal-500 text-teal-800 text-2xl" />,
    },
   {
  href: "mailto:adeyinkaadebayo032@gmail.com?subject=Hello&body=I saw your portfolio...",
  icon: <IoIosMail className="dark:text-teal-500 text-teal-800 text-2xl" />,
},

  ];

  return (
    <motion.div className="text-white font-poppins max-w-5xl mx-auto relative">
      <footer className="pb-2 text-sm dark:text-gray-300 text-black  ">
        <div className="flex flex-wrap gap-4  lg:gap-6 mt-4">
          {footerLinks.map(({ href, icon }, idx) => (
            <motion.a
              key={idx}
              href={href}
              custom={idx}
              variants={bounceVariants}
            //    whileHover={hoverEffect}
              animate="animate"
              className="cursor-pointer"
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </footer>
    </motion.div>
  );
};
