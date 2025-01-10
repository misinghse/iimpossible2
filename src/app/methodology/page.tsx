import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export default function MethodologyPage() {
  return (
    <>
      <Navbar />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Our Methodology</h1>
            <p className="text-gray-700 mb-6">
              At iimpossible, we recognize that every student is different, and so is their journey
              to success. That's why we’ve developed a unique methodology designed to empower each
              aspirant with the personalized support and strategies they need to excel in the CAT
              exam.
            </p>
            <p className="text-gray-700 mb-6 font-semibold">
              Our approach is built around the following principles:
            </p>
            
            <ol className="list-decimal pl-6 text-gray-700 space-y-4 mb-6">
              <li>
                <strong>Personalized Learning</strong>: We tailor our coaching to fit each student’s
                specific needs, ensuring a study plan that works best for them.
              </li>
              <li>
                <strong>Self-Paced Mastery</strong>: We focus on mastering concepts instead of
                skimming through them, allowing students to move at their own pace.
              </li>
              <li>
                <strong>Modular Course Structure</strong>: Our course is divided into modules, so
                students only pay for the areas they actually need help with (Arithmetic, Geometry,
                Algebra, etc.).
              </li>
              <li>
                <strong>Customized Practice and Feedback</strong>: Practice questions are tailored
                to each student’s proficiency, ensuring steady, personalized growth.
              </li>
              <li>
                <strong>Efficiency: No Wasted Time or Effort</strong><br />
                Batch-based coaching dedicates equal time to all topics, whether a student needs it
                or not. This wastes precious time on areas where the student already excels.<br />
                <em>With personalized coaching:</em><br />
                • Students focus only on areas requiring attention.<br />
                • The program adapts dynamically to their progress.<br />
                This leads to smarter preparation and faster results.
              </li>
              <li>
                <strong>Cost-Effectiveness &amp; Value for Money</strong><br />
                While traditional coaching comes with high costs for batch-based lectures and fixed
                schedules, a modular self-paced program:<br />
                • Provides greater value by focusing on individual needs.<br />
                • Cuts costs by eliminating unnecessary components.<br />
                • Students pay for what they actually need—personalized, result-oriented guidance.
              </li>
              <li>
                <strong>Enhanced Accountability and Support</strong><br />
                In traditional setups, students often feel lost in the crowd. Personalized programs
                offer:<br />
                • One-on-one mentorship for continuous progress tracking.<br />
                • Regular feedback to ensure aspirants stay on course.<br />
                This combination of personal attention and a structured plan boosts confidence and
                motivation.
              </li>
              <li>
                <strong>Technology-Driven Learning</strong><br />
                Modern self-paced programs leverage technology to create a rich learning experience:<br />
                • Adaptive learning platforms tailor content based on real-time performance.<br />
                • Online mock tests and analytics help students gauge progress and fine-tune strategies.<br />
                This makes preparation smarter, faster, and more accurate compared to traditional methods.
              </li>
            </ol>

            <div className="space-y-4 text-gray-700">
              <p>
                <strong>In Summary:</strong><br />
                A personalized, modular, self-paced program:<br />
                ✅ Focuses on individual needs.<br />
                ✅ Provides flexibility without compromising rigor.<br />
                ✅ Encourages concept mastery and targeted learning.<br />
                ✅ Delivers measurable outcomes with greater efficiency and value.<br />
                For serious CAT aspirants, this approach doesn’t just prepare them for an exam—it
                empowers them to succeed.<br />
                <em>"Why follow the crowd when you can follow your own path to success?"</em>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
