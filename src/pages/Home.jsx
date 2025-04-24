import React, { useState } from "react";
import BannerImage from "../assets/BannerImage.png";
import IconImageHom1 from "../assets/IconImgHom1.png";
import IconImageHom2 from "../assets/IconImgHom2.png";
import IconImageHom3 from "../assets/IconImgHom3.png";
import { motion } from "framer-motion";
import ClientImg1 from "../assets/ClientImg1.png";
import ClientImg2 from "../assets/ClientImg2.png";
import ClientImg3 from "../assets/ClientImg3.png";
import ClientImg4 from "../assets/ClientImg4.png";
import ServiceImage1 from "../assets/ServiceImage1.png";
import ServiceImage2 from "../assets/ServiceImage2.png";
import ServiceImage3 from "../assets/ServiceImage3.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const stats = [
    {
      image: ClientImg1,
      number: "10+",
      label: "Years of Experience",
    },
    {
      image: ClientImg2,
      number: "200+",
      label: "Satisfied Clients",
    },
    {
      image: ClientImg3,
      number: "20+",
      label: "Certified Dentists",
    },
    {
      image: ClientImg4,
      number: "20+",
      label: "Certified Dentists",
    },
  ];

  const services = [
    {
      frontImage: ServiceImage1,
      title: "Cleanings and Exams",
      backDescription: "",
    },
    {
      frontImage: ServiceImage2,
      title: "Digital X-Rays",
      backDescription:
        "Digital X-Rays help examine the inside of your teeth and catch hidden problems.",
    },
    {
      frontImage: ServiceImage3,
      title: "Dental Implants",
      backDescription: "",
    },
  ];

  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center md:text-left">
          <h2 className="text-red-600 font-bold text-2xl mb-2">
            NEK Dental & Aesthetic Center
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Partner in Beauty and Dental Health to make you smile
          </h1>
          <p className="text-gray-600 mb-6">
            Discover a level of dental care like no other.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => navigate("/Contact")}
              className="border border-lime-500 text-gray-800 px-6 py-2 rounded-md hover:bg-lime-100 transition"
            >
              Book an Appointment
            </button>
            <button
              onClick={() => navigate("/Service")}
              className="border border-lime-500 text-gray-800 px-6 py-2 rounded-md hover:bg-lime-100 transition"
            >
              Browse our Service
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={BannerImage}
            alt="Happy smiling woman"
            className="rounded-2xl shadow-xl max-w-full md:max-w-md"
          />
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700 max-w-7xl mx-auto px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {[IconImageHom1, IconImageHom2, IconImageHom3].map((img, idx) => {
          const titles = [
            "Preventive Guidence",
            "Friendly Service",
            "Dental Technology",
          ];
          const descs = [
            "Stay ahead of potential challenges with proactive solutions.",
            "We're here to help you navigate challenges with a smile.",
            "Explore advanced Dental Technology for precision care.",
          ];
          return (
            <motion.div
              key={idx}
              className="border p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + idx * 0.2 }}
            >
              <div className="flex justify-center mb-4">
                <img src={img} alt={titles[idx]} className="h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{titles[idx]}</h3>
              <p>{descs[idx]}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Welcome Message */}
      <div className="text-center mt-10 space-y-4 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-red-600">
          Welcome to NEK Family Dental & Aesthetic Center
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
          Creating beautiful smiles for all ages
        </h3>
        <p className="text-gray-700">
          Welcome to NEK Dental & Aesthetic Center, where expertise and
          innovation come together to bring out the best version of you.
        </p>
      </div>

      {/* Clients */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 py-10">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center max-w-xs"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img
              src={stat.image}
              alt={stat.label}
              className="rounded-2xl shadow-lg mb-4 w-64 h-80 object-cover"
            />
            <p className="text-2xl font-bold text-red-600">{stat.number}</p>
            <p className="text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/*Our  Services */}
      <div className="py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
          Our Services
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {services.slice(0, 3).map((service, index) => (
            <Link to="/Service" key={index}>
              <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg hover:scale-105 transition cursor-pointer">
                <img
                  src={service.frontImage}
                  alt={service.title}
                  className="w-32 h-32 object-cover rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.backDescription || "More information coming soon."}
                </p>
              </div>
            </Link>
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

export default Home;
