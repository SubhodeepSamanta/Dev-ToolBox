export const jsonController= async(req,res)=>{
    const { json }= req.body;
    console.log(json);
    res.status(200).send("hello");
}