import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";

/**
 * Reusable arrow-down SVG component for the module diagrams
 */
function ArrowDown() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-2 text-gray-600 mx-auto"
    >
      <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
  );
}

export default function ComprehensiveModulesPage() {
  return (
    <>
      <Navbar />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* PAGE TITLE */}
            <h1 className="text-4xl font-bold mb-8">Comprehensive Modules</h1>
            
            {/* NEW PUZZLE IMAGE SECTION */}
            <div className="flex justify-center mb-12">
              <Image
                src="/images/comprehensiveModules.jpeg"
                alt="Puzzle piece representing comprehensive modules"
                width={600}
                height={400}
                className="rounded-md shadow-md w-full max-w-xl h-auto"
                priority
              />
            </div>

            {/* SECTION 1: Overview */}
            <section className="mb-12 px-4">
              <h2 className="text-3xl font-bold mb-4">Program Structure and Modules</h2>
              <p className="text-gray-700 mb-4">
                Our “Modular Course Structure” enables students to pick certain modules from each
                section. The option of going for the comprehensive full program also remains, but
                for aspirants who are clear (with or without our help) about which areas they need
                help on, our modular structure works better. They can opt for only those modules
                where they need professional help and guidance, thereby saving significantly on the
                program fee as well as precious time, instead of spending them on things that they
                don’t need.
              </p>
              <p className="text-gray-700 mb-8">
                This is how we have broken the entire program into different modules:
              </p>

              {/* Three-Column Layout for High-Level Sections */}
              <div className="flex flex-col md:flex-row gap-4">
                {/* VARC */}
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

                {/* QA */}
                <div className="flex-1 bg-yellow-100 p-4 rounded-md shadow">
                  <h3 className="text-lg font-bold mb-2 text-center">Quantitative Ability (QA)</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Number System (NS)</li>
                    <li>Arithmetic (AM)</li>
                    <li>Algebra (ALG)</li>
                    <li>Geometry (GEM)</li>
                    <li>Probability &amp; Set Theory (PST)</li>
                  </ul>
                </div>

                {/* DILR */}
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

            {/* SECTION 2: VARC */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Verbal Ability and Reading Comprehension (VARC)
              </h2>

              {/* VARC Grid: 3 columns for 3 modules */}
              <div className="grid grid-cols-3 gap-8 items-end">
                {/* Verbal Ability */}
                <div className="flex flex-col items-center">
                  <div className="bg-green-700 w-56 p-4 text-center rounded shadow text-white">
                    <h3 className="font-semibold text-lg mb-1">Verbal Ability</h3>
                    <p className="text-sm">INR 6000/-</p>
                  </div>
                  <ArrowDown />
                </div>

                {/* Reading Comprehension */}
                <div className="flex flex-col items-center">
                  <div className="bg-green-700 w-56 p-4 text-center rounded shadow text-white">
                    <h3 className="font-semibold text-lg mb-1">Reading Comprehension</h3>
                    <p className="text-sm">INR 8000/-</p>
                  </div>
                  <ArrowDown />
                </div>

                {/* Critical Reasoning */}
                <div className="flex flex-col items-center">
                  <div className="bg-green-700 w-56 p-4 text-center rounded shadow text-white">
                    <h3 className="font-semibold text-lg mb-1">Critical Reasoning</h3>
                    <p className="text-sm">INR 4000/-</p>
                  </div>
                  <ArrowDown />
                </div>

                {/* VARC All Modules Circle (spans all columns) */}
                <div className="col-span-3 flex justify-center mt-4">
                  <div className="bg-orange-500 w-56 h-56 rounded-full flex items-center justify-center text-center text-white shadow p-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">VARC All Modules</h3>
                      <p className="text-xl font-bold">INR 18,000/-</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mt-6">
                A student can opt for one or more modules individually or go for all the modules
                together. For example, a student may think that they require help only in Reading
                Comprehension (INR 8000) and not in the other areas. Irrespective of how many
                modules they choose, materials for self-study are provided for all modules. Live
                classes, recordings, and direct faculty interaction are limited to the paid modules.
              </p>
            </section>

            {/* SECTION 3: QA */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Quantitative Ability</h2>
              <p className="text-gray-700 mb-4">
                Our program focuses on personalized, modular, and result-driven learning:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Dynamic curriculum tailored to your strengths and weaknesses</li>
                <li>Experienced mentors from top institutions</li>
                <li>Cutting-edge technology for tracking progress</li>
              </ul>

              {/* QA Grid: 5 columns for 5 modules */}
              <div className="grid grid-cols-5 gap-8 items-end">
                {/* Arithmetic */}
                <div className="flex flex-col items-center">
                  <div className="bg-yellow-600 w-56 p-4 text-center rounded shadow text-white">
                    <h3 className="font-semibold text-lg mb-1">Arithmetic</h3>
                    <p className="text-sm">INR 6000/-</p>
                  </div>
                  <ArrowDown />
                </div>

                {/* Algebra */}
                <div className="flex flex-col items-center">
                  <div className="bg-lime-600 w-56 p-4 text-center rounded shadow text-white">
                    <h3 className="font-semibold text-lg mb-1">Algebra</h3>
                    <p className="text-sm">INR 5000/-</p>
                  </div>
                  <ArrowDown />
                </div>

                {/* Number System */}
                <div className="flex flex-col items-center">
                  <div className="bg-orange-500 w-56 p-4 text-center rounded shadow text-white">
                    <h3 className="font-semibold text-lg mb-1">Number System</h3>
                    <p className="text-sm">INR 4000/-</p>
                  </div>
                  <ArrowDown />
                </div>

                {/* Geometry */}
                <div className="flex flex-col items-center">
                  <div className="bg-green-700 w-56 p-4 text-center rounded shadow text-white">
                    <h3 className="font-semibold text-lg mb-1">Geometry</h3>
                    <p className="text-sm">INR 6000/-</p>
                  </div>
                  <ArrowDown />
                </div>

                {/* Probability & Set Theory */}
                <div className="flex flex-col items-center">
                  <div className="bg-green-500 w-56 p-4 text-center rounded shadow text-white">
                    <h3 className="font-semibold text-lg mb-1">Probability &amp; Set Theory</h3>
                    <p className="text-sm">INR 4000/-</p>
                  </div>
                  <ArrowDown />
                </div>

                {/* QA All Modules (spans all 5 columns) */}
                <div className="col-span-5 flex justify-center mt-4">
                  <div className="bg-blue-600 w-56 h-56 rounded-full flex items-center justify-center text-center text-white shadow p-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Quantitative Ability - All Modules
                      </h3>
                      <p className="text-xl font-bold">INR 25,000/-</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mt-6">
                A student can opt for only the modules that he / she needs help in.
              </p>
            </section>

            {/* SECTION 4: DILR */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Data Interpretation and Logical Reasoning (DILR)
              </h2>

              {/* DILR Grid: 3 columns for 3 modules */}
              <div className="grid grid-cols-3 gap-8 items-end">
                {/* Data Interpretation */}
                <div className="flex flex-col items-center">
                  <div className="bg-green-700 w-56 p-4 text-center rounded shadow text-white">
                    <h3 className="font-semibold text-lg mb-1">Data Interpretation</h3>
                    <p className="text-sm">INR 5000/-</p>
                  </div>
                  <ArrowDown />
                </div>

                {/* Logical Reasoning - 1 */}
                <div className="flex flex-col items-center">
                  <div className="bg-green-700 w-56 p-4 text-center rounded shadow text-white">
                    <h3 className="font-semibold text-lg mb-1">Logical Reasoning - 1</h3>
                    <p className="text-sm">INR 6000/-</p>
                  </div>
                  <ArrowDown />
                </div>

                {/* Logical Reasoning - 2 */}
                <div className="flex flex-col items-center">
                  <div className="bg-green-700 w-56 p-4 text-center rounded shadow text-white">
                    <h3 className="font-semibold text-lg mb-1">Logical Reasoning - 2</h3>
                    <p className="text-sm">INR 6000/-</p>
                  </div>
                  <ArrowDown />
                </div>

                {/* DILR All Modules (spans all 3 columns) */}
                <div className="col-span-3 flex justify-center mt-4">
                  <div className="bg-orange-500 w-56 h-56 rounded-full flex items-center justify-center text-center text-white shadow p-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">DILR All Modules</h3>
                      <p className="text-xl font-bold">INR 17,000/-</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mt-6">
                A student can opt for only the modules that he / she needs help in.
              </p>
            </section>

            {/* COMBINED MODULES & FEES (no background color) */}
            <section className="mb-12 py-8 px-4">
              <h2 className="text-3xl font-bold mb-6 text-center">Combined Modules &amp; Fees</h2>

              {/* Container for all combos */}
              <div className="flex flex-col space-y-8 items-center">
                {/* 1) VARC + QA = 43,000 */}
                <div className="flex flex-wrap items-center justify-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-green-700 text-white flex items-center justify-center font-bold">
                    VARC
                  </div>
                  <span className="text-2xl">+</span>
                  <div className="w-16 h-16 rounded-full bg-green-400 text-white flex items-center justify-center font-bold">
                    QA
                  </div>
                  <span className="text-2xl">=</span>
                  <div className="w-24 h-24 rounded-full bg-blue-500 text-white flex flex-col items-center justify-center font-bold text-center">
                    <span>INR</span>
                    <span>43,000/-</span>
                  </div>
                </div>

                {/* 2) VA + DILR = 35,000 */}
                <div className="flex flex-wrap items-center justify-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-green-800 text-white flex items-center justify-center font-bold">
                    VA
                  </div>
                  <span className="text-2xl">+</span>
                  <div className="w-16 h-16 rounded-full bg-lime-600 text-white flex items-center justify-center font-bold">
                    DILR
                  </div>
                  <span className="text-2xl">=</span>
                  <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex flex-col items-center justify-center font-bold text-center">
                    <span>INR</span>
                    <span>35,000/-</span>
                  </div>
                </div>

                {/* 3) QA + DILR = 42,000 */}
                <div className="flex flex-wrap items-center justify-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold">
                    QA
                  </div>
                  <span className="text-2xl">+</span>
                  <div className="w-16 h-16 rounded-full bg-green-700 text-white flex items-center justify-center font-bold">
                    DILR
                  </div>
                  <span className="text-2xl">=</span>
                  <div className="w-24 h-24 rounded-full bg-green-800 text-white flex flex-col items-center justify-center font-bold text-center">
                    <span>INR</span>
                    <span>42,000/-</span>
                  </div>
                </div>

                {/* 4) VARC + QA + DILR = 60,000 */}
                <div className="flex flex-wrap items-center justify-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-green-800 text-white flex items-center justify-center font-bold">
                    VARC
                  </div>
                  <span className="text-2xl">+</span>
                  <div className="w-16 h-16 rounded-full bg-green-400 text-white flex items-center justify-center font-bold">
                    QA
                  </div>
                  <span className="text-2xl">+</span>
                  <div className="w-16 h-16 rounded-full bg-lime-600 text-white flex items-center justify-center font-bold">
                    DILR
                  </div>
                  <span className="text-2xl">=</span>
                  <div className="w-24 h-24 rounded-full bg-blue-400 text-white flex flex-col items-center justify-center font-bold text-center">
                    <span>INR</span>
                    <span>60,000/-</span>
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
