import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import Link from "next/link";

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Unique Features of Our Coaching</h1>
            <p className="text-gray-700 mb-6">
              At iimpossible, we pride ourselves on offering coaching that stands out from the rest.
              Here are the unique features that make our approach exceptional:
            </p>
            <div className="space-y-4 mb-8 text-gray-700">
              <div>
                <strong>Extremely Personalized Coaching with Individual Study Plans:</strong> We
                create a highly personalized study plan tailored to each student's needs, ensuring
                focused guidance, support, and optimized CAT exam preparation.
              </div>
              <div>
                <strong>IIM or XLRI Alumni as Personal Mentors:</strong> Our program includes
                one-on-one mentoring sessions with alumni from prestigious institutions. Through
                weekly review and planning, mentors provide expert strategies and keep students on
                track.
              </div>
              <div>
                <strong>Specially Curated Practice Questions Based on Student’s Current Proficiency:</strong>{" "}
                We provide practice questions aligned with each student’s strengths and weaknesses,
                ensuring they focus on areas requiring improvement and build confidence progressively.
              </div>
              <div>
                <strong>Best Methods and Strategies for Optimizing Your Performance:</strong> We
                cover crucial exam aspects like time management, question selection, and handling
                test anxiety, so you’re prepared to excel under real exam conditions.
              </div>
              <div>
                <strong>Concept-Based Mastery of Topics:</strong> Instead of rote learning, we focus
                on building a deep understanding of each concept and its applications, enabling
                students to tackle a variety of questions with ease.
              </div>
            </div>

            {/* Link to Syllabus Download */}
            <p className="text-gray-700 mb-6">
              For a comprehensive overview of the topics we cover,{" "}
              <Link href="/contact" className="text-red-600 underline">
                click here to download our syllabus
              </Link>
              
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
