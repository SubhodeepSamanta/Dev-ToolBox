import React, { useEffect, useState } from "react";
import {X} from 'lucide-react'
import { useAuthStore } from "../Store/authStore";
import { useHistoryStore } from "../Store/historyStore";

const UserPage = () => {
  const [logIn,setLogin]= useState(false);
  const [signUp,setSignUp]= useState(false);
  const {history,loadHistory,clearHistory}= useHistoryStore();
  const [form,setForm]= useState({username:"",password:""});
  const {user,register,login,logout,error}= useAuthStore();
  useEffect(()=>{
    loadHistory();
  },[user,loadHistory,logIn,logout]);
  const handleAuthSignin= async()=>{
    const success= await register(form);
    if(success) setSignUp(false);
    setForm({username:"",password:""})
    await loadHistory();
  }

  const handleAuthLogin= async()=>{
    const success= await login(form);
    if(success) setLogin(false);
    setForm({username:"",password:""});
    await loadHistory();
  }
  
  const handleAuthLogout= async()=>{
    await logout();
    await loadHistory();
  }
  return (
    <div className="bg-white dark:bg-[#020512] dark:text-white h-[100vh]">
      <div className="flex flex-col lg:flex-row items-center gap-5 pt-4 relative">
        <h1 className="text-2xl sm:text-3xl font-bold md:ml-15">Welcome {user===null? 'User': user}!</h1>
        <span className="flex flex-col md:flex-row text-red-500">
          {
            !user ?
            <>
          <span className="bg-blue-500 flex items-center justify-center text-white py-2 px-5 rounded-full hover:bg-blue-400 cursor-pointer mx-2 md:mr-5" onClick={()=>setLogin(true)}>
            Login
          </span>
            <span className="text-xs md:text-base mt-2">
            You are not logged in, no data is being stored in database
          </span>
            </>
            :
            <>
          <span className="bg-blue-500 flex items-center justify-center text-white py-2 px-5 rounded-full hover:bg-blue-400 cursor-pointer mx-2 md:mr-5" onClick={handleAuthLogout}>
            Sign Out
            </span>
            <span className="text-xs md:text-base mt-2 text-green-400">Your data is stored in database when logged in</span>
            </>
          }
        </span>
        {/* login  */}
        {
          logIn &&

        <div className="fixed top-0 bottom-0 right-0 flex justify-center items-center left-0 bg-gray-400/50 h-full w-full z-50" >
          <div className="w-90 sm:w-120 bg-gray-100 dark:bg-[#020512] h-130 pt-4 rounded-2xl flex flex-col items-center relative">
            <img src="logo.png" alt="logo" className="h-20 w-20 absolute top-0 left-2" />
            <h1 className="text-2xl sm:text-4xl font-bold mt-4">Login</h1>
            <X className="h-8 w-8 absolute top-5 right-5 cursor-pointer" onClick={()=>setLogin(false)}/>
            <div className="flex-start w-full mt-12">
              <label htmlFor="username" className="flex flex-col gap-2 w-full text-base sm:text-xl p-5 px-10">
                Username:
                <input type="text" id="username" placeholder="Enter your username" value={form.username} onChange={(e)=>setForm({...form,username:e.target.value})} className="p-2 border-1 border-gray-400 rounded-xl" />
              </label>
              <label htmlFor="password" className="flex flex-col gap-2 w-full text-base sm:text-xl p-5 px-10">
                Password:
                <input type="password" id="password" placeholder="Password" value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})} className="p-2 border-1 border-gray-400 rounded-xl" />
              </label>
              <div className="text-center p-2 mt-4 bg-[#243887] hover:bg-[#5972d8] text-white mx-25 sm:mx-45 rounded-3xl cursor-pointer" onClick={handleAuthLogin}>login</div>
            </div>
            <span className="text-sm mt-4">Do not have an account?<span className="text-blue-500 pl-2 cursor-pointer" onClick={()=>{setSignUp(true); setLogin(false)}}>SignIn</span></span>
            <span className="text-red-500 mt-2">{error}</span>
          </div>
        </div>
        }
        {/* signIn */}
        {
          signUp &&

        <div className="fixed top-0 bottom-0 right-0 flex justify-center items-center left-0 bg-gray-400/50 h-full w-full z-50" >
          <div className="w-90 sm:w-120 bg-gray-100 dark:bg-[#020512] h-130 pt-4 rounded-2xl flex flex-col items-center relative">
            <img src="logo.png" alt="logo" className="h-20 w-20 absolute top-0 left-2" />
            <h1 className=" text-2xl sm:text-4xl font-bold mt-4">Sign In</h1>
            <X className="h-8 w-8 absolute top-5 right-5 cursor-pointer" onClick={()=>setSignUp(false)}/>
            <div className="flex-start w-full mt-12">
              <label htmlFor="username" className="flex flex-col gap-2 w-full text-base sm:text-xl p-5 px-10">
                Username:
                <input type="text" id="username" placeholder="Enter your username" value={form.username} onChange={(e)=>setForm({...form,username:e.target.value})} className="p-2 border-1 border-gray-400 rounded-xl" />
              </label>
              <label htmlFor="password" className="flex flex-col gap-2 w-full text-base sm:text-xl p-5 px-10">
                Password:
                <input type="password" id="password" placeholder="Password" value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})} className="p-2 border-1 border-gray-400 rounded-xl" />
              </label>
              <div className="text-center p-2 mt-4 bg-[#243887] hover:bg-[#5972d8] text-white mx-25 sm:mx-45 rounded-3xl cursor-pointer" onClick={handleAuthSignin}>Sign In</div>
            </div>
            <span className="text-sm mt-4">Already have an account? <span className="text-blue-500 pl-2 cursor-pointer" onClick={()=>{setLogin(true); setSignUp(false)}}>login</span></span>
            <span className="text-red-500 mt-2">{error}</span>
          </div>
        </div>
        }
      </div>
      <div className="flex flex-col pb-10">
        <h2 className="text-3xl font-bold ml-5 md:ml-15 mt-10">History</h2>
        <div className="border dark:border-gray-700 w-[90%] ml-5 sm:ml-10 md:ml-20 mt-10 rounded-t-xl scrollbar-hide">
          {/* Header wala row */}
          <div className="grid grid-cols-5 relative">
                  <span className="text-red-500 absolute -top-10 right-10 cursor-pointer" onClick={()=>clearHistory()}>Clear all Data</span>
            <div className="bg-gray-200 dark:bg-[#09123b] rounded-tl-xl h-15 flex items-center justify-around p-4 text-sm md:text-xl font-medium">
              <p>Index</p>
            </div>
            <div className="bg-gray-200 dark:bg-[#09123b] h-15 flex items-center justify-around p-4 text-sm md:text-xl font-medium">
              <p>Type</p>
            </div>
            <div className="bg-gray-200 dark:bg-[#09123b] h-15 flex items-center justify-around p-4 text-sm md:text-xl font-medium">
              <p>Input</p>
            </div>
            <div className="bg-gray-200 dark:bg-[#09123b] h-15 flex items-center justify-around p-4 text-sm md:text-xl font-medium">
              <p>Output</p>
            </div>
            <div className="bg-gray-200 dark:bg-[#09123b] rounded-tr-xl h-15 flex items-center justify-around p-4 text-sm md:text-xl font-medium overflow-auto scrollbar-hide">
              <p>Timestamp</p>
            </div>
          </div>

          {/* Data row */}
          {
            history.length > 0 ?(
            history.map((h,index)=>(
            <div className="grid grid-cols-5 text-xs md:text-base" key={h.timestamp}>
            <div className="bg-gray-100 dark:bg-[#202a55] w-full p-4 flex justify-around">
              <p>{index+1}</p>
            </div>
            <div className="bg-gray-100 dark:bg-[#202a55] w-full p-4 flex justify-around">
              <p>{h.type}</p>
            </div>
            <div className="bg-gray-100 dark:bg-[#202a55] w-full p-4 flex justify-around overflow-auto scrollbar-hide">
              <p>{h.input}</p>
            </div>
            <div className="bg-gray-100 dark:bg-[#202a55] w-full p-4 flex justify-around overflow-auto scrollbar-hide">
              <p>{h.output}</p>
            </div>
            <div className="bg-gray-100 dark:bg-[#202a55] w-full p-4 flex justify-around overflow-auto scrollbar-hide">
              <p>{new Date(h.timestamp).toLocaleString()}</p>
            </div>
          </div>
          ))
            ):(
          <div className="grid grid-cols-1 text-xs md:text-base">
            <div className="bg-gray-100 dark:bg-[#202a55] w-full p-4 flex justify-around">
              <p>No Data Saved</p>
            </div>
          </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default UserPage;
