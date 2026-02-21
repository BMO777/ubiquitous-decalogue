import analyzeHandler from './analyze.js';
import modelsHandler from './models.js';
import express from 'express';

const router = express.Router();

router.post('/analyze', analyzeHandler);
router.get('/models', modelsHandler);

export default router;