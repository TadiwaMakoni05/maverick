"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 p-6 transition-all duration-300 ${
        isScrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Maverick</div>

        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:opacity-70">
            Home
          </a>
          <a href="#about" className="hover:opacity-70">
            About
          </a>
          <a href="#services" className="hover:opacity-70">
            Services
          </a>
          <a href="#projects" className="hover:opacity-70">
            Projects
          </a>
          <a href="#contact" className="hover:opacity-70">
            Contact
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 px-6">
          <a href="#home" className="hover:opacity-70">
            Home
          </a>
          <a href="#about" className="hover:opacity-70">
            About
          </a>
          <a href="#services" className="hover:opacity-70">
            Services
          </a>
          <a href="#contact" className="hover:opacity-70">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
