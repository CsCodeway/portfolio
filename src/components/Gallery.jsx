import { useState, useEffect } from "react";
import img1 from "../assets/blog-1.jpg";
import img2 from "../assets/blog-2.jpg";
import img3 from "../assets/blog-3.jpg";
import img4 from "../assets/folio-1.jpg";

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      goToPrevious();
    } else if (event.key === "ArrowRight") {
      goToNext();
    }
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentImageIndex]);

  return (
    <div className="relative">
      <div className="flex items-center justify-center">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="mx-auto rounded-lg h-56 sm:h-64 md:h-72 lg:h-96 w-screen"
        />
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`h-2 w-2 rounded-full bg-gray-500 ${
              currentImageIndex === index ? "bg-gray-800" : ""
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

const Gallery = () => {
  const images = [img1, img2, img3, img4];

  return (
    <div className="flex items-center justify-center my-20">
      <div className="text-center w-[70%] flex flex-col items-center justify-center">
        <div className="w-[70%]">
          <p>Gallery</p>
          <h2 className="capitalize text-gray-900 text-2xl font-medium">
            What i build
          </h2>
          <p className="text-gray-500 mt-5 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsa,
            consequuntur a sint cumque sit adipisci aliquid voluptates. Qui,
            culpa!
          </p>
        </div>
        <Carousel images={images} />
      </div>
    </div>
  );
};

export default Gallery;
