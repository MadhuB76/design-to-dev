import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  let mouseX = 0;
  let mouseY = 0;
  let outlineX = 0;
  let outlineY = 0;
  const easing = 0.12;

  const defaultDotColor = "#FD2E35";
  const defaultOutlineColor = "#221429";
  const lightColor = "#F7F4F2";

  const isDarkOrRed = (bgColor) => {
    if (!bgColor) return false;
    const rgb = bgColor.match(/\d+/g);
    if (!rgb) return false;
    const [r, g, b] = rgb.map(Number);

    // match your brand red or deep purple
    const isRed = r === 253 && g === 46 && b === 53;
    const isDark = r === 34 && g === 20 && b === 41;
    return isRed || isDark;
  };

  // 🔑 find first non-transparent background from target up to body
  const findBackground = (el) => {
    let current = el;
    while (current && current !== document.body) {
      const bg = window.getComputedStyle(current).backgroundColor;
      if (bg && !bg.includes("rgba(0, 0, 0, 0)") && !bg.includes("transparent"))
        return bg;
      current = current.parentElement;
    }
    // fallback to body color
    return window.getComputedStyle(document.body).backgroundColor;
  };

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;

      // get closest visible background color
      const el = document.elementFromPoint(mouseX, mouseY);
      const bgColor = el ? findBackground(el) : null;

      if (isDarkOrRed(bgColor)) {
        dot.style.backgroundColor = lightColor;
        outline.style.borderColor = lightColor;
      } else {
        dot.style.backgroundColor = defaultDotColor;
        outline.style.borderColor = defaultOutlineColor;
      }
    };

    const animate = () => {
      outlineX += (mouseX - outlineX) * easing;
      outlineY += (mouseY - outlineY) * easing;
      outline.style.left = `${outlineX}px`;
      outline.style.top = `${outlineY}px`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const dot = dotRef.current;
    const interactiveElements = document.querySelectorAll("a, button");

    interactiveElements.forEach((el) => {
      el.style.cursor = "none";
      el.addEventListener("mouseenter", () => {
        dot.style.backgroundColor = lightColor;
      });
      el.addEventListener("mouseleave", () => {
        // automatic correction happens on next move
      });
    });

    return () => {
      interactiveElements.forEach((el) => (el.style.cursor = ""));
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed w-2 h-2 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-colors duration-150"
      />

      {/* Outer Circle */}
      <div
        ref={outlineRef}
        className="fixed w-10 h-10 border-2 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-colors duration-150"
        style={{ borderColor: defaultOutlineColor }}
      />

      {/* Hide default system cursor globally */}
      <style>{`
        body, a, button, [role="button"], input, textarea, select {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}
