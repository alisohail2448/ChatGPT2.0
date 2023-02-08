import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
  return (
    <div className="w-full h-screen bg py-6 relative sm:px-16 px-12 text-white overflow-hidden flex flex-col justify-between align-middle">
      <div className="gradient-01 z-0 absolute"></div>
      <div className="gradient-03 z-0 absolute"></div>

      <div className=" h-screen flex flex-col justify-center items-center">
        <h3 className="text-2xl mb-2">Welcome the website of AI</h3>
        <Link to="/">
          <h2 className="uppercase font-bold text-8xl text-center mb-2 chatText">
            ChatGpt2.0
          </h2>
        </Link>
        <p className="mb-2 mt-4 text-lg">Experience the convenience and efficiency of our AI-powered bots </p>
        <p className="mb-2 text-lg">"Transform your workday with the power of bots"s</p>

        <button className="try mt-4" onClick={(e)=> navigate('/bot')}>
          Try ChatGpt2.0
        </button>
      </div>
    </div>
  );
};

export default Home;
