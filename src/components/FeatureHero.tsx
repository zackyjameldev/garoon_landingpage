import React from "react";

export default function FeatureHero() {
  return (
    <section className="border-2 rounded-2xl  w-full flex flex-col md:flex-row items-center justify-between py-16 md:py-18 px-6 md:px-12 bg-[#002029] text-white">

    {/* <section className="w-full py-20 px-6 md:px-12 bg-[#002029] text-white"> */}
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Key Features</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Discover the Unique Benefits of Managing Your Turf with Goplay
        </p>
      </div>
    </section>
  );
}
