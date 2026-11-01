import type { Metadata } from "next";
import { company } from "@/lib/company";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: `Privacy Policy | ${company.shortName}`,
  description: `Privacy policy for ${company.shortName}.`,
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-navy mb-2">Privacy Policy</h1>
          <p className="text-sm text-slate mb-8">
            Last updated: November 2026
          </p>

          <div className="prose prose-slate prose-sm max-w-none space-y-6 text-slate leading-relaxed [&_h2]:text-navy [&_h2]:font-semibold [&_h2]:text-lg [&_h2]:mt-8 [&_h2]:mb-3">
            <h2>Information We Collect</h2>
            <p>
              When you submit a request through our website, we collect the
              information you provide, including your name, email address, phone
              number, property address, and project details. We use this
              information solely to respond to your inquiry and provide the
              services you request.
            </p>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information you provide to respond to your service
              requests, communicate about projects, and improve our services. We
              do not sell, rent, or share your personal information with third
              parties for marketing purposes.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement reasonable measures to protect the personal
              information you provide. However, no method of transmission over
              the internet is completely secure, and we cannot guarantee absolute
              security.
            </p>

            <h2>Cookies</h2>
            <p>
              Our website may use cookies and similar technologies to improve
              your experience. You can control cookies through your browser
              settings.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              Our website may contain links to third-party websites or use
              third-party services such as maps and analytics. These services
              have their own privacy policies, which we encourage you to review.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this privacy policy, please contact us
              at{" "}
              <span className="font-medium text-navy">
                {company.contact.email}
              </span>
              .
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Changes will
              be posted on this page with an updated effective date.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
