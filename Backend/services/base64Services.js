

export const encodeText= async(text, encoding='utf-8')=>{
    if(typeof text != "string") throw new Error("Input must be a string");
    else{
        try{
            const value= Buffer.from(text).toString(encoding);
            console.log(value,encoding);
            return value;
        }catch(err){
            throw new Error("invalid encoding");
        }
    }
}

export const decodeText= async(text,decoding='base64')=>{
    if(typeof text != "string") throw new Error("Input must be a string");
    else{
        try{
            const value= Buffer.from(text,decoding).toString("utf-8");
            console.log(value,decoding);
            return value;
        }catch(err){
            throw new Error("invalid decoding");
        }
    }
}