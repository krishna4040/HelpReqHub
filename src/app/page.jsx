import React from 'react';
import hero1 from "@/assets/hero1.png"
import hero2 from "@/assets/hero2.png"
import hero3 from "@/assets/hero3.png"
import Footer from '@/components/footer';
import Navbar from '@/components/Navbar';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Welcome to EssentialConnect</h1>
        <p className="text-center text-xl mb-8">
          Connecting producers and consumers seamlessly with our smart matching and engaging gamification features.
        </p>

        <div className="flex justify-center space-x-4 mb-12">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded">
            Browse Items
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
            List Your Goods
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              image: hero1,
              alt: "Farmer with produce",
              quote: "EssentialConnect has significantly improved my sales by connecting me directly with consumers!",
              author: "Farmer Alex"
            },
            {
              image: hero2,
              alt: "Customer with fresh produce",
              quote: "I love the smart matching feature, it helps me find the freshest produce!",
              author: "Customer Jane"
            },
            {
              image: hero3,
              alt: "User enjoying gamification",
              quote: "The gamification elements make the shopping experience fun and rewarding!",
              author: "User Mike"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6 flex flex-col items-center">
              <img src={testimonial.image} alt={testimonial.alt} className="w-full h-48 object-cover rounded-lg mb-4" />
              <p className="text-center italic mb-2">{testimonial.quote}</p>
              <p className="font-semibold">- {testimonial.author}</p>
            </div>
          ))}
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default LandingPage;