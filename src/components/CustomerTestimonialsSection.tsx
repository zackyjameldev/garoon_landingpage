import React from "react";

export default function CustomerTestimonialsSection() {
  const testimonials = [
    {
      name: "James Smith",
      role: "Accountant",
      image: "/p1.svg",
      text: "GaroonHub has completely transformed the way our team collaborates and manages projects. The platform is intuitive, user-friendly, and has allowed us to streamline our workflows and deliver better results. The support team has been extremely helpful and responsive."
    },
    {
      name: "Emily Davis",
      role: "Freelance Writer",
      image: "/p2.svg",
      text: "Since using GaroonHub, I've been able to keep track of my finances more easily and accurately. It's made a real difference in my business."
    },
    {
      name: "David Brown",
      role: "IT Consultant",
      image: "/p3.svg",
      text: "I'm always looking for ways to simplify my life and work more efficiently. GaroonHub is one tool that has made a real difference for me."
    },
    {
      name: "Robert Lee",
      role: "Small Business Owner",
      image: "/p4.svg",
      text: "As a small business owner, I need a financial management tool that's affordable and efficient. GaroonHub ticks all the boxes for me."
    },
    {
      name: "Olivia Martinez",
      role: "Entrepreneur",
      image: "/p5.svg",
      text: "GaroonHub is an indispensable tool for any entrepreneur looking to take control of their finances and achieve better results."
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      image: "/p6.svg",
      text: "GaroonHub has completely transformed the way our team collaborates and manages projects. The platform is intuitive, user-friendly, and has allowed us to streamline our workflows and deliver better results. The support team has been extremely helpful and responsive. I highly recommend GaroonHub to any business looking to optimize their processes and boost productivity."
    },
    {
      name: "Carlos Gomez",
      role: "Freelance Consultant",
      image: "/p7.svg",
      text: "As a freelancer, I needed a tool that could help me manage my finances and stay organized. GaroonHub has been exactly what I was looking for."
    },
    {
      name: "Maria Rodriguez",
      role: "Consultant",
      image: "/p8.svg",
      text: "I love how easy it is to manage my finances with GaroonHub. It's intuitive and user-friendly, which saves me a lot of time."
    }
  ];

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002029] mb-4">Hear from Our Customers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - read what our happy clients have to say about their experience with GaroonHub!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mx-28">
          {testimonials.slice(0, 6).map((testimonial, idx) => (
            <div key={idx} className="bg-[#fff] rounded-xl border-2 p-6 shadow-sm hover:shadow-md transition duration-300">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full mr-4 object-cover" 
                />
                <div>
                  <h3 className="font-bold text-[#002029]">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm line-clamp-4">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
      
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
    </section>
  );
}
