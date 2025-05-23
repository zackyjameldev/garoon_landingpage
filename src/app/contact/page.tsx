'use client';
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-full py-20 px-6 md:px-12 bg-[#002029] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">We'd Love to Hear<br />From You</h1>
              <p className="text-gray-300">Our friendly team is always here to chat.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Info & Form */}
      <section className="w-full py-16 px-6 md:px-12 bg-[#002029] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left: Contact Info */}
            <div className="w-full md:w-1/3">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-[#2EE7A3] rounded-full p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#002029]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Our Office</h3>
                  </div>
                  <p className="text-gray-300">Jijiga, Ethiopia</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-[#2EE7A3] rounded-full p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#002029]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Phone</h3>
                  </div>
                  <p className="text-gray-300">+251 945 678 9012</p>
                </div>
              </div>
            </div>
            
            {/* Right: Contact Form */}
            <div className="w-full md:w-2/3 bg-white rounded-lg p-8">
              <h2 className="text-2xl font-bold text-[#002029] mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">Our friendly team would love to hear from you.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name" 
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2EE7A3] focus:border-transparent" 
                      required 
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name" 
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2EE7A3] focus:border-transparent" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email" 
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2EE7A3] focus:border-transparent" 
                      required 
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number" 
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2EE7A3] focus:border-transparent" 
                    />
                  </div>
                </div>
                
                <div>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject" 
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2EE7A3] focus:border-transparent" 
                    required 
                  />
                </div>
                
                <div>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Leave us a message..." 
                    rows={4} 
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2EE7A3] focus:border-transparent" 
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="w-full bg-[#FFCC00] text-[#002029] font-bold py-3 px-6 rounded hover:bg-[#E6B800] transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}