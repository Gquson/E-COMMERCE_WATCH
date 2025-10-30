import React from "react";
import Countdown from "../components/Countdown";
import Best from "../components/Best";

const Home = () => {
  return (
    <div className="pt-20">
      <section className="relative h-screen flex items-center justify-center bg-linear-to-br from-yellow-900 via-yellow-800 to-yellow-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-[url('https://wallpapers.com/images/hd/gold-highlight-rolex-tbf1lpsafa9ibhmt.jpg')] bg-cover bg-center"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 tracking-wider animate-fade-in">
            ROYAL LEGACY
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light tracking-wide animate-slide-up">
            Crafting Legacy, One Tick at a Time
          </p>
          <div className="mb-8 animate-slide-up delay-300">
            <Countdown />
          </div>
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg animate-pulse-slow">
            Explore Collection
          </button>
        </div>

        <div className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-yellow-400/30 rounded-full animate-ping-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-16 h-16 border-2 border-yellow-300/20 rounded-full animate-ping-slower"></div>
      </section>

      <Best />

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center text-yellow-500 mb-16">
            Why Choose Royal LEGACY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Craftsmanship",
                desc: "Handcrafted precision with centuries of horological expertise",
                icon: "⚙️",
              },
              {
                title: "Elegance",
                desc: "Timeless designs that transcend generations and trends",
                icon: "👑",
              },
              {
                title: "Heritage",
                desc: "A legacy of excellence since 1895",
                icon: "🏛️",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-linear-to-b from-gray-800 to-black shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-serif font-semibold text-yellow-500 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
