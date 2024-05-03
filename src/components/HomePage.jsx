import React from "react";
import { FaFacebookF, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
import Navbar from "./Navbar";
import img from "../assets/man.svg";

const HomePage = () => {
  return (
    <>
      <div name="home" className="md:h-screen mb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 h-[87%] items-center justify-center pt-20">
          <div className="hidden lg:block"></div>
          <div className="text-center space-y-3">
            <p className="text-gray-500 text-2xl">Hello I'm</p>
            <h1 className="text-6xl font-bold text-gray-700">John Doe</h1>
            <p className="font-mono text-lg">Web Developer</p>
            <div className="flex gap-1 justify-center py-3">
              <button className="py-1 px-4 text-white rounded-full bg-[#ff7a57]">
                Here Me
              </button>
              <button className="py-1 px-4 text-white rounded-full bg-gray-700">
                Download CV
              </button>
            </div>
            <div className="flex justify-center items-center text-4xl mt-4 text-[#ff7a57] space-x-3">
              <FaFacebookF className="border border-[#ff7a57] rounded-full p-2" />
              <FaInstagram className="border border-[#ff7a57] rounded-full p-2" />
              <FaGithub className="border border-[#ff7a57] rounded-full p-2" />
              <FaYoutube className="border border-[#ff7a57] rounded-full p-2" />
            </div>
          </div>
          <div className="text-center flex items-center justify-center">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative"></div>
          <div className="w-full absolute left-0 right-0 border-b border-gray-300"></div>
          <div className="flex shadow-lg bg-white z-50 px-10 py-4 rounded-full gap-4">
            <p className="flex flex-col text-center text-base sm:text-xl font-bold text-gray-700">
              124{" "}
              <span className="text-xs sm:text-base font-normal">
                Happy Clients
              </span>
            </p>
            <p className="flex flex-col text-center px-4 border-x text-base sm:text-xl font-bold text-gray-700">
              456{" "}
              <span className="text-xs sm:text-base font-normal">
                Project Completed
              </span>
            </p>
            <p className="flex flex-col text-center text-base sm:text-xl font-bold text-gray-700">
              789{" "}
              <span className="text-xs sm:text-base font-normal">
                Awards Won
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
