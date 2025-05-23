import React from "react";

export default function DualFeatureSection() {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#002029] mb-4">
          We make booking soccer turfs<br />
          easy and hassle-free
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {/* For Players */}
          <div className="bg-[#002029] text-white rounded-lg p-10">
            <h3 className="text-2xl font-bold text-center mb-1">For Players</h3>
            <p className="text-center text-gray-300 mb-8">Play More, Search Less</p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-white">•</div>
                <span>Find nearby turfs instantly.</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-white">•</div>
                <span>View real-time availability 24/7.</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-white">•</div>
                <span>Filter by price, location & amenities.</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-white">•</div>
                <span>Book & pay securely in minutes.</span>
              </li>
            </ul>
            
            <div className="mt-8 flex justify-center">
              <a 
                href="#" 
                className="inline-flex items-center bg-[#2EE7A3] text-[#002029] font-medium px-6 py-3 rounded-md hover:bg-opacity-90 transition duration-300"
              >
                Book now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            
            <div className="mt-8">
              <img 
                src="/player-app-screenshot.png" 
                alt="Player App Screenshot" 
                className="w-full rounded-lg shadow-lg" 
              />
            </div>
          </div>
          
          {/* For Turf Owners */}
          <div className="bg-[#002029] text-white rounded-lg p-10">
            <h3 className="text-2xl font-bold text-center mb-1">For Turf Owners</h3>
            <p className="text-center text-gray-300 mb-8">Maximize Bookings, Minimize Hassle</p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-white">•</div>
                <span>Reach thousands of local players.</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-white">•</div>
                <span>Fill empty time slots easily.</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-white">•</div>
                <span>Manage schedule & bookings online.</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-white">•</div>
                <span>Accept secure digital payments.</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-white">•</div>
                <span>Gain insights with booking analytics.</span>
              </li>
            </ul>
            
            <div className="mt-8 flex justify-center">
              <a 
                href="#" 
                className="inline-flex items-center bg-[#2EE7A3] text-[#002029] font-medium px-6 py-3 rounded-md hover:bg-opacity-90 transition duration-300"
              >
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            
            <div className="mt-8">
              <img 
                src="/owner-app-screenshot.png" 
                alt="Owner App Screenshot" 
                className="w-full rounded-lg shadow-lg" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
