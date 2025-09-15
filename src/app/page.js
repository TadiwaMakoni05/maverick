import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import ContactUs from "@/components/ContactUs";
import Testimonials from "@/components/Testimonial";
const Home = () => {
  return (
    <main>
      <Header />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <ContactUs />

      <Footer />
    </main>
  );
};

export default Home;
