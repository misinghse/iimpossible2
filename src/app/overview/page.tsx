import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";

export default function OverviewPage() {
  return (
    <>
      <Navbar />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Overview</h1>
            <p className="text-gray-700 mb-6">
              Envision Your Future: What Do You Truly Want?
            </p>
            <p className="text-gray-700 mb-6">
              Imagine your ideal life. What does it look like? Doing MBA is one
              assured way of designing a life you want. But if you want to do
              MBA, are you content with settling for just any college or do you
              aspire for something greater? Do you envision yourself at one of
              the top IIMs, paving the way for a career that is not only
              fulfilling but also rewarding?
            </p>
            <p className="text-gray-700 mb-6">
              A career is a significant part of our lives—it influences our
              daily routines, our personal satisfaction, and our long-term
              happiness. The decisions you make now can shape the trajectory of
              your future. So, ask yourself:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Do you want a career that challenges and excites you?</li>
              <li>Are you seeking a role that offers both personal fulfilment and substantial rewards?</li>
              <li>Do you aspire to be part of a prestigious institution that opens doors to remarkable opportunities?</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Achieving your ideal career and lifestyle begins with making
              strategic choices today. The path to a successful and rewarding
              career often starts with a solid educational foundation. An MBA
              from a top institution, like the IIMs, can be a game-changer in
              this regard.
            </p>
            <h2 className="text-3xl font-bold mb-4">Why a Top MBA Matters</h2>
            <p className="text-gray-700 mb-6">
              Access to Premier Opportunities: Graduating from a leading
              institution like an IIM provides you with unparalleled access to
              top employers and high-impact roles. It significantly boosts your
              chances of landing positions with renowned companies and
              organizations.
            </p>
            <p className="text-gray-700 mb-6">
              Enhanced Skills and Knowledge: An MBA from a prestigious college
              equips you with advanced management skills, strategic thinking,
              and leadership capabilities. These competencies are crucial for
              excelling in a competitive job market and driving your career
              forward.
            </p>
            <p className="text-gray-700 mb-6">
              Networking and Mentorship: Top IIMs offer extensive networking
              opportunities and access to influential alumni and industry
              leaders. Building connections with these professionals can
              provide valuable guidance and open doors to new opportunities.
            </p>
            <p className="text-gray-700 mb-6">
              Increased Earning Potential: A degree from a top institution
              often translates to higher earning potential. The investment in
              your education can lead to significant financial rewards and
              career advancement.
            </p>
            
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
