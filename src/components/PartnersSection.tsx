import React from "react";

export default function PartnersSection() {
  const partners = [
    { logo: "/partner1.svg", name: "Ethiopian Football Federation" },
    { logo: "/partner2.svg", name: "Addis Ababa City Sports Commission" },
    { logo: "/partner3.svg", name: "Total Ethiopia" },
    { logo: "/partner4.svg", name: "Commercial Bank of Ethiopia" },
    { logo: "/partner5.svg", name: "Ethio Telecom" },
    { logo: "/partner6.svg", name: "Ethiopian Airlines" },
  ];

  const logos = [
    { src: 'https://cdn.worldvectorlogo.com/logos/hubspot.svg' },
    { src: 'https://cdn.worldvectorlogo.com/logos/pocket.svg' },
    { src: 'https://cdn.worldvectorlogo.com/logos/paypal.svg' },
    { src: 'https://cdn.worldvectorlogo.com/logos/squarespace.svg', featured: true },
    { src: 'https://cdn.worldvectorlogo.com/logos/asana-1.svg' },
    { src: 'https://cdn.worldvectorlogo.com/logos/zendesk.svg' },
    { src: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg' },
    { src: 'https://cdn.worldvectorlogo.com/logos/shopify.svg' },
  ];

  return (
    <section className="w-full py-16 md:py-20 bg-white flex flex-col items-center">
      {/* <div className="text-center mb-10">
        <h2 className="font-heading text-xl md:text-2xl text-gray1 mb-2">Trusted by Leaders</h2>
        <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
      </div>
      
      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 max-w-6xl">
        {partners.map((partner, idx) => (
          <div key={idx} className="group transition-all duration-300 hover:-translate-y-1">
            <img 
              src={partner.logo} 
              alt={partner.name} 
              className="h-10 md:h-14 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
            />
          </div>
        ))}
      </div> */}
       <div className=" px-4 text-center">
      <p className="text-sm text-emerald-600 font-medium mb-2">Trusted by Leaders</p>
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">
        Clients We've Partnered With
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {logos.map(({ src, featured }, idx) => (
          <div
            key={idx}
            className={`w-16 h-16 p-3 rounded-xl flex items-center justify-center transition 
              ${featured ? 'bg-black scale-105 shadow-lg' : 'bg-white shadow-sm hover:shadow-md'}`}
          >
            <img
              src={src}
              alt={`Client ${idx + 1}`}
              className={`object-contain w-full h-full ${featured ? 'invert' : ''}`}
            />
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}