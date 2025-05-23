import React from "react";

export default function AppFeatureSection() {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="w-full md:w-1/2">
            <div className="text-sm text-[#2EE7A3] mb-2">Garoon App</div>
            <h2 className="text-4xl font-bold text-[#002029] mb-4">GaroonHub – Find, Book, Play</h2>
            
            <p className="text-gray-600 mb-8">
              Say goodbye to back-and-forth calls and scheduling hassles. With GaroonHub, 
              booking a soccer turf is as easy as a tap. Whether you're organizing a friendly 
              match or a serious game, we bring convenience to your fingertips.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-[#0D4049] rounded-full p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Instant Stadium bookings—anytime, anywhere.</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-[#0D4049] rounded-full p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Real-time availability and pricing.</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-[#0D4049] rounded-full p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Secure payments and hassle-free reservations.</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="inline-block">
                <img src="/app-store-badge.png" alt="Download on App Store" className="h-10" />
              </a>
              <a href="#" className="inline-block">
                <img src="/google-play-badge.png" alt="Get it on Google Play" className="h-10" />
              </a>
            </div>
          </div>
          
          {/* Right Content - App Screenshots */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative z-10 flex justify-center">
              <img 
                src="/app-screens.png" 
                alt="GaroonHub App Screenshots" 
                className="max-w-full" 
              />
            </div>
            {/* Background decorative element */}
            <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-[#2EE7A3] bg-opacity-10 rounded-tl-[100px] -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
