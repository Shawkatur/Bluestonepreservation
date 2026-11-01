"use client";

import { useState } from "react";
import { MapPin, Search, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { company } from "@/lib/company";

export function ServiceAreas() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<
    "idle" | "found" | "not-found" | "empty"
  >("idle");

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim().toLowerCase();
    if (!q) {
      setResult("empty");
      return;
    }
    const found = company.serviceAreas.some(
      (area) =>
        area.toLowerCase().includes(q) || q.includes(area.toLowerCase())
    );
    setResult(found ? "found" : "not-found");
  };

  return (
    <section id="areas" className="section-padding bg-light-bg">
      <div className="container-main">
        <div className="max-w-2xl mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-bluestone mb-2">
            Coverage
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy tracking-tight text-balance">
            Serving Atlanta &amp; Surrounding Communities
          </h2>
          <p className="mt-3 text-slate text-base md:text-lg leading-relaxed">
            Bluestone Home Solutions is headquartered in Atlanta, Georgia, and
            provides property services throughout the metro area.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Map + check */}
          <div className="lg:col-span-3">
            {/* Map embed */}
            <div className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm aspect-[16/10]">
              <iframe
                title="Bluestone Home Solutions service area map"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212270.8025!2d-84.55!3d33.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045d6993098d%3A0x66fede2f990b630b!2sAtlanta%2C%20GA!5e0!3m2!1sen!2sus!4v1`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Service area check */}
            <form
              onSubmit={handleCheck}
              className="mt-4 flex gap-2"
            >
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/50" />
                <input
                  type="text"
                  placeholder="Enter city or ZIP code..."
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setResult("idle");
                  }}
                  className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-bluestone focus:ring-1 focus:ring-bluestone/20"
                  id="area-check"
                />
              </div>
              <button
                type="submit"
                className="bg-bluestone hover:bg-bluestone-400 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap"
              >
                Check Availability
              </button>
            </form>
            {result === "found" && (
              <p className="mt-2 text-sm text-green-700 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" /> We serve this area! Contact
                us for a free estimate.
              </p>
            )}
            {result === "not-found" && (
              <p className="mt-2 text-sm text-slate">
                We may still serve your area. Contact us at{" "}
                <span className="font-medium text-navy">
                  service@bluestonehomellc.com
                </span>{" "}
                to check.
              </p>
            )}
          </div>

          {/* Area list */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-navy flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">
                    Headquarters
                  </p>
                  <p className="text-xs text-slate">{company.address.full}</p>
                </div>
              </div>

              <h3 className="text-sm font-semibold text-navy mb-3 mt-6">
                Service Areas
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                {company.serviceAreas.map((area) => (
                  <motion.span
                    key={area}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-sm text-slate flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-bluestone flex-shrink-0" />
                    {area}
                  </motion.span>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-xs text-slate leading-relaxed">
                  Don&apos;t see your area listed? Contact us — we may be able
                  to help with your property needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
