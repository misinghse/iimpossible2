import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export default function OverviewPage() {
  return (
    <>
      <Navbar />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-4xl font-bold mb-6">
              IIM Possible: AI-Powered, Personalized CAT Coaching for Your Success
            </h1>

            <p className="text-gray-700 mb-6">
              At IIM Possible, we don’t believe in generic coaching. We believe in you—your unique
              strengths, learning style, and pace. Research shows that students excel when their
              education is tailored to them, and that’s exactly what we do.
            </p>

            {/* AI-Powered Personalization */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              AI-Powered Personalization: Your Roadmap to CAT Success
            </h2>
            <p className="text-gray-700 mb-6">
              <strong>AI-Driven Study Plan:</strong> Our advanced AI-powered system analyzes your
              strengths, weaknesses, opportunities, and threats (SWOT) to create a personalized
              study plan that works just for you. No two students are exactly the same, and neither
              are our learning paths.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Concept-Based Mastery:</strong> Success isn’t about rushing through
              topics—it’s about mastering them. With unlimited concept classes, we ensure you
              understand every topic inside out before moving ahead.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Competency-Driven Progress Tracking:</strong> Your performance is
              continuously assessed at key intervals, with AI-powered insights helping us refine
              your plan to maximize steady and structured improvement.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Beyond Just Syllabus Completion:</strong> We don’t believe in mere syllabus
              completion. Our individualized approach ensures that your learning journey is
              effective, structured, and goal-oriented—helping you build real confidence in
              tackling the CAT.
            </p>

            {/* Program Designed for Success */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              A Program Designed for Your Success
            </h2>
            <p className="text-gray-700 mb-6">
              This isn’t just another coaching class—it’s an intelligent, adaptive, and
              results-driven success program. From personalized mentoring by IIM alumni to
              AI-powered strategies, we equip you with everything you need to reach your highest
              potential.
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Your pace. Your strengths. Your success.</li>
              <li>With AI + expert mentoring, IIM is truly possible!</li>
            </ul>
            <p className="text-gray-700 mb-6">
              We build your AI-personalized CAT preparation strategy for your success.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
