"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";

const allProjects = [
  {
    title: "Modern Office Front",
    description:
      "Aluminum curtain walls and sliding glass doors installed for a corporate office building.",
    image: "/p1.jpg",
    location: "Downtown Dubai, UAE",
  },
  {
    title: "Luxury Villa Windows",
    description:
      "Custom thermal-insulated aluminum windows fitted for a private luxury villa.",
    image: "/p2.jpg",
    location: "Palm Jumeirah, Dubai",
  },
  {
    title: "Retail Store Entrance",
    description:
      "Thermally-insulated aluminum windows for comfort and elegance.",
    image: "/p3.jpg",
    location: "Ruwa",
  },
  {
    title: "Modern Office Front",
    description:
      "Aluminum curtain walls and sliding glass doors installed for a corporate office building.",
    image: "/p4.jpg",
    location: "Downtown Dubai, UAE",
  },
  {
    title: "Luxury Villa Windows",
    description:
      "Custom thermal-insulated aluminum windows fitted for a private luxury villa.",
    image: "/p5.jpg",
    location: "Palm Jumeirah, Dubai",
  },
  {
    title: "Retail Store Entrance",
    description:
      "Thermally-insulated aluminum windows for comfort and elegance.",
    image: "/p3.jpg",
    location: "Ruwa",
  },
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
    <>
      {/* Hero Banner */}
      <section className="relative w-full bg-black text-white py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-lg text-gray-200">
            A showcase of our completed works, demonstrating quality, precision, and innovation.
          </p>
        </div>
      </section>

      <main className="min-h-screen bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-block px-6 py-2 text-sm font-medium border border-black hover:bg-black hover:text-white transition"
            >
              ← Back to Home
            </Link>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
            {allProjects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden shadow-sm hover:shadow-lg transition duration-300 h-72"
                onClick={() => setSelectedIndex(index)}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="transition-transform duration-300 group-hover:scale-105 object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white ">
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
            <div className="relative max-w-4xl w-full bg-white overflow-hidden shadow-lg ">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-red-400 hover:text-red-500 transition z-50"
              >
                <X size={28} />
              </button>

              {/* Prev/Next buttons */}
              <button
                onClick={showPrev}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 transition z-50 rounded-full"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={showNext}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 transition z-50 rounded-full"
              >
                <ChevronRight size={28} />
              </button>

              {/* Modal content */}
              <div className="relative w-full h-[450px]">
                <Image
                  src={allProjects[selectedIndex].image}
                  alt={allProjects[selectedIndex].title}
                  fill
                  className="object-cover"
                />
              </div>

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

      <Footer />
    </>
  );
}
