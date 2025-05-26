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
      imageSrc: "/feature-booking-app.png",
      imageAlt: "Booking & Management Features",
      reversed: false,
      cards: [
        {
          title: "Effortless Booking",
          description: "Experience the easiest way to book soccer turfs with our intuitive platform.",
          bulletPoints: [
            "Real-Time Availability: See open time slots instantly",
            "Flexible Search: Filter turfs by location, price, and amenities",
            "Instant Reservations: Book your perfect pitch with just a few taps"
          ]
        },
        {
          title: "Smart Management",
          description: "Manage your bookings and payments with our intelligent dashboard.",
          bulletPoints: [
            "Booking Dashboard: Track and manage all reservations",
            "Real-Time Notifications: Stay updated on bookings",
            "Payment Processing: Secure and instant payment collection"
          ]
        }
      ]
    },
    {
      imageSrc: "/feature-community-app.png",
      imageAlt: "Community & Growth Features",
      reversed: true,
      cards: [
        {
          title: "Community Building",
          description: "Connect with other soccer enthusiasts and build your network.",
          bulletPoints: [
            "Experience the benefits of a decentralized platform that ensures transparency, security, and trust in every transaction"
          ]
        },
        {
          title: "Business Growth",
          description: "For turf owners: Grow your business with our powerful tools.",
          bulletPoints: [
            "Analytics Dashboard: Understand booking trends",
            "Visibility Boost: Reach more players across East Africa",
            "Marketing Tools: Promote your turf with built-in features"
          ]
        }
      ]
    },
    {
      imageSrc: "/feature-encryption-app.png",
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
        <FindBookPlaySection />
        
        {/* Feature Sections */}
        <div className="py-12">
          {featureSections.map((section, idx) => (
            <div key={idx} className="mb-16 border-b border-gray-200 pb-16 last:border-b-0">
              <div className="container mx-auto px-4">
                <div className={`flex flex-col ${section.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                  {/* Image Column */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative">
                      <img 
                        src={section.imageSrc} 
                        alt={section.imageAlt}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Content Column with Two Vertical Cards */}
                  <div className="w-full lg:w-1/2 space-y-6">
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
        
        {/* FAQ Sections */}
        <FaqSection title="General Questions" faqs={generalFaqs} />
        <FaqSection title="Payment Questions" faqs={paymentFaqs} />
      </main>
      <CustomerTestimonialsSection />
      <div className='md:m-5 mb-0'>
      <Footer />

      </div>
    </div>
  );
}