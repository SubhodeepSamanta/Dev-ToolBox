import express from 'express'
import { decodeController, encodeController } from '../controllers/base64Controller.js';

const router= express.Router();

router.post("/encode",encodeController);
router.post("/decode",decodeController);

export default router;