"use client";

import Image from "next/image";

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
  return (
    <section id="projects" className="w-full bg-white py-20 px-4" >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
                <p className="text-xs italic mt-1">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
