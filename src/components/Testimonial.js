"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const testimonials = [
  {
    name: "Alice Johnson",
    feedback:
      "Excellent service! The aluminium doors and windows are top quality, and the team was very professional.",
  },
  {
    name: "Brian Smith",
    feedback:
      "Highly recommend! The project was delivered on time and exceeded my expectations.",
  },
  {
    name: "Catherine Lee",
    feedback:
      "Great communication and craftsmanship. I’m extremely satisfied with the results.",
  },
];

const TestimonialCard = ({ name, feedback }) => {
  const initial = name.charAt(0).toUpperCase();

  return (
    <div className="bg-black text-white p-8 rounded-xl shadow-lg flex flex-col items-center space-y-4 min-h-[220px]">
      {/* Avatar */}
      <div className="w-16 h-16 flex items-center justify-center bg-gray-800 rounded-full text-2xl font-bold">
        {initial}
      </div>
      <p className="text-center">{feedback}</p>
      <h4 className="font-semibold">{name}</h4>
    </div>
  );
};

export default function TestimonialsSwiper() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard name={t.name} feedback={t.feedback} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
