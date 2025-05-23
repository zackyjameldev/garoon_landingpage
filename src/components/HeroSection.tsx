import React from "react";

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between py-16 md:py-28 px-6 md:px-12 bg-[#002029] text-white">
      {/* Trust Badge */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-[#0D4049] rounded-full px-4 py-1 text-xs flex items-center gap-2 text-white">
        <span className="bg-[#F8C200] text-[#002029] rounded-full px-2 py-0.5 font-medium">5.0★</span>
        <span>Trusted by 25,000+ people</span>
      </div>
      
      {/* Left: Text */}
      <div className="flex-1 flex flex-col gap-6 max-w-xl mt-8">
        <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight">
          Book Your <span className="text-[#2EE7A3]">Perfect</span><br />
          Stadium in Seconds
        </h1>
        <p className="font-body text-lg md:text-xl text-gray-300">
          The easiest way for players and teams in Ethiopia to discover, book, and pay for top-quality soccer turfs online.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <a href="#" className="transition duration-300 hover:opacity-90">
            <img src="/app-store-badge.png" alt="Download on App Store" className="h-12" />
          </a>
          <a href="#" className="transition duration-300 hover:opacity-90">
            <img src="/google-play-badge.png" alt="Get it on Google Play" className="h-12" />
          </a>
        </div>
      </div>
      
      {/* Right: Phone Mockup */}
      <div className="flex-1 flex justify-center mt-12 md:mt-0">
        <img 
          src="/hero-phone-mockup.png" 
          alt="GaroonHub App Preview" 
          className="max-w-full h-auto md:max-h-[600px] drop-shadow-2xl" 
        />
      </div>
    </section>
  );
}