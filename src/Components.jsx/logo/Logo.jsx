import React from 'react'
import { useTheme } from "../ThemeContext";
import ScrollLink from '../ScrollTop';
import { motion } from "framer-motion";
import { hoverEffect } from '../Effects/animationsHome';


export const Logo = () => {
    const { isDark } = useTheme();
    return (
        <div>
        <motion.div  whileHover={hoverEffect} className='shadow-xl'>
                
                    <ScrollLink to='/'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="34"
                            height="35"
                            fill="none"
                            viewBox="0 0 34 35"
                        >
                            <path
                                fill="#000"
                                stroke="#000"
                                strokeMiterlimit="10"
                                strokeWidth="2"
                                d="M17 8.513 9.206 22.26s8.458 7.84 7.794 0c-.658-7.84 7.795 0 7.795 0z"
                            ></path>
                            <path
                                stroke="#000"
                                strokeMiterlimit="10"
                                strokeWidth="2"
                                d="M17 33.95c8.837 0 16-7.164 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16Z"
                            ></path>
                        </svg>
                   </ScrollLink>
                </motion.div>

                
            {/* {isDark ? (
                <motion.div  whileHover={hoverEffect} className='shadow-xl'>
                    <ScrollLink to='/'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="34"
                            height="35"
                            fill="none"
                            viewBox="0 0 34 35"
                        >
                            <path
                                fill="#0ABAB5"
                                stroke="#0ABAB5"
                                strokeMiterlimit="10"
                                strokeWidth="2"
                                d="M17 7.777 9.205 21.523s8.458 7.84 7.795 0c-.659-7.84 7.795 0 7.795 0z"
                            ></path>
                            <path
                                stroke="#0ABAB5"
                                strokeMiterlimit="10"
                                strokeWidth="2"
                                d="M17 33.213c8.837 0 16-7.164 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16Z"
                            ></path>
                        </svg>
                    </ScrollLink>
                </motion.div>
            ) : (
                <motion.div  whileHover={hoverEffect} className='shadow-xl'>
                
                    <ScrollLink to='/'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="34"
                            height="35"
                            fill="none"
                            viewBox="0 0 34 35"
                        >
                            <path
                                fill="#000"
                                stroke="#000"
                                strokeMiterlimit="10"
                                strokeWidth="2"
                                d="M17 8.513 9.206 22.26s8.458 7.84 7.794 0c-.658-7.84 7.795 0 7.795 0z"
                            ></path>
                            <path
                                stroke="#000"
                                strokeMiterlimit="10"
                                strokeWidth="2"
                                d="M17 33.95c8.837 0 16-7.164 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16Z"
                            ></path>
                        </svg>
                   </ScrollLink>
                </motion.div>
            )} */}

        </div>
    )
}
