import { useTheme } from "../ThemeContext";

export default function ParallaxEffect() {
  const { isDark } = useTheme();

  const starCount = 30;
  const stars = Array.from({ length: starCount });

  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {isDark ? (
        <div className="w-full h-full relative">
          {/* Blinking Stars */}
          {stars.map((_, i) => {
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            const size = Math.random() * 2 + 1;
            const delay = Math.random() * 5;

            return (
              <div
                key={i}
                className="absolute rounded-full bg-white opacity-70 animate-blink"
                style={{
                  top: `${top}%`,
                  left: `${left}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  animationDelay: `${delay}s`,
                }}
              />
            );
          })}

          {/* Parallax Blurred Glow 1 */}
          <div className="absolute bottom-20 right-1/4 w-60 h-32 sm:w-80 sm:h-40 md:w-[400px] md:h-[200px] bg-cyan-500/10 rounded-full blur-3xl animate-parallax-1" />

          {/* Parallax Blurred Glow 2 */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                          w-64 h-32 sm:w-[500px] sm:h-40 md:w-[700px] md:h-[200px] 
                          bg-gradient-to-r from-emerald-600/10 via-teal-500/10 to-cyan-600/10 
                          rounded-full blur-3xl animate-parallax-2" />

          {/* Pattern SVG Background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDgwIDgwIj48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxMGI5ODEiIHN0cm9rZS13aWR0aD0iMC41IiBkPSJNMjAgMjBMNDAgMEw2MCAyMEw4MCA0MEw2MCA2MEw0MCA4MEwyMCA2MEwwIDQwTDIwIDIwWiIgLz48L3N2Zz4=')] opacity-10" />
        </div>
      ) : (
        <div className="absolute inset-0 z-0">
          {/* Light Mode Pattern Background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDgwIDgwIj48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxMGI5ODEiIHN0cm9rZS13aWR0aD0iMC41IiBkPSJNMjAgMjBMNDAgMEw2MCAyMEw4MCA0MEw2MCA2MEw0MCA4MEwyMCA2MEwwIDQwTDIwIDIwWiIgLz48L3N2Zz4=')] opacity-20" />
        </div>
      )}
    </div>
  );
}
