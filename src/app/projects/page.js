"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const allProjects = [
  {
    title: "Modern Office Front",
    description:
      "Aluminum curtain walls and sliding glass doors installed for a corporate office building.",
    image: "/c5b8a6fc9840f5503d7fd05a7c2905ac.jpg",
    location: "Downtown Dubai, UAE",
  },
  {
    title: "Luxury Villa Windows",
    description:
      "Custom thermal-insulated aluminum windows fitted for a private luxury villa.",
    image: "/OIP.jpeg",
    location: "Palm Jumeirah, Dubai",
  },
  {
    title: "Retail Store Entrance",
    description:
      "Automatic sliding aluminum doors designed for a high-traffic retail environment.",
    image: "/0547c5450099cb1a6ebf0daa6c9db69c.jpg",
    location: "Abu Dhabi Mall, Abu Dhabi",
  },
  // ➕ add more completed projects here
];

export default function ProjectsPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeModal = () => setSelectedIndex(null);
  const showPrev = () =>
    setSelectedIndex((prev) =>
      prev === 0 ? allProjects.length - 1 : prev - 1
    );
  const showNext = () =>
    setSelectedIndex((prev) =>
      prev === allProjects.length - 1 ? 0 : prev + 1
    );

  return (
    <main className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-3">Our Projects</h1>
          <p className="text-gray-500 text-lg">
            A collection of works we’ve proudly delivered
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition duration-300 cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-xs italic">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6">
          <div className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden shadow-lg">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-red-500 transition"
            >
              <X size={28} />
            </button>

            {/* Prev/Next buttons */}
            <button
              onClick={showPrev}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full transition"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={showNext}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full transition"
            >
              <ChevronRight size={28} />
            </button>

            {/* Modal content */}
            <Image
              src={allProjects[selectedIndex].image}
              alt={allProjects[selectedIndex].title}
              width={900}
              height={500}
              className="w-full h-[450px] object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                {allProjects[selectedIndex].title}
              </h3>
              <p className="text-gray-700 mb-1">
                {allProjects[selectedIndex].description}
              </p>
              <p className="text-sm text-gray-500 italic">
                {allProjects[selectedIndex].location}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
