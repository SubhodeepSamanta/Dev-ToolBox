import React from 'react'

const JsonPage = () => {
  return (
    <>
    <h1 className='text-3xl ml-15 font-bold'>JSON Formatter</h1>
    <div className=' flex mt-5 h-150 lg:h-170 gap-10 px-10'>
      <div className='flex-1 border-1 border-gray-500 rounded-2xl'>
        <textarea name="" id="" className='w-full h-full border-0 rounded-2xl p-4 resize-none' placeholder='Paste your JSON here'>sfdv</textarea>
      </div>
      <div className='flex-1 border-1 border-gray-500 rounded-2xl'>
        <textarea name="" id="" className='w-full h-full border-0 rounded-2xl p-4 resize-none' placeholder='Formatted JSON will appear here' readOnly></textarea>
      </div>
    </div>
      <div className='buttons w-full flex flex-row lg:flex-col items-center justify-center gap-4 mt-5'>
        <select name="" id="" className='border-1 rounded-lg py-2 px-2 cursor-pointer'>
          <option value="beautify">Beautify</option>
          <option value="minify">Minify</option>
        </select>
        <div className='py-2 px-10 bg-blue-500 w-fit text-white rounded-lg cursor-pointer hover:bg-blue-400'>Format</div>
      </div>
    </>
  )
}

export default JsonPage