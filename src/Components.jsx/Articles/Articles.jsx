import React, { useRef } from 'react';
import { useInView } from "framer-motion";
import { CgArrowsExpandUpRight } from 'react-icons/cg';
import { articles } from '../Home/ArticleHome'; // Adjust the path if needed
import { motion } from "framer-motion";
import {
  hoverEffect,
  itemFromLeft,
  itemFromRight,
} from "../Effects/animationsArticles.jsx";
import { useIsInView } from "../Effects/useIsInView";

export const Articles = () => {
  const firstArticle = articles[0];
  const restArticles = articles.slice(1);

   const articleRef = useRef(null);
          const isInView = useInView(articleRef, {
            once: false,
            margin: "-5%",
          });
 const [ headerRef, isHeaderInView] = useIsInView();

  return (
    <div>
      <div className='max-w-2xl mx-auto border border-gray-700 p-8 pb-64 mt-16 shadow-lg font-poppins'>

        {/* Render the first article immediately without scroll trigger */}
        <motion.div
         ref={headerRef}
          variants={itemFromLeft}
          initial="hidden"
          animate={isHeaderInView ? "show" : "hidden"}
          key={firstArticle.slug}
          className="mb-10"
        >
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <p className="text-sm dark:text-gray-400 text-teal-700 font-medium">{firstArticle.date}</p>
            <div>
              <h3 className="text-md font-bold mt-4 dark:text-white text-black">{firstArticle.title}</h3>
              <p className="text-sm dark:text-gray-400 text-gray-700 mt-4">{firstArticle.excerpt}</p>
              <a
                href={firstArticle.url}
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-teal-500 text-teal-800 font-bold text-sm mt-4 inline-block"
              >
                Read article <CgArrowsExpandUpRight className="inline text-md" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Render the rest with scroll trigger */}
        {restArticles.map((article) => {
         
          return (
            <motion.div
              ref={articleRef}
              variants={itemFromRight}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              key={article.slug}
              className="mb-10"
            >
              <div className='grid grid-cols-1 md:grid-cols-2'>
                <p className="text-sm dark:text-gray-400 text-teal-700 font-medium">{article.date}</p>
                <div>
                  <h3 className="text-md font-bold mt-4 dark:text-white text-black">{article.title}</h3>
                  <p className="text-sm dark:text-gray-400 text-gray-700 mt-4">{article.excerpt}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dark:text-teal-500 text-teal-800 font-bold text-sm mt-4 inline-block"
                  >
                    Read article <CgArrowsExpandUpRight className="inline text-md" />
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
