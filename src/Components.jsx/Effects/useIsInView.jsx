import { useInView } from "framer-motion";
import { useRef } from "react";

export function useIsInView(options = { once: false, margin: "-10%" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, options);
   const ProjectRef = useRef(null);
  const isProjectInView  = useInView(ProjectRef, options);
   const headerRef = useRef(null);
    const isHeaderInView = useInView(headerRef, options);
   const AboutRef = useRef(null);
    const isAboutInView = useInView(AboutRef, options);
  return [ref, isInView, ProjectRef, isProjectInView, AboutRef, isAboutInView, headerRef, isHeaderInView];
}






// hooks/useIsMobile.js
import { useEffect, useState } from "react";

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  return isMobile;
}
