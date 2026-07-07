import express from 'express';
import cors from 'cors'
import router from './routes/routes.js';

const app = express();
app.use(express.json())
app.use(cors());
app.disable('x-powered-by');

const PORT = process.env.PORT || 2712;

app.use('/', router)
app.use('/', router)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})