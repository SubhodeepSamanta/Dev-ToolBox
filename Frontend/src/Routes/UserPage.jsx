import React, { useState } from "react";

const UserPage = () => {
  const [LogIn,setLogin]= useState(false);
  const [signUp,setSignUp]= useState(false);
  return (
    <div className="bg-white dark:bg-[#020512] dark:text-white h-[100vh]">
      <div className="flex items-center gap-5 pt-4 relative">
        <h1 className="text-2xl sm:text-3xl font-bold ml-15">Welcome User!</h1>
        <span className="text-red-500">
          <span className="bg-blue-500 text-white py-2 px-5 rounded-full hover:bg-blue-400 cursor-pointer mr-5">
            Login
          </span>
          <span className="bg-blue-500 text-white py-2 px-5 rounded-full hover:bg-blue-400 cursor-pointer mr-5">
            Sign Out
          </span>
          <span className="mr-4">
            You are not logged in, no data is being stored in database
          </span>
          <span>Your data is stored in database when logged in</span>
        </span>
        <div className="fixed top-0 bottom-0 right-0 flex justify-center items-center left-0 bg-gray-400/50 h-full w-full">
          <div className="w-120 bg-gray-100 h-150 rounded-2xl flex flex-col items-center">
            <img src="logo.png" alt="logo" className="h-20 w-20" />
            <h1 className=" text-5xl font-bold">Login</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col pb-10">
        <h2 className="text-3xl font-bold ml-15 mt-10">History</h2>
        <div className="border w-[90%] bg-amber-400 ml-20 mt-10 rounded-t-xl">
          {/* Header Row */}
          <div className="grid grid-cols-5">
            <div className="bg-gray-200 rounded-tl-xl h-15 flex items-center justify-around p-4 text-xl font-medium">
              <p>Index</p>
            </div>
            <div className="bg-gray-200 h-15 flex items-center justify-around p-4 text-xl font-medium">
              <p>Type</p>
            </div>
            <div className="bg-gray-200 h-15 flex items-center justify-around p-4 text-xl font-medium">
              <p>Input</p>
            </div>
            <div className="bg-gray-200 h-15 flex items-center justify-around p-4 text-xl font-medium">
              <p>Output</p>
            </div>
            <div className="bg-gray-200 rounded-tr-xl h-15 flex items-center justify-around p-4 text-xl font-medium">
              <p>Timestamp</p>
            </div>
          </div>

          {/* Data Row */}
          <div className="grid grid-cols-5">
            <div className="bg-gray-100 w-full p-4 flex justify-around">
              <p>1.</p>
            </div>
            <div className="bg-gray-100 w-full p-4 flex justify-around">
              <p>JSON Formatter</p>
            </div>
            <div className="bg-gray-100 w-full p-4 flex justify-around">
              <p>adbgocouliadcvbvwdolicwdcwdc</p>
            </div>
            <div className="bg-gray-100 w-full p-4 flex justify-around">
              <p>idahcowievgweopihvwpdiich</p>
            </div>
            <div className="bg-gray-100 w-full p-4 flex justify-around">
              <p>12:00am 10/01/25</p>
            </div>
          </div>
          <div className="grid grid-cols-5">
            <div className="bg-gray-100 w-full p-4 flex justify-around">
              <p>2.</p>
            </div>
            <div className="bg-gray-100 w-full p-4 flex justify-around">
              <p>JSON Formatter</p>
            </div>
            <div className="bg-gray-100 w-full p-4 flex justify-around">
              <p>adbgocouliadcvbvwdolicwdcwdc</p>
            </div>
            <div className="bg-gray-100 w-full p-4 flex justify-around">
              <p>idahcowievgweopihvwpdiich</p>
            </div>
            <div className="bg-gray-100 w-full p-4 flex justify-around">
              <p>12:00am 10/01/25</p>
            </div>
          </div>
          <div className="grid grid-cols-5">
            <div className="bg-gray-100 w-full p-4 flex justify-around">
              <p>3.</p>
            </div>
            <div className="bg-gray-100 w-full p-4 flex justify-around">
              <p>JSON Formatter</p>
            </div>
            <div className="bg-gray-100 w-full p-4 flex justify-around">
              <p>adbgocouliadcvbvwdolicwdcwdc</p>
            </div>
            <div className="bg-gray-100 w-full p-4 flex justify-around">
              <p>idahcowievgweopihvwpdiich</p>
            </div>
            <div className="bg-gray-100 w-full p-4 flex justify-around">
              <p>12:00am 10/01/25</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
