
'use client';

import { useState } from 'react';
import AppointmentForm from './AppointmentForm';

type DoctorProfileProps = {
  name?: string;
  specialization?: string;
  bio?: string;
  education?: string;
  experience?: string;
  photoUrl?: string;
  phone?: string;
};

export default function DoctorProfile({
  name = 'Dr. Bir Bhdro Roy',
  specialization = 'Homeopathic Physician',
  bio = 'Dr. Bir Bhdro Roy is a highly experienced and compassionate homeopathic physician with over 20 years of practice. He is dedicated to providing holistic and individualized treatment to his patients, focusing on the root cause of illnesses. Dr. Roy believes in empowering his patients with knowledge and guiding them towards a healthier lifestyle.',
  education = 'DHMS, DHAKA',
  experience = '35+ Years',
  photoUrl = '/doctor.jpg',
  phone = '+8801714623846',
}: DoctorProfileProps) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-full mb-8">
      <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 bg-white dark:bg-gray-800">
        <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Left division: compact profile card */}
          <aside className="flex flex-col items-center gap-4 md:gap-6">
            <div className="relative flex items-center justify-center">
              <div className="rounded-full p-1 bg-gradient-to-tr from-indigo-400 via-purple-300 to-pink-400 shadow-md">
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden bg-white dark:bg-slate-800 ring-4 ring-white/90">
                  <img src={photoUrl} alt={name} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs px-2 py-1 rounded-full shadow-sm">Available</div>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">{name}</h3>
              <div className="text-sm text-indigo-700 mt-1 inline-flex items-center gap-2 bg-indigo-100/80 px-3 py-1 rounded-full">{specialization}</div>
              <div className="text-sm text-slate-500 mt-2">{education} • <span className="font-medium text-slate-700 dark:text-slate-200">{experience}</span></div>
            </div>

            <div className="w-auto border-t border-slate-200 dark:border-slate-700">
              <a href="https://wa.me/+8801714623846" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="bg-green/20 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-white" aria-hidden>
                  <path d="M20.5 3.5A11.9 11.9 0 0012 0C5.4 0 .2 5.4.2 12c0 2 0.5 3.9 1.4 5.6L0 24l6.7-1.6a11.9 11.9 0 005.3 1.2c6.6 0 11.9-5.4 11.9-12 0-3.2-1.3-6.1-3.4-8.1zM12 21.2a9.1 9.1 0 01-4.6-1.2l-.3-.2-4 1 1-3.9-.2-.4A9 9 0 1121 12 9 9 0 0112 21.2zM17 14.6c-.3-.2-1.8-.9-2.1-1-.3-.1-.6-.2-.9.2s-1 .9-1.2 1.1c-.2.3-.4.3-.7.1-.7-.4-1.4-1.3-2-2.4-.1-.2 0-.4.1-.6.1-.2.3-.6.4-.9.1-.3 0-.5-.1-.7-.2-.2-.9-2-1.3-2.7-.3-.7-.6-.6-.9-.6-.2 0-.5 0-.8 0-.3 0-.7.1-.9.3-.3.2-.8.8-.8 1.8s.9 2.1 1 2.2c.1.2 1.6 2.5 3.9 3.5 2.3 1 2.3.7 2.7.6.4-.1 1.4-.6 1.6-1.2.2-.6.2-1 .1-1.2 0-.1-.2-.2-.4-.3z" />
                </svg>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-2 justify-center">
              
              <div className="flex items-center gap-2 px-2 py-1 rounded-md text-white text-xs sm:text-sm bg-gradient-to-r from-yellow-500 to-green-500 shadow-md">Online Consultation</div>
              <div className="flex items-center gap-2 px-2 py-1 rounded-md text-white text-xs sm:text-sm bg-gradient-to-r from-green-500 to-pink-500 shadow-md">Appointment Available</div>
              <div className="flex items-center gap-2 px-2 py-1 rounded-md text-white text-xs sm:text-sm bg-gradient-to-r from-pink-500 to-blue-500 shadow-md">Homeopathic Counselling</div>
              <div className="flex items-center gap-2 px-2 py-1 rounded-md text-white text-xs sm:text-sm bg-gradient-to-r from-blue-500 to-violet-500 shadow-md">Personalized Treatment</div>
              <div className="flex items-center gap-2 px-2 py-1 rounded-md text-white text-xs sm:text-sm bg-gradient-to-r from-violet-500 to-purple-500 shadow-md">Follow-up Support</div>
              <div className="flex items-center gap-2 px-2 py-1 rounded-md text-white text-xs sm:text-sm bg-gradient-to-r from-purple-500 to-yellow-500 shadow-md">Direct Calling Support</div>
            </div>

            <div className="mt-3 w-full md:w-auto">
              <div className="text-xs text-slate-500">Tags</div>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full">Acute Treatment</span>
                <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full">Chronic Disease Management</span>
                <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full">Skin & Allergy</span>
                <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full">Respiratory Care</span>
                <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full">Digestive Disorders</span>
                <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full">Women’s Health</span>
                <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full">Mental Health</span>
                <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full">Pain Management</span>
                <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full">Holistic Healing</span>
                <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full">Urine Infection</span>
                <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full">Pediatrics</span>
              </div>
            </div>
          </aside>

          {/* Right division: details, bio, stats */}
          <section className="flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-white">About</h4>
                <p className="text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">{bio}</p>
              </div>

              <div className="hidden md:flex flex-col items-end gap-2">
                {/* <div className="text-sm text-slate-500">Rating</div> */}
                <div className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 px-3 py-1 rounded-full shadow-sm">
                  <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .587l3.668 7.431L23.6 9.748l-5.8 5.657L19.336 24 12 19.897 4.664 24l1.536-8.595L0.4 9.748l7.932-1.73L12 .587z"/></svg>
                  {/* <span className="font-medium text-slate-700 dark:text-slate-200">4.9</span> */}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="text-xs text-slate-500">Education</div>
                <div className="font-medium text-slate-800 dark:text-white mt-1">{education}</div>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="text-xs text-slate-500">Experience</div>
                <div className="font-medium text-slate-800 dark:text-white mt-1">{experience}</div>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="text-xs text-slate-500">Patients</div>
                <div className="font-medium text-slate-800 dark:text-white mt-1">10k+</div>
              </div>
            </div>

            <div className="mt-3 flex flex-col sm:flex-row gap-3">
              <button onClick={() => setShowModal(true)} className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold shadow-md hover:from-indigo-700 hover:to-pink-600 transition-colors duration-300">Book Appointment</button>
              <a href={`tel:${phone.replace(/\s+/g, '')}`} className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-sm shadow-sm">Call</a>
            </div>

            <div className="mt-4 text-sm text-slate-500">Additional info</div>
            <div className="mt-2 text-sm text-slate-700 dark:text-slate-300">Specializes in individualized homeopathic treatment plans, dietary and lifestyle counseling, and long-term chronic case management.</div>
          </section>
        </div>
      </div>

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50 p-4 backdrop-blur-sm" onClick={() => setShowModal(false)}>
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* Form Content */}
            <div className="p-6">
              <AppointmentForm />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
