// pages/why-iimpossible.tsx
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { ContactForm } from "@/components/ui/ContactForm";

const teamMembers = [
  {
    name: "Sanjiv Kumar",
    title: "Founder & Chief Mentor",
    image: "/images/sanjiv.jpg",
    description:
      "Sanjiv, an MBA from IIM Calcutta, has 20+ years of experience in BFSI with HDFC, ICICI, and Kotak. Passionate about education, he has been teaching CAT for over seven years, blending real-world expertise with mentorship to guide students to success.",
  },
  {
    name: "Shashank K Srivastava",
    title: "Co-founder",
    image: "/images/shashank.jpg",
    description:
      "Shashank, with an MBA from IIM Bangalore, has led roles at Wipro Technologies and LogicCMG. A former professor at Sharda University, he combines industry insights with academic knowledge to offer strategic guidance.",
  },
  {
    name: "Abhinav Jain",
    title: "Strategic Partner",
    image: "/images/abhinav.jpg",
    description:
      "Abhinav, SVP at CoinDCX, and ex-CFO of PharmEasy, holds an MBA and CA. He mentors students using his vast corporate experience to sharpen decision-making skills in real-world contexts.",
  },
];

const features = [
  {
    image: "/images/personalized.jpg",
    title: "Personalized",
    description: [
      "Custom AI-driven study plans based on your progress.",
      "Mentoring by IIM alumni with real-world insights.",
    ],
  },
  {
    image: "/images/Modular.jpg",
    title: "Modular",
    description: [
      "Focus on your strengths with tailored modules.",
      "Selective module options to enhance your learning experience.",
    ],
  },
  {
    image: "/images/self_paced.jpg",
    title: "Self-paced, Concept-based",
    description: [
      "Learn at your own speed.",
      "Flexible learning schedule.",
    ],
  },
  {
    image: "/images/mentorship.jpg",
    title: "Mentorship-based",
    description: [
      "Weekly or bi-weekly reviews to track progress.",
      "Exclusive strategies from those who’ve been through it all.",
    ],
  },
];

const steps = [
  "Technology-driven screening test - strengths & weaknesses",
  "Personalised study plan",
  "Live online classes with recorded backups",
  "Individual doubt clearing sessions",
  "Weekly/Bi-weekly mentorship sessions",
  "Strategic alterations in the study plan to score 99+ percentile",
];

const WhyIIMPossiblePage = () => {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [highlightedStep, setHighlightedStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    const resizeHandler = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", resizeHandler);

    const interval = setInterval(() => {
      setCurrentFeatureIndex((prev) => (prev + 1) % features.length);
      setHighlightedStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="px-4 md:px-20 py-10 space-y-14">
 {/* Banner Section */}
<section className="w-full relative text-center overflow-hidden">
{/* Desktop Banner + Contact Form Side by Side */}
<div className="hidden md:flex gap-6 px-6 items-start">
  {/* Left - Banner */}
  <div className="w-1/2">
    <div className="w-full h-full rounded-xl overflow-hidden shadow-md">
      <Image
        src="/images/IIM_Possible_Web_Banner.jpg"
        alt="IIM Possible Banner"
        width={800}
        height={600}
        className="w-full h-full object-cover"
        priority
      />
    </div>
  </div>

  {/* Right - Contact Form (Plain, No Box) */}
  <div className="w-1/2 flex flex-col justify-start">
    <div className="w-full">
      <ContactForm />
    </div>
  </div>
</div>





  {/* Mobile Banner + Contact Form Stacked */}
  <div className="md:hidden flex flex-col gap-4 items-center px-4">
    <div className="w-full">
      <Image
        src="/images/IIM_Possible_Mobile_Banner.jpg"
        alt="IIM Possible Banner"
        width={500}
        height={300}
        className="w-full h-auto object-cover rounded-xl shadow-md"
        priority
      />
    </div>
    <div className="w-full">
      <ContactForm />
    </div>
  </div>
</section>


        {/* About Section */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">About Us</h2>
          <p className="section-text">
            IIM Possible is a <span className="highlight-red">personalized CAT coaching program backed by technology</span> that helps students optimize performance with a specialized approach.
          </p>
          <p className="section-text">
            From a unique screening test to self-paced learning and mentorship from IIM alumni, every student gets tailored support for maximum success.
          </p>
        </section>

        {/* Why Us Section */}
        <section className="text-center">
          <h2 className="section-title">Why Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.05 }} className="feature-card">
                <Image src={feature.image} alt={feature.title} width={300} height={200} className="mx-auto rounded-lg" />
                <h3 className="feature-title">{feature.title}</h3>
                <ul className="feature-description">
                  {feature.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Mobile Slider */}
          {/* <div className="md:hidden mt-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeatureIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
                className="feature-card"
              >
                <Image
                  src={features[currentFeatureIndex].image}
                  alt="feature"
                  width={400}
                  height={300}
                  className="mx-auto rounded"
                />
                <h3 className="feature-title">{features[currentFeatureIndex].title}</h3>
                <ul className="feature-description">
                  {features[currentFeatureIndex].description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div> */}
        </section>

        {/* Success Stories */}
        <section className="text-center">
          <h2 className="section-title">Success Stories</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="bg-red-100 p-6 rounded-lg shadow-md">
              <h3 className="success-highlight">75%</h3>
              <p className="mt-2">of students scored 99+ percentile</p>
            </div>
            <div className="bg-red-100 p-6 rounded-lg shadow-md">
              <h3 className="success-highlight">45%</h3>
              <p className="mt-2">are now in top 5 B-schools of India</p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="text-center">
  <h2 className="section-title">Our Process</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 text-center">
    {steps.map((step, index) => (
      <div
        key={index}
        className={`flex flex-col items-center justify-center px-4 ${index === highlightedStep ? "font-semibold text-black" : "text-gray-600"}`}
      >
        <h3 className="text-lg font-semibold mb-1">Step</h3>
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mb-2 ${index === highlightedStep ? "bg-red-600 text-white" : "bg-red-300 text-red-900"}`}
        >
          {index + 1}
        </div>
        <p className={`text-sm ${index === highlightedStep ? "text-black" : "text-gray-600"}`}>{step}</p>
      </div>
    ))}
  </div>
</section>

        {/* Team Section */}
        <section className="text-center">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <div key={i} className="team-member">
                <Image src={member.image} alt={member.name} width={250} height={250} className="member-image" />
                <h3 className="member-name">{member.name}</h3>
                <p className="member-title">{member.title}</p>
                <p className="member-description">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mt-10">
          <h2 className="text-xl font-semibold mb-3">Ready to Begin?</h2>
          <a href="/contact">
            <button className="cta-button">Book Free Mentorship</button>
          </a>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default WhyIIMPossiblePage;
