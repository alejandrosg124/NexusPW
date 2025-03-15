import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import ProductRoutes from './routes/ProductRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('¡Servidor funcionando!');
});

app.use('/api', ProductRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});