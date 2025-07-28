import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const [loading, setLoading] = useState(true); // Show loading on first load

  useEffect(() => {
    const root = document.documentElement;

    // Apply dark/light class
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Simulate loading delay (adjust as needed)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // 500ms delay

    return () => clearTimeout(timer);
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {/* Show loader on initial load */}
      {loading ? (
        <div className="fixed top-0 left-0 w-full h-screen z-[999] flex items-center justify-center bg-transparent backdrop-blur-lg">
          <div className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        children
      )}
    </ThemeContext.Provider>
  );
};

// Custom hook
export const useTheme = () => useContext(ThemeContext);

