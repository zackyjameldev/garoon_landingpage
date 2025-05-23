'use client';
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 md:px-12 bg-[#002029] sticky top-0 z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <span className="font-heading text-xl font-bold text-white">GaroonHub</span>
      </Link>
      
      {/* Desktop Navigation Links */}
      <div className="hidden md:flex gap-8 items-center">
        <Link href="/" className="text-[#2EE7A3] font-body border-b-2 border-[#2EE7A3] py-1">Home</Link>
        <Link href="/about" className="text-white font-body hover:text-[#2EE7A3] transition duration-300">About</Link>
        <Link href="/features" className="text-white font-body hover:text-[#2EE7A3] transition duration-300">Features</Link>
        <Link href="/faqs" className="text-white font-body hover:text-[#2EE7A3] transition duration-300">FAQs</Link>
        <Link href="/contact" className="text-white font-body hover:text-[#2EE7A3] transition duration-300">Contact</Link>
      </div>
      
      {/* CTA Button */}
      <a 
        href="#get-app" 
        className="hidden md:inline-block bg-white text-[#002029] font-medium px-6 py-2 rounded-md hover:bg-gray-100 transition duration-300"
      >
        Get the App
      </a>
      
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden flex items-center focus:outline-none text-white"
        aria-label="Toggle menu"
      >
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#002029] shadow-md py-4 px-6 flex flex-col gap-4 z-50">
          <Link 
            href="/" 
            className="text-[#2EE7A3] font-body"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="text-white font-body hover:text-[#2EE7A3] transition duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/features" 
            className="text-white font-body hover:text-[#2EE7A3] transition duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link 
            href="/faqs" 
            className="text-white font-body hover:text-[#2EE7A3] transition duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQs
          </Link>
          <Link 
            href="/contact" 
            className="text-white font-body hover:text-[#2EE7A3] transition duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <a 
            href="#get-app" 
            className="bg-white text-[#002029] font-medium px-6 py-2 rounded-md hover:bg-gray-100 transition duration-300 text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get the App
          </a>
        </div>
      )}
    </nav>
  );
}