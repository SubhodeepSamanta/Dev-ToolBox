import jwt from 'jsonwebtoken'

export const verifyToken=async(req,res,next)=>{
    const token= req.cookies.token;
    if(!token) return res.status(401).json({message:"not authenticated"});
    jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
        if(err) return res.status(403).json({message:"invalid token"});
        req.user=decoded;
        next();
    })
}