import React, { useState } from 'react'
import {Clipboard} from 'lucide-react'

const JsonPage = () => {
  const [text,setText]= useState("");
  const [mode,setMode]= useState("beautify");

  const handleSubmit=async()=>{
    console.log(text);
    console.log(mode);
  }

  return (
    <>
    <h1 className='text-2xl sm:text-3xl flex justify-center md:justify-start md:ml-15 font-bold'>JSON Formatter</h1>
    <div className=' flex flex-col md:flex-row mt-5 h-180 sm:h-160 lg:h-170 xl:180 gap-5 sm:gap-10 px-5 sm:px-10'>
      <div className='flex-1 border-1 border-gray-500 rounded-2xl'>
        <textarea name="" id="" className='w-full h-full border-0 rounded-2xl p-4 resize-none outline-gray-500' onChange={(e)=> setText(e.target.value)} placeholder='Paste your JSON here' value={text}></textarea>
      </div>
      {/* mobile keliye  */}
      <div className='buttons w-full flex flex-row sm:hidden items-center justify-center gap-4'>
        <div className='py-2 px-4 text-sm bg-green-700 w-fit text-white rounded-lg cursor-pointer hover:bg-green-600'>Validate</div>
        <select name="mode" id="mode" onChange={(e)=>setMode(e.target.value)} value={mode} className='border-1 rounded-lg py-1.5 text-sm px-2 cursor-pointer'>
          <option value="beautify">Beautify</option>
          <option value="minify">Minify</option>
        </select>
        <div className='py-2 px-4 text-sm bg-blue-500 w-fit text-white rounded-lg cursor-pointer hover:bg-blue-400'>Format</div>
      </div>
      <div className='flex-1 border-1 border-gray-500 rounded-2xl relative'>
        <textarea name="" id="" className='w-full h-full border-0 rounded-2xl p-4 resize-none outline-gray-500' placeholder='Formatted JSON will appear here' readOnly></textarea>
        <div className='absolute right-5 bottom-5 bg-[#e6e6ff] py-2 px-4 cursor-pointer text-gray-900 border-1 border-[#e6e6ff] hover:border-gray-500 rounded-full'>Copy to Clipboard</div>
        <div className='absolute right-5 top-5 bg-gray-200 p-2 text-white rounded-full cursor-pointer hover:bg-gray-300'><Clipboard className='h-4 w-4 text-black'/></div>
      </div>
    </div>
    {/* large keliye */}
      <div className='buttons hidden w-full sm:flex flex-row items-center justify-center gap-4 mt-5 mb-20'>
        <div className='py-2 px-5 bg-green-700 w-fit text-white rounded-lg cursor-pointer hover:bg-green-600' onClick={()=>handleSubmit()}>Validate</div>
        <select name="" id="" onChange={(e)=>setMode(e.target.value)} value={mode} className='border-1 rounded-lg py-2 px-2 cursor-pointer'>
          <option value="beautify">Beautify</option>
          <option value="minify">Minify</option>
        </select>
        <div className='py-2 px-10 bg-blue-500 w-fit text-white rounded-lg cursor-pointer hover:bg-blue-400' onClick={()=>handleSubmit()}>Format</div>
      </div>
    </>
  )
}

export default JsonPage