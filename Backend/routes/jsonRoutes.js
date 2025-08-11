import express from 'express'
import { jsonController } from '../controllers/jsonController.js';

const router= express.Router();

router.post("/format",jsonController);

export default router;