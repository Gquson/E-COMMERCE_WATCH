import React from "react";
const About = () => {
  return (
    <div className="pt-24 min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-yellow-500 mb-6">
            OUR ROYAL HERITAGE
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Since 1895, Royal Timepieces has been crafting exceptional watches
            that embody the perfect fusion of traditional craftsmanship and
            innovative horology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            {[
              {
                year: "1969",
                title: "Foundation",
                desc: "Established in Geneva by master watchmaker Jean-Luc Royal",
              },
              {
                year: "1985",
                title: "Royal Appointment",
                desc: "Became official timekeeper for European royalty",
              },
              {
                year: "2003",
                title: "Innovation Era",
                desc: "Pioneered the first automatic chronograph movement",
              },
              {
                year: "2018",
                title: "Evolving Excellence",
                desc: "Transforming chronograph functionality with advanced automatic engineering",
              }

            ].map((item, index) => (
              <div key={index} className="flex space-x-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-yellow-600 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  <div className="w-0.5 h-full bg-yellow-300 mt-2"></div>
                </div>
                <div className="flex-1 pb-8">
                  <div className="text-2xl font-serif font-bold text-yellow-500 mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-800 rounded-2xl shadow-2xl p-8">
            <img
              src="https://images.unsplash.com/photo-1630243286373-b3e295683fc7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9sZCUyMGJsYWNrJTIwZ29sZCUyMHdhdGNofGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
              alt="Watchmaking Craft"
              className="w-full h-50 object-cover rounded-xl mb-6"
            />
            <h2 className="text-3xl font-serif font-semibold text-yellow-500 mb-4">
              Craftsmanship Excellence
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Each Royal Timepiece undergoes 300 hours of meticulous
              craftsmanship, with every component hand-finished to perfection.
              Our master watchmakers combine centuries-old techniques with
              modern innovation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "👑",
              title: "Excellence",
              desc: "Uncompromising quality in every detail",
            },
            {
              icon: "⚙️",
              title: "Precision",
              desc: "Swiss-made movements with chronometer certification",
            },
            {
              icon: "💎",
              title: "Legacy",
              desc: "Timepieces designed to last generations",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-serif font-semibold text-yellow-500 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-400">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
