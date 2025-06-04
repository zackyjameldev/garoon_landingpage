import React from "react";

export default function KeyAdvantagesSection() {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#08191C] text-white rounded-lg p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Advantages</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Fully loaded with features designed to give you the best web conferencing experience ever.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Advantage 1 */}
            <div className="bg-[#002029] rounded-3xl px-2 py-5 flex flex-col items-center">
              <div className="mb-6 flex justify-center">
                <img 
                  src="/4.svg" 
                  alt="Find your favorite turf" 
                  className="h-80 object-contain" 
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Find your favourite</h3>
              <p className="text-slate-400 text-center text-sm">
                Virtual events make it easier for users to follow their interactions. Users easily understand the topics discussed.
              </p>
            </div>
            
            {/* Advantage 2 */}
            <div className="bg-[#002029] rounded-3xl p-6 flex flex-col items-center">
              <div className="mb-6 flex justify-center">
                <img 
                  src="/5.svg" 
                  alt="Book your favorite turf" 
                  className="h-80 object-contain" 
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Book your favourite</h3>
              <p className="text-slate-400 text-center text-sm">
                Virtual events make it easier for users to follow their interactions. Users easily understand the topics discussed.
              </p>
            </div>
            
            {/* Advantage 3 */}
            <div className="bg-[#002029] p-6 flex flex-col items-center rounded-3xl">
              <div className="mb-6 flex justify-center">
                <img 
                  src="/6.svg" 
                  alt="Win the Game" 
                  className="h-80 object-contain" 
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Win the Game!</h3>
              <p className="text-slate-400 text-center text-sm">
                Virtual events make it easier for users to follow their interactions. Users easily understand the topics discussed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
