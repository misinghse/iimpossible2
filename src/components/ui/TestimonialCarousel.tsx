"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamically import react-slick to prevent SSR issues
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function TestimonialCarousel() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  if (!isClient) return null; // Prevents SSR error

  return (
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">Success Stories</h2>
      <Slider {...sliderSettings}>
        <div className="p-6 bg-white shadow-lg rounded-xl">
          <p className="text-lg italic mb-4">
            "IIM Possible transformed my CAT preparation!"
          </p>
          <h3 className="font-semibold">— Vishesh</h3>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-xl">
          <p className="text-lg italic mb-4">
            "The mentorship at IIM Possible is unlike anything else!"
          </p>
          <h3 className="font-semibold">— Atharva</h3>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-xl">
          <p className="text-lg italic mb-4">
            "Their AI-powered study plan and mock tests helped me strategize better!"
          </p>
          <h3 className="font-semibold">— Yash</h3>
        </div>
      </Slider>
    </div>
  );
}
