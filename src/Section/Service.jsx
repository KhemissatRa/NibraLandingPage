import React from 'react';
import { Element } from 'react-scroll';

export default function Service() {
  return (
    <Element name="Services" className="bg-white px-6 py-20 text-black">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[35px] text-orange-600 font-bold text-center my-8">Our Services</h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl">
          We offer a wide range of services to cater to all your needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
          {[
            {
              img: '/Icon (1).png',
              title: 'Building',
              desc: 'Last News About Homes Economy in Taref...',
            },
            {
              img: '/Icon (2).png',
              title: 'Jobs',
              desc: 'Last Jobs Posted in El-Taref...',
            },
            {
              img: '/Icon (3).png',
              title: 'Info',
              desc: 'General Information About Tech Jobs, Tourism...',
            },
            {
              img: '/Icon (4).png',
              title: 'Economy',
              desc: 'Information About The Economic Situation of El Taref...',
            },
            {
              img: '/Icon (5).png',
              title: 'Tourist',
              desc: 'All About Our Wilaya’s Tourist News...',
            },
            {
              img: '/Icon (4).png',
              title: 'News',
              desc: 'News Day by Day of El-Taref...',
            },
          ].map((service, index) => (
            <div key={index} className="flex flex-col text-center items-center p-4 bg-gray-50 rounded shadow-sm hover:shadow-md transition-shadow duration-300">
              <img src={service.img} alt={service.title} className="w-16 h-16 mb-4" />
              <h2 className="text-xl text-[#0F38A1] font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}
