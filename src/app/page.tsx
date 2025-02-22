'use client';

import Link from "next/link";
import { ArrowRight, Users, GraduationCap, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent } from "@/components/ui/card";
import dynamic from "next/dynamic";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      {/* Fixed Navbar wrapper so that the mobile menu appears full-width */}
      <div className="w-full fixed top-0 left-0 z-50">
        <Navbar />
      </div>

      {/* Add top padding to main so content doesn't hide behind fixed navbar */}
      <main className="pt-20">
        {/* Hero Section with background image */}
        <section
          className="relative text-white py-12 md:py-16 bg-center bg-cover"
          style={{ backgroundImage: "url('/images/banner1.png')" }}
        >
          {/* Overlay to darken the background image for better text visibility */}
          <div className="absolute inset-0 bg-black/50 z-0"></div>

          <div className="relative container mx-auto h-full px-4 flex flex-col md:flex-row items-center justify-center">
            <div className="max-w-5xl w-full text-center md:w-auto whitespace-nowrap">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
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
          </div>
        </section>

        {/* Screening Test Section */}
        <section className="py-16 bg-white shadow-lg rounded-xl mx-4 md:mx-auto md:max-w-5xl text-center border border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 p-6 text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Take the IIM-Possible Screening Test and earn your spot in the most exclusive, result-driven CAT coaching—designed for assured success!
              </h2>
              <ul className="text-lg text-gray-700 mb-6 space-y-2">
                <li>Top 100 students will receive personalized mentoring from IIM alumni</li>
                <li>Modular, self-paced & concept-based learning for 10x efficiency</li>
                <li>Elite coaching that maximizes your percentile & guarantees top B-school calls</li>
                <li>Your shortcut to an IIM seat – one-on-one guidance from those who’ve been there!</li>
              </ul>
              <p className="text-lg font-semibold mb-4">
                📞 Call / Whatsapp: <strong>8709280927</strong>
              </p>
              <p className="italic mb-6">
                This is not just coaching—this is a launchpad to your IIM dream!
              </p>
              <Button size="lg" variant="outline" asChild>
                <Link href="/register">
                  Register now & take the first step toward your future!
                </Link>
              </Button>
            </div>
            <div className="md:w-1/2 p-4">
              <Image
                src="/images/banner1.png"
                alt="Screening Test"
                width={400}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose IIM Possible?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-red-600 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-3">Personalized Coaching</h3>
                  <p className="text-gray-600">
                    Individual attention and customized study plans tailored to your needs.
                  </p>
                  <Button className="mt-4" asChild>
                    <Link href="/personalized-coaching">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <GraduationCap className="h-12 w-12 text-red-600 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-3">Expert Mentors</h3>
                  <p className="text-gray-600">
                    Learn from IIM and XLRI alumni with years of experience.
                  </p>
                  <Button className="mt-4" asChild>
                    <Link href="/expert-mentors">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-12 w-12 text-red-600 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-3">Comprehensive Modules</h3>
                  <p className="text-gray-600">
                    Structured learning path covering all CAT exam sections.
                  </p>
                  <Button className="mt-4" asChild>
                    <Link href="/comprehensive-modules">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Path to Success Section */}
        <section className="py-14 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Your Path to Success</h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-6">
                A career is a significant part of our lives—it influences our daily routines, our personal satisfaction, and our long-term happiness. The decisions you make now can shape the trajectory of your future.
              </p>
              <div className="bg-red-50 p-6 rounded-lg mb-6 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold mb-4 text-center">Ask yourself:</h3>
                <ul className="list-none pl-0 space-y-2 text-left">
                  <li>Do you want a career that challenges and excites you?</li>
                  <li>Are you seeking a role that offers both personal fulfillment and substantial rewards?</li>
                  <li>Do you aspire to be part of a prestigious institution that opens doors to remarkable opportunities?</li>
                </ul>
              </div>
              <Button className="w-full md:w-auto" asChild>
                <Link href="/methodology">
                  Learn About Our Methodology <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
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