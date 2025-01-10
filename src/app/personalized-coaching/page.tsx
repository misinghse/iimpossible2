import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";

export default function PersonalizedCoachingPage() {
  return (
    <>
      <Navbar />
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <section className="mb-12">
            <h1 className="text-4xl font-bold mb-6">Why Personalized Modular Self-Paced Programs Triumph Over Traditional Coaching</h1>
            <p className="text-gray-700 mb-6">
              In the competitive world of CAT preparation, traditional offline batch-based coaching and generic online programs often fail to address the unique needs of every aspirant. This is where personalized, modular, self-paced coaching emerges as a game-changing solution. Here’s why:
            </p>
            <Image
              src="/images/personcoach.png" // Adjust the path as needed
              alt="Personalized Coaching"
              width={300}
              height={150}
              className="rounded-md mb-6"
            />
          </section>

          {/* Content Sections */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">1. Customized Learning Experience</h2>
            <p className="text-gray-700 mb-4">
              Traditional coaching follows a one-size-fits-all model, where every student is expected to keep pace with a batch. However, every aspirant comes with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Unique strengths and weaknesses.</li>
              <li>Different levels of preparation and understanding.</li>
            </ul>
            <p className="text-gray-700 mt-4">
              In a personalized modular program:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Tailored study plans address individual learning gaps.</li>
              <li>Time is allocated exactly where the student needs it—whether mastering Quant fundamentals or refining Reading Comprehension speed.</li>
            </ul>
            <p className="text-gray-700 mt-4">
              This ensures targeted improvement and maximizes efficiency.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">2. Self-Paced Flexibility</h2>
            <p className="text-gray-700 mb-4">
              In offline coaching, students must stick to rigid class schedules, leading to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Missed classes due to personal or professional commitments.</li>
              <li>Information overload during long sessions.</li>
            </ul>
            <p className="text-gray-700 mt-4">
              In contrast, a self-paced model allows students to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Study at their own convenience—anytime, anywhere. No need to waste time in travel to attend classes.</li>
              <li>Revisit concepts multiple times until fully understood.</li>
            </ul>
            <p className="text-gray-700 mt-4">
              This flexibility is especially valuable for working professionals and students managing tight schedules.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">3. Focus on Concept Mastery, Not Rote Learning</h2>
            <p className="text-gray-700 mb-4">
              Traditional batch-based coaching often prioritizes speed over depth, racing through topics to finish the syllabus. This approach leaves many students:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Confused about core concepts.</li>
              <li>Struggling to apply knowledge in mock tests and the actual exam.</li>
            </ul>
            <p className="text-gray-700 mt-4">
              A modular coaching system breaks down the syllabus into manageable, concept-based modules. Students master one concept at a time before moving to the next, ensuring deeper understanding and practical application.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
