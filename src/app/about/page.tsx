import Head from "next/head";
import Image from "next/image";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us - IIM Possible</title>
        <meta
          name="description"
          content="Learn about the team behind IIM Possible, offering personalized CAT preparation for aspiring IIM students."
        />
      </Head>

      <Navbar />

      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Page Heading */}
          <div className="max-w-3xl mx-auto mb-10">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="text-gray-700 mb-6">
              At IIM Possible, we believe that every student’s journey to the Indian Institutes of
              Management (IIMs) or any top management college should be as unique as they are.
              Founded by a team of seasoned professionals, IIM Possible combines years of expertise
              with a passion for personalized education.
            </p>
            <p className="text-gray-700 mb-6">
              Unlike traditional coaching institutes that follow a standardized curriculum, we at
              IIM Possible understand that every aspirant has different strengths, weaknesses, and
              learning speeds. Our personalized study plans are designed to help each student
              master concepts at their own pace, ensuring they gain the confidence needed to excel.
            </p>
            <p className="text-gray-700 mb-6">
              We are committed to helping our students not just prepare for the exam but truly
              understand and master the concepts required to succeed. Our goal is to guide you
              every step of the way, ensuring that you have the tools, support, and expertise
              needed to turn your dream of getting into a top management college into reality.
            </p>
            <p className="text-gray-700 font-semibold">
              Because with us, IIM isn’t just possible—it’s <em>IIM Possible</em>.
            </p>
          </div>

          {/* Meet the Team Section */}
          <section className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Meet the Team</h2>

            {/* Founder Section */}
            <h3 className="text-2xl font-bold mb-6 text-center">Founder & Chief Mentor</h3>
            <div className="flex flex-col items-center text-center mb-12">
              <div className="relative w-40 h-40 mb-4">
                <Image
                  src="/images/Sanjiv.jpeg"
                  alt="Sanjiv Kumar"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sanjiv Kumar</h3>
              <p className="text-gray-500 mb-4">Founder & Chief Mentor</p>
              <p className="text-gray-700 leading-relaxed max-w-lg">
                Sanjiv is a passionate educator who has been taking classes for leading CAT
                coaching institutes—online and offline—for more than seven years. An MBA from IIM
                Calcutta, Sanjiv has over two decades of experience across BFSI, working with
                HDFC, ICICI, and Kotak, as well as handling senior positions in the education
                sector. He realized the shortcomings of traditional coaching while working with
                these institutes and conceived the idea of IIM Possible. Outside of work, he is
                keenly interested in Cricket, Politics, Books, and Movies.
              </p>
            </div>

            {/* Co-founders Section */}
            <h3 className="text-2xl font-bold mb-6 text-center">Co-founders</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Abhinav Jain */}
              <div className="flex flex-col text-center md:text-left items-center md:items-start">
                <div className="relative w-40 h-40 mb-4">
                  <Image
                    src="/images/Abhinav.jpeg"
                    alt="Abhinav Jain"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Abhinav Jain</h3>
                <p className="text-gray-500 mb-4">Strategic Partner</p>
                <p className="text-gray-700 leading-relaxed">
                  Abhinav is the SVP of Finance at CoinDCX and has previously served as CFO at
                  PharmEasy. With experience at Capsugel Healthcare, Aditya Birla Group, and Binani
                  Group, he has built expertise in business performance management, strategic
                  investments, value chain enhancement, and IT-driven automation. A CA, CS, and
                  Honours graduate, he has received prestigious awards like CA Business Leader 40
                  Under 40 (CNBC) and CFO of the Year. An avid explorer, he enjoys cricket, table
                  tennis, and reading.
                </p>
              </div>

              {/* Shashank K Srivastava */}
              <div className="flex flex-col text-center md:text-left items-center md:items-start">
                <div className="relative w-40 h-40 mb-4">
                  <Image
                    src="/images/Shashank.jpeg"
                    alt="Shashank K Srivastava"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Shashank K Srivastava</h3>
                <p className="text-gray-500 mb-4">Strategic Partner</p>
                <p className="text-gray-700 leading-relaxed">
                  Shashank is an experienced trainer and mentor with vast experience in the
                  industry. Notably, he served as Program Director with Wipro Technologies, handling
                  clients like Nestle and GSK, and as Senior Project Manager with LogicaCMG for
                  Shell. He has also been Professor of Practice and Area Chairperson for IT and
                  Business Analytics at Sharda University. Holding a post-graduate degree in Physics
                  and an Executive MBA from IIM Bangalore, he’s passionate about shaping the
                  careers of young people aspiring to join top management institutions. A cricket
                  enthusiast, Shashank has written books on general management and project
                  management.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
