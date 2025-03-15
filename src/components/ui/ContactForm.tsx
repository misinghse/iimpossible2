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
  const [preference, setPreference] = useState("15 min mentorship session");
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
          preference,
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
    setPreference("15 min mentorship session");
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
          <span >Attempted CAT?</span>
          <label><input type="radio" name="cat" value="Yes" checked={attemptedCAT === "Yes"} onChange={() => setAttemptedCAT("Yes")} /> Yes</label>
          <label><input type="radio" name="cat" value="No" checked={attemptedCAT === "No"} onChange={() => setAttemptedCAT("No")} /> No</label>
        </div>

        <div className="space-y-2 text-left">
  <span >Preferences:</span>
  <div className="flex flex-col space-y-2">
    <label className="flex items-center space-x-2">
      <input type="radio" name="preference" value="15 min mentorship session" checked={preference === "15 min mentorship session"} onChange={() => setPreference("15 min mentorship session")} />
      <span className="text-sm ">Free 15 min Mentorship Session</span>
    </label>
    <label className="flex items-center space-x-2">
      <input type="radio" name="preference" value="Personalized study plan" checked={preference === "Personalized study plan"} onChange={() => setPreference("Personalized study plan")} />
      <span className="text-sm ">Free Personalized Study Plan</span>
    </label>
  </div>
</div>



        <Button type="submit" disabled={loading}>{loading ? "Submitting..." : "Submit"}</Button>
      </form>
      {serverMessage && <p className="text-sm font-semibold text-red-600">{serverMessage}</p>}
      {showDownloadLink && <a href="/syllabus/iimpsyllabus.pdf" className="text-blue-600 underline">Download Syllabus</a>}
    </div>
  );
};
