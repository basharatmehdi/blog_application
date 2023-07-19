import { useState, useEffect } from "react";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";

const Slider = () => {
  const images = [
    "https://res.cloudinary.com/dkas3akvg/image/upload/v1682163913/samples/ecommerce/accessories-bag.jpg",
    "https://res.cloudinary.com/dkas3akvg/image/upload/v1682163926/cld-sample-3.jpg",
    "https://res.cloudinary.com/dkas3akvg/image/upload/v1682163925/cld-sample.jpg",
    "https://res.cloudinary.com/dkas3akvg/image/upload/v1682163915/samples/landscapes/nature-mountains.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const firstImage = currentIndex === 0;
    const nextImage = firstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(nextImage);
  };

  const nextSlide = () => {
    const nextImage = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(nextImage);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="h-[40vh] md:h-[50vh] mb-4 md:mb-6 lg:mb-8 overflow-hidden rounded-lg relative group">
      <img
        key={currentIndex}
        src={`${images[currentIndex]}`}
        alt="image"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black"></div>
      <div className="hidden group-hover:flex absolute top-2/4 bottom-2/4 items-center justify-between w-full px-3">
        <button
          onClick={prevSlide}
          className="text-2xl p-0.5 rounded-full border border-gray-400 hover:bg-[#00ac8a]/30"
        >
          <TiArrowLeft className="" />
        </button>
        <button
          onClick={nextSlide}
          className="text-2xl p-0.5 rounded-full border border-gray-400 hover:bg-[#00ac8a]/30"
        >
          <TiArrowRight className="" />
        </button>
      </div>
      <div className="absolute bottom-3 flex items-center justify-center w-full">
        {images.map((image, index) => (
          <div className="px-2" key={index}>
            <div
              onClick={() => goToSlide(index)}
              className={`bg-white ${
                currentIndex === index ? "w-3 h-2" : "w-1 h-1"
              } rounded-full cursor-pointer duration-200 ease-in-out`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
