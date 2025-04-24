import React from "react";
import { motion } from "framer-motion";
import AboutImage1 from "../assets/AboutImage1.png";
import AboutImage2 from "../assets/AboutImage2.png";
const About = () => {
  return (
    <div>
      
      {/* About Us Section */}
      <motion.section
        className="py-16 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 px-6">
          {/* Left: Image with Border Frame */}
          <div className="relative w-full lg:w-1/2">
            <img
              src={AboutImage1}
              alt="Smiling woman with aligner"
              className="rounded-xl shadow-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full border-2 border-red-500 rounded-xl transform rotate-2 scale-95 pointer-events-none"></div>
          </div>

          {/* Right: Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-red-600 font-semibold uppercase mb-2">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Smile, Our Commitment
            </h2>
            <p className="text-gray-700 mb-6">
              At NEK Dental & Aesthetic Center, we believe that true beauty
              starts with a confident smile. Our dedicated team combines
              advanced techniques with personalized care to offer the best in
              dental and aesthetic services. We’re here to help you feel and
              look your best—whether you need preventive care, cosmetic
              enhancements, or skin treatments.
            </p>
            <button className="px-6 py-2 bg-white text-red-600 border border-red-500 hover:bg-red-600 hover:text-white transition rounded-md shadow">
              Learn More
            </button>
          </div>
        </div>
      </motion.section>

      {/* New Patients Section */}
      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-6">
          {/* Left: Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-red-600 font-semibold uppercase mb-2">
              New Patients
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Smile and Comfort Come First
            </h2>
            <p className="text-gray-700 mb-6">
              We warmly welcome new patients and ensure a smooth, comfortable
              experience from your first visit. Our team is here to answer your
              questions, understand your goals, and guide you through every
              treatment option, helping you feel confident in your care choices.
              At NEK, your journey to a healthier, radiant smile starts here!
            </p>
            <button className="px-6 py-2 bg-white text-red-600 border border-red-500 hover:bg-red-600 hover:text-white transition rounded-md shadow">
              Learn More
            </button>
          </div>

          {/* Right: Image with Tilted Border */}
          <div className="relative w-full lg:w-1/2">
            <img
              src={AboutImage2}
              alt="Happy patient smiling in mirror"
              className="rounded-xl shadow-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full border-2 border-red-500 rounded-xl transform rotate-2 scale-95 pointer-events-none"></div>
          </div>
        </div>
      </motion.section>
      {/* Footer */}
      
       <footer className="bg-teal-700 text-white py-10 px-6 w-full">
        <div className="w-full">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm md:text-base">
            {/* Social */}
            <div>
              <h3 className="font-bold mb-4">Social</h3>
              <div className="w-10 h-10 bg-white text-teal-700 rounded-full flex items-center justify-center text-lg font-bold">
                G
              </div>
            </div>

            {/* Appointments */}
            <div>
              <h3 className="font-bold mb-4">Appointments</h3>
              <p className="mb-4">
                We will do our best to accommodate your busy schedule. Request
                an appointment today!
              </p>
              <button className="bg-white text-teal-700 font-semibold px-6 py-2 rounded-full hover:bg-teal-100 transition">
                Request Appointment
              </button>
            </div>

            {/* Office Hours */}
            <div>
              <h3 className="font-bold mb-4">Office Hours</h3>
              <ul className="space-y-1">
                <li>MON : 8:00 am - 6:00 pm</li>
                <li>TUE - WED: 9:00 am - 6:00 pm</li>
                <li>THU: 8:00 am - 4:00 pm</li>
                <li>FRI: 8:00 am - 2:00 pm</li>
                <li>SAT - SUN: Closed</li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="font-bold mb-4">Contact Us</h3>
              <p>F-2 Yuganter Shoping Complex Near Vidhya Sagar Inst.</p>
              <p>Awadhpuri BHEL Bhopal-462022</p>
              <p>Phone: +91 88277-36963 , +91 99932-60565</p>
            </div>
          </div>

          <hr className="my-6 border-teal-600" />

          <p className="text-center text-sm text-white">
            © 2024 Family Dental Care. All rights reserved. | codeln Developers
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
