import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

import React from "react";
export default function Theme(props) {
  return (
    <div className=" h-40 md:h-[1000px] ">
      <div className="lg:p-9 md:p-[35px]   relative lg:h-[560px] md:h-[420px] h-[300px]  p-3">
        <p className="pt-3 absolute bottom-0  md:bottom-5">Help</p>
        <div className="border-b-2 flex  md:flex-col py-3 md:gap-2 gap-6 flex-row border-boxwind">
          <Link to="/Back" className="md:pt-0 pt-1 text-base font-medium">
            Back
          </Link>
          <p className=" font-bold text-2xl md:py-2">Weathery settings</p>
        </div>
        {/*select lang*/}
        <div className="relative w[400px] overflow-hidden">
          <input
            type="checkbox"
            className="absolute peer top-0 inset-x-0 
             w-full h-5 opacity-0 
               cursor-pointer
            "
          />
          <div
            className=" py-2 border-b-2 border-boxwind gap-2  w-full 
          flex  flex-col
          "
          >
            <h1 className="font-medium text-lg ">Language</h1>
            <h1 className=" text-offwhite">choose your preferred language</h1>
          </div>
          <div
            className="absolute bg-green` top-2 right-3
          text-white transition-transform duration-500
          rotate-0 peer-checked:rotate-180 
          "
          >
            <FaAngleDown style={props.style} className="  " />
          </div>
          {/*select content*/}
          <div
            className=" text-right overflow-hidden 
          transition-all duration-500 max-h-0
          peer-checked:max-h-9
          "
          >
            <div className="">
              <p>english</p>
            </div>
          </div>
        </div>

        {/*select theme*/}
        <div className="relative w[400px]   overflow-hidden">
          <input
            type="checkbox"
            className="absolute peer top-0 inset-x-0 
             w-full h-5 opacity-0 
              z-10 cursor-pointer
            "
          />
          <div
            className="hover:text-range py-2 gap-2 border-b-2 border-boxwind  w-full 
          flex  flex-col
          "
          >
            <h1 className="font-medium hover:text-range text-lg">Theme</h1>
            <h1 className="   hover:text-range3">select preferred mode</h1>
          </div>
          <div
            className="absolute  top-2 right-3
          text-white transition-transform duration-500
          rotate-0 peer-checked:rotate-180 
          "
          >
            <FaAngleDown style={props.style} className="  " />
          </div>
          {/*select content*/}
          <div
            className=" grid justify-end  overflow-hidden 
          transition-all duration-500 max-h-0
          peer-checked:max-h-9
          "
          >
            <div className="grid grid-cols-1  border-2 border-boxwind rounded-md   w-8  ">
              {/* Toggle button */}
              <div
                onClick={props.toggleoff}
                className=" p-3 justify-between flex flex-row border-b-2 hover:text-white hover:bg-range3 border-boxwind"
              >
                <p>Light mode</p>
                <img className="w-3 h-3" src="image/knight.png" />
              </div>
              {/* Toggle button */}
              <div
                onClick={props.toggle}
                className=" justify-between flex flex-row hover:text-white p-3 hover:bg-range3 "
              >
                <button>Dark mode</button>
                <img src="image/sun.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
