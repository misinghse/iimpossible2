import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions (FAQs) - IIM Possible</h1>
            <p className="text-gray-700 mb-6">
              Here’s everything you need to know about IIM Possible, where personalized learning meets unmatched flexibility through our modular course structure!
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-2">1. What is IIM Possible, and how is it unique?</h2>
                <p className="text-gray-700 mb-4">
                  IIM Possible is a premier CAT preparation platform that offers:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>A modular course structure, allowing students to focus on specific areas they need help with an individual study plan for every student.</li>
                  <li>Concept-based mastery of topics.</li>
                  <li>Individual doubt-clearing sessions.</li>
                  <li>Personalized one-on-one mentoring from IIM and XLRI alumni.</li>
                  <li>Comprehensive GD and PI preparation, tailored for individual needs.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">2. What does the modular course structure mean?</h2>
                <p className="text-gray-700 mb-4">
                  Our modular structure allows students to pick and choose specific topics or sub-topics within a section, such as:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    <strong>Verbal Ability and Reading Comprehension (VARC):</strong> Opt for just Reading Comprehension if that's your area of concern, or focus on other specific areas of Verbal Ability like Para Jumble, Para Summary, and Sentence Elimination.
                  </li>
                  <li>
                    <strong>Quantitative Ability (QA):</strong> Select individual modules like Algebra, Arithmetic, or Geometry instead of enrolling for the entire Quant section.
                  </li>
                </ul>
                <p className="text-gray-700">This tailored approach ensures you save time and money while focusing on your areas of improvement.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">3. How does the modular approach benefit me?</h2>
                <p className="text-gray-700 mb-4">The modular structure offers:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Complete flexibility: Choose only what you need, whether it’s a single topic, a few modules, or the entire course.</li>
                  <li>Cost-effectiveness: Pay only for the specific modules you require, avoiding unnecessary expenses.</li>
                  <li>Time efficiency: Streamline your preparation by focusing on areas that need improvement, rather than relearning concepts you’re already confident in.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">4. How is IIM Possible different from traditional coaching?</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Topic-specific learning under the modular system with an individual study plan for every student.</li>
                  <li>Personalized mentoring for progress tracking.</li>
                  <li>Customized strategies to ensure focused and efficient preparation.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">5. Can I combine multiple modules across sections?</h2>
                <p className="text-gray-700">
                  Yes! You can create a personalized plan by combining:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Specific modules from VARC (e.g., Reading Comprehension and Verbal Ability).</li>
                  <li>Targeted topics from QA (e.g., Algebra and Arithmetic).</li>
                  <li>Individual modules from DILR (e.g., Logical Reasoning or Data Interpretation).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">6. How does IIM Possible help identify the modules I need?</h2>
                <p className="text-gray-700">
                  We conduct a detailed diagnostic test and skill assessment to identify your strengths and weaknesses. Based on this analysis, we recommend specific modules to ensure a targeted preparation plan.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">7. What topics are covered under each section in the modular structure?</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>VARC:</strong> Reading Comprehension, Para Jumbles, Para Summary, Sentence Completion, Odd One Out.</li>
                  <li><strong>QA:</strong> Algebra, Arithmetic, Geometry, Modern Math, Number System, and more.</li>
                  <li><strong>DILR:</strong> Logical Puzzles, Caselets, Graphs, and Data Interpretation techniques.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">8. Who are the mentors at IIM Possible?</h2>
                <p className="text-gray-700">
                  Our mentors are experienced professionals from top-tier institutes like IIMs and XLRI, offering:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Individualized mentoring to address your unique challenges.</li>
                  <li>Weekly reviews to track progress.</li>
                  <li>Expert guidance for GD and PI preparation.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">9. Can I opt for only GD and PI preparation?</h2>
                <p className="text-gray-700">
                  Yes! If you’ve already cracked CAT and need guidance for GD and PI, you can enroll in our dedicated GD and PI preparation module, which includes mock interviews, GD simulations, and personalized feedback.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">10. How do doubt-clearing sessions work?</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Specific questions or topics.</li>
                  <li>Mock test analysis and error correction.</li>
                  <li>Conceptual clarity and strategy refinement.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">11. What if I need additional modules later?</h2>
                <p className="text-gray-700">
                  You can always add modules to your plan as your preparation progresses, ensuring your study plan adapts to your evolving needs.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">12. Is IIM Possible suitable for working professionals?</h2>
                <p className="text-gray-700">
                  Absolutely! With flexible schedules, modular courses, and online mentoring sessions, we cater to working professionals balancing work and CAT preparation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">13. How do I enroll in IIM Possible?</h2>
                <p className="text-gray-700">
                  Visit our website or contact us directly to register. After enrollment, we’ll assess your needs and help you select the right combination of modules and mentoring support.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">14. Can I get a few free demo classes with IIM Possible before I decide to enroll?</h2>
                <p className="text-gray-700">
                  Yes. You can get up to three free demo classes. Just fill up the contact form for us to arrange the same.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
