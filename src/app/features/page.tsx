'use client';
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FeatureHero from "../../components/FeatureHero";
import FeatureSection from "../../components/FeatureSection";
import FaqSection from "../../components/FaqSection";
import FindBookPlaySection from "../../components/FindBookPlaySection";
import CustomerTestimonialsSection from "@/components/CustomerTestimonialsSection";

export default function FeaturesPage() {
  // Define the features sections data
  const featureSections = [
    {
      imageSrc: "/4.svg",
      imageAlt: "Booking & Management Features",
      reversed: false,
      cards: [
        {
          title: "Effortless Booking",
          description: "Real-Time Availability: See open time slots instantly",
          bulletPoints: [
            "Flexible Search: Filter turfs by location, price, and amenities",
            "Instant Reservations: Book your perfect pitch with just a few taps"
          ]
        },
        {
          title: "Community Building",
          description: "",
          bulletPoints: [
            "Experience the benefits of a decentralized platform that ensures transparency, security, and trust in every transaction.",
        
          ]
        }
      ]
    },
    {
      imageSrc: "/5.svg",
      imageAlt: "Community & Growth Features",
      reversed: true,
      cards: [
        {
          title: "Smart Management",
          description: "Booking Dashboard: Track and manage all reservations",
          bulletPoints: [
            "Real-Time Notifications: Stay updated on bookings",
            "Payment Processing: Secure and instant payment collection"
          ]
        },
        {
          title: "Business Growth",
          description: "Analytics Dashboard: Understand booking trends",
          bulletPoints: [
            "Visibility Boost: Reach more players across East Africa",
            "Marketing Tools: Promote your turf with built-in features",
          ]
        }
      ]
    },
    {
      imageSrc: "/6.svg",
      imageAlt: "Security & Tracking Features",
      reversed: false,
      cards: [
        {
          title: "Real-time Tracking",
          description: "Keep track of all your bookings and payments in real-time.",
          bulletPoints: [
            "Stay updated with real-time tracking of your cryptocurrency portfolio, allowing you to monitor price fluctuations and make informed decisions."
          ]
        },
        {
          title: "Advanced Encryption",
          description: "Your data is secure with our advanced encryption technology.",
          bulletPoints: [
            "Rest easy knowing your sensitive data is protected with advanced encryption techniques, ensuring the confidentiality and integrity of your information."
          ]
        }
      ]
    }
  ];
  
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
      
      <main>
      <div className='m-2 md:mx-5 my-2 '>
        <FeatureHero />

      </div>
         
        
        {/* Feature Sections */}
        <div className="py-12">
          {featureSections.map((section, idx) => (
            <div key={idx} className="mb-16 border-b border-gray-200 pb-16 last:border-b-0">
              <div className="container mx-auto px-4">
                <div className={`flex items-center justify-center md:mx-64 flex-col ${section.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} `}>
                  {/* Image Column */}
                  <div className="w-full lg:w-1/2 mx-5">
                    <div className="relative">
                      <img 
                        src={section.imageSrc} 
                        alt={section.imageAlt}
                        className="h-96 object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Content Column with Two Vertical Cards */}
                  <div className="w-full space-y-6">
                    {section.cards.map((card, cardIdx) => (
                      <div key={cardIdx} className="bg-white shadow-sm rounded-lg border border-gray-100 p-6">
                        <h2 className="text-xl font-bold mb-3 text-primary">{card.title}</h2>
                        <p className="text-gray-600 mb-4">{card.description}</p>
                        <ul className="space-y-2">
                          {card.bulletPoints.map((point, pointIdx) => (
                            <li key={pointIdx} className="flex items-start">
                              <span className="text-primary mr-2">-</span>
                              <span className="text-gray-700">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
         <FindBookPlaySection />
    

      </main>
       {/* CTA Section */}
       <div className="mt-20 bg-[#002029] rounded-lg p-12 text-center text-white max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Ready to transform your Football experience</h2>
        <div className="flex justify-center gap-4">
        {/* <div className="mt-8 flex items-center gap-4 m-5"> */}
          <a href="#" className="transition duration-300 hover:opacity-90">
            <img src="/Crypto-Finance-App-Store.webp.svg" alt="Download on App Store" className="h-12" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=apkzacky.com.gopplayapp.garoonplayer" className="transition duration-300 hover:opacity-90">
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