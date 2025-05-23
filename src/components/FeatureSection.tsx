import React from "react";

type FeatureSectionProps = {
  title: string;
  description: string;
  bulletPoints: string[];
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
};

export default function FeatureSection({
  title,
  description,
  bulletPoints,
  imageSrc,
  imageAlt,
  reversed = false,
}: FeatureSectionProps) {
  return (
    <section className="w-full py-16 px-6 md:px-12 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
          {/* Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="bg-gradient-to-br from-[#2EE7A3] to-[#0D4049] opacity-10 absolute -z-10 w-full h-full rounded-full blur-3xl"></div>
            <img 
              src={imageSrc} 
              alt={imageAlt} 
              className="w-full max-w-sm mx-auto drop-shadow-2xl" 
            />
          </div>
          
          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-[#002029] mb-4">{title}</h2>
            <p className="text-gray-600 mb-6">{description}</p>
            
            <ul className="space-y-3">
              {bulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="text-[#2EE7A3] mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
