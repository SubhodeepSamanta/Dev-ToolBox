import User from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const sendToken=async(user,res)=>{
    const token= jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1d"});
    res.cookie("token",token,{
        httpOnly:true,
        secure:false,
        sameSite: "strict",
        maxAge: 1*24*60*60*1000
    });
    res.status(200).json({success:true, message:"logged in successfully",user:{ username: user.username }})
}

export const register=async(req,res)=>{
    const {username,password}= req.body;
    try{
        const user= User.findOne({username});
        if(user) res.status(400).status("Username already exists");
        const hashedPassword= await bcrypt.hash(password,10);
        const newUser= new User({
            username,
            passowrd: hashedPassword
        })
        await newUser.save();
        sendToken(newUser,res);

    }catch(err){
        res.status(500).send("Server Error");
    }
}

export const login= async(req,res)=>{
    const {username,password}= req.body;
    try{
        const user= User.findOne({username});
        if(!user) return res.status(400).send("Invalid Credentials!");
        const match= await bcrypt.compare(password,user.password);
        if(!match) return res.status(400).send("Invalid Credentials!");
        sendToken(user,res);
    }catch(err){
        res.status(500).send("Server Error");
    }
}

export const logout=(req,res)=>{
    res.clearCookie("token");
    res.json({success:true, message:"logged out successfully"});
}