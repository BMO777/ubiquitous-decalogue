import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import rateLimit from 'express-rate-limit';
import analyzeRoute from './routes/index.js';

dotenv.config();

const app = express();
app.use(express.json());

// Rate limiting: 5 requests per 15 minutes for the analysis endpoint
const analyzeLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: { error: "Too many requests, please try again after 15 minutes." },
  standardHeaders: true,
  legacyHeaders: false,
});

// Serve static files from the React app build directory in production
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
}

// Apply rate limiter specifically to the analyze route
app.use('/api/analyze', analyzeLimiter, analyzeRoute);

if (process.env.NODE_ENV === 'production') {
  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});