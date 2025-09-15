import Image from "next/image";
import React from "react";
import Link from "next/link";
const About = () => {
  return (
    <div>
      <section
        className="w-full grid md:grid-cols-2 items-center px-6 md:px-20 py-16 bg-white relative"
        id="about"
      >
        <div className="max-w-xl">
          <h4 className="uppercase text-sm tracking-widest text-gray-500 mb-2">
            About Us
          </h4>
          <h2 className="text-4xl font-bold leading-tight mb-4">
            We make comfort in your home
          </h2>
          <p className="text-gray-600 mb-6">
            Even off the ground, if nothing has a sound. The client wants to see
            a unique atmosphere. We are fully trained and certified in the
            latest comfort technologies to deliver maximum comfort.
          </p>
          <Link href="/about" className="px-5 py-2 border border-black text-black hover:bg-black hover:text-white transition">
            Read More
          </Link>
        </div>
        <div className="hidden md:block">
          <Image
            src="/p5.jpg"
            alt="Sofa"
            width={300}
            height={600}
            className="object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
