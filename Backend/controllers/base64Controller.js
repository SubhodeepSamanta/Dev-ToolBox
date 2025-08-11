import { decodeText, encodeText } from "../services/base64Services.js";

export const decodeController= async(req,res)=>{
    const {text,decoding}= req.body;
    let decodedText;
    try{
        decodedText= await decodeText(text,decoding);
    }catch(err){
        res.status(500).send("error decoding")
    }
    res.status(200).send(decodedText);
}

export const encodeController= async(req,res)=>{
    const {text,encoding}= req.body;
    let encodedText;
    try{
        encodedText= await encodeText(text,encoding);
    }catch(err){
        res.status(500).send("error encoding");
    }
    res.status(200).send(encodedText);
}