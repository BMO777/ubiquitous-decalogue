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

// Enable CORS
app.use(cors());

// Security headers
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

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Apply App Check to all API routes
app.use('/api', (req, res, next) => {
  if (req.path === '/health') return next();
  return appCheck(req, res, next);
}, routes);

// Apply rate limit specifically to the versioned analyze endpoint
app.use('/api/v1/analyze', analyzeLimiter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

const PORT = process.env.PORT || 5000;

const startServer = (port) => {
  const server = app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use. Retrying in 1 second...`);
      setTimeout(() => {
        server.close();
        startServer(port);
      }, 1000);
    } else {
      console.error('Server error:', err);
      process.exit(1);
    }
  });
};

startServer(PORT);