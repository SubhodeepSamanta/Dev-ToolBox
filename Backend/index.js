import express from 'express'
import connectDB from './utilities/connectDB.js';
import jsonRoutes from './routes/jsonRoutes.js';
import base64Routes from './routes/base64Routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import authRoutes from './routes/authRoutes.js';
import historyRoutes from './routes/historyRoutes.js';

const app= express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));
const PORT= process.env.PORT;
connectDB();
app.use('/api/json',jsonRoutes);
app.use('/api/base64',base64Routes);
app.use('/api/auth',authRoutes);
app.use('/api/history',historyRoutes);

app.use((err,req,res,next)=>{
    if(err.status===400){
        console.log(err.body);
        return res.status(400).send("not valid json");
    }
    next();
})

app.listen(PORT,()=>{
    console.log(`server is listening on PORT ${PORT}`);
})