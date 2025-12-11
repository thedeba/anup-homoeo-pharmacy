import { Pool } from 'pg';

const connectionString = process.env.db_connection_string || process.env.DB_CONNECTION_STRING;

// Reuse a global pool in development to avoid exhausting connections
declare global {
  var __pgPool: Pool | undefined;
}

let pool: Pool | undefined = (global as typeof globalThis).__pgPool;

async function ensureTable(p: Pool) {
  try {
    await p.query(`
      CREATE TABLE IF NOT EXISTS appointments (
        id SERIAL PRIMARY KEY,
        patient_name TEXT NOT NULL,
        patient_contact TEXT NOT NULL,
        appointment_date DATE NOT NULL,
        appointment_time TEXT NOT NULL,
        reason TEXT
      )
    `);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error creating appointments table:', (err as Error).message || err);
  }
}

export default async function dbConnect() {
  if (!connectionString) {
    throw new Error('Missing `db_connection_string` in environment');
  }

  if (!pool) {
    pool = new Pool({ connectionString });
    (global as typeof globalThis).__pgPool = pool;
    // create table asynchronously
    ensureTable(pool).catch(() => {});
  }

  return pool;
}
