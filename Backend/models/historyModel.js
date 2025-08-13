import mongoose from "mongoose";

const historySchema= new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    type:{
        type:String,
        required:true
    },
    input:{
        type:String,
        required:true
    },
    output:{
        type:String,
        required:true
    },
    timestamp:{
        type: String,
        required: true
    }
},{timestamps:true});

const History= mongoose.model("History",historySchema);
export default History;