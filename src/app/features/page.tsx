'use client';
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FeatureHero from "../../components/FeatureHero";
import FeatureSection from "../../components/FeatureSection";
import FaqSection from "../../components/FaqSection";
import FindBookPlaySection from "../../components/FindBookPlaySection";

export default function FeaturesPage() {
  // Define the features data
  const features = [
    {
      title: "Effortless Booking",
      description: "Experience the easiest way to book soccer turfs with our intuitive platform.",
      bulletPoints: [
        "Real-Time Availability: See open time slots instantly",
        "Flexible Search: Filter turfs by location, price, and amenities",
        "Instant Reservations: Book your perfect pitch with just a few taps"
      ],
      imageSrc: "/feature-booking-app.png",
      imageAlt: "Booking Feature Screenshot",
      reversed: false
    },
    {
      title: "Community Building",
      description: "Connect with other soccer enthusiasts and build your network.",
      bulletPoints: [
        "Experience the benefits of a decentralized platform that ensures transparency, security, and trust in every transaction"
      ],
      imageSrc: "/feature-community-app.png",
      imageAlt: "Community Feature Screenshot",
      reversed: true
    },
    {
      title: "Smart Management",
      description: "Manage your bookings and payments with our intelligent dashboard.",
      bulletPoints: [
        "Booking Dashboard: Track and manage all reservations",
        "Real-Time Notifications: Stay updated on bookings",
        "Payment Processing: Secure and instant payment collection"
      ],
      imageSrc: "/feature-management-app.png",
      imageAlt: "Management Feature Screenshot",
      reversed: false
    },
    {
      title: "Business Growth",
      description: "For turf owners: Grow your business with our powerful tools.",
      bulletPoints: [
        "Analytics Dashboard: Understand booking trends",
        "Visibility Boost: Reach more players across East Africa",
        "Marketing Tools: Promote your turf with built-in features"
      ],
      imageSrc: "/feature-business-app.png",
      imageAlt: "Business Growth Feature Screenshot",
      reversed: true
    },
    {
      title: "Real-time Tracking",
      description: "Keep track of all your bookings and payments in real-time.",
      bulletPoints: [
        "Stay updated with real-time tracking of your cryptocurrency portfolio, allowing you to monitor price fluctuations and make informed decisions."
      ],
      imageSrc: "/feature-tracking-app.png",
      imageAlt: "Tracking Feature Screenshot",
      reversed: false
    },
    {
      title: "Advanced Encryption",
      description: "Your data is secure with our advanced encryption technology.",
      bulletPoints: [
        "Rest easy knowing your sensitive data is protected with advanced encryption techniques, ensuring the confidentiality and integrity of your information."
      ],
      imageSrc: "/feature-encryption-app.png",
      imageAlt: "Encryption Feature Screenshot",
      reversed: true
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
        <FeatureHero />
        <FindBookPlaySection />
        
        {/* Feature Sections */}
        {features.map((feature, idx) => (
          <FeatureSection 
            key={idx}
            title={feature.title}
            description={feature.description}
            bulletPoints={feature.bulletPoints}
            imageSrc={feature.imageSrc}
            imageAlt={feature.imageAlt}
            reversed={feature.reversed}
          />
        ))}
        
        {/* FAQ Sections */}
        <FaqSection title="General Questions" faqs={generalFaqs} />
        <FaqSection title="Payment Questions" faqs={paymentFaqs} />
      </main>
      <Footer />
    </div>
  );
}