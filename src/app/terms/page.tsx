import type { Metadata } from "next";
import { company } from "@/lib/company";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: `Terms of Use | ${company.shortName}`,
  description: `Terms of use for ${company.shortName}.`,
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-navy mb-2">Terms of Use</h1>
          <p className="text-sm text-slate mb-8">
            Last updated: November 2026
          </p>

          <div className="prose prose-slate prose-sm max-w-none space-y-6 text-slate leading-relaxed [&_h2]:text-navy [&_h2]:font-semibold [&_h2]:text-lg [&_h2]:mt-8 [&_h2]:mb-3">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be
              bound by these terms. If you do not agree to these terms, please
              do not use this website.
            </p>

            <h2>Use of Website</h2>
            <p>
              This website is provided for informational purposes and to
              facilitate communication with {company.shortName}. You agree to
              use this website only for lawful purposes and in a manner that
              does not infringe upon the rights of others.
            </p>

            <h2>Service Estimates</h2>
            <p>
              Estimates provided through this website are preliminary and based
              on the information you supply. Final pricing may vary based on
              actual property conditions, scope of work, and other factors
              determined during an on-site assessment.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos, and
              design elements, is the property of {company.legalName} and is
              protected by applicable intellectual property laws.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              {company.shortName} makes no warranties about the accuracy or
              completeness of the information on this website.{" "}
              {company.shortName} shall not be liable for any damages arising
              from the use of this website.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with
              the laws of the State of Georgia, without regard to its conflict
              of law provisions.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about these terms should be directed to{" "}
              <span className="font-medium text-navy">
                {company.contact.email}
              </span>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
