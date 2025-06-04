'use client'
import Image from "next/image";
import React, { useState, useEffect } from "react";

const TEXTS = ['Perfect', 'Favor', 'Amazing'];
const ANIMATION_SPEED = 300; // 300ms per letter for both typing and erasing
const TRANSITION_DELAY = 1000; // 1 second delay between words

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(TEXTS[0]);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TEXTS.length);
    }, (ANIMATION_SPEED * 2) * TEXTS[0].length + TRANSITION_DELAY); // Total duration based on word length

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let text = TEXTS[currentIndex];
    let i = 0;
    
    const animateText = () => {
      if (isTyping) {
        // Typing phase
        setCurrentText(text.substring(0, i + 1));
        i++;
        
        if (i === text.length) {
          setIsTyping(false);
          i = 1; // Start from 1 for erasing
        }
      } else {
        // Erasing phase
        setCurrentText(text.substring(0, text.length - i));
        i++;
        
        if (i === text.length) {
          // Start next word immediately
          setCurrentIndex((prev) => (prev + 1) % TEXTS.length);
          setIsTyping(true);
          i = 0;
        }
      }
    };

    const animationInterval = setInterval(animateText, ANIMATION_SPEED);

    return () => {
      clearInterval(animationInterval);
    };
  }, [currentIndex]);

  const avatars = [
    'https://randomuser.me/api/portraits/women/44.jpg',
    'https://randomuser.me/api/portraits/men/46.jpg',
    'https://randomuser.me/api/portraits/women/47.jpg',
  ];

  return (
    <section className="border-2 rounded-2xl  w-full flex flex-col md:flex-row items-center justify-between py-16 md:py-18 px-6 md:px-12 bg-[#002029] text-white">
      {/* Trust Badge */}
      {/* <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-[#0D4049] rounded-full px-4 py-1 text-xs flex items-center gap-2 text-white">
        <span className="bg-[#F8C200] text-[#002029] rounded-full px-2 py-0.5 font-medium">5.0★</span>
        <span>Trusted by 25,000+ people</span>
      </div> */}
      
      {/* Left: Text */}
      <div className="flex-1 flex flex-col gap-6 max-w-xl mt-8">
      <div className="inline-flex items-center w-80 border border-white/20 rounded-full px-4 py-1 bg-[#0C1A1A] text-white text-sm space-x-2">
      <div className="flex -space-x-2">
        {avatars.map((src, index) => (
          <div key={index} className="w-6 h-6 rounded-full overflow-hidden border-2 border-[#0C1A1A]">
            <Image
              src={src}
              alt={`User ${index + 1}`}
              width={24}
              height={24}
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <span>Trusted by 20,000+ people</span>
    </div>
        <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
  Book Your <span className="bg-gradient-to-r from-[#2EE7A3] to-[#F8C200] bg-clip-text text-transparent">
    <span className="animate-typing">
      {currentText}
    </span>
  </span>
  <br />
  Stadium in Seconds
</h1>

        <p className="font-body text-lg md:text-xl text-gray-300">
          The easiest way for players and teams in Ethiopia to discover, book, and pay for top-quality soccer turfs online.
        </p>
        <div className="mt-8 flex items-center gap-4 m-5">
          <a href="#" className="transition duration-300 hover:opacity-90">
            <img src="/Crypto-Finance-App-Store.webp.svg" alt="Download on App Store" className="h-12" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=apkzacky.com.gopplayapp.garoonplayer" className="transition duration-300 hover:opacity-90">
            <img src="/Crypto-Finance-Google-Play.webp.svg" alt="Get it on Google Play" className="h-12" />
          </a>
        </div>
      </div>
      
      {/* Right: Phone Mockup */}
      <div className="flex-1 flex justify-center mt-12 md:mt-0 m-5">
        <img 
          src="/hero.svg" 
          alt="GaroonHub App Preview" 
          className="max-w-full h-auto md:max-h-[600px] drop-shadow-2xl" 
        />
      </div>
    </section>
  );
}