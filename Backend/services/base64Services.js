

export const encodeText= async(text)=>{
    if(typeof text != "string") throw new Error("Input must be a string");
    else{
        const value= Buffer.from(text).toString("base64");
        console.log(value);
        return value;
    }
}

export const decodeText= async(text)=>{
    if(typeof text != "string") throw new Error("Input must be a string");
    else{
        const value= Buffer.from(text,"base64").toString("utf-8");
        console.log(value);
        return value;
    }
}