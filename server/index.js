import express from 'express';
import cors from 'cors';
import { router } from './routes.js';
import sequelize from './config/database.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api', router);

// Sync Database and Start Server
sequelize.sync().then(() => {
    console.log('Database synced');
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error('Failed to sync database:', err);
});
