import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 px-6 md:px-12 bg-white flex flex-col md:flex-row items-start justify-center gap-12 max-w-7xl mx-auto">
      {/* Left: Contact Information */}
      <div className="w-full md:w-1/3 flex flex-col gap-8">
        <div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Get in Touch</h2>
          <p className="font-body text-gray1">
            Have questions about GaroonHub? We're here to help you find the perfect turf for your game.
          </p>
        </div>
        
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <div className="bg-secondary bg-opacity-10 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-primary mb-1">Phone</h3>
              <p className="font-body text-gray1">+251 911 234 567</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-secondary bg-opacity-10 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-primary mb-1">Email</h3>
              <p className="font-body text-gray1">info@garoonhub.com</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-secondary bg-opacity-10 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-primary mb-1">Address</h3>
              <p className="font-body text-gray1">Bole Road, Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>
        
        <div className="flex gap-4 mt-4">
          <a href="#" className="bg-primary text-white p-3 rounded-full hover:bg-blue-700 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a href="#" className="bg-primary text-white p-3 rounded-full hover:bg-blue-700 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a href="#" className="bg-primary text-white p-3 rounded-full hover:bg-blue-700 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Right: Contact Form */}
      <div className="w-full md:w-1/2">
        <form className="w-full bg-gray-50 rounded-2xl shadow-md p-8 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-heading text-sm font-medium text-gray1">Your Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="John Doe" 
                className="font-body px-4 py-3 rounded-lg border border-gray2 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition duration-300" 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-heading text-sm font-medium text-gray1">Your Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="john@example.com" 
                className="font-body px-4 py-3 rounded-lg border border-gray2 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition duration-300" 
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="font-heading text-sm font-medium text-gray1">Subject</label>
            <input 
              type="text" 
              id="subject" 
              placeholder="How can we help you?" 
              className="font-body px-4 py-3 rounded-lg border border-gray2 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition duration-300" 
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-heading text-sm font-medium text-gray1">Your Message</label>
            <textarea 
              id="message" 
              placeholder="Write your message here..." 
              rows={5} 
              className="font-body px-4 py-3 rounded-lg border border-gray2 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition duration-300 resize-none" 
            />
          </div>
          
          <button 
            type="submit" 
            className="bg-primary text-white font-heading px-8 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300 mt-4"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}