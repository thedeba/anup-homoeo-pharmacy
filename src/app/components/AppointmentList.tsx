'use client';

import { useEffect, useState } from 'react';

interface Appointment {
  _id: string;
  patientName: string;
  patientContact: string;
  appointmentDate: string;
  appointmentTime: string;
  reason?: string;
}

export default function AppointmentList() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await fetch('/api/appointments');
        const data = await res.json();
        if (data.success) {
          setAppointments(data.data);
        } else {
          setError(data.error);
        }
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  if (loading) return <p className="text-gray-700">Loading appointments...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-5xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Upcoming Appointments</h2>
      {appointments.length === 0 ? (
        <p className="text-gray-700">No appointments booked yet.</p>
      ) : (
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment._id} className="mb-4 p-4 border border-gray-200 rounded-lg">
              <p className="text-lg font-semibold text-gray-800">Patient: {appointment.patientName}</p>
              <p className="text-gray-600">Contact: {appointment.patientContact}</p>
              <p className="text-gray-600">Date: {new Date(appointment.appointmentDate).toLocaleDateString()}</p>
              <p className="text-gray-600">Time: {appointment.appointmentTime}</p>
              {appointment.reason && <p className="text-gray-600">Reason: {appointment.reason}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
