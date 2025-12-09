'use client';

import { useState } from 'react';

export default function AppointmentForm() {
  const [patientName, setPatientName] = useState('');
  const [patientContact, setPatientContact] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [reason, setReason] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    const res = await fetch('/api/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        patientName,
        patientContact,
        appointmentDate,
        appointmentTime,
        reason,
      }),
    });

    const data = await res.json();

    if (data.success) {
      setMessage('Appointment booked successfully!');
      setPatientName('');
      setPatientContact('');
      setAppointmentDate('');
      setAppointmentTime('');
      setReason('');
    } else {
      setMessage(`Error: ${data.error}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Book an Appointment</h2>
      <div className="mb-4">
        <label htmlFor="patientName" className="block text-gray-700 text-sm font-bold mb-2">Patient Name:</label>
        <input
          type="text"
          id="patientName"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="patientContact" className="block text-gray-700 text-sm font-bold mb-2">Contact Number:</label>
        <input
          type="text"
          id="patientContact"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={patientContact}
          onChange={(e) => setPatientContact(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="appointmentDate" className="block text-gray-700 text-sm font-bold mb-2">Appointment Date:</label>
        <input
          type="date"
          id="appointmentDate"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="appointmentTime" className="block text-gray-700 text-sm font-bold mb-2">Appointment Time:</label>
        <input
          type="time"
          id="appointmentTime"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={appointmentTime}
          onChange={(e) => setAppointmentTime(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="reason" className="block text-gray-700 text-sm font-bold mb-2">Reason for Appointment (Optional):</label>
        <textarea
          id="reason"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          rows={3}
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Book Appointment
      </button>
      {message && <p className="mt-4 text-center text-sm font-bold text-gray-800">{message}</p>}
    </form>
  );
}
