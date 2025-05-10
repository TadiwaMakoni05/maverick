import React from "react";
import { Smile, CheckCircle, Gauge } from "lucide-react";
const Services = () => {
  return (
    <div>
      <section className="bg-black w-full text-white py-16 px-6" id="services">
        <h3 className="text-3xl font-semibold mb-12 text-center">Why Us?</h3>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h4 className="text-xl font-bold mb-2">Individual Approach</h4>
            <p className="text-gray-300">
              We consider every detail for every customer and ensure
              satisfaction with the unique designs offered.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Quality of Work</h4>
            <p className="text-gray-300">
              We provide the best services and guarantee premium quality in
              every project we undertake.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Autonomy</h4>
            <p className="text-gray-300">
              We are able to work independently and ensure that every project is
              completed with professionalism.
            </p>
          </div>
        </div>
      </section>
      <section id="stats" className="bg-black py-16 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our Achievements
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="flex flex-col items-center">
            <Smile size={48} className="text-blue-400 mb-2" />
            <h3 className="text-4xl font-bold">120+</h3>
            <p className="mt-1 text-gray-300">Happy Clients</p>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle size={48} className="text-green-400 mb-2" />
            <h3 className="text-4xl font-bold">85</h3>
            <p className="mt-1 text-gray-300">Completed Projects</p>
          </div>
          <div className="flex flex-col items-center">
            <Gauge size={48} className="text-yellow-400 mb-2" />
            <h3 className="text-4xl font-bold">98%</h3>
            <p className="mt-1 text-gray-300">Efficiency</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Services;
