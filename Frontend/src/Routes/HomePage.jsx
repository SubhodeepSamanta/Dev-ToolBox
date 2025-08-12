import { Check } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="bg-white dark:bg-[#020512] dark:text-white pb-50 flex flex-col items-center">
      <h1 className="text-center text-2xl md:text-4xl mt-5 mb-2">
        Real-Time JSON Formatter and Encoder Decoder
      </h1>
      <h2 className="text-blue-500 text-3xl md:text-5xl tracking-wide">Dedicated To You</h2>
      <p className="w-[80%] md:w-[50%] text-sm sm:text-base text-center mt-10">
        A powerful and sleek Developer Toolbox that lets you instantly format,
        minify, beautify, encode, and decode your data. Your history is saved —
        whether you are logged in or not — so you can pick up right where you
        left off. With a lightning-fast interface, one-click dark/light mode,
        and zero clutter, it is built to make every developers workflow faster
        and easier.
      </p>
      <div className="flex gap-10 items-center flex-col lg:flex-row justify-center mt-10 w-[95%]">
        <video src="/demo.mp4" autoPlay loop muted className="w-[80%] lg:w-[50%] rounded-2xl" width={800}></video>
      <div className="flex flex-col relative gap-5 border-1 border-blue-400 py-10 px-5 rounded-xl w-[90%]">
        <p className="absolute -top-5 bg-white right-[45%] text-3xl font-bold dark:bg-[#020512] ">Features</p>
        <p className="flex text-sm sm:text-lg items-center"><Check className="text-blue-600 mr-5"/> Instant Formatting & Encoding — Beautify, minify, encode, or decode data in seconds.</p>
        <p className="flex text-sm sm:text-lg items-center"><Check className="text-blue-600 mr-5"/> Smart History — Auto-saves your work locally or to your account so nothing gets lost.</p>
        <p className="flex text-sm sm:text-lg items-center"><Check className="text-blue-600 mr-5"/> Customizable UI — Toggle dark/light mode anytime for a distraction-free experience.</p>
        <p className="flex text-sm sm:text-lg items-center"><Check className="text-blue-600 mr-5"/> Multiple Tools in One — JSON formatter, Base64 converter, and more, all in one place.</p>
        <p className="flex text-sm sm:text-lg items-center"><Check className="text-blue-600 mr-5"/> No Signup Required — Start using instantly, with extra perks if you log in.</p>
      </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-10 mt-10">
        <Link to='/json' className="bg-blue-600 hover:bg-blue-500 py-2 px-2 sm:py-4 text-center sm:px-8 rounded-md text-white text-lg sm:text-xl sm:font-bold">JSON Formatter</Link>
        <Link to='base64' className="bg-blue-600 hover:bg-blue-500 py-2 px-2 sm:py-4 text-center sm:px-8 rounded-md text-white text-lg sm:text-xl sm:font-bold">Encoder/Decoder</Link>
      </div>
    </div>
  );
};

export default HomePage;
