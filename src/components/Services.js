import React from "react";

const Services = () => {
  return (
    <div>
      <section className="bg-black text-white py-16 px-6" id="services">
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
    </div>
  );
};

export default Services;
