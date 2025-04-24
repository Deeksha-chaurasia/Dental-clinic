import React from "react";
import { motion } from "framer-motion";
import ServImage1 from "../assets/ServImage1.png";
import ServImage2 from "../assets/ServImage2.png";
import ServImage3 from "../assets/ServImage3.png";
import ServImage4 from "../assets/ServImage4.png";
import AstImage1 from "../assets/AstImage1.png";
import AstImage2 from "../assets/AstImage2.png";
import AstImage3 from "../assets/AstImage3.png";
import AstImage4 from "../assets/AstImage4.png";
import AstImage5 from "../assets/AstImage5.png";
import AstImage6 from "../assets/AstImage6.png";
import { useNavigate } from 'react-router-dom';

const dentalServices = [
  {
    title: "Preventive & Restorative Dentistry",
    description:
      "Maintain oral health and repair damaged teeth for a healthy smile.",
    image: ServImage1,
    tags: ["Teeth Cleaning", "Tooth Fillings", "Root Canal Treatment (RCT)"],
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Improve your smile's appearance with whitening, veneers, and more.",
    image: ServImage2,
    tags: ["Teeth Whitening", "Veneers", "Smile Design"],
  },
  {
    title: "Orthodontics",
    description: "Straighten your teeth and align your bite with expert care.",
    image: ServImage3,
    tags: ["Braces", "Invisalign", "Retainers"],
  },
];

const services = [
  {
    title: "Medicated Facials",
    description:
      "Rejuvenate your skin with our targeted facial treatments, customized for different skin concerns.",
    image: AstImage1,
  },
  {
    title: "Skin Treatments",
    description:
      "Achieve a flawless, even-toned complexion with our advanced skincare solutions.",
    image: AstImage2,
  },
  {
    title: "Hair and Skin Rejuvenation",
    description:
      "Address hair loss and unwanted hair with advanced, non-surgical treatments.",
    image: AstImage3,
  },
  {
    title: "Specialty Aesthetic Treatments",
    description: "Refine your look with our specialized cometic procedures.",
    image: AstImage5,
  },
  {
    title: "Enhancement Treatments",
    description:
      "Add defination and natural color with specialized enhanceement.",
    image: AstImage4,
  },

  {
    title: "Anti-Aging & Face Sculpting",
    description: "Combat signs of aging achieve a sculpted, youthful look.",
    image: AstImage6,
  },
];
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};


const Service = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Banner Image */}
      <motion.section
        className="flex flex-col lg:flex-row items-center justify-between px-6 py-16 bg-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Image */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={ServImage1}
            alt="Tooth illustration"
            className="mx-auto max-w-xs"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Let's Take Care Of Dental Health
          </h1>
          <p className="text-gray-700 mb-6 max-w-md mx-auto lg:mx-0">
            Some people think that brushing your teeth twice a day is enough to
            keep your teeth and mouth healthy. In fact, that’s not the case.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <button
              className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600"
              onClick={() => navigate("/Contact")}
            >
              Set an Appointment
            </button>
            <button className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600">
              Learn More
            </button>
          </div>
        </div>
      </motion.section>

      {/* Service */}
      <section className="py-16 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto px-6"
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            Quality Dental Services
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Quality dental care for a healthy, beautiful smile.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {dentalServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8, ease: "easeOut" }}
                className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm mx-auto"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-red-600 font-semibold text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* service Ast */}
      <div className="py-12 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">
          Aesthetic Services
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Enhance your natural beauty with our specialized aesthetic treatments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-red-600 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
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

export default Service;
