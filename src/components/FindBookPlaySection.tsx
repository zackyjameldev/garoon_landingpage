import React from "react";

export default function FindBookPlaySection() {
  return (
    <section className="w-full py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left content */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-10">
            <div className="text-sm font-medium text-teal-600 mb-2">Garoon App</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Garoon - Find, Book, Play</h2>
            <p className="text-gray-600 mb-8">
              Say goodbye to back-and-forth calls and scheduling hassles. With GoPlay, 
              booking a soccer turf is as easy as a tap. Whether you're organizing a friendly 
              match or a serious game, we bring convenience to your fingertips.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <div className="bg-teal-600 rounded-full p-1 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Instant Stadium bookings—anytime, anywhere.</span>
              </li>
              <li className="flex items-center">
                <div className="bg-teal-600 rounded-full p-1 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Real-time availability and pricing.</span>
              </li>
              <li className="flex items-center">
                <div className="bg-teal-600 rounded-full p-1 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Secure payments and hassle-free reservations.</span>
              </li>
            </ul>
            
            <div className="flex flex-wrap gap-4">
              <a href="#" className="inline-block">
                <img src="/app-store-badge.png" alt="Download on App Store" className="h-10" />
              </a>
              <a href="#" className="inline-block">
                <img src="/google-play-badge.png" alt="Get it on Google Play" className="h-10" />
              </a>
            </div>
          </div>
          
          {/* Right content - App mockups */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img 
                src="/app-mockup.png" 
                alt="Garoon App Mockup" 
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
