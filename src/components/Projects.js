"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const projects = [
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
];

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeModal = () => setSelectedIndex(null);
  const goPrev = () =>
    setSelectedIndex((i) => (i > 0 ? i - 1 : projects.length - 1));
  const goNext = () =>
    setSelectedIndex((i) => (i < projects.length - 1 ? i + 1 : 0));

  const selected = selectedIndex !== null ? projects[selectedIndex] : null;

  return (
    <section id="projects" className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header row with title and button */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Projects</h2>
          <Link
            href="/projects"
            className="border border-black text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-black hover:text-white transition duration-300"
          >
            More Projects
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
                <p className="text-xs italic mt-1">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6">
          <div className="relative max-w-3xl w-full bg-white rounded-xl overflow-hidden shadow-lg">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-red-500 transition z-50"
            >
              <X size={28} />
            </button>

            {/* Prev / Next arrows */}
            <button
              onClick={goPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition z-50"
            >
              <ChevronLeft size={36} />
            </button>
            <button
              onClick={goNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition z-50"
            >
              <ChevronRight size={36} />
            </button>

            <Image
              src={selected.image}
              alt={selected.title}
              width={800}
              height={500}
              className="w-full h-[400px] object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
              <p className="text-gray-700 mb-1">{selected.description}</p>
              <p className="text-sm text-gray-500 italic">{selected.location}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
