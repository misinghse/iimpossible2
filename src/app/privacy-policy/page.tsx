"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <Image
            src="/images/privacypolicy.jpg" 
            alt="Privacy Policy"
            width={200}
            height={50}
            className="rounded-md mb-6"
          />
          <div className="text-gray-700 space-y-6">
            <p>
              IIMpossible is committed to treating your personal information with respect and
              sensitivity. This Privacy Policy explains how we may collect, store, use, and
              disclose personal information when you access or use our services.
            </p>

            <h2 className="text-2xl font-bold mb-4">Your Acceptance of This Privacy Policy</h2>
            <p>
              By accessing, registering, or using the Services, you signify that you have read,
              understood, and agreed to be bound by the Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold mb-4">Types of Information We Collect</h2>
            <p>
              When you use the Services, we may collect Personal Data, such as your name, email
              address, postal address, telephone number, date of birth, and gender. We may also
              collect Anonymous Information that does not identify you.
            </p>

            <h2 className="text-2xl font-bold mb-4">How We Use Information</h2>
            <p>
              We use Personal Data to provide the Services, improve user experience, offer
              customer support, and send you announcements, newsletters, and promotional materials.
            </p>

            <h2 className="text-2xl font-bold mb-4">Your Rights and Choices</h2>
            <p>
              You have the right to request confirmation of whether we store, use, or share any of
              your personal data. You may also opt out of promotional emails at any time.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
