export const FromTop = {
  hidden: { opacity: 0, y: -15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.8 },
  },
};

export const FromBottom = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.9 },
  },
};

export const itemFromLeft = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 1 },
  },
};

  const variants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0 },
  };

export const itemFromRight = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {duration: 0.6, ease: "easeOut", delay: 1 },
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



export const hoverEffect = {
  y: -4,
  scale: 1.05,
  transition: {
    type: "spring",
    stiffness: 100,
    damping: 10,
  },
};


export const fadeInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const fadeInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};




