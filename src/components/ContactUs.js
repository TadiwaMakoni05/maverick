import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { BsFillGeoAltFill } from "react-icons/bs";
import { Mail, Phone } from "lucide-react";
const ContactUs = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
      <div className="bg-white p-8 shadow-md">
        <h4 className="text-gray-400 text-sm">Contact Us</h4>
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>

        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your Name..."
              className="w-full px-4 py-2 bg-gray-100 text-black rounded border border-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="example@yourmail.com"
              className="w-full px-4 py-2 bg-gray-100 text-black rounded border border-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Title..."
              className="w-full px-4 py-2 bg-gray-100 text-black rounded border border-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div>
            <textarea
              rows="4"
              placeholder="Type Here..."
              className="w-full px-4 py-2 bg-gray-100 text-black rounded border border-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            ></textarea>
          </div>
          <div>
            <button className="px-5 py-2 border border-black text-black hover:bg-black hover:text-white transition">
              Send Now
            </button>
          </div>
        </form>
      </div>

      <div>
        <p className="text-black mb-6">
          We’d love to hear from you. Whether you have questions about our
          services, want to request a quote, or just want to say hello — our
          team is ready to help you.
        </p>
        <div className="space-y-10 grid grid-cols-1 items-center justify-between md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2 p-2 w-64 flex-col">
            <span>
              <Phone />
            </span>
            <span className="text-lg text-black">Phone Number</span>
            <span className="text-sm">+263 772 534 789</span>
          </div>
          <div className="flex items-center space-x-2 p-2 w-64 flex-col">
            <span>
              <Mail />
            </span>
            <span className="text-lg text-black">Email Address</span>

            <span className="text-sm">maverick@work.co.zw</span>
          </div>
          <div className="flex items-center space-x-2 p-2 w-64 flex-col">
            <span>
              <FaWhatsapp className="text-2xl" />
            </span>
            <span className="text-lg text-black">Whatsapp</span>

            <span className="text-sm">+263 776 5324</span>
          </div>
          <div className="flex items-center space-x-2 p-2 w-64 flex-col">
            <span>
              <BsFillGeoAltFill className="text-2xl" />
            </span>
            <span className="text-lg text-black">Our Office</span>

            <span className="text-sm">2443 Oak Ridge Omaha, GA 45065</span>
          </div>
        </div>

        <div className="mt-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29700.118110369673!2d31.21511186604702!3d-17.90634097951124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931bf946d8ce9d9%3A0x1af496e0412ec332!2sRuwa!5e1!3m2!1sen!2szw!4v1746834516899!5m2!1sen!2szw"
            width="600"
            height="300"
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
