import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import rateLimit from 'express-rate-limit';
import routes from './routes/index.js';

dotenv.config();

const app = express();

// Enable CORS with default settings
app.use(cors());

// Use helmet for security headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      "img-src": ["'self'", "data:", "https:"],
      "script-src": ["'self'", "'unsafe-inline'"],
    },
  },
}));

app.use(express.json());

// Simple App Check Middleware
const appCheck = (req, res, next) => {
  const appSource = req.header('X-App-Source');
  if (appSource !== 'ten-commandments-app') {
    return res.status(403).json({ error: "Unauthorized access: Invalid app source." });
  }
  next();
};

const analyzeLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: "Too many requests, please try again after 15 minutes." },
  standardHeaders: true,
  legacyHeaders: false,
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
}

// Apply App Check to all API routes
app.use('/api', appCheck, routes);

// Apply rate limit specifically to the versioned analyze endpoint
app.use('/api/v1/analyze', analyzeLimiter);

if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});