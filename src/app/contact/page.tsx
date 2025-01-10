"use client";

import { FormEvent, useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [qualification, setQualification] = useState("");
  const [attemptedCAT, setAttemptedCAT] = useState<"Yes" | "No">("No");
  const [serverMessage, setServerMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDownloadLink, setShowDownloadLink] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setServerMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, mobile, email, qualification, attemptedCAT }),
      });

      if (response.ok) {
        const data = await response.json();
        setServerMessage(data.message || "Submission successful!");
        setShowDownloadLink(true); // Show the download link on success
      } else {
        const data = await response.json();
        setServerMessage(data.error || "Failed to submit. Please try again.");
        setShowDownloadLink(false);
      }
    } catch (error) {
      setServerMessage("Network error. Please try again later.");
      setShowDownloadLink(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-gray-700 mb-6">Complete the form below to get in touch with us. Once the form is submitted, you'll receive a link to download the syllabus</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 font-medium" htmlFor="name">
                Name
              </label>
              <input
                required
                id="name"
                type="text"
                className="w-full border rounded px-3 py-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="mobile">
                Mobile
              </label>
              <input
                required
                id="mobile"
                type="text"
                className="w-full border rounded px-3 py-2"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="email">
                Email
              </label>
              <input
                required
                id="email"
                type="email"
                className="w-full border rounded px-3 py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="qualification">
                Highest Qualification
              </label>
              <input
                id="qualification"
                type="text"
                className="w-full border rounded px-3 py-2"
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
              />
            </div>
            <div>
              <p className="block mb-1 font-medium">Attempted CAT Before?</p>
              <label>
                <input
                  type="radio"
                  name="attemptedCAT"
                  value="Yes"
                  checked={attemptedCAT === "Yes"}
                  onChange={() => setAttemptedCAT("Yes")}
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="attemptedCAT"
                  value="No"
                  checked={attemptedCAT === "No"}
                  onChange={() => setAttemptedCAT("No")}
                />{" "}
                No
              </label>
            </div>
            <Button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </form>

          {serverMessage && (
            <div className="mt-4 text-sm font-semibold text-green-600">
              {serverMessage}
            </div>
          )}

          {showDownloadLink && (
            <div className="mt-6">
              <a
                href="/syllabus/iimpsyllabus.pdf"
                download
                className="text-blue-600 underline"
              >
                Download Syllabus (PDF)
              </a>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
