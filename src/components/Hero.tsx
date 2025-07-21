import React from "react";
import { Heart, Star, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="animated-gradient-background min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Stars Background */}
      <div className="stars-container">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-blue-600 mb-6 leading-tight">
            مرحباً بك في
            <br />
            <span className="text-yellow-500">روضة النجوم</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            حيث يتألق كل طفل! 🌟 نحن نقدم بيئة رعاية وآمنة وممتعة حيث يمكن
            لأطفالك الصغار التعلم والنمو واكتشاف مواهبهم الفريدة من خلال التعلم
            القائم على اللعب.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              تعرف علينا أكثر
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              تواصل معنا
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
