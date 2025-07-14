import React, { useState, useEffect } from 'react';
import Img1 from '../../assets/images/banner1.jpeg';
import Img2 from '../../assets/images/banner2.jpg';
import Img3 from '../../assets/images/banner3.webp';
import Img4 from '../../assets/images/banner4.jpg';
import Img5 from '../../assets/images/banner5.webp';
import MarginX10 from '../shared/MarginX10'

const bannerImages = [Img1, Img2, Img3, Img4, Img5];

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? bannerImages.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
     <MarginX10>
   <div style={{ marginTop: "40px", width: "100%" }} className="container-box">
      <div className="relative w-full h-[56.25vw] max-h-[70vh] mx-auto bg-black overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {bannerImages.map((image, index) => (
            <div key={index} className="min-w-full h-full">
              <img
                src={image}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>

        {/* Slider Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
        >
          ❯
        </button>
      </div>
    </div>
    </MarginX10>
  );
}

export default Banner;

