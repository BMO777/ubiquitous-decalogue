import express from 'express';
import dotenv from 'dotenv';
import analyzeRoute from './routes/index.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/analyze', analyzeRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});