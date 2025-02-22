import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";

/**
 * ExpertMentorsPage Component
 *
 * Showcases IIM Possible's expert mentors and the value they provide,
 * with a left-side image and right-side content layout.
 */
export default function ExpertMentorsPage() {
  return (
    <>
      <Navbar />
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Page Title */}
          <h1 className="text-4xl font-bold mb-8">
            Expert Mentors: The Heart of IIM Possible
          </h1>

          {/* Two-Column Layout: Left Image, Right Text */}
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Left Side Image */}
            <div className="md:w-1/2">
              <Image
                src="/images/expertmentor.jpg"
                alt="Expert Mentors"
                width={600}
                height={400}
                className="rounded-md shadow-md w-full h-auto"
                priority
              />
            </div>

            {/* Right Side Text Content */}
            <div className="md:w-1/2">
              <p className="text-gray-700 mb-6">
                At IIM Possible, we believe that success in cracking the toughest exams lies not just
                in preparation but in having the right guidance at every step of the journey. That’s
                why our mentors are not just educators; they’re achievers who’ve walked the same path
                and excelled.
              </p>

              <h2 className="text-2xl font-bold mb-4">What sets our mentors apart?</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>
                  <strong>Elite Alumni:</strong> Our mentors hail from premier institutions like the
                  IIMs, XLRI, and other top B-schools, bringing unparalleled expertise and real-world
                  insights.
                </li>
                <li>
                  <strong>One-on-One Mentorship:</strong> Every student gets personalized attention
                  with tailored mentoring sessions to address their unique strengths, weaknesses, and
                  goals.
                </li>
                <li>
                  <strong>Individual Doubt Clearing:</strong> Struggling with concepts or questions?
                  Our mentors are just a session away to ensure no doubt goes unresolved.
                </li>
                <li>
                  <strong>Weekly Review &amp; Planning:</strong> Stay on track with regular reviews
                  of your progress and customized strategies for the week ahead.
                </li>
                <li>
                  <strong>Comprehensive GD &amp; PI Preparation:</strong> From group discussions to
                  interviews, we guide you with practical tips, mock sessions, and constructive
                  feedback to ensure you stand out.
                </li>
              </ul>

              <p className="text-gray-700 font-semibold">
                Our mentorship program is more than just academic support—it’s a partnership in your
                success. With IIM Possible, you’re never alone in your journey. You have a team of
                experts dedicated to helping you achieve your dreams, every step of the way.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
