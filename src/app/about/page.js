"use client";
import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* Back to Home Button */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-block bg-black text-white px-6 py-2  text-sm font-medium hover:bg-gray-800 transition"
            >
              &larr; Back to Home
            </Link>
          </div>

          {/* Heading */}
          <section className="text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              About Our Company
            </h1>
            <p className="text-gray-500 text-lg">
              We specialize in high-quality aluminium and glass products,
              providing durable and elegant solutions for residential,
              commercial, and industrial projects.
            </p>
          </section>
          <section className="text-center space-y-8">
            <h2 className="text-3xl font-semibold text-gray-800">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-600">
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-800">Quality</h3>
                <p>
                  We use premium materials and follow strict quality standards
                  for all projects.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-800">Experience</h3>
                <p>
                  Years of expertise in aluminium fabrication and installation
                  across diverse projects.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-800">Innovation</h3>
                <p>
                  We bring creative and modern design solutions tailored to your
                  needs.
                </p>
              </div>
            </div>
          </section>

          {/* Company Mission */}
          <section className="flex flex-col md:flex-row items-center md:space-x-12 space-y-8 md:space-y-0">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600">
                To deliver precision-engineered aluminium solutions that combine
                durability, style, and functionality, enhancing every space we
                work in.
              </p>
            </div>
            <div className="md:w-1/2 relative w-full h-64 md:h-80">
              <Image
                src="/p3.jpg"
                alt="Our Mission"
                fill
                className=" object-cover"
                priority
              />
            </div>
          </section>

          {/* Company Vision */}
          <section className="flex flex-col md:flex-row items-center md:space-x-12 space-y-8 md:space-y-0">
            <div className="md:w-1/2 relative w-full h-64 md:h-80 order-last md:order-first">
              <Image
                src="/p1.jpg"
                alt="Our Vision"
                fill
                className=" object-cover"
                priority
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600">
                To be the leading aluminium solutions provider, recognized for
                innovation, reliability, and excellence in craftsmanship.
              </p>
            </div>
          </section>

          {/* Why Choose Us */}
          
        </div>
      </main>

      <Footer />
    </>
  );
}
