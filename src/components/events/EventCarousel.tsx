import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface EventCarouselProps {
  images: string[];
}

const EventCarousel: React.FC<EventCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isAnimatingPrev, setIsAnimatingPrev] = useState(false);
  const [isAnimatingNext, setIsAnimatingNext] = useState(false);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      5000 // Change image every 5 seconds
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setIsAnimatingPrev(true);
    setTimeout(() => setIsAnimatingPrev(false), 300); // Animation duration
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setIsAnimatingNext(true);
    setTimeout(() => setIsAnimatingNext(false), 300); // Animation duration
  };

  return (
    <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl group my-16">
      {/* Carousel slides */}
      <div
        className="flex transition-transform ease-out duration-1000"
        style={{ transform: `translateX(${-currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Image
              src={src}
              alt={`Event image ${index + 1}`}
              width={1920} // High resolution width
              height={1080} // High resolution height
              layout="responsive"
              objectFit="cover"
              quality={80} // Reduce quality slightly for faster loading, maintain visual integrity
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw" // Inform Next.js about image display size
              className="rounded-3xl transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={goToPrevious}
          className={`bg-black/50 text-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-full group-hover:translate-x-0 
            hover:bg-aurora-purple/70 hover:scale-110 hover:shadow-xl hover:ring-1 hover:ring-white 
            ${isAnimatingPrev ? 'scale-110 bg-aurora-purple ring-2 ring-white' : ''}
          `}
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className={`bg-black/50 text-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-full group-hover:translate-x-0 
            hover:bg-aurora-green/70 hover:scale-110 hover:shadow-xl hover:ring-1 hover:ring-white 
            ${isAnimatingNext ? 'scale-110 bg-aurora-green ring-2 ring-white' : ''}
          `}
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full bg-white transition-all duration-300 ${
              currentIndex === idx ? 'scale-125 bg-opacity-100 shadow-md' : 'bg-opacity-50'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Luxurious Overlay Effects */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-3xl">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        {/* Top-left subtle glow */}
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-aurora-blue/20 rounded-full blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
        {/* Bottom-right subtle glow */}
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-aurora-green/20 rounded-full blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
        {/* Dynamic border highlight on hover */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-aurora-green/50 rounded-3xl transition-all duration-500"></div>
      </div>
    </div>
  );
};

export default EventCarousel;
