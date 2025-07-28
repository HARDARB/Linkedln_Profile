import React from 'react'
import { FaGithubSquare, FaHeartbeat, FaTelegram } from 'react-icons/fa';
import { ImLinkedin } from 'react-icons/im';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import { useIsInView } from "./Effects/useIsInView";
import { motion } from "framer-motion";


const hoverEffect = {
  y: -4,
  scale: 1.05,
  transition: {
    type: "spring",
    stiffness: 100,
    damping: 10,
  },
};

export const Footer = () => {
  const [ref, isInView] = useIsInView();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/adebayoadeyinka",
      icon: <ImLinkedin className="dark:text-teal-500 text-teal-800 mr-2 text-lg" />,
    },
    {
      label: "Twitter (X)",
      href: "https://x.com/omoweadebayo",
      icon: <FaSquareXTwitter className="dark:text-teal-500 text-teal-800 mr-2 text-lg" />,
    },
    {
      label: "GitHub",
      href: "https://github.com/HARDARB",
      icon: <FaGithubSquare className="dark:text-teal-500 text-teal-800 mr-2 text-lg" />,
    },
    {
      label: "Telegram",
      href: "https://t.me/HARDARB",
      icon: <FaTelegram className="dark:text-teal-500 text-teal-800 mr-2 text-lg" />,
    },
    {
      label: "Email",
      href: "mailto:adeyinkaadebayo032@gmail.com?subject=Hello&body=I saw your portfolio...",
      icon: <IoIosMail className="dark:text-teal-500 text-teal-800 text-xl" />,
    },
  ];

  return (
    <motion.div className='text-white font-poppins max-w-5xl m-auto relative'>
      <h1 className="dark:bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text dark:text-transparent text-teal-800 font-bold  text-2xl  mb-6 ">Connect with me</h1>
      {/* Footer */}
      <div className='flex justify-center'>
        <FaHeartbeat className='dark:text-teal-500 text-teal-800 absolute top-10 text-3xl' />
      </div>


      <footer className="pt-10 pb-2 border-t dark:border-gray-800 border-teal-800 text-center text-sm dark:text-gray-300 text-black px-10 md:px-0">
        <div className="flex flex-wrap md:justify-center lg:space-x-20 md:space-x-12 space-x-6 space-y-2 md:space-y-0 md:mt-10 mt-4">
          {footerLinks.map(({ label, href, icon }) => (
            <motion.a
              key={label} // ✅ better than idx
              href={href}
              className="flex items-center gap-1"
              whileHover={hoverEffect}
            >
              {icon}
              {label}
            </motion.a>
          ))}
        </div>
      </footer>
      <div className='text-center'>

        <p className='text-xs mt-8'>©  {currentYear} Adebayo. All rights reserved. <br className='block md:hidden' /> <span className="dark:text-teal-500 text-teal-800">Crafted with passion.</span></p>
      </div>

    </motion.div>
  )
}
