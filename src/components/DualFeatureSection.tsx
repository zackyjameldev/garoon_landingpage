import React from "react";
import { motion } from "framer-motion";

export default function DualFeatureSection() {
  return (
    <div className="bg-white py-8 pb-0 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-[#002029] mb-6">
          We make booking soccer turfs<br />
          easy and hassle-free
        </h2>

        <div className="flex flex-col md:flex-row gap-4 mb-0 pb-0">
          {/* Players Card */}
          {/* <div className="bg-[#002029] text-white pt-4 rounded-xl flex-1"> */}
          <div className="bg-[#002029] text-white pt-10 rounded-xl flex-1 ">

            <h3 className="text-2xl font-bold text-center mb-1">For Players</h3>
            <p className="text-center text-gray-300 text-sm mb-4">Play More, Search Less</p>
            
            <div className=" items-center justify-center flex">
            <ul className="space-y-1.5 text-sm mb-6">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Find nearby turfs instantly.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>View real-time availability 24/7.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Filter by price, location & amenities.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Book & pay securely in minutes.</span>
              </li>
            </ul>

            </div>

            <div className="flex justify-center mb-8">
                


                  <a 
                    href="https://play.google.com/store/apps/details?id=apkzacky.com.gopplayapp.garoonplayer" 
                  className="relative inline-flex items-center group bg-[#2EE7A3] text-[#002029] font-medium px-6 py-3 rounded-md overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-out"
                >
                  <span className="relative z-10 transition-all duration-300 group-hover:translate-x-1">
                    Get Started
                  </span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-2 relative z-10 transition-all duration-300 group-hover:translate-x-1" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>

                  {/* Background shimmer effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition duration-700 animate-shimmer" />
                </a>


                </div>

            <div className=" items-end justify-center flex">

            <img src="/image 65.svg" width={'76.8%'} alt="Player app" className="" />
            </div>
          </div>

          {/* Owners Card */}
          <div className="bg-[#002029] text-white pt-10 rounded-xl flex-1">
            <h3 className="text-2xl font-bold text-center mb-1">For Turf Owners</h3>
            <p className="text-center text-gray-300 text-sm mb-4">Maximize Bookings, Minimize Hassle</p>
            <div className=" items-center justify-center flex">
            <ul className="space-y-1.5 text-sm mb-6">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Reach thousands of local players.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Fill empty time slots easily.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Manage schedule & bookings online.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Accept secure digital payments.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Gain insights with booking analytics.</span>
              </li>
            </ul>
            </div>
            
          

            <div className="flex justify-center mb-8">
                        <a 
              href="https://play.google.com/store/apps/details?id=apkzacky.com.gopplayapp.garoonplayer" 
              className="relative inline-flex items-center group bg-[#2EE7A3] text-[#002029] font-medium px-6 py-3 rounded-md overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-out"
            >
              <span className="relative z-10 transition-all duration-300 group-hover:translate-x-1">
                Get Started
              </span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2 relative z-10 transition-all duration-300 group-hover:translate-x-1" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>

              {/* Background shimmer effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition duration-700 animate-shimmer" />
            </a>

                </div>

            <div className=" items-center justify-center flex">

            <img src="/image 65.svg"  width={'70%'} alt="Owner app" className="" />
</div>


          </div>
        </div>
      </div>
    </div>
  );
}