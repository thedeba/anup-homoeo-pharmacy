"use client";

import { useState } from 'react';
import Image from "next/image";
import AppointmentForm from "./components/AppointmentForm";
import AppointmentList from "./components/AppointmentList";
import DoctorProfile from "./components/DoctorProfile"; // New component
import OtherInfo from "./components/OtherInfo"; // New component
import LeftMarquee from "./components/PicMarquee";
import Blogs from "./components/Blogs";
import Location from "./components/Location";
import Footer from "./components/Footer";

export default function Home() {
  const [showAppointments, setShowAppointments] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <LeftMarquee />
      <div className="w-full max-w-7xl flex gap-8 items-start">
        <div className="flex-1">
          <DoctorProfile />
          <OtherInfo />
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAppointments(true)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Modal Popup for Appointment Form */}
      {showAppointments && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 relative w-full max-w-lg">
            <button
              onClick={() => setShowAppointments(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              aria-label="Close"
            >
              &times;
            </button>
            <AppointmentForm />
          </div>
        </div>
      )}

      <Blogs />
      <Location />
      <Footer />
    </main>
  );
}
