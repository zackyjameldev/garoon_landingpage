import React from "react";

export default function DashboardFeaturesSection() {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#002029] mb-4">Experience the unlimited turf booking solution</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Say goodbye to booking hassles and hello to streamlined turf management with GaroonHub
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Dashboard Panel */}
          <div className="bg-[#002029] text-white rounded-lg p-8 col-span-1 md:col-span-1">
            <div className="text-[#F8C200] font-medium mb-4">DASHBOARD</div>
            <h3 className="text-2xl font-bold mb-4">Effortlessly Manage Your Turf</h3>
            <p className="text-gray-300 mb-8">
              Monitor your turf's performance with ease. Track bookings, manage schedules, and view earnings—all in one place.
            </p>
            
            <div className="mt-8">
              <img 
                src="/dashboard-screenshot.png" 
                alt="Dashboard Screenshot" 
                className="w-full rounded-lg shadow-lg" 
              />
            </div>
          </div>
          
          {/* Transactions Panel */}
          <div className="bg-[#002029] text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">See your transactions digitally</h3>
            
            <div className="mt-8 bg-[#002029] p-4 rounded-lg">
              <div className="bg-[#2EE7A3] bg-opacity-10 rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-white p-2 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2EE7A3]" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                        <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">Birr</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                
                <div className="mb-2 text-sm text-gray-300">Total balance</div>
                <div className="text-3xl font-bold text-white">$2,450.00</div>
              </div>
            </div>
          </div>
          
          {/* Availability Panel */}
          <div className="bg-[#002029] text-white rounded-lg p-8 flex flex-col">
            <h3 className="text-2xl font-bold mb-4">Check availability</h3>
            
            <div className="mt-auto">
              <div className="grid grid-cols-4 gap-2">
                {/* Time slots - first row */}
                <div className="bg-green-100 text-green-800 p-2 rounded text-center text-sm">
                  <div className="font-medium">9:00</div>
                  <div className="text-xs">Available</div>
                </div>
                <div className="bg-green-100 text-green-800 p-2 rounded text-center text-sm">
                  <div className="font-medium">10:00</div>
                  <div className="text-xs">Available</div>
                </div>
                <div className="bg-green-100 text-green-800 p-2 rounded text-center text-sm">
                  <div className="font-medium">11:00</div>
                  <div className="text-xs">Available</div>
                </div>
                <div className="bg-red-100 text-red-800 p-2 rounded text-center text-sm">
                  <div className="font-medium">12:00</div>
                  <div className="text-xs">Booked</div>
                </div>
                
                {/* Time slots - second row */}
                <div className="bg-red-100 text-red-800 p-2 rounded text-center text-sm">
                  <div className="font-medium">13:00</div>
                  <div className="text-xs">Booked</div>
                </div>
                <div className="bg-red-100 text-red-800 p-2 rounded text-center text-sm">
                  <div className="font-medium">14:00</div>
                  <div className="text-xs">Booked</div>
                </div>
                <div className="bg-green-100 text-green-800 p-2 rounded text-center text-sm">
                  <div className="font-medium">15:00</div>
                  <div className="text-xs">Available</div>
                </div>
                <div className="bg-green-100 text-green-800 p-2 rounded text-center text-sm">
                  <div className="font-medium">16:00</div>
                  <div className="text-xs">Available</div>
                </div>
                
                {/* Time slots - third row */}
                <div className="bg-red-100 text-red-800 p-2 rounded text-center text-sm">
                  <div className="font-medium">17:00</div>
                  <div className="text-xs">Booked</div>
                </div>
                <div className="bg-green-100 text-green-800 p-2 rounded text-center text-sm">
                  <div className="font-medium">18:00</div>
                  <div className="text-xs">Available</div>
                </div>
                <div className="bg-green-100 text-green-800 p-2 rounded text-center text-sm">
                  <div className="font-medium">19:00</div>
                  <div className="text-xs">Available</div>
                </div>
                <div className="bg-green-100 text-green-800 p-2 rounded text-center text-sm">
                  <div className="font-medium">20:00</div>
                  <div className="text-xs">Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
