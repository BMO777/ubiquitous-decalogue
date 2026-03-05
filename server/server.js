import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import rateLimit from 'express-rate-limit';
import routes from './routes/index.js';

dotenv.config();

const app = express();

// Use helmet for security headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      "img-src": ["'self'", "data:", "https:"],
      "script-src": ["'self'", "'unsafe-inline'"], // Allow inline scripts for Vite/PWA
    },
  },
}));

app.use(express.json());

const analyzeLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10, // Increased slightly for better UX
  message: { error: "Too many requests, please try again after 15 minutes." },
  standardHeaders: true,
  legacyHeaders: false,
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
}

// Use the routes router for all /api calls
app.use('/api', routes);

// Apply rate limit specifically to the analyze endpoint within the router
app.use('/api/analyze', analyzeLimiter);

if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});