import { Mail, Phone } from "lucide-react";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { BsFillGeoAltFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="mb-4">
              <h1 className="text-2xl font-bold">Maverick</h1>
              <p className="text-gray-400">
                Bring a sleek, modern touch to your home with premium aluminium
                doors, windows, and interiors.
              </p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a
                href="mailto:tadiwa.makoni13@gmail.com"
                className="text-gray-400 hover:text-white"
              >
                <Mail />
              </a>
              <a
                href="tel:+263772675611"
                className="text-gray-400 hover:text-white"
              >
                <Phone />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaWhatsapp className="text-2xl" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  Service
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">
                  <BsFillGeoAltFill className="text-xl" />
                </span>{" "}
                2443 Oak Ridge Omaha, GA 45065
              </li>
              <li className="flex items-center">
                <a href="tel:+263772675611" target="_blank" className="mr-2">
                  <Phone /> +263 772 675 611
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="mailto:tadiwa.makoni13@gmail.com"
                  target="_blank"
                  className="mr-2"
                >
                  <Mail /> tadiwa.makoni13@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-gray-500 text-xs mt-10">
          Copyright © 2025 Maverick | Developed by{" "}
          <a
            href="https://github.com/TadiwaMakoni05/"
            target="_blank"
            className="text-white font-bold"
          >
            Tadiwanashe Makoni
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
