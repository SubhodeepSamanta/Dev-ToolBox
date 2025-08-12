import { Github, Linkedin } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const InfoPage = () => {
  return (
    <div className='pb-15 bg-white  dark:bg-[#020512] dark:text-white'>
      <h1 className='text-3xl font-bold ml-4 pt-2 '>Information</h1>
      <div className='flex flex-col md:flex-row'>
        <div className="left flex-1">
          <h2 className='text-xl font-bold mt-4 ml-5 mb-5'> Built By</h2>
          <div className='flex flex-col lg:flex-row justify-center items-center'>
          <img src="/profilepicture.jpg" alt="profile" className='h-50 w-50 rounded-full md:ml-10' />
          <div className='flex flex-col mt-5 mx-4 md:ml-10'>
          <p className='text-2xl font-bold flex items-center gap-4'>Subhodeep Samanta
            <Link to='https://www.github.com/subhodeepsamanta' className='bg-blue-100 hover:bg-blue-200 dark:bg-[#5972d8] dark:hover:bg-[#243887] p-2 rounded-full'><Linkedin/></Link>
            <Link to='https://www.linkedin.com/in/subhodeepsamanta' className='bg-blue-100 hover:bg-blue-200 dark:bg-[#5972d8] dark:hover:bg-[#243887] p-2 rounded-full'><Github/></Link>
          </p>
          <p className='text-blue-500 mt-2 mb-2'>Passionate Software Engineer</p>
          <p className='mb-1'>Full-Stack Developer MERN, DevOps Specialist & C++ DSA Expert Bridging Creative Design & Robust Code: Where Code Meets Creativity and Automation</p>
          <p> ♡ Passionate about Creating and Contributing new things for the World.</p>
          </div>
          </div>
        </div>
        <div className="right flex-1 ">
          <h2 className='text-2xl font-bold mt-10 lg:mt-10 ml-2'>Project Overview</h2>
          <p className='mt-4 ml-4 mr-4 lg:mr-10 text-justify'>Dev Toolbox is a lightweight web application built with React.js and Node.js/Express that provides essential developer utilities, including a JSON Formatter/Minifier with customizable indentation and error detection, and a Base64 Encoder/Decoder supporting multiple encodings like utf8, ascii, and latin1. It features a clean two-tab interface, clipboard copy functionality, optional history tracking (via localStorage for guests or database for logged-in users), and a dark mode toggle. The app is Docker-ready, deployable on AWS with Nginx, and designed for easy expansion with future tools such as URL encoding, UUID generation, and text diff checking.</p>
        </div>
      </div>
      <div>
        <h2 className='text-3xl font-bold mt-10 ml-4'>Developers</h2>
        <p className='text-xl font-bold mt-5 ml-5'>API Documentation</p>
        <p className='ml-5 mt-2'>The Dev Toolbox API allows developers to integrate our tools into their own applications. Below JSON Formatter and Base64 Encoder/Decoder.</p>
        <div className='flex gap-5 border-t-1 border-gray-200 dark:border-[#243887] mx-5 mt-4 p-2'><p className='text-lg font-bold'>Format JSON</p> <p className='text-lg'>POST /api/json/format</p></div>
        <div className='flex gap-5 border-t-1 border-gray-200 dark:border-[#243887] mx-5 mt-4 p-2'><p className='text-lg font-bold'>Encode Text</p> <p className='text-lg'>POST /api/base64/encode</p></div>
        <div className='flex gap-5 border-t-1 border-gray-200 dark:border-[#243887] mx-5 mt-4 p-2'><p className='text-lg font-bold'>Decode Text</p> <p className='text-lg'>POST /api/base64/decode</p></div>
      </div>
      <div>
        <h2 className='text-3xl font-bold mt-10 ml-4'>Q&A</h2>
        <p className='text-xl font-bold mt-5 ml-5'>Frequently Asked Questions</p>
        <div className='flex flex-col sm:flex-row gap-2 mt-4 ml-5'>
        <p className=' font-bold'>1. What is Dev Toolbox?</p>
        <p>Dev Toolbox is a web-based utility app for developers, offering tools like JSON formatting/minifying and Base64 encoding/decoding in a simple, fast, and accessible interface.</p>
        </div>
        <div className='flex flex-col sm:flex-row gap-2 mt-4 ml-5'>
        <p className=' font-bold'>2. Does it store my data?</p>
        <p>If you are not logged in, history is stored locally in your browser using localStorage.
        If you are logged in, history is saved in the backend database for cross-device access.</p>
        </div>
        <div className='flex flex-col sm:flex-row gap-2 mt-4 ml-5'>
        <p className=' font-bold'>3. Can I customize the JSON formatting?</p>
        <p>Yes — you can choose between minifying or beautifying JSON, and adjust indentation to 2, 3, 4, or more spaces.</p>
        </div>
        <div className='flex flex-col sm:flex-row gap-2 mt-4 ml-5'>
        <p className=' font-bold'>4. Is Dev Toolbox free to use?</p>
        <p>Yes, it is completely free. Hosting costs only apply if you deploy your own instance (AWS, etc.)..</p>
        </div>
        <div className='flex flex-col sm:flex-row gap-2 mt-4 ml-5'>
        <p className=' font-bold'>5. What are future plans for this project?</p>
        <p>Adding more tools such as URL encoder/decoder, UUID generator, text diff checker, JWT decoder, and CSV-to-JSON converter.</p>
        </div>
      </div>
    </div>
  )
}

export default InfoPage