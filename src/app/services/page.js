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
      {/* Hero Banner */}
      <section className="relative w-full bg-black text-white py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-gray-200">
            Explore our wide range of precision-engineered aluminium solutions for residential, commercial, and industrial projects.
          </p>
        </div>
      </section>

      <main className="min-h-screen bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Services Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 border-l-4 border-gray-800 bg-white shadow hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 cursor-pointer "
              >
                <div className="flex items-center mb-3">
                  <div className="w-1 h-6 bg-gray-800 mr-3"></div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {service.title}
                  </h2>
                </div>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
