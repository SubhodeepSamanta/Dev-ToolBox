export const base64Controller= async(req,res)=>{
    const {base64}= req.body;
    console.log(base64);
    res.status(200).send("hello there");
}