
import React from "react";
import Link from "next/link";
// Replace these with your actual SVG imports or inline SVGs
// import Logo from "@/components/icons/Logo"; 


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#fff] mb-5 text-white">
      {/* Top section */}
      <div className=" mb-5 rounded-md px-5 mx-2 md:px-28 bg-[#041518] max-w-7xl   py-14 flex flex-col md:flex-row md:justify-between gap-10">
        {/* Logo & Description */}
        <div className="flex flex-col gap-6 max-w-xs">
          <div className="flex items-center gap-2">
            {/* <Logo className="h-6 w-auto" /> */}
            <Link href="/" className="flex items-center gap-2">
      <img src="/logo.svg" alt="Get it on Google Play" className="h-7" />
      </Link>
          </div>
          <p className="text-sm text-gray-400">
            Simplify turf bookings and modernize your soccer experience
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Facebook" className="hover:opacity-80">
              <img src={'xx.svg'}  className="w-6 h-6 text-[#00F29C]" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:opacity-80">
            <img src={'face.svg'}  className="w-6 h-6 text-[#00F29C]" />
            </a>
            <a href="#" aria-label="YouTube" className="hover:opacity-80">
            <img src={'yotu.svg'}  className="w-6 h-6 text-[#00F29C]" />
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm text-gray-300">
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-white">Turf Booking</Link></li>
              <li><Link href="#" className="hover:text-white">Facility Management</Link></li>
              <li><Link href="#" className="hover:text-white">Real-Time Updates</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-white">About Us</Link></li>
              <li><Link href="#" className="hover:text-white">Careers</Link></li>
              <li><Link href="#" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Collaborate</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-white">Become a Turf Partner</Link></li>
              <li><Link href="#" className="hover:text-white">Advertise with Us</Link></li>
              <li><Link href="#" className="hover:text-white">Affiliate Program</Link></li>
              <li><Link href="#" className="hover:text-white">Sponsorship Opportunities</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-white">Help center</Link></li>
              <li><Link href="#" className="hover:text-white">Support</Link></li>
              <li><Link href="#" className="hover:text-white">Tutorials</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-5 rounded-md bg-[#021014] border-t border-[#092B31] ">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>Copyright © {currentYear} GaroonHub. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="/privacypolicy" className="text-[#E0C369] hover:underline">Privacy Policy</Link>
            <Link href="/termsandconditions" className="text-[#E0C369] hover:underline">Termsand Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
