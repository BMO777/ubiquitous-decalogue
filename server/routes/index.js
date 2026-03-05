import analyzeHandler from './analyze.js';
import modelsHandler from './models.js';
import express from 'express';

const router = express.Router();
const v1Router = express.Router();

v1Router.post('/analyze', analyzeHandler);
v1Router.get('/models', modelsHandler);

// Mount v1 routes
router.use('/v1', v1Router);

export default router;