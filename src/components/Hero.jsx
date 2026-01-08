import React, { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // We only want to track the mouse on this specific page/component
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup function: Removes the listener when component unmounts
    // This prevents memory leaks and errors
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950">
      {/* The Flashlight Effect */}
      <div
        className="absolute inset-0 pointer-events-none" // pointer-events-none is CRITICAL so you can click buttons underneath
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />

      {/* Your Hero Content goes here (Text, Buttons, etc.) */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold text-white">
          Friends <span className="text-blue-500">Money</span> come
        </h1>
      </div>
    </section>
  );
}
