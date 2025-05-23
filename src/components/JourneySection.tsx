import React from "react";

export default function JourneySection() {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#002029] mb-12">Our Journey</h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 mb-12 text-center">
            Founded in May 2024, GaroonHub emerged from a passionate vision to transform how people 
            experience soccer in East Africa. We saw a challenge: the complicated, inefficient process of 
            finding and booking soccer turfs. Our mission? To make soccer accessible, convenient, and 
            enjoyable for everyone.
          </p>
          
          <h3 className="text-3xl font-bold text-center text-[#002029] mb-8">The Genesis of Goplay</h3>
          
          <p className="text-gray-600 mb-12">
            Our story began with a simple yet powerful belief: sports have the ability to bring people 
            together, promote healthy lifestyles, and build vibrant communities. We recognized that 
            finding the right soccer pitch shouldn't be a hassle – it should be simple, transparent, and 
            fun.
          </p>
        </div>
      </div>
    </section>
  );
}
