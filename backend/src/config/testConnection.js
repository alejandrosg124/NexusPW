require('dotenv').config();
const pool = require('./db');

(async () => {
    try {
        const result = await pool.query('SELECT NOW() AS current_time');
        console.log('Conexión exitosa. Hora actual en PostgreSQL:', result.rows[0].current_time);
    } catch (err) {
        console.error('Error al conectar con la base de datos:', err);
    } finally {
        await pool.end(); // Cierra la conexión de manera asíncrona
    }
})();
