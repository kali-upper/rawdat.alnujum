import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      url: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "أطفال يلعبون بمكعبات ملونة",
    },
    {
      url: "https://images.pexels.com/photos/8613082/pexels-photo-8613082.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "أنشطة فنية وحرف يدوية",
    },
    {
      url: "https://images.pexels.com/photos/8613094/pexels-photo-8613094.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "متعة اللعب في الملعب الخارجي",
    },
    {
      url: "https://images.pexels.com/photos/8613086/pexels-photo-8613086.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "وقت القراءة مع المعلمة",
    },
    {
      url: "https://images.pexels.com/photos/8613087/pexels-photo-8613087.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "فصل الموسيقى والحركة",
    },
    {
      url: "https://images.pexels.com/photos/8613088/pexels-photo-8613088.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "وقت الوجبة الخفيفة الصحية",
    },
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="gallery" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            معرض الصور
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            ألقِ نظرة على بيئة حضانتنا النابضة بالحياة حيث ينبض التعلم بالحياة
            من خلال اللعب، الإبداع، والاستكشاف.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openModal(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl mx-auto">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200 z-10"
              >
                <X className="h-6 w-6" />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <img
                src={images[selectedImage].url}
                alt={images[selectedImage].alt}
                className="w-full h-auto max-h-screen object-contain rounded-lg"
              />

              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white font-medium bg-black bg-opacity-50 rounded-lg px-4 py-2">
                  {images[selectedImage].alt}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
