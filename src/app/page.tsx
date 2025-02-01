import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Envision Your Future: What Do You Truly Want?
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Transform your MBA aspirations into reality with personalized coaching for top IIMs.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/overview">
                  Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

      {/* Centered Banner Section */}
<section className="flex justify-center items-center h-full py-12 px-4 bg-gray-100">
  <div className="max-w-4xl w-full border-4 border-gray-200 rounded-3xl shadow-2xl bg-white p-8 md:p-12 text-gray-900 text-center">
    <h2 className="text-xl md:text-2xl font-bold mb-4">
      🎯 Take the IIM-Possible Screening Test and earn your spot in the most exclusive,
      result-driven CAT coaching—designed for assured success!
    </h2>
    <ul className="list-none mb-6 text-base space-y-2">
      <li>✅ Top 100 students will receive personalized mentoring from IIM alumni</li>
      <li>✅ Modular, self-paced & concept-based learning for 10x efficiency</li>
      <li>✅ Elite coaching that maximizes your percentile & guarantees top B-school calls</li>
      <li>✅ Your shortcut to an IIM seat – one-on-one guidance from those who’ve been there!</li>
    </ul>
    <p className="mb-4 font-semibold">
      📅 <strong>Test Date:</strong> 23rd Feb 2025 - One-hour test <br />
      📝 <strong>Last Date to Register:</strong> 22nd Feb 2025
    </p>
    <p className="mb-4 font-semibold">📞 Call / Whatsapp: 8709280927</p>
    <p className="mb-6">
      💡 This is not just coaching—this is a launchpad to your IIM dream!
    </p>
    <Button size="lg" variant="secondary" asChild>
      <Link href="/contact">
        📍 Register now & take the first step toward your future! <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </Button>
  </div>
</section>


        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose IIM Possible?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Personalized Coaching */}
              <Card>
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Personalized Coaching</h3>
                  <p className="text-gray-600">
                    Individual attention and customized study plans tailored to your needs
                  </p>
                  <Button className="mt-4" asChild>
                    <Link href="/personalized-coaching">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Expert Mentors */}
              <Card>
                <CardContent className="p-6">
                  <GraduationCap className="h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Expert Mentors</h3>
                  <p className="text-gray-600">
                    Learn from IIM and XLRI alumni with years of experience
                  </p>
                  <Button className="mt-4" asChild>
                    <Link href="/expert-mentors">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Comprehensive Modules */}
              <Card>
                <CardContent className="p-6">
                  <BookOpen className="h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Comprehensive Modules</h3>
                  <p className="text-gray-600">
                    Structured learning path covering all CAT exam sections
                  </p>
                  <Button className="mt-4" asChild>
                    <Link href="/comprehensive-modules">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Your Path to Success</h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-6">
                  A career is a significant part of our lives—it influences our daily routines, our
                  personal satisfaction, and our long-term happiness. The decisions you make now can
                  shape the trajectory of your future.
                </p>
                <div className="bg-red-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4">Ask yourself:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Do you want a career that challenges and excites you?</li>
                    <li>Are you seeking a role that offers both personal fulfillment and substantial rewards?</li>
                    <li>
                      Do you aspire to be part of a prestigious institution that opens doors to
                      remarkable opportunities?
                    </li>
                  </ul>
                </div>
                <Button className="w-full md:w-auto" asChild>
                  <Link href="/methodology">
                    Learn About Our Methodology <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
