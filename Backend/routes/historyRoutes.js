import express from 'express'
import { addHistory, deleteHistory, getHistory } from '../controllers/historyController.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router= express.Router();

router.post("/",verifyToken,addHistory);
router.get("/",verifyToken,getHistory);
router.delete("/",verifyToken,deleteHistory);

export default router;