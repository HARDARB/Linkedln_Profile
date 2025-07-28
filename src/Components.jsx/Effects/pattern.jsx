import { useTheme } from "../ThemeContext";

export default function PatternBackground() {
  const { isDark } = useTheme();

  const stars = Array.from({ length: 20 });

  return (
    <div>
      <div className="absolute inset-0 z-0">
        {/* Background Blur Effects */}
        {isDark && (
          <>
            <div className="absolute bottom-20 right-1/4 w-60 h-32 sm:w-80 sm:h-40 md:w-[400px] md:h-[200px] bg-cyan-500/10 rounded-full blur-3xl"></div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
              w-64 h-32 sm:w-[500px] sm:h-40 md:w-[700px] md:h-[200px] 
              bg-gradient-to-r from-emerald-600/5 via-teal-500/5 to-cyan-600/5 
              rounded-full blur-3xl">
            </div>
          </>
        )}

        {/* Pattern SVG Background */}
        <div className={`absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] ${isDark ? "opacity-10" : "opacity-20"}`} />

        {/* Animated Stars */}
        {isDark && stars.map((_, index) => {
          const size = Math.random() * 2 + 1;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const delay = Math.random() * 5;
          const duration = Math.random() * 5 + 5;

          return (
            <div
              key={index}
              className="absolute bg-white rounded-full opacity-0 animate-star-blink-move"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${top}%`,
                left: `${left}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            />
          );
        })}
      </div>

      {/* CSS animation styles */}
      <style jsx="true">{`
        @keyframes star-blink-move {
          0% {
            opacity: 0;
            transform: translate(0, 0) scale(1);
          }
          50% {
            opacity: 1;
            transform: translate(-10px, 10px) scale(1.2);
          }
          100% {
            opacity: 0;
            transform: translate(10px, -10px) scale(1);
          }
        }

        .animate-star-blink-move {
          animation-name: star-blink-move;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}
