import React from 'react';
import { CgArrowsExpandUpRight } from 'react-icons/cg';
import { articles } from './ArticleHome';
import ScrollLink from '../ScrollTop';
import ParallaxEffect from '../Effects/ParallaxPattern';
import { useIsInView } from "../Effects/useIsInView";
import { motion } from "framer-motion";


// Animation variants
import {
    containerVariants,
    itemVariants,
    hoverEffect,
} from "../Effects/animationsHome";

export const ArticleNewsletter = () => {
    const [ref, isInView] = useIsInView();
    return (

        <div>

            {/* Background Pattern */}
            <ParallaxEffect />


            {/* Articles */}
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="dark:bg-black bg-white rounded-2xl p-6 font-poppins sm:p-10 shadow-xl mt-8"
            // className="py-12 md:py-30 max-w-5xl mx-auto relative px-5"
            >

                <div >
                    <p className="dark:bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text dark:text-transparent text-teal-800 font-bold  text-2xl  py-1 ">
                        {/* <span className='p-1 inline-block dark:bg-teal-400 bg-teal-800 rounded-full mr-4'></span> */}
                        Read My Weird Growth Articles
                    </p>
                </div>

                <div className=" space-y-18 mt-6 md:mt-10">
                    {articles.map((article) => (
                        <motion.div key={article.id}
                            whileHover={hoverEffect}
                            variants={itemVariants}
                        >
                            <div className=' md:ml-6 pt-4 md:pt-2 border-l-2 p-4 border-teal-500 dark:border-gray-800 dark:bg-transparent'>
                                <div>
                                    <p className="text-sm dark:text-gray-400 text-teal-700 font-medium">{article.date}</p>
                                    <h3 className="text-md font-bold mt-4 dark:text-white text-black">{article.title}</h3>
                                    <p className="text-sm dark:text-gray-400 text-gray-700 mt-4">{article.excerpt}</p>
                                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="dark:text-teal-500 text-teal-800 font-bold text-sm mt-4 inline-block">
                                        Read article <CgArrowsExpandUpRight className="inline text-md" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    <motion.div whileHover={hoverEffect}
                        className='flex justify-center mt-8'>
                        <button className=" dark:text-teal-500 text-teal-800 px-4 py-2 text-xs font-bold hover:bg-teal-600 hover:text-white transition">
                            <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@adeyinkaadebayo032">
                                View all articles <CgArrowsExpandUpRight className="inline text-teal-500 text-sm md:text-lg ml-2" />
                            </a>

                        </button>
                    </motion.div>
                </div>
            </motion.div>


        </div>

    );
};


