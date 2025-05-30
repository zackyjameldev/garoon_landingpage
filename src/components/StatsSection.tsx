import React from "react";

export default function StatsSection() {
  return (
    <section className="w-full py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            <h3 className="text-5xl font-bold text-[#002029] mb-2">10+</h3>
            <p className="text-[#2EE7A3] font-medium">Years of excellence</p>
          </div>
          
          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <h3 className="text-5xl font-bold text-[#002029] mb-2">999</h3>
            <p className="text-[#2EE7A3] font-medium">Customer satisfaction</p>
          </div>
          
          {/* Stat 3 */}
          <div className="flex flex-col items-center">
            <h3 className="text-5xl font-bold text-[#002029] mb-2">50+</h3>
            <p className="text-[#2EE7A3] font-medium">Industry awards</p>
          </div>
        </div>
      </div>
    </section>
  );
}
