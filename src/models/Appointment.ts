import mongoose, { Schema, Document } from 'mongoose';

export interface IAppointment extends Document {
  patientName: string;
  patientContact: string;
  appointmentDate: Date;
  appointmentTime: string;
  reason: string;
}

const AppointmentSchema: Schema = new Schema({
  patientName: { type: String, required: true },
  patientContact: { type: String, required: true },
  appointmentDate: { type: Date, required: true },
  appointmentTime: { type: String, required: true },
  reason: { type: String, required: false },
});

export default mongoose.models.Appointment || mongoose.model<IAppointment>('Appointment', AppointmentSchema);
