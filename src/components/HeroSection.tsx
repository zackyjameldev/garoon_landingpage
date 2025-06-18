'use client'
import Image from "next/image";
import React, { useState, useEffect } from "react";

const TEXTS = ['Best', 'Favourite', 'Perfect'];
const TYPING_SPEED = 150;
const DELETING_SPEED = 100;
const PAUSE_BEFORE_DELETING = 1200;
const PAUSE_BEFORE_TYPING = 500;


export default function HeroSection() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    const fullText = TEXTS[currentIndex];

    if (!isDeleting && currentText === fullText) {
      // Pause before deleting
      timer = setTimeout(() => setIsDeleting(true), PAUSE_BEFORE_DELETING);
    } else if (isDeleting && currentText === '') {
      // Move to next word and start typing
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % TEXTS.length);
      timer = setTimeout(() => {}, PAUSE_BEFORE_TYPING);
    } else {
      timer = setTimeout(() => {
        const updatedText = isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1);
        setCurrentText(updatedText);
      }, isDeleting ? DELETING_SPEED : TYPING_SPEED);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex]);

  // Avatars omitted for brevity (same as before)

  return (
    <section className="opacity-0 animate-fade-in delay-200  rounded-2xl w-full flex flex-col md:flex-row items-center justify-between pt-16 md:pt-18 px-6 md:px-12 bg-[#002029] text-white">
      {/* Left: Text */}
      <div className="flex-1 flex flex-col gap-6 max-w-xl mt-8">
        {/* Avatars */}
        <div className="inline-flex items-center w-80 border border-white/20 rounded-full px-4 py-1 bg-[#0C1A1A] text-white text-sm space-x-2">
          <div className="flex -space-x-2">
            {[
              'https://randomuser.me/api/portraits/women/44.jpg',
              'https://randomuser.me/api/portraits/men/46.jpg',
              'https://randomuser.me/api/portraits/women/47.jpg',
            ].map((src, index) => (
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
          Book Your{' '}
          <span className="bg-gradient-to-r from-[#2EE7A3] to-[#F8C200] bg-clip-text text-transparent">
            <span className="inline-block border-r-[2px] border-white animate-caret">
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
      <div className="flex-1 flex justify-center mt-12 md:mt-0 mx-5 mt-5">
        <img 
          src="/hero.svg" 
          alt="GaroonHub App Preview" 
          className="max-w-full h-auto md:max-h-[600px] drop-shadow-2xl" 
        />
      </div>

      <style jsx>{`
        /* Blinking caret animation */
        .animate-caret {
          animation: blink-caret 1s step-end infinite;
        }
        @keyframes blink-caret {
          0%, 50% { border-color: transparent; }
          51%, 100% { border-color: white; }
        }
      `}</style>
    </section>
  );
}
