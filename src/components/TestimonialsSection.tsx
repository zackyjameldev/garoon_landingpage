import React from "react";

const testimonials = [
  {
    avatar: "/avatar1.svg",
    name: "Abebe Tadesse",
    role: "Team Captain",
    text: "Booking a turf has never been easier. GaroonHub is a game changer for our weekly matches!",
    rating: 5,
  },
  {
    avatar: "/avatar2.svg",
    name: "Liya Mengistu",
    role: "Recreational Player",
    text: "I love the instant confirmation and the quality of the venues. The app is super intuitive.",
    rating: 5,
  },
  {
    avatar: "/avatar3.svg",
    name: "Yonas Girma",
    role: "League Organizer",
    text: "Super easy to use and the support team is fantastic! Helped us organize our entire league schedule.",
    rating: 4,
  },
  {
    avatar: "/avatar4.svg",
    name: "Sara Kebede",
    role: "Football Coach",
    text: "I recommend GaroonHub to all my friends and teammates. The payment process is smooth and secure.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-gray-50 flex flex-col items-center">
      <div className="text-center max-w-3xl mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">What Our Users Say</h2>
        <p className="font-body text-lg text-gray1">
          Don't just take our word for it - hear from some of our satisfied users across Ethiopia
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {testimonials.map((t, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-8 flex flex-col items-center text-center group hover:-translate-y-1"
          >
            <img 
              src={t.avatar} 
              alt={t.name} 
              className="h-20 w-20 rounded-full border-4 border-secondary border-opacity-20 mb-4" 
            />
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i}
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 ${i < t.rating ? 'text-tertiary' : 'text-gray-300'}`} 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="font-body text-gray1 mb-4 italic">"{t.text}"</p>
            <h4 className="font-heading text-primary font-semibold">{t.name}</h4>
            <span className="text-sm text-gray3">{t.role}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-12 flex justify-center">
        <a 
          href="#" 
          className="text-primary font-semibold hover:text-blue-700 transition duration-300 inline-flex items-center gap-2"
        >
          View More Testimonials
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </section>
  );
}