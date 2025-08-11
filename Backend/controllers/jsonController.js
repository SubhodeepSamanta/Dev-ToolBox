import { formatJson } from "../services/jsonServices.js";

export const jsonController= async(req,res)=>{
    try{
        const { json, mode="beautify", indents=2}= req.body;
        const format= await formatJson(json,mode,indents);
        res.status(200).send(format);
    }catch(err){
        console.log(err);
        res.status(500).send("error");
    }
}