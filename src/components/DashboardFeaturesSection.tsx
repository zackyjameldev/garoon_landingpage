// import React from "react";

// export default function DashboardFeaturesSection() {
//   return (
//     <section className="w-full py-20 px-6 md:px-12 bg-gray-50">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-[#002029] mb-4">Experience the unlimited turf booking solution</h2>
//           <p className="text-gray-600 max-w-3xl mx-auto">
//             Say goodbye to booking hassles and hello to streamlined turf management with GaroonHub
//           </p>
//         </div>
//       <div >
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-start items-start ">
//           {/* Dashboard Panel */}
//           <div className="bg-[#002029] text-white rounded-lg p-8 col-span-1 md:col-span-1">
//             <div className="text-[#F8C200] font-medium mb-4">DASHBOARD</div>
//             <h3 className="text-2xl font-bold mb-4">Effortlessly Manage Your Turf</h3>
//             <p className="text-gray-300 mb-8">
//               Monitor your turf's performance with ease. Track bookings, manage schedules, and view earnings—all in one place.
//             </p>
            
//             <div className="flex-grow flex items-start justify-center mt-2">
//               <img 
//                 src="/2.svg" 
//                 alt="Transactions Chart" 
//                 className="w-full max-w-[220px] mx-auto object-contain"
//               />
//             </div>
//           </div>
        
//         <div className="items-start justify-center flex-col">
            
//           {/* Transactions Panel */}
//           <div className="bg-[#002029] text-white rounded-lg p-8 md:h-3/6 my-5">
//             <h3 className="text-2xl font-bold mb-4">See your transactions digitally</h3>
            
//             <div className="flex-grow flex items-start justify-center mt-2 ">
//               <img 
//                 src="/0.svg" 
//                 alt="Transactions Chart" 
//                 className="w-full max-w-[220px] mx-auto object-contain"
//               />
//             </div>
//           </div>
          
//           {/* Availability Panel */}
//           <div className="bg-[#002029] text-white rounded-lg p-8 flex flex-col md:h-3/6">
//             <h3 className="text-2xl font-bold mb-4">Check availability</h3>
            
//             <div className="flex-grow flex items-start justify-center mt-2">
//               <img 
//                 src="/3.svg" 
//                 alt="Transactions Chart" 
//                 className="w-full max-w-[220px] mx-auto object-contain"
//               />
//             </div>
//           </div>
//         </div>
//         </div>
//       </div>
        
//       </div>
//     </section>
//   );
// }

import React from "react";

export default function DashboardFeaturesSection() {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#002029] mb-4">
            Experience the unlimited turf booking solution
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Say goodbye to booking hassles and hello to streamlined turf management with GaroonHub
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-12 md:mx-52">
          {/* First Card - Takes half width */}
          <div className="md:w-1/2 bg-[#002029] text-white rounded-lg p-8 flex flex-col ">
            <div className="text-[#F8C200] font-medium mb-4">DASHBOARD</div>
            <h3 className="text-2xl font-bold mb-4">Effortlessly Manage Your Turf</h3>
            <p className="text-gray-300 mb-8">
              Monitor your turf's performance with ease. Track bookings, manage schedules, and view earnings—all in one place.
            </p>
            
          
             <div className=" items-center justify-center flex">

<img src="/image 65.svg" alt="Player app" className="" />
</div>
          </div>

          {/* Second Column - Stacked Cards - Takes half width */}
          <div className="md:w-1/2 flex flex-col gap-8">
            {/* Transactions Card */}
            <div className="bg-[#002029] text-white rounded-lg p-8 flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-4">See your transactions digitally</h3>
              
              <div className="flex-grow flex items-center justify-center">
                <img 
                  src="/0.svg" 
                  alt="Transactions" 
                  className="max-w-[280px] w-full object-contain"
                />
              </div>
            </div>

            {/* Availability Card */}
            <div className="bg-[#002029] text-white rounded-lg p-8 flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-4">Check availability</h3>
              
              <div className="flex-grow flex items-center justify-center">
                <img 
                  src="/3.svg" 
                  alt="Availability" 
                  className="max-w-[280px] w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}