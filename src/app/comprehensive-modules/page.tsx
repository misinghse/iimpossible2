import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";

export default function ComprehensiveModulesPage() {
  return (
    <>
      <Navbar />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Comprehensive Modules</h1>

            {/* Section 1 */}
            <section className="mb-12 px-4">
      {/* Section Title */}
      <h2 className="text-3xl font-bold mb-4">
        Program Structure and Modules
      </h2>
      
      {/* Intro Paragraphs */}
      <p className="text-gray-700 mb-4">
        Our “Modular Course Structure” enables students to pick certain modules from each section.
        The option of going for the comprehensive full program also remains but for the aspirants 
        who are clear (with or without our help) about which areas they need help on, our modular 
        structure works better. They can opt for only those modules where they need professional 
        help and guidance, thereby saving significantly on the program fee as well as precious time, 
        instead of spending them on things that they don’t need.
      </p>
      
      <p className="text-gray-700 mb-8">
        This is how we have broken the entire program into different modules:
      </p>
      
      {/* Three-Column Layout */}
      <div className="flex flex-col md:flex-row gap-4">
        
        {/* Column 1: VARC */}
        <div className="flex-1 bg-yellow-50 p-4 rounded-md shadow">
          <h3 className="text-lg font-bold mb-2 text-center">
            Verbal Ability &amp; Reading Comprehension (VARC)
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Verbal Ability (VA)</li>
            <li>Reading Comprehension (RC)</li>
            <li>Critical Reasoning (CR)</li>
          </ul>
        </div>
        
        {/* Column 2: QA */}
        <div className="flex-1 bg-yellow-100 p-4 rounded-md shadow">
          <h3 className="text-lg font-bold mb-2 text-center">
            Quantitative Ability (QA)
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Number System (NS)</li>
            <li>Arithmetic (AM)</li>
            <li>Algebra (ALG)</li>
            <li>Geometry (GEM)</li>
            <li>Probability &amp; Set Theory (PST)</li>
          </ul>
        </div>
        
        {/* Column 3: DILR */}
        <div className="flex-1 bg-yellow-200 p-4 rounded-md shadow">
          <h3 className="text-lg font-bold mb-2 text-center">
            Data Interpretation &amp; Logical Reasoning (DILR)
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Data Interpretation (DI)</li>
            <li>Logical Reasoning - 1 (LR1)</li>
            <li>Logical Reasoning - 2 (LR2)</li>
          </ul>
        </div>
        
      </div>
    </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Modules Overview</h2>
              <p className="text-gray-700 mb-4">
                Each module has been designed to ensure you build a solid foundation in key areas:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Verbal Ability and Reading Comprehension</li>
                <li>Quantitative Ability</li>
                <li>Data Interpretation and Logical Reasoning</li>
              </ul>
              <h2 className="text-3xl font-bold mb-4">Verbal Ability and Reading Comprehension</h2>

              <Image
                src="/images/VARC_Modules.png"
                alt="Modules Overview"
                width={800}
                height={450}
                className="rounded-md mb-6"
              />
              <p className="text-gray-700 mb-4">
              A student can opt for one of more modules individually or go for the all the modules together. For example, a student may think that he or she requires help only in Reading Comprehension of the VARC section and not in the other areas. In such a case, this student will only opt for and pay for the RC module, i.e, Rs. 6000/-. Irrespective of how many modules the student is opting and paying for, materials for self- study will be provided for all the modules to every student. But the student will be allowed to attend live classes, have access to recordings of the same and interact with the faculty and mentor only for the paid modules.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Quantitative Ability</h2>
              <p className="text-gray-700 mb-4">
                Our program focuses on personalized, modular, and result-driven learning:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Dynamic curriculum tailored to your strengths and weaknesses</li>
                <li>Experienced mentors from top institutions</li>
                <li>Cutting-edge technology for tracking progress</li>
              </ul>
              <Image
                src="/images/QA_module.png"
                alt="Visual Representation"
                width={800}
                height={450}
                className="rounded-md"
              />
            <p className="text-gray-700 mb-4">
              A student can opt for only the modules that he / she needs help in.
            </p>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Data Interpretation and Logical Reasoning </h2>
              <Image
                src="/images/DILR_Modules.png"
                alt="Visual Representation"
                width={800}
                height={250}
                className="rounded-md"
              />
              <p className="text-gray-700 mb-4">
              A student can opt for only the modules that he / she needs help in.
            </p>
            </section>
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Combined Modules &amp; Fees</h2>

              {/* Wrapper for the combinations */}
              <div className="flex flex-col space-y-8">
                {/* Combination 1: VARC + QA = INR 25000/- */}
                <div className="flex items-center justify-start space-x-4">
                  <div className="w-20 h-20 rounded-full bg-green-800 flex items-center justify-center text-white font-bold">
                    VARC
                  </div>
                  <span className="text-2xl font-semibold text-gray-600">+</span>
                  <div className="w-20 h-20 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold">
                    QA
                  </div>
                  <span className="text-2xl font-semibold text-gray-600">=</span>
                  <div className="w-28 h-28 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-center">
                    INR <br /> 25,000/-
                  </div>
                </div>

                {/* Combination 2: VA + DILR = INR 20000 */}
                <div className="flex items-center justify-start space-x-4">
                  <div className="w-20 h-20 rounded-full bg-green-800 flex items-center justify-center text-white font-bold">
                    VA
                  </div>
                  <span className="text-2xl font-semibold text-gray-600">+</span>
                  <div className="w-20 h-20 rounded-full bg-lime-600 flex items-center justify-center text-white font-bold">
                    DILR
                  </div>
                  <span className="text-2xl font-semibold text-gray-600">=</span>
                  <div className="w-28 h-28 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-center">
                    INR <br /> 20,000/-
                  </div>
                </div>

                {/* Combination 3: QA + DILR = INR 25000/- */}
                <div className="flex items-center justify-start space-x-4">
                  <div className="w-20 h-20 rounded-full bg-orange-700 flex items-center justify-center text-white font-bold">
                    QA
                  </div>
                  <span className="text-2xl font-semibold text-gray-600">+</span>
                  <div className="w-20 h-20 rounded-full bg-lime-600 flex items-center justify-center text-white font-bold">
                    DILR
                  </div>
                  <span className="text-2xl font-semibold text-gray-600">=</span>
                  <div className="w-28 h-28 rounded-full bg-green-800 flex items-center justify-center text-white font-bold text-center">
                    INR <br /> 25,000/-
                  </div>
                </div>

                {/* Combination 4: VARC + QA + DILR = INR 34,560/- */}
                <div className="flex items-center justify-start space-x-4">
                  <div className="w-20 h-20 rounded-full bg-green-800 flex items-center justify-center text-white font-bold">
                    VARC
                  </div>
                  <span className="text-2xl font-semibold text-gray-600">+</span>
                  <div className="w-20 h-20 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold">
                    QA
                  </div>
                  <span className="text-2xl font-semibold text-gray-600">+</span>
                  <div className="w-20 h-20 rounded-full bg-lime-600 flex items-center justify-center text-white font-bold">
                    DILR
                  </div>
                  <span className="text-2xl font-semibold text-gray-600">=</span>
                  <div className="w-28 h-28 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-center">
                    INR <br /> 34,560/-
                  </div>
                </div>
              </div>
            </section>


          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
