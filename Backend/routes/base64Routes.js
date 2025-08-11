import express from 'express'
import { base64Controller } from '../controllers/base64Controller.js';

const router= express.Router();

router.post("/encode",base64Controller);
router.post("/decode",base64Controller);

export default router;