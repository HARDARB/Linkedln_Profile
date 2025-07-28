import React from "react";
import { FaYoutube, FaInstagram, FaSmile } from "react-icons/fa";
import { IconsLand } from "./IconsLand";
import { AboutMe } from "./AboutMe";
import Adebayo_image from '../../src/assets/Adebayo_image.jpg'
import weird from '../../src/assets/weird.jpg'
import { CgArrowsExpandUpRight } from "react-icons/cg";
import { ArticleNewsletter } from "./Home/ArticleMainHome";
import { Footer } from "./Footer";
import { useIsInView } from "../../src/Components.jsx/Effects/useIsInView";
import { motion } from "framer-motion";
import { containerVariants, itemFromLeft } from "./Effects/LandingPageAnimations";
import Tags from "./Tags";





const ProfilePage = () => {

    const [ref, isInView, ProjectRef, isProjectInView, AboutRef, isAboutInView, headerRef, isHeaderInView] = useIsInView();

    const handleClick = (e) => {
        e.preventDefault(); // Prevent the link from opening
        alert("Coming Soon");
    };

    return (
        <div className="relative min-h-screen dark:bg-gray-900 bg-white text-white font-sans">
            {/* Background Image */}
            <div
                className="h-70 bg-cover bg-center"

            >
                {/* Optional dark overlay */}
                <div className="h-70 w-full bg-black/50">
                    <img src={weird} alt="" className="w-full h-70 object-cover" />
                </div>
            </div>


            {/* Profile Card */}
            <div className="max-w-4xl mx-auto px-4 relative -top-25">
                <div className="dark:bg-black bg-white rounded-2xl pt-10 pl-5 pr-5 md:pl-10 md:pr-10 md:pb-20 p-10 shadow-xl">
                    <motion.div
                        ref={headerRef}
                        variants={itemFromLeft}
                        initial="hidden"
                        animate={isHeaderInView ? "show" : "hidden"}
                    >
                        <div className="flex justify-between items-center">
                            {/* Profile Picture */}
                            <img
                                src={Adebayo_image}
                                alt="Profile"
                                className="w-35 h-35 rounded-full object-cover border-4 border-black dark:border-white"
                            />

                            {/* Social Icons */}
                            <div className="hidden md:block">
                                <IconsLand />
                            </div>
                        </div>

                        {/* Name and Description */}
                        <div className="space-y-5 mt-4">
                            <h1 className="text-2xl font-bold dark:text-white text-black">Adeyinka Adebayo</h1>
                            <p className="text-md dark:text-gray-300 text-black mt-2 max-w-2xl">
                                Hi there, my name is Adebayo, a Physicist, Electrical, Electronic instrumetation and Automation Engineer, talent partner and a career coach with a
                                passion for scientific research, career development and sustainable environment.
                            </p>



                            {/* Tags */}
                            <Tags
                                tags={[
                                    'Coach',
                                    'Tech',
                                    'Writer',
                                    'Physicist',
                                    'Coder',
                                    'Industrial Engineer',
                                ]}
                            />

                            <div className="mt-8 md:hidden block">
                                <IconsLand />
                            </div>
                        </div>
                    </motion.div>

                </div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}>
                    <div

                        className="dark:bg-black bg-white rounded-2xl p-6 sm:p-10 shadow-xl mt-8">
                        <div className="flex flex-col text-center space-y-4">
                            <a
                                href="https://calendly.com/adeyinkaadebayo032/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="dark:bg-white bg-black dark:text-black text-white text-sm md:text-lg  px-4 py-2 rounded-full font-medium dark:hover:bg-gray-200 hover:bg-gray-700 "
                            >
                                Meet me <CgArrowsExpandUpRight className="inline  text-sm md:text-lg ml-2" />
                            </a>
                        </div>
                    </div>
                    <div

                        className="dark:bg-black bg-white rounded-2xl p-6 sm:p-10 shadow-xl mt-8">
                        <div className="flex flex-col justify-center text-center space-y-4">
                            <a
                                href=" https://adebayoadeyinka.netlify.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="dark:bg-white bg-black dark:text-black text-white text-xs md:text-lg  px-4 py-2 rounded-full font-medium dark:hover:bg-gray-200 hover:bg-gray-700 "
                            >
                                My Tech Portfolio (Full stack) <CgArrowsExpandUpRight className="inline  text-sm md:text-lg ml-2" />
                            </a>
                            <button
                                className="dark:bg-white bg-black dark:text-black text-white text-sm md:text-lg px-4 py-2 rounded-full font-medium dark:hover:bg-gray-200 hover:bg-gray-700"
                                onClick={handleClick}
                            >
                                <a
                                    href="https://adebayoadeyinka.netlify.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()} // optional: prevent event bubbling
                                >
                                    My Engineering Journey{' '}
                                    <CgArrowsExpandUpRight className="inline text-sm md:text-lg ml-2" />
                                </a>
                            </button>
                        </div>
                    </div>
                </motion.div>


                <motion.div
                    ref={AboutRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isAboutInView ? "visible" : "hidden"}
                >
                    <AboutMe />
                </motion.div>


                <ArticleNewsletter />


                <motion.div
                    ref={ProjectRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isProjectInView ? "visible" : "hidden"}
                    className="dark:bg-black bg-white rounded-2xl p-6 sm:p-10 shadow-xl mt-8">
                    <Footer />
                </motion.div>
            </div>
        </div>
    );
};

export default ProfilePage;
