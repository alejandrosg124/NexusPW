import pkg from 'pg';
const { Pool } = pkg;
import 'dotenv/config';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false, // Asegura que la conexión SSL funcione
    },
});

pool.on('connect', () => {
    console.log('Conexión exitosa con la base de datos PostgreSQL');
});

pool.on('error', (err) => {
    console.error('Error en la conexión con la base de datos:', err);
});

export default pool;