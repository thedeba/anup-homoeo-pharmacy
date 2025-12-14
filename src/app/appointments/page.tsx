import AppointmentList from '../components/AppointmentList';

export default function AppointmentsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">All Appointments</h1>
        <AppointmentList />
      </div>
    </div>
  );
}