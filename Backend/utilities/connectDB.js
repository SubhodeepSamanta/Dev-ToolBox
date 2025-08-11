import mongoose from "mongoose";

const connectDB= async ()=>{
    try{
        const host= await mongoose.connect(process.env.MONGO_URI);
        console.log(`database connected on ${host.connection.host}`)
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

export default connectDB;