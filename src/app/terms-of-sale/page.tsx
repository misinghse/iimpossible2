"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";

export default function TermsOfSalePage() {
  return (
    <>
      <Navbar />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Terms of Sale</h1>
          <Image
            src="/images/terms.png" 
            alt="Terms of Sale"
            width={300}
            height={100}
            className="rounded-md mb-6"
          />
          <div className="text-gray-700 space-y-6">
            <h2 className="text-2xl font-bold mb-4">Purchase Qualification - Account Security</h2>
            <p>
              To make a purchase on any of IIMpossible websites, you must comply with the terms set
              out in this Terms of Sale. You acknowledge that you are responsible for maintaining
              the security of, and restricting access to, your account and password, and you agree
              to accept responsibility for all purchases / registration and other activities that
              occur under your account. IIMpossible reserves the right to refuse or cancel orders at
              any time in its sole discretion.
            </p>

            <h2 className="text-2xl font-bold mb-4">Payment Methods & Terms</h2>
            <p>
              We currently accept the following forms of payment: Cash, Payable at par Cheques, Bank
              Drafts, Credit Cards (MasterCard, Visa, UPI, Mobile Wallets, Bank Wire, or Electronic
              Transfer).
            </p>

            <h2 className="text-2xl font-bold mb-4">Refunds Policy</h2>
            <p>
              <strong>Refund in case of incorrect purchase:</strong> Programs purchased will not be
              refunded or changed to another program on grounds of incorrect selection at the time
              of purchase.
            </p>
            <p>
              <strong>Refund in case of server error:</strong> If the same program is purchased
              twice due to some server error, the following refund rules will apply. If the learner
              informs us within 7 days, a full refund will be issued. Beyond that, they will be
              provided with a credit note worth 10% more than the purchase value.
            </p>
            <p>
              <strong>Refund in case of special approval:</strong> Refund is possible only if
              applied within 7 days of the purchase of the product. All refunds will be processed on
              a special approval basis. The admission fees and govt. taxes are excluded fully from
              the refund. The final refund amount will be at the sole discretion of IIMpossible and
              will not exceed 50% of the amount paid by the student (excluding Admission Fee & Govt.
              Taxes).
            </p>

            <h2 className="text-2xl font-bold mb-4">Termination</h2>
            <p>
              <strong>Termination by you:</strong> You may, at any point in time, choose to
              terminate your subscription to a service by sending us an email. Such termination will
              not change any amounts due to us.
            </p>
            <p>
              <strong>Termination by IIMpossible:</strong> Breach of any of the terms of this
              Agreement constitutes a termination of the Agreement. Any and all amounts due under
              this Agreement shall survive the Term of this Agreement.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
