import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='shadow-xl'>
        <div className="left flex px-4 py-5">
            <Link to='/' className='flex items-center gap-2'>
            <img src="/DevToolBoxLogo.png" alt="logo" className='h-12 w-12' />
            <h1 className='text-lg font-bold'>Dev ToolBox</h1>
            </Link>
        </div>
    </div>
  )
}

export default Navbar