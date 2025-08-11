import express from 'express'
import connectDB from './utilities/connectDB.js';

const app= express();
const PORT= process.env.PORT;
connectDB();



app.listen(PORT,()=>{
    console.log(`server is listening on PORT ${PORT}`);
})