"use client";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { BsFillGeoAltFill } from "react-icons/bs";
import { Mail, Phone } from "lucide-react";

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
I want you to do a project for me on: ${subject}
Message: ${message}`;

    const phoneNumber = "263772675611";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      fullMessage
    )}`;

    setSending(true);

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setSending(false);
      setSent(true);
    }, 800);
  };

  return (
    <section className="w-full px-6 py-16 grid md:grid-cols-2 gap-10" id="contact">
      {/* Contact Form */}
      <div className="bg-white p-8 shadow-md relative">
        <h4 className="text-gray-400 text-sm">Contact Us</h4>
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name..."
              required
              className="w-full px-4 py-4 bg-gray-100 text-black rounded border border-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="example@yourmail.com"
              required
              className="w-full px-4 py-4 bg-gray-100 text-black rounded border border-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div>
            <input
              type="text"
              name="subject"
              placeholder="Title..."
              required
              className="w-full px-4 py-4 bg-gray-100 text-black rounded border border-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div>
            <textarea
              rows="4"
              name="message"
              placeholder="Type Here..."
              required
              className="w-full px-4 py-4 bg-gray-100 text-black rounded border border-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              disabled={sending || sent}
              className="px-5 py-4 border border-black text-black hover:bg-black hover:text-white transition w-full"
            >
              {sending ? "Sending..." : sent ? "Message Sent ✅" : "Send Message"}
            </button>
          </div>
        </form>
      </div>

      {/* Contact Info */}
      <div>
        <p className="text-black mb-6">
          We’d love to hear from you. Whether you have questions about our
          services, want to request a quote, or just want to say hello — our
          team is ready to help you.
        </p>
        <div className="space-y-10 grid grid-cols-2 items-center justify-between md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2 p-2 w-full max-w-xs flex-col">
            <Phone />
            <span className="text-lg text-black">Phone Number</span>
            <a href="tel:+263772675611" target="_blank" className="text-sm">
              +263 772 675 611
            </a>
          </div>
          <div className="flex items-center space-x-2 p-2 w-full max-w-xs flex-col">
            <Mail />
            <span className="text-lg text-black">Email Address</span>
            <a
              href="mailto:maverick@work.co.zw"
              target="_blank"
              className="text-sm"
            >
              maverick@work.co.zw
            </a>
          </div>
          <div className="flex items-center space-x-2 p-2 w-full max-w-xs flex-col">
            <FaWhatsapp className="text-2xl" />
            <a
              href="https://wa.me/263772675611"
              target="_blank"
              className="text-lg text-black hover:underline"
            >
              Whatsapp
            </a>
            <span className="text-sm">+263 772 675 611</span>
          </div>
          <div className="flex items-center space-x-2 p-2 w-full max-w-xs flex-col">
            <BsFillGeoAltFill className="text-2xl" />
            <span className="text-lg text-black">Our Office</span>
            <span className="text-sm">123 Main Street, Harare, Zimbabwe</span>
          </div>
        </div>

        <div className="mt-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29700.118110369673!2d31.21511186604702!3d-17.90634097951124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931bf946d8ce9d9%3A0x1af496e0412ec332!2sRuwa!5e1!3m2!1sen!2szw!4v1746834516899!5m2!1sen!2szw"
            className="w-full h-[300px]"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
