import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="text-gray-700 mb-6">
              At iimpossible, we believe that every student’s journey to the Indian Institutes of
              Management (IIMs) or any top management college should be as unique as they are.
              Founded by a team of seasoned professionals, iimpossible combines years of expertise
              with a passion for personalized education.
            </p>
            <p className="text-gray-700 mb-6">
              Our founding team includes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>
                <strong>Sanjiv Kumar</strong>, an alumnus of the prestigious IIM Calcutta with over
                two decades of industry experience.
              </li>
              <li>
                <strong>Siddhant Shekhar</strong>, an alumnus of XLRI, bringing deep insights into
                management education.
              </li>
              <li>
                <strong>Shashank Kumar</strong>, an alumnus of IIM Bangalore, with a strong
                background in strategic coaching and mentoring.
              </li>
            </ul>
            <p className="text-gray-700 mb-6">
              Together, we offer a unique approach to CAT preparation that is personalized to fit
              the needs of each individual student. Unlike traditional coaching institutes that
              follow a standardized curriculum, we at iimpossible understand that every aspirant has
              different strengths, weaknesses, and learning speeds. Our personalized study plans
              are designed to help each student master concepts at their own pace, ensuring they
              gain the confidence needed to excel.
            </p>
            <p className="text-gray-700 mb-6">
              At iimpossible, we are committed to helping our students not just prepare for the exam
              but truly understand and master the concepts required to succeed. Our goal is to guide
              you every step of the way, ensuring that you have the tools, support, and expertise
              needed to turn your dream of getting into a top management college into reality.
            </p>
            <p className="text-gray-700 font-semibold">
              Because with us, IIM isn’t just possible—it’s <em>iimpossible</em>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
