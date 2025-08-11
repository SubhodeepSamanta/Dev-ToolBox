import { InfoIcon, Menu, User, X } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router'

const Navbar = () => {
    const [menu,setMenu]= useState(false);
  return (
    <div className='h-16 flex justify-between'>
        <div className="left h-full flex px-4">
            <Link to='/' className='ml-2 flex items-center gap-2'>
            <img src="/logo.png" alt="logo" className='h-12 w-12' />
            <h1 className='text-lg font-bold'>Dev Toolbox</h1>
            </Link>
        </div>
        {/* desktop right  */}
        <div className="right hidden md:flex gap-4 items-center p-4">
            <Link to='/json' className='hover:text-gray-500 mr-2'>Json Formatter</Link>
            <Link to='/base64' className='hover:text-gray-500 mr-2'>Base64 Encoder/Decoder</Link>
            <Link to='/info'>
            <div className=' flex items-center justify-between hover:bg-gray-200 p-2 rounded-lg'>
            <InfoIcon/>
            </div>
            </Link>
            <Link to='/' onClick={()=>{ setMenu(false)}}>
            <div className=' flex items-center justify-between hover:bg-gray-300 p-2 rounded-full' onClick={()=>{ setMenu(false)}}>
                <User/>
            </div>
            </Link>
        </div>
        {/* mobile right  */}
        <div onClick={()=> setMenu((prev)=> !prev)} className="right flex md:hidden items-center mr-5">
            <Menu/>
        </div>
        <div className={`right bg-white flex flex-col items-center justify-between fixed md:hidden top-0 z-10 h-[100%] w-[100%] rounded-xl transition-all ease-in-out duration-1000 ${menu? 'right-0' : ' -right-200 -top-200'}`}>
            <X onClick={()=> setMenu(prev=>!prev)} className='absolute top-5 right-5'/>
            <div className='flex flex-col h-full justify-center text-lg gap-10 items-center'>
            <Link to='/json' className='hover:text-gray-500 mr-2' onClick={()=> setMenu((prev)=> !prev)}>Json Formatter</Link>
            <Link to='/base64' className='hover:text-gray-500 mr-2' onClick={()=> setMenu((prev)=> !prev)}>Base64 Encoder/Decoder</Link>
            <Link to='/info' onClick={()=> setMenu((prev)=> !prev)}>
            <div className=' flex items-center justify-between hover:bg-gray-200 p-2 rounded-lg gap-2'>
            <InfoIcon/> Information
            </div>
            </Link>
            <Link to='/' onClick={()=> setMenu((prev)=> !prev)}>
            <div className=' flex items-center justify-between hover:bg-gray-300 p-2 rounded-full'>
                <User/>
            </div>
            </Link>
                </div>
        </div>
    </div>
  )
}

export default Navbar