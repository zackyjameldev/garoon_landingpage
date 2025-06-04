'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, {useState} from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/features', label: 'Features' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/contact', label: 'Contact' },
];


//  const pathname = usePathname();


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navLinkss = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/features', label: 'Features' },
    { href: '/faqs', label: 'FAQs' },
    { href: '/contact', label: 'Contact' },
  ];
  return (
    
    <nav  className='md:mx-5 mb-0 sticky top-0 z-50'>
      <div className="md:mt-2 w-full flex items-center justify-between py-3   md:rounded-xl px-6 md:px-12  bg-[#002029] ">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 md:ml-16">
      <img src="/logo.svg" alt="Get it on Google Play" className="h-7" />
      </Link>
      
      {/* Desktop Navigation Links */}
      <div className="hidden md:flex gap-8 items-center">
      {navLinks.map(({ href, label }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            className={`font-body px-5 py-1 rounded-md transition duration-300 ${
              isActive
                ? 'text-[#fff] bg-[#2EE7A3] border-b-2 border-[#2EE7A3]'
                : 'text-white hover:text-[#2EE7A3]'
            }`}
          >
            {label}
          </Link>
        );
      })}
    </div>
      
      {/* CTA Button */}
      <a 
        href="https://play.google.com/store/apps/details?id=apkzacky.com.gopplayapp.garoonplayer" 
        className="hidden md:inline-block bg-white text-[#002029] font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition duration-300"
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
      { mobileMenuOpen && (
      <div className="md:hidden absolute top-16 left-0 right-0 bg-[#002029] shadow-md py-4 px-6 flex flex-col gap-4 z-50">
        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={`font-body transition duration-300 ${
                isActive ? 'text-[#2EE7A3]' : 'text-white hover:text-[#2EE7A3]'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {label}
            </Link>
          );
        })}

        <a
          href="https://play.google.com/store/apps/details?id=apkzacky.com.gopplayapp.garoonplayer"
          className="bg-white text-[#002029] font-medium px-6 py-2 rounded-md hover:bg-gray-100 transition duration-300 text-center"
          onClick={() => setMobileMenuOpen(false)}
        >
          Get the App
        </a>
      </div>
    )}
    </div>
    </nav>
  );
}