"use client";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Aluminium Doors",
    description:
      "High-quality aluminium doors customized for style, security, and durability.",
  },
  {
    title: "Aluminium Windows",
    description:
      "Thermally-insulated and elegant windows, designed to enhance any space.",
  },
  {
    title: "Gates & Fencing",
    description:
      "Automatic and manual aluminium gates providing security and aesthetic appeal.",
  },
  {
    title: "Toilet Cubicles",
    description:
      "Durable aluminium restroom partitions for commercial and public spaces.",
  },
  {
    title: "Glass & Aluminium Facades",
    description:
      "Modern facades that combine glass and aluminium for a sleek exterior finish.",
  },
  {
    title: "Custom Fabrication",
    description:
      "Tailored aluminium solutions for unique architectural and design requirements.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <main className="min-h-screen bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Heading */}
          <section className="text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Our Services
            </h1>
            <p className="text-gray-500 text-lg">
              We provide precision-engineered aluminium solutions for residential,
              commercial, and industrial projects.
            </p>
          </section>

          {/* Services Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition duration-300"
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
