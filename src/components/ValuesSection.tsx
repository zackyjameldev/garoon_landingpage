import React from "react";

export default function ValuesSection() {
  const values = [
    {
      icon: '/lcok.svg',

      title: "Accessibility",
      description: "We believe everyone should have equal access to quality soccer fields, regardless of background or socioeconomic status."
    },
    {
      icon: '/improvemn.svg',
      title: "Empowerment",
      description: "We aim to equip turf owners with technology that helps them manage and grow their businesses efficiently."
    },
    {
      icon: '/community.svg',
      title: "Community",
      description: "We're building more than just a booking platform - we're creating a network that encourages social interaction and healthy competition."
    }
  ];

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-[#002029] text-white rounded-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:mx-36">
          {/* Left: Content */}
          <div className="w-full md:w-2/5">
            <div className="inline-block bg-[#0D4049] text-[#2EE7A3] text-sm px-3 py-1 rounded-full mb-6">Our values</div>
            <h2 className="text-4xl font-bold mb-6">Our core values are the foundation of our success</h2>
          </div>
          
          {/* Right: Values */}
          <div className="w-full md:w-3/5">
            <div className="space-y-6">
              {values.map((value, idx) => (
                <div key={idx} className="bg-white text-[#002029] rounded-lg p-6 flex gap-4">
                  <div className="h-10 w-20  flex items-center justify-center font-bold text-xl">
                    <img src={`${value.icon}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
