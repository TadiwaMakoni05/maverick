"use client";
import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "/OIP.jpeg",
    title: "Modern Aluminium Interiors Crafted to Perfection",
    subtitle:
      "A diversified engineering company that specializes in all Aluminum and Glass products, General carpentry works and Steel fixtures.",
  },
  {
    image: "/c5b8a6fc9840f5503d7fd05a7c2905ac.jpg",
    title: "Durability Meets Elegance",
    subtitle:
      "Engineered for lasting beauty, our aluminium products elevate any space.",
  },
  {
    image: "/0547c5450099cb1a6ebf0daa6c9db69c.jpg",
    title: "Tailored Aluminium Solutions",
    subtitle:
      "Customize your interior design with precision-crafted, modern materials.",
  },
];

const Header = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // Autoplay logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 4000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [length]);

  return (
    <header
      className="relative w-full h-[100vh] overflow-hidden pt-24"
      id="home"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover  bg-no-repeat bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>

          <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-12 space-y-6">
            <h1 className="text-white text-3xl md:text-5xl font-bold max-w-2xl leading-tight">
              {slide.title}
            </h1>
            <p className="text-white text-sm md:text-xl max-w-2xl">
              {slide.subtitle}
            </p>
            <a
              href="#contact"
              className="bg-transparent border text-white px-6 py-3 text-sm md:text-lg font-semibold hover:bg-black hover:text-white transition duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition hidden md:block ${
              current === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </header>
  );
};

export default Header;
