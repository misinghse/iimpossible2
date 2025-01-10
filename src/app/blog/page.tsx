"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Blog Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Our Mission & Methodology</h1>
            <p className="text-gray-700 text-lg italic">
              Transforming potential into success at IIMs and other top B-schools.
            </p>
          </div>

          {/* Mission Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg">
              "Our mission is to break barriers in CAT preparation through a unique, tailored, and
              flexible approach—enabling every aspirant, regardless of their starting point, to
              transform their potential into success at IIMs and other top B-schools."
            </p>
          </section>

          {/* Methodology Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Our Methodology</h2>
            <p className="text-gray-700 text-lg mb-6">
              It will answer your question <strong>“why IIMpossible?”</strong>
            </p>
            <p className="text-gray-700 mb-6">
              At IIMpossible, we redefine CAT preparation with a laser focus on you—the student.
              Recognizing that every aspirant is unique, we go beyond one-size-fits-all coaching to
              provide a personalized, modular, and self-paced learning experience. Here’s what makes
              us the best choice for serious CAT aspirants:
            </p>

            {/* Methodology Points */}
            <ul className="list-decimal pl-6 space-y-4 text-gray-700">
              <li>
                <strong>Tailored Study Plans:</strong> Every student gets a customized preparation
                roadmap based on their strengths, weaknesses, and goals. Focus where you need it
                most, save time, and boost efficiency.
              </li>
              <li>
                <strong>Individual Doubt-Clearing Sessions:</strong> Get dedicated one-on-one
                sessions with expert mentors to address your doubts, ensuring no concept goes
                unexplored.
              </li>
              <li>
                <strong>Weekly Reviews & Personalized Mentoring:</strong> Regular reviews and
                progress tracking with your personal mentor help you stay on course and adapt your
                plan as needed.
              </li>
              <li>
                <strong>Key Exam Strategies Designed for You:</strong> Our mentors devise proven
                test-taking strategies tailored to your specific learning style, helping you
                optimize speed, accuracy, and confidence.
              </li>
              <li>
                <strong>Modular Learning at Your Pace:</strong> Learn at a pace that suits your
                schedule and comfort, ensuring a balance between preparation, academics, and work
                commitments.
              </li>
              <li>
                <strong>Results-Driven Approach:</strong> We’re on a mission to transform aspirants
                into achievers. Unlike traditional coaching, we emphasize results over rigid
                routines, focusing on what works best for you.
              </li>
              <li>
                <strong>Unparalleled Flexibility:</strong> Access content, mentors, and resources
                anytime, anywhere. No more missing classes or struggling to keep up with group
                batches.
              </li>
            </ul>

            <p className="text-gray-700 mt-6">
              With IIMpossible, CAT success is no longer about fitting into a rigid framework but
              building a preparation strategy that fits you. Achieve your B-school dreams with
              confidence, clarity, and a coaching program truly designed to make success possible
              for all.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
