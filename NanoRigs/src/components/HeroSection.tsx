import React from "react";
import heroImg from "../assets/hero-img.png"
import "../index.css"; // Tailwind + gradient CSS

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white px-8 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-overlay"></div>

      {/* Content */}
      <div className="relative grid md:grid-cols-2 gap-12 max-w-6xl items-center">
        {/* Left Side - Text */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Build Your Dream PC with <span className="text-blue-300">NanoRigs</span>
          </h1>
          <p className="text-lg mb-8 text-gray-200">
            High-performance prebuilt PCs, custom configurations, and reliable repairs—all in one place.
          </p>
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold">
            Shop Now
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <img
            src = {heroImg}
            alt="Custom PC"
            className="w-[450px] max-w-full rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
