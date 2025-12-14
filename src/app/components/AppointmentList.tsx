'use client';

import { useEffect, useState } from 'react';

interface Appointment {
  id: string;
  patient_name: string;
  patient_contact: string;
  appointment_date: string;
  appointment_time: string;
  reason?: string;
}

export default function AppointmentList() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);

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

  // Generate dates from 7 days ago to 7 days in the future
  const generateDateRange = () => {
    const dates = [];
    const now = new Date();
    for (let i = 0; i <= 13; i++) {
      const date = new Date(now);
      date.setDate(now.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
  };

  const dateRange = generateDateRange();

  // Format date as "DD MMM"
  const formatDateDisplay = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    return `${day} ${month}`;
  };

  // Filter appointments by selected date
  const selectedDateAppointments = appointments.filter(appointment => 
    appointment.appointment_date === selectedDate
  );

  if (loading) return <p className="text-gray-700">Loading appointments...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-auto max-w-auto justify-center mx-auto">
      {/* Total Online Bookings */}
      <div className="mb-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Total Online Bookings</h3>
          <p className="text-3xl font-bold text-blue-600">{appointments.length}</p>
          <p className="text-sm text-blue-600">All time</p>
        </div>
      </div>
      
      {/* Date Selector */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 text-gray-700">Select Date:</h3>
        <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 justify-center">
          {dateRange.map((date) => (
            <button
              key={date}
              onClick={() => setSelectedDate(date)}
              className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors whitespace-nowrap ${
                selectedDate === date
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              {formatDateDisplay(date)}
            </button>
          ))}
        </div>
      </div>

      {/* Appointments for selected date */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700 text-center">
          Appointments for {formatDateDisplay(selectedDate)}
        </h3>
        {selectedDateAppointments.length === 0 ? (
          <p className="text-gray-700">No appointments on this date.</p>
        ) : (
          <ul>
            {selectedDateAppointments.map((appointment, index) => (
              <li key={appointment.id} className="mb-4 p-4 border border-gray-200 rounded-lg">
                <p className="text-lg font-semibold text-gray-800">Serial: {index + 1}</p>
                <p className="text-lg text-gray-800">Patient: {appointment.patient_name}</p>
                <p className="text-lg text-gray-800">Date: {appointment.appointment_date}</p>
                {/* <p className="text-gray-600">Contact: {appointment.patient_contact}</p> */}
                <p className="text-gray-600">Time: {appointment.appointment_time}</p>
                {appointment.reason && <p className="text-gray-600">Reason: {appointment.reason}</p>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
