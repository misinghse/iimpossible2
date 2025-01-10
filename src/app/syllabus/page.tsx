import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export default function SyllabusPage() {
  return (
    <>
      <Navbar />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Download Our Syllabus</h1>
            <p className="text-gray-700 mb-6">
              Get a detailed breakdown of the CAT syllabus and the modules we cover at iimpossible.
              Click the button below to download our complete syllabus in PDF format.
            </p>
            <a
              href="/syllabus/iimpsyllabus.pdf"
              download
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition"
            >
              Download Syllabus PDF
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
