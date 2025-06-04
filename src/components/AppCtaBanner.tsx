import React from 'react';

export default function AppCtaBanner() {
  return (
    <section className="w-full bg-[#002029] py-16 md:py-20 px-4">
      <div className="max-w-4xl mx-auto bg-[#002E3A] rounded-xl p-8 md:p-12 text-center shadow-2xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 md:mb-10">
          Ready to transform your <br className="hidden sm:block" />Football experience
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
          <a 
            href="#" // Replace with actual App Store link
            className="inline-block transition duration-300 ease-in-out hover:opacity-80 transform hover:scale-105"
            aria-label="Download on the App Store"
          >
            <img 
              src="/app-store.svg" // Ensure this path is correct in your public folder
              alt="Download on the App Store" 
              className="h-12 md:h-14"
            />
          </a>
          <a 
            href="#" // Replace with actual Google Play link
            className="inline-block transition duration-300 ease-in-out hover:opacity-80 transform hover:scale-105"
            aria-label="Get it on Google Play"
          >
            <img 
              src="/google-play.svg" // Ensure this path is correct in your public folder
              alt="Get it on Google Play" 
              className="h-12 md:h-14"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
