import express from 'express'
import connectDB from './utilities/connectDB.js';
import jsonRoutes from './routes/jsonRoutes.js';
import base64Routes from './routes/base64Routes.js';

const app= express();
app.use(express.json());
const PORT= process.env.PORT;
connectDB();

app.use('/api/json',jsonRoutes);
app.use('/api/base64',base64Routes);

app.listen(PORT,()=>{
    console.log(`server is listening on PORT ${PORT}`);
})