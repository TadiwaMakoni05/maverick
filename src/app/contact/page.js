"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { BsFillGeoAltFill } from "react-icons/bs";
import { Mail, Phone } from "lucide-react";
import Footer from "@/components/Footer";
const ContactUs = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const fullMessage = `Hello, my name is ${name}.
Email: ${email}
Subject: $I want you to do a project for me on : {subject}
Message: ${message}`;

    const phoneNumber = "263772675611"; // WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      fullMessage
    )}`;

    setSending(true);

    setTimeout(() => {
      window.open(whatsappUrl, "_blank"); // Open WhatsApp chat
      setSending(false);
      setSent(true);
    }, 800);
  };

  return (
    <>
    <main className="min-h-screen w-full bg-gray-50 flex items-center justify-center px-6 py-16 relative">


      <section className="w-full max-w-6xl grid lg:grid-cols-2 gap-10">
        
        {/* LEFT: CONTACT FORM */}
        <div className="bg-white  shadow-lg p-8 lg:p-12">
          <h4 className="text-gray-500 text-sm tracking-wide">CONTACT US</h4>
          <h2 className="text-3xl font-bold mb-8">Let’s Talk</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name..."
              required
              className="w-full px-4 py-4 bg-gray-100 text-black  border border-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              name="email"
              placeholder="example@yourmail.com"
              required
              className="w-full px-4 py-4 bg-gray-100 text-black  border border-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject..."
              required
              className="w-full px-4 py-4 bg-gray-100 text-black  border border-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <textarea
              rows={5}
              name="message"
              placeholder="Write your message..."
              required
              className="w-full px-4 py-4 bg-gray-100 text-black  border border-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
            <button
              type="submit"
              disabled={sending || sent}
              className={`w-full px-5 py-4  font-semibold transition ${
                sent
                  ? "bg-green-600 text-white"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              {sending
                ? "Sending..."
                : sent
                ? "Message Sent ✅"
                : "Send Message"}
            </button>
          </form>
        </div>

        {/* RIGHT: CONTACT INFO */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-gray-700 mb-8 text-lg">
              We’d love to hear from you. Whether you have questions about our
              services, want a quote, or just want to say hello — we’re here to
              help.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {/* Phone */}
              <div className="flex flex-col items-center p-4 bg-white  shadow-md hover:shadow-lg transition">
                <Phone className="text-black mb-2" />
                <h3 className="font-semibold">Phone</h3>
                <a
                  href="tel:+263772675611"
                  className="text-gray-600 text-sm hover:underline"
                >
                  +263 772 675 611
                </a>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center p-4 bg-white  shadow-md hover:shadow-lg transition">
                <Mail className="text-black mb-2" />
                <h3 className="font-semibold">Email</h3>
                <a
                  href="mailto:maverick@work.co.zw"
                  className="text-gray-600 text-sm hover:underline"
                >
                  maverick@work.co.zw
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex flex-col items-center p-4 bg-white  shadow-md hover:shadow-lg transition">
                <FaWhatsapp className="text-green-500 text-2xl mb-2" />
                <h3 className="font-semibold">WhatsApp</h3>
                <a href="" className="text-gray-600 text-sm">+263 776 5324</a>
              </div>

              {/* Office */}
              <div className="flex flex-col items-center p-4 bg-white  shadow-md hover:shadow-lg transition">
                <BsFillGeoAltFill className="text-red-500 text-2xl mb-2" />
                <h3 className="font-semibold">Office</h3>
                <span className="text-gray-600 text-sm text-center">
                  123 Main Street, Harare, Zimbabwe 
                </span>
              </div>
            </div>
          </div>

          {/* MAP */}
          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29700.118110369673!2d31.21511186604702!3d-17.90634097951124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931bf946d8ce9d9%3A0x1af496e0412ec332!2sRuwa!5e1!3m2!1sen!2szw!4v1746834516899!5m2!1sen!2szw"
              className="w-full h-[300px]  shadow-md"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            />
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
};

export default ContactUs;
