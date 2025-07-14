import React from 'react';
import { Element } from 'react-scroll';
export default function About() {
  return (
    <div name="about" className="bg-white">
      <section className="text-center flex flex-col justify-center items-center px-8 py-16">
        <div className="text-black max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Nibra</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Nibra is a comprehensive platform designed to serve the needs of the El-Taref community. 
            Our mission is to provide a seamless experience for citizens, offering a range of services 
            and information at their fingertips.
          </p>
          <a
            href="https://www.facebook.com/nibra.technology.ltd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-600 text-white px-6 py-3 rounded hover:bg-orange-700 transition-colors duration-300"
          >
            Learn More
          </a>
        </div>

        <div className="mt-12">
          <img
            src="/Vector 6.png"
            alt="Decorative illustration for Nibra"
            className="w-full max-w-md object-contain"
          />
        </div>
      </section>
    </div>
  );}