// animations/heroVariants.js

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.5,
    },
  },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const itemFromTop = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

export const paragraphAnim = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 1 },
  },
};

export const availabilityTag = {
  hidden: { opacity: 0, y: -15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.8 },
  },
};


export const containerVariants = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.2,
        },
    },
    hidden: {
        opacity: 0,
        y: 80,
    },
};


export const itemVariants = {
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.3, ease: "easeOut" },
    },
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.9,
    },

};

export const hoverEffect = {
  y: -4,
  scale: 1.05,
  transition: {
    type: "spring",
    stiffness: 100,
    damping: 10,
  },
};

