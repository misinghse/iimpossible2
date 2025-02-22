'use client';

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import dynamic from "next/dynamic";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Dynamically import react-slick to avoid SSR issues
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const testimonials = [
  {
    name: "Vishesh Bhargava, IIM Lucknow",
    image: "/images/vishesh.jpeg",
    quote:
      "IIM Possible transformed my CAT preparation! The personalized study plan helped me focus on my weak areas while maximizing my strengths. The adaptive learning approach ensured I was always challenged at just the right level. Thanks to this structured yet flexible approach, I cracked CAT with confidence!",
  },
  {
    name: "Atharva Arya, XLRI",
    image: "/images/atharva.jpeg",
    quote:
      "The mentorship at IIM Possible is unlike anything else. The mentors don’t just teach; they guide you like a friend and a coach. Every doubt, no matter how small, was addressed quickly. The personalized attention I received here played a huge role in my 99+ percentile score!",
  },
  {
    name: "Yash Kumar, IIM Bangalore",
    image: "/images/yash.jpeg",
    quote:
      "What truly set IIM Possible apart for me was their AI-powered study plan and mock tests. They weren’t just practice tests—they analyzed my performance in detail, pointing out hidden weaknesses and helping me strategize better. The simulated CAT experience prepared me mentally for the actual exam day!",
  },
];

export default function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section with Full-Height Image */}
        <section className="relative bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white py-12 md:py-16">
          <div className="container mx-auto h-full px-4 flex flex-col md:flex-row items-center justify-between">
            {/* Text Content */}
            <div className="max-w-xl text-center md:text-left md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                IIM Possible: AI-Powered, Personalized CAT Coaching for Your Success
              </h1>
              <p className="text-lg md:text-xl mb-6">
                AI-Powered Personalization: Your Roadmap to CAT Success
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/overview">
                  Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Full-Height Image */}
            <div className="md:w-1/2 h-[450px] md:h-[550px] mt-8 md:mt-0 flex justify-center items-center">
              <Image
                src="/images/banner1.png" // Ensure the image is placed in public/images/
                alt="AI-Powered Coaching"
                width={500}
                height={500}
                className="rounded-lg shadow-lg object-cover h-full w-auto"
                priority
              />
            </div>
          </div>
        </section>

        {/* ✅ New Banner Section WITH IMAGE */}
        <section className="py-16 bg-white shadow-lg rounded-xl mx-4 md:mx-auto md:max-w-5xl text-center border border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Text Content */}
            <div className="md:w-1/2 p-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Take the IIM-Possible Screening Test and earn your spot in the most exclusive, result-driven CAT coaching—designed for assured success!
              </h2>
              <ul className="text-lg text-gray-700 mb-6 space-y-2 text-left">
                <li>🎓 Top 100 students will receive personalized mentoring from IIM alumni</li>
                <li>💡 Modular, self-paced & concept-based learning for 10x efficiency</li>
                <li>🏆 Elite coaching that maximizes your percentile & guarantees top B-school calls</li>
                <li>🚀 Your shortcut to an IIM seat – one-on-one guidance from those who’ve been there!</li>
              </ul>
              <p className="text-lg font-semibold mb-4">📞 Call / Whatsapp: <span className="font-bold">8709280927</span></p>
              <p className="italic mb-6">This is not just coaching—this is a launchpad to your IIM dream!</p>
              <Button size="lg" variant="outline" asChild>
                <Link href="/register">
                  Register now & take the first step toward your future! <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* IMAGE in Second Banner */}
            <div className="md:w-1/2 p-4">
              <Image
                src="/images/banner1.png" // Use same or a different image here
                alt="Screening Test"
                width={500}
                height={500}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-14 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Your Path to Success</h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-6">
                  A career is a significant part of our lives—it influences our daily routines, our
                  personal satisfaction, and our long-term happiness. The decisions you make now can
                  shape the trajectory of your future.
                </p>
                <div className="bg-red-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4">Ask yourself:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Do you want a career that challenges and excites you?</li>
                    <li>Are you seeking a role that offers both personal fulfillment and substantial rewards?</li>
                    <li>
                      Do you aspire to be part of a prestigious institution that opens doors to
                      remarkable opportunities?
                    </li>
                  </ul>
                </div>
                <Button className="w-full md:w-auto" asChild>
                  <Link href="/methodology">
                    Learn About Our Methodology <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-14 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Success Stories</h2>
            <Slider {...sliderSettings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 mx-auto rounded-full mb-4"
                  />
                  <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
