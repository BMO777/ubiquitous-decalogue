import analyzeHandler from './analyze.js';
import express from 'express';

const router = express.Router();

router.post('/', analyzeHandler);

export default router;