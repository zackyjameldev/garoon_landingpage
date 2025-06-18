import React, { useEffect, useState } from "react";

export default function TeamSection() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowImage(true);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="w-full py-20 pt-5 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-16 items-center">
          
          {/* Top: Image */}
          <div className="w-full md:w-3/4">
            {!showImage ? (
              <div className="w-full h-[400px] bg-gray-200 rounded-lg animate-pulse" />
            ) : (
              <img
                src="/about-center.svg"
                alt="GaroonHub Team"
                className="w-full rounded-lg shadow-lg"
              />
            )}
          </div>

          {/* Bottom: Header and Text side-by-side */}
         <div className=" items-center justify-center flex">
         <div className="flex flex-col md:flex-row gap-10 md:mx-36 w-full justify-between">
            <div className="text-gray-600 md:w-1/2">
              <h2 className="text-4xl font-bold text-[#002029]">
                Our story began with a problem that we wanted to solve.
              </h2>
            </div>

            <div className="text-gray-600 md:w-1/2">
              <p>
                GaroonHub was born out of the frustration of missed games, double bookings, and the
                hassle of manually reserving soccer turfs. We saw an opportunity to bring the
                beautiful game into the digital age. From a simple idea to a growing tech solution,
                we’re on a mission to connect players and turf owners across East Africa through a
                seamless, modern platform. With GaroonHub, finding a turf, booking a match, and
                managing your facility is just a tap away.
              </p>
            </div>
          </div>
          </div>

        </div>
      </div>
    </section>
  );
}
