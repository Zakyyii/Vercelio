import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Show cursors
    dot.style.opacity = "0";
    ring.style.opacity = "0";

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let isPointer = false;
    let reqId;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      // Show on first move
      dot.style.opacity = "1";
      ring.style.opacity = "0.6";

      // Direct DOM transform for dot (instant, no lag)
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`;

      // Check if hovering over clickable elements
      const t = e.target;
      const clickable =
        t.tagName === "BUTTON" ||
        t.tagName === "A" ||
        t.closest("button") ||
        t.closest("a") ||
        t.getAttribute("role") === "button" ||
        t.classList.contains("cursor-pointer");

      if (clickable !== isPointer) {
        isPointer = clickable;
        ring.style.scale = isPointer ? "1.6" : "1";
        ring.style.borderColor = isPointer ? "var(--accent)" : "color-mix(in srgb, var(--accent) 60%, transparent)";
        ring.style.backgroundColor = isPointer ? "color-mix(in srgb, var(--accent) 10%, transparent)" : "transparent";
        dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`;
      }
    };

    const handleMouseLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };
    const handleMouseEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "0.6";
    };

    // Smooth lerp animation loop for trailing outer ring — only DOM writes, no setState
    const animateFollower = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      ring.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      reqId = requestAnimationFrame(animateFollower);
    };
    reqId = requestAnimationFrame(animateFollower);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(reqId);
    };
  }, []);

  return (
    <>
      {/* Small precision center dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "8px",
          height: "8px",
          backgroundColor: "var(--accent)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: 0,
          willChange: "transform",
          transition: "opacity 150ms ease",
        }}
      />

      {/* Outer trailing aesthetic ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "32px",
          height: "32px",
          border: "1px solid color-mix(in srgb, var(--accent) 60%, transparent)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          opacity: 0,
          willChange: "transform",
          transition: "opacity 150ms ease, scale 150ms ease, border-color 150ms ease, background-color 150ms ease",
        }}
      />
    </>
  );
}
