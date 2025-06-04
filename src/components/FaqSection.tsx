import React, { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  title: string;
  faqs: FaqItem[];
};

function FaqAccordionItem({ question, answer }: FaqItem) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-[#002029] font-medium">{question}</h3>
        <span className="text-gray-400">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          )}
        </span>
      </button>
      {isOpen && <div className="mt-2 text-gray-600 text-sm">{answer}</div>}
    </div>
  );
}

export default function FaqSection({ title, faqs }: FaqSectionProps) {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#002029] mb-12">{title}</h2>
        
        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <FaqAccordionItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="mt-20 bg-[#002029] rounded-lg p-12 text-center text-white max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Ready to transform your Football experience</h2>
        <div className="flex justify-center gap-4">
          <a href="#" className="inline-block">
            <img src="/app-store-badge.png" alt="Download on App Store" className="h-10" />
          </a>
          <a href="#" className="inline-block">
            <img src="/google-play-badge.png" alt="Get it on Google Play" className="h-10" />
          </a>
        </div>
      </div>
    </section>
  );
}
