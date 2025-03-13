"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";

export const ContactForm = () => {
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
    <div className="p-4 border rounded-md shadow-lg bg-white space-y-4">
      <h3 className="text-xl font-semibold">Contact Us</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full border px-3 py-2 rounded" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input className="w-full border px-3 py-2 rounded" type="text" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
        <input className="w-full border px-3 py-2 rounded" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className="w-full border px-3 py-2 rounded" type="text" placeholder="Qualification" value={qualification} onChange={(e) => setQualification(e.target.value)} />
        <div className="flex items-center space-x-4">
          <span className="text-sm">Attempted CAT?</span>
          <label><input type="radio" name="cat" value="Yes" checked={attemptedCAT === "Yes"} onChange={() => setAttemptedCAT("Yes")} /> Yes</label>
          <label><input type="radio" name="cat" value="No" checked={attemptedCAT === "No"} onChange={() => setAttemptedCAT("No")} /> No</label>
        </div>
        <input className="w-full border px-3 py-2 rounded" type="date" value={preferredDate} onChange={(e) => setPreferredDate(e.target.value)} />
        <input className="w-full border px-3 py-2 rounded" type="time" value={preferredTime} onChange={(e) => setPreferredTime(e.target.value)} />
        <Button type="submit" disabled={loading}>{loading ? "Submitting..." : "Submit"}</Button>
      </form>
      {serverMessage && <p className="text-sm font-semibold text-red-600">{serverMessage}</p>}
      {showDownloadLink && <a href="/syllabus/iimpsyllabus.pdf" className="text-blue-600 underline">Download Syllabus</a>}
    </div>
  );
};
