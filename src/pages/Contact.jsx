import React, { useState } from 'react';
import { motion } from 'framer-motion';


const ContactUs = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
     

      {/* Animated Header Section */}
      <motion.div
        className="min-h-screen flex flex-col items-center justify-center bg-white px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Book Appointment</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Schedule your next dental appointment effortlessly. We will contact you to confirm your request or change the time or day if unavailable.
          </p>
          <div className="mt-4 text-gray-800">Returning Patient?</div>
          <div className="flex justify-center gap-4 mt-2">
            <button
              onClick={() => setShowForm(true)}
              className="px-6 py-2 border-2 border-lime-500 text-gray-800 rounded hover:bg-lime-100"
            >
              Yes
            </button>
            <button
              onClick={() => setShowForm(true)}
              className="px-6 py-2 border-2 border-lime-500 text-gray-800 rounded hover:bg-lime-100"
            >
              No
            </button>
          </div>
        </div>
      </motion.div>

      {/* Animated Form Section */}
      {showForm && (
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Name*</label>
              <input type="text" className="w-full border px-4 py-2 rounded" placeholder="Full Name" required />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Phone Number*</label>
              <input type="tel" className="w-full border px-4 py-2 rounded" placeholder="(+91) 998 1607898" required />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Email Address*</label>
              <input type="email" className="w-full border px-4 py-2 rounded" placeholder="email@example.com" required />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Service</label>
              <input type="text" className="w-full border px-4 py-2 rounded" placeholder="Ex. Dental Implants" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Date</label>
              <input type="date" className="w-full border px-4 py-2 rounded" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Time</label>
              <input type="time" className="w-full border px-4 py-2 rounded" />
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-gray-700 font-semibold mb-1">Message</label>
            <textarea className="w-full border px-4 py-2 rounded h-24" placeholder="Please describe what service you are interested in" />
          </div>
          <div className="mt-6 text-center">
            <button type="submit" className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700">
              Submit
            </button>
          </div>
        </motion.form>
      )}

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

export default ContactUs;
