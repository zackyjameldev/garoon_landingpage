import React from "react";

export default function FeaturesSection() {
  const features = [
    {
      icon: "/icon-search.svg",
      title: "Easy Discovery",
      desc: "Find available turfs near you with advanced filtering options for location, price, and amenities.",
    },
    {
      icon: "/icon-calendar.svg",
      title: "Simple Booking",
      desc: "Book your preferred time slot in just a few taps and get instant confirmation.",
    },
    {
      icon: "/icon-wallet.svg",
      title: "Secure Payments",
      desc: "Pay online with multiple payment options including mobile money, credit cards, and bank transfers.",
    },
    {
      icon: "/icon-star.svg",
      title: "Verified Reviews",
      desc: "Read authentic reviews from other players before booking to ensure quality.",
    },
    {
      icon: "/icon-notification.svg",
      title: "Smart Reminders",
      desc: "Get timely notifications about your upcoming bookings and special offers.",
    },
    {
      icon: "/icon-team.svg",
      title: "Team Management",
      desc: "Create and manage your team profiles, invite players, and organize matches easily.",
    },
    {
      icon: "/icon-weather.svg",
      title: "Weather Updates",
      desc: "Check real-time weather forecasts for your booked slots to plan accordingly.",
    },
    {
      icon: "/icon-support.svg",
      title: "24/7 Support",
      desc: "Access our dedicated customer support team anytime you need assistance.",
    },
  ];

  return (
    <section id="features" className="w-full py-20 px-6 md:px-12 bg-gray-50 flex flex-col items-center">
      <div className="text-center max-w-3xl mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Features You'll Love</h2>
        <p className="font-body text-lg text-gray1 max-w-2xl mx-auto">
          GaroonHub makes finding and booking soccer turfs in Ethiopia simpler than ever before with these powerful features.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {features.map((feature, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-8 flex flex-col items-center text-center group hover:-translate-y-1"
          >
            <div className="bg-secondary bg-opacity-10 p-4 rounded-full mb-6 group-hover:bg-opacity-20 transition duration-300">
              <img src={feature.icon} alt={feature.title} className="h-10 w-10" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-primary mb-3">{feature.title}</h3>
            <p className="font-body text-gray1">{feature.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-16">
        <a 
          href="/features" 
          className="bg-primary text-white font-heading px-8 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300 inline-flex items-center gap-2"
        >
          View All Features
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </section>
  );
}