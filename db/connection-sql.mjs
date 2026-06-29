import { Client } from 'pg'

export const client = new Client({
    user: 'postgres',
    database: 'dbname',
    port: '5432',
    host: 'database-1.cvi0seya8ldz.eu-north-1.rds.amazonaws.com',
    password: 'Supermario1230*',
    ssl: { rejectUnauthorized: false }
})

export async function connectDB() {
  
try {
  await client.connect()
  console.log("Connected to PostgreSQL")  
} catch (error) {
  console.error("Failed to connect", error);
  throw error
}
}