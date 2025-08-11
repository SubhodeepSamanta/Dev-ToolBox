

export const formatJson= async(json,mode,indents)=>{
    let formattedJson;
    if(mode=="beautify"){
        formattedJson= JSON.stringify(json,null,indents);
    }else{
        formattedJson= JSON.stringify(json);
    }
    console.log(formattedJson);
    return formattedJson;
}