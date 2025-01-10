"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto py-8 md:py-12 px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-foreground/60 hover:text-foreground">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/expert-mentors" className="text-sm text-foreground/60 hover:text-foreground">
                  Team
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/comprehensive-modules" className="text-sm text-foreground/60 hover:text-foreground">
                  CAT Preparation
                </Link>
              </li>
              <li>
                <Link href="/expert-mentors" className="text-sm text-foreground/60 hover:text-foreground">
                  Mentorship
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-foreground/60 hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-foreground/60 hover:text-foreground">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-sm text-foreground/60 hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-sale" className="text-sm text-foreground/60 hover:text-foreground">
                  Terms of Sale
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t">
          <p className="text-center text-sm text-foreground/60">
            © {new Date().getFullYear()} IIM Possible. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
