import React from 'react'

const UserPage = () => {
  return (
    <div className='bg-white dark:bg-[#020512] dark:text-white h-[100vh]'>
        <div className='flex items-center gap-5 pt-4'>
        <h1 className='text-2xl sm:text-3xl font-bold ml-15'>Welcome User!</h1>
        <span className='text-red-500'>
            <span className='bg-blue-500 text-white py-2 px-5 rounded-full hover:bg-blue-400 cursor-pointer mr-5'>Login</span>
            <span className='bg-blue-500 text-white py-2 px-5 rounded-full hover:bg-blue-400 cursor-pointer mr-5'>Sign Out</span>
            <span className='mr-4'>You are not logged in, no data is being stored in database</span>
            <span>Your data is stored in database when logged in</span>
        </span>
        </div>
    </div>
  )
}

export default UserPage
