import React from "react";

export default function TeamSection() {
  return (
    <section className="w-full py-20 mt-0 pt-5 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-col gap-16 items-center">
          {/* Left: Image */}
          <div className="w-full md:w-3/4">
            <img 
              src="/about-center.svg" 
              alt="GaroonHub Team" 
              className="w-full rounded-lg shadow-lg" 
            />
          </div>
          
          {/* Right: Content */}
          <div className=" flex items-center justify-center md:flex-row flex-col md:mx-36">
          <div className="text-gray-600 space-y-4 md:w-3/6 ">

            <h2 className="text-4xl font-bold text-[#002029] m-4">Our story began with a problem that we wanted to solve.</h2>
          </div>
            
            <div className="text-gray-600 space-y-4 md:w-2/4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu massa nulla. Aenean sit amet magna mollis, mattis lacus consectetur, rhoncus magna. Maecenas vitae neque nulla. Nullam quis imperdiet augue. Vestibulum auctor diam in leo tincidunt, ut commodo lorem faucibus. Cras et metus ante. Sed commodo ex et orci pellentesque, at imperdiet ante fermentum. Ut amet. Pellentesque commodo lacus at vestibule volutpat. Curabitur volutpat erat ut diam condimentum, vel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
