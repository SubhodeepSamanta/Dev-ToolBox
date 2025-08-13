import History from "../models/historyModel.js";

export const addHistory=async(req,res)=>{
    const {type,input,output,timestamp}= req.body;
    const userId= req.user.id;
    console.log(timestamp);
    const newHistory= new History({
        userId,type,input,output,timestamp
    })
    await newHistory.save();
    const userHistory= await History.find({userId}).sort({timestamp:-1});
    return res.status(200).json({history:userHistory});
}
export const getHistory=async(req,res)=>{
    const userId= req.user.id;
    const userHistory= await History.find({userId}).sort({timestamp:-1});
    return res.status(200).json({history:userHistory});

}
export const deleteHistory=async(req,res)=>{
    const userId= req.user.id;
    await History.deleteMany({userId});
    res.status(200).json({success:true});
}