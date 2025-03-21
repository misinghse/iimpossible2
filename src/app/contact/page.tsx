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
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [serverMessage, setServerMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDownloadLink, setShowDownloadLink] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setServerMessage("");

    if (!/^\d{10}$/.test(mobile)) {
      setServerMessage("Please enter a valid 10-digit mobile number.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          mobile,
          email,
          qualification,
          attemptedCAT,
          preferredDate,
          preferredTime,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setServerMessage(data.message || "Submission successful!");
        setShowDownloadLink(true);
        resetForm();
      } else {
        const data = await response.json();
        setServerMessage(data.error || "Failed to submit. Please try again.");
        setShowDownloadLink(false);
      }
    } catch {
      setServerMessage("Network error. Please try again later.");
      setShowDownloadLink(false);
    } finally {
      setLoading(false);
    }
  }

  function resetForm() {
    setName("");
    setMobile("");
    setEmail("");
    setQualification("");
    setAttemptedCAT("No");
    setPreferredDate("");
    setPreferredTime("");
  }

  return (
    <>
      <Navbar />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-gray-700 mb-6">
            Complete the form below to get in touch with us. Once the form is submitted, you&apos;ll
            receive a link to download the syllabus.
          </p>

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
                pattern="\d{10}"
                title="Enter a valid 10-digit mobile number"
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
              <label className="mr-4">
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

            {/* New Date and Time Selection */}
            <div>
              <label className="block mb-1 font-medium" htmlFor="preferredDate">
                Preferred Date to be Contacted
              </label>
              <input
                id="preferredDate"
                type="date"
                className="w-full border rounded px-3 py-2"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="preferredTime">
                Preferred Time to be Contacted
              </label>
              <input
                id="preferredTime"
                type="time"
                className="w-full border rounded px-3 py-2"
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
              />
            </div>

            <Button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </form>

          <div aria-live="polite" className="mt-4">
            {serverMessage && (
              <div
                className={`text-sm font-semibold ${
                  serverMessage.includes("successful")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {serverMessage}
              </div>
            )}
          </div>

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
