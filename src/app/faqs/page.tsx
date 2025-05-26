'use client';
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

type FaqItem = {
  question: string;
  answer: string;
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

export default function FaqsPage() {
  // Define the FAQs data
  const generalFaqs = [
    {
      question: "Is it safe to use a payment gateway app?",
      answer: "Yes, using a reputable payment gateway app ensures secure transactions. The app employs various security measures, such as encryption, tokenization, and adherence to industry standards, to protect sensitive customer data and prevent unauthorized access."
    },
    {
      question: "How long does setup take?",
      answer: "Setup typically takes 15-30 minutes. You'll need to create an account, verify your identity, and connect your payment methods."
    },
    {
      question: "How does a payment gateway app work?",
      answer: "A payment gateway app securely processes transactions between customers and merchants. It encrypts payment data, authenticates users, and facilitates fund transfers."
    },
    {
      question: "What customer support is available?",
      answer: "We offer 24/7 customer support via chat, email, and phone. Our team is always ready to help with any issues or questions."
    }
  ];
  
  const paymentFaqs = [
    {
      question: "Which payment methods does the app support?",
      answer: "A payment gateway app typically supports various payment methods, including credit cards, debit cards, digital wallets (such as PayPal, Apple Pay or Google Pay), bank transfers, and sometimes alternative payment options like cryptocurrencies."
    },
    {
      question: "Can I use a payment gateway app for e-commerce?",
      answer: "Yes, our app is perfect for e-commerce businesses of all sizes. It integrates easily with most e-commerce platforms."
    },
    {
      question: "Does the app offer recurring billing?",
      answer: "Yes, our app supports recurring billing for subscription-based services. You can set up automatic payments on a schedule."
    },
    {
      question: "What are the fees associated with the app?",
      answer: "Our fees are competitive and transparent. We charge a small percentage per transaction with no hidden costs."
    }
  ];
  
  return (
    <div className="bg-white">
      <Navbar />
       
      <div className='m-2 md:mx-5 my-2 '>

      {/* Hero Section */}
      <section className="w-full py-20 px-6 md:px-12 bg-[#002029] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">FAQs</h1>
        </div>
      </section>
      </div>
      
      
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-[#002029] mb-2">Frequently Asked Questions</h2>
        <p className="text-center text-gray-600 mb-12">Have questions? We're here to help.</p>
        
        {/* General Questions */}
        <div className="mb-12">
        <div className="items-center justify-center flex">
          <h3 className="text-2xl font-bold text-[#002029] mb-6">General Questions</h3>

        </div>
          <div className="space-y-2">
            {generalFaqs.map((faq, idx) => (
              <FaqAccordionItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
        
        {/* Payment Questions */}
        <div className="mb-12">
          <div className="items-center justify-center flex">

          <h3 className="text-2xl font-bold text-[#002029] mb-6">Payment Questions</h3>
          </div>
          <div className="space-y-2">
            {paymentFaqs.map((faq, idx) => (
              <FaqAccordionItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
             {/* CTA Section */}
     
      </main>
      <div className="mt-20 bg-[#002029] rounded-lg p-12 text-center text-white max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Ready to transform your Football experience</h2>
        <div className="flex justify-center gap-4">
        {/* <div className="mt-8 flex items-center gap-4 m-5"> */}
          <a href="#" className="transition duration-300 hover:opacity-90">
            <img src="/Crypto-Finance-App-Store.webp.svg" alt="Download on App Store" className="h-12" />
          </a>
          <a href="#" className="transition duration-300 hover:opacity-90">
            <img src="/Crypto-Finance-Google-Play.webp.svg" alt="Get it on Google Play" className="h-12" />
          </a>
        </div>
        {/* </div> */}
      </div>
      
      <div className='md:m-5 mb-0'>
      <Footer />

      </div>
    </div>
  );
}