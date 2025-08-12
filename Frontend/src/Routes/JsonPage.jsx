import React, { useState } from 'react'
import {Clipboard, Copy} from 'lucide-react'
import apiRequest from '../utilities/apiRequest';

const JsonPage = () => {
  const [text,setText]= useState("");
  const [mode,setMode]= useState("beautify");
  const [output,setOutput]= useState("");
  const [indents,setIndents]= useState("2");
  const [copy,setCopy]= useState("Copy to Clipboard");

  const validCheck=()=>{
    try{
      JSON.parse(text);
      setOutput("Valid JSON")
    }catch{
      setOutput("Invalid JSON");
      return;
    }
  }

  const CopyText=()=>{
    navigator.clipboard.writeText(output); 
    setCopy("Copied!");
    setTimeout(()=> setCopy("Copy to Clipboard"),3000);
  }

  const handleSubmit=async()=>{
    let parsedText;
    try{
      parsedText= JSON.parse(text);
    }catch{
      setOutput("Invalid JSON");
      return;
    }
    const response= await apiRequest.post('/api/json/format',{
      json: parsedText,
      mode: mode,
      indents: Number(indents)
    })
    setOutput(JSON.stringify(response.data,null,mode==='beautify'?Number(indents):0));
    console.log(response.data);
    return response.data;
  }

  return (
    <div className='bg-white  dark:bg-[#020512] dark:text-white'>
    <h1 className='text-2xl sm:text-3xl flex justify-center md:justify-start md:ml-15 pt-2 font-bold'>JSON Formatter</h1>
    <div className=' flex flex-col md:flex-row mt-5 h-200 sm:h-160 lg:h-170 xl:180 gap-5 sm:gap-10 px-5 sm:px-10 pb-10'>
      <div className='flex-1 border-1 border-gray-500 rounded-2xl'>
        <textarea name="" id="" className='w-full h-full border-0 rounded-2xl p-4 resize-none outline-gray-500' onChange={(e)=> setText(e.target.value)} placeholder='Paste your JSON here' value={text}></textarea>
      </div>
      {/* mobile keliye  */}
      <div className='buttons w-full flex flex-row sm:hidden items-center justify-center gap-4 flex-wrap'>
        <div className='py-2 px-4 text-sm bg-green-700 w-fit text-white rounded-lg cursor-pointer hover:bg-green-600'>Validate</div>
        <select name="mode" id="mode" onChange={(e)=>setMode(e.target.value)} value={mode} className='border-1 rounded-lg py-1.5 text-sm px-2 dark:bg-[#243887] dark:border-[#243887] cursor-pointer'>
          <option value="beautify">Beautify</option>
          <option value="minify">Minify</option>
        </select>
        <div className='py-2 px-4 text-sm bg-blue-500 w-fit text-white rounded-lg cursor-pointer hover:bg-blue-400 dark:hover:bg-[#5972d8]'>Format</div>
        {
          mode=='beautify'?
        <select name="indents" id="indents" onChange={(e)=>setIndents(e.target.value)} value={indents} className='border-1 rounded-lg py-1.5 text-sm px-2 dark:bg-[#243887] dark:border-[#243887] cursor-pointer'>
          <option value="1">Indents: 1</option>
          <option value="2">Indents: 2</option>
          <option value="3">Indents: 3</option>
          <option value="4">Indents: 4</option>
          <option value="5">Indents: 5</option>
        </select>
        :
        <></>
        }
      </div>
      <div className='flex-1 border-1 border-gray-500 rounded-2xl relative'>
        <textarea name="" id="" className='w-full h-full border-0 rounded-2xl p-4 resize-none outline-gray-500' placeholder='Formatted JSON will appear here' value={output} readOnly></textarea>
        <div className='absolute right-5 bottom-5 bg-[#e6e6ff] py-2 px-4 cursor-pointer text-gray-900 border-1 border-[#e6e6ff] hover:border-gray-500 rounded-full dark:border-[#5972d8] dark:bg-[#5972d8] dark:text-white dark:hover:text-[#243887]' onClick={()=>CopyText()}>{copy}</div>
        <div className='absolute right-5 top-5 bg-gray-200 p-2 text-white rounded-full cursor-pointer hover:bg-gray-300 dark:bg-[#5972d8]' onClick={()=>CopyText()}><Clipboard className='h-4 w-4 text-black'/></div>
      </div>
    </div>
    {/* large keliye */}
      <div className='buttons hidden w-full sm:flex flex-row items-center justify-center gap-4 pt-5 pb-20'>
        <div className='py-2 px-5 bg-green-700 w-fit text-white rounded-lg cursor-pointer hover:bg-green-600' onClick={()=>validCheck()}>Validate</div>
        <select name="" id="" onChange={(e)=>setMode(e.target.value)} value={mode} className='border-1 rounded-lg py-2 px-2 dark:bg-[#243887] dark:border-[#243887] cursor-pointer'>
          <option value="beautify">Beautify</option>
          <option value="minify">Minify</option>
        </select>
        {
          mode=='beautify'?
        <select name="indents" id="indents" onChange={(e)=>setIndents(e.target.value)} value={indents} className='border-1 rounded-lg py-2 px-2 dark:bg-[#243887] dark:border-[#243887] cursor-pointer'>
          <option value="1">Indents: 1</option>
          <option value="2">Indents: 2</option>
          <option value="3">Indents: 3</option>
          <option value="4">Indents: 4</option>
          <option value="5">Indents: 5</option>
        </select>
        :
        <></>
        }
        <div className='py-2 px-10 bg-blue-500 w-fit text-white rounded-lg cursor-pointer hover:bg-blue-400' onClick={()=>handleSubmit()}>Format</div>
      </div>
    </div>
  )
}

export default JsonPage