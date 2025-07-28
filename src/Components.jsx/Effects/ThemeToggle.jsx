// ThemeToggle.jsx
import { useTheme } from "../ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { isDark, setIsDark } = useTheme();

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="px-2 py-1 md:px-4 md:py-2  shadow-2xl hover:bg-black text-black hover:text-white border rounded"
    >
      {isDark ? <Moon /> : <Sun />}
    </button>
  );
}
