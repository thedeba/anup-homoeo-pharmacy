import dbConnect from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const pool = await dbConnect();
    const result = await pool.query(
      `SELECT id, patient_name AS "patientName", patient_contact AS "patientContact", appointment_date AS "appointmentDate", appointment_time AS "appointmentTime", reason FROM appointments ORDER BY appointment_date, appointment_time`
    );
    return NextResponse.json({ success: true, data: result.rows });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const pool = await dbConnect();
    const body = await req.json();
    const { patientName, patientContact, appointmentDate, appointmentTime, reason } = body;
    const insertQuery = `
      INSERT INTO appointments (patient_name, patient_contact, appointment_date, appointment_time, reason)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, patient_name AS "patientName", patient_contact AS "patientContact", appointment_date AS "appointmentDate", appointment_time AS "appointmentTime", reason
    `;
    const values = [patientName, patientContact, appointmentDate, appointmentTime, reason];
    const result = await pool.query(insertQuery, values);
    return NextResponse.json({ success: true, data: result.rows[0] }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
