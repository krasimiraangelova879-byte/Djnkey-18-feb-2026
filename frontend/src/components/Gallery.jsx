import React from "react";

// Import images
import img1 from "../assets/gallery/IMG_2242.jpeg";
import img2 from "../assets/gallery/IMG_2243.jpeg";
import img3 from "../assets/gallery/IMG_2244.jpeg";
import img4 from "../assets/gallery/IMG_2245.jpeg";
import img5 from "../assets/gallery/IMG_2246.jpeg";
import img6 from "../assets/gallery/IMG_2247.jpeg";
import img7 from "../assets/gallery/IMG_2248.jpeg";
import img8 from "../assets/gallery/IMG_2249.jpeg";
import img9 from "../assets/gallery/IMG_2250.jpeg";
import img10 from "../assets/gallery/IMG_2251.jpeg";
import img11 from "../assets/gallery/IMG_2252.jpeg";

const images = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10, img11
];

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding bg-dark-section">
      <div className="container mx-auto px-4 lg:px-8">
        
        <h2 className="section-heading text-white text-center mb-12">
          Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={image}
                alt={`DJ NKEY ${index + 1}`}
                className="w-full h-[350px] object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
