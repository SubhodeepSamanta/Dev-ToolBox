import React, { useEffect, useState } from 'react'
import {Clipboard} from 'lucide-react'
import apiRequest from '../utilities/apiRequest';
import { useHistoryStore } from '../Store/historyStore';
import { useLocation } from 'react-router';

const Base64Page = () => {
  const [text,setText]= useState("");
  const [mode,setMode]= useState("base64");
  const [type,setType]= useState("encode");
  const [output,setOutput]= useState("");
  const [copy,setCopy]= useState("Copy to Clipboard");
  const {addHistory}= useHistoryStore();
  const location= useLocation();

  const CopyText= ()=>{
    navigator.clipboard.writeText(output);
    setCopy("Copied!");
    setTimeout(()=>{
      setCopy("Copy to Clipboard");
    },3000);
  }

  const handleSubmitDecode=async()=>{
    const response= await apiRequest.post('/api/base64/decode',{
      text,
      decoding: mode
    })
    setOutput(response.data);
    addHistory({type:"decode",input:text,output:response.data});
    return response.data;
  }
  const handleSubmitEncode=async()=>{
    const response= await apiRequest.post('/api/base64/encode',{
      text,
      encoding: mode
    })
    setOutput(response.data);
    addHistory({type:"encode",input:text,output:response.data});
    return response.data;
  }

  useEffect(()=>{
    if(location.state){
      setText(location.state.input);
      setOutput(location.state.output);
    }
  },[location.state])

  return (
    <div className='bg-white dark:bg-[#020512] dark:text-white pb-10'>
    <h1 className='text-2xl sm:text-3xl flex justify-center md:justify-start md:ml-15 pt-2 font-bold'>Base 64 Encoder/Decoder</h1>
    <div className=' flex flex-col md:flex-row mt-5 h-200 sm:h-160 lg:h-170 xl:180 gap-5 sm:gap-10 px-5 sm:px-10'>
      <div className='flex-1 border-1 border-gray-500 rounded-2xl'>
        <textarea name="" id="" className='w-full h-full border-0 rounded-2xl p-4 resize-none outline-gray-500' onChange={(e)=> setText(e.target.value)} placeholder='Enter Text here' value={text}></textarea>
      </div>
      {/* mobile keliye  */}
      <div className='buttons w-full flex flex-row sm:hidden items-center justify-center gap-4'>
        <select name="type" id="type" onChange={(e)=>setType(e.target.value)} value={type} className='border-1 rounded-lg py-1.5 px-2 cursor-pointer'>
          <option value="encode">Encode</option>
          <option value="decode">Decode</option>
        </select>
        <select name="mode" id="mode" onChange={(e)=>setMode(e.target.value)} value={mode} className='border-1 rounded-lg py-1.5 text-sm px-2 cursor-pointer'>
          <option value="base64">base64</option>
          <option value="utf-8">utf-8</option>
          <option value="ascii">ascii</option>
          <option value="latin1">latin1</option>
          <option value="hex">hex</option>
          <option value="ucs2">ucs2</option>
          <option value="utf161e">utf161e</option>
        </select>
        <div className='py-2 px-4 text-sm bg-blue-500 w-fit text-white rounded-lg cursor-pointer hover:bg-blue-400'>{type=='decode'? 'Decode' : 'Encode'}</div>
      </div>
      <div className='flex-1 border-1 border-gray-500 rounded-2xl relative'>
        <textarea name="" id="" className='w-full h-full border-0 rounded-2xl p-4 resize-none outline-gray-500' value={output} placeholder='Output will appear here' readOnly></textarea>
        <div className='absolute right-5 bottom-5 bg-[#e6e6ff] py-2 px-4 cursor-pointer text-gray-900 border-1 border-[#e6e6ff] dark:border-[#5972d8] hover:border-gray-500 rounded-full dark:bg-[#5972d8] dark:text-white dark:hover:text-[#243887]' onClick={()=>CopyText()}>{copy}</div>
        <div className='absolute right-5 top-5 bg-gray-200 p-2 text-white rounded-full cursor-pointer hover:bg-gray-300 dark:bg-[#5972d8]' onClick={()=>CopyText()}><Clipboard className='h-4 w-4 text-black'/></div>
      </div>
    </div>
    {/* large keliye */}
      <div className='buttons hidden w-full sm:flex flex-row items-center justify-center gap-4 mt-5 pb-20'>
        <select name="type" id="type" onChange={(e)=>setType(e.target.value)} value={type} className='border-1 rounded-lg py-1.5 px-2 dark:bg-[#243887] dark:border-[#243887] cursor-pointer'>
          <option value="encode">Encode</option>
          <option value="decode">Decode</option>
        </select>
        <select name="mode" id="mode" onChange={(e)=>setMode(e.target.value)} value={mode} className='border-1 rounded-lg py-1.5 text-sm px-2 dark:bg-[#243887] dark:border-[#243887] cursor-pointer'>
          <option value="base64">base64</option>
          <option value="utf-8">utf-8</option>
          <option value="ascii">ascii</option>
          <option value="latin1">latin1</option>
          <option value="hex">hex</option>
          <option value="ucs2">ucs2</option>
          <option value="utf161e">utf161e</option>
        </select>
        <div className='py-2 px-10 bg-blue-500 w-fit text-white rounded-lg cursor-pointer hover:bg-blue-400' onClick={()=>{type==='decode'?handleSubmitDecode():handleSubmitEncode()}}>{type=='decode'? 'Decode' : 'Encode'}</div>
      </div>
    </div>
  )
}

export default Base64Page