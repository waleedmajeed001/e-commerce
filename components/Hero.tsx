'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  "/banner1.png",
  "/banner2.png",
  "/banner3.png"
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 blur-none' : 'opacity-0 blur-md'
            }`}
          >
            <Image src={src} alt={`Slide ${index + 1}`} fill className="object-cover brightness- rounded-lg" />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-white scale-110' : 'bg-gray-500'}`}
          ></button>
        ))}
      </div>
    </section>
  );
}
