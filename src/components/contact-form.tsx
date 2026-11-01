"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { company } from "@/lib/company";
import { services } from "@/lib/services";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: `${data.get("firstName")} ${data.get("lastName")}`,
      company: data.get("company") as string,
      email: data.get("email") as string,
      phone: data.get("phone") as string,
      service: data.get("service") as string,
      propertyAddress: data.get("propertyAddress") as string,
      city: data.get("city") as string,
      state: data.get("state") as string,
      zip: data.get("zip") as string,
      propertyType: data.get("propertyType") as string,
      message: data.get("message") as string,
      contactMethod: data.get("contactMethod") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Failed to send. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong."
      );
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-main">
        <div className="max-w-2xl mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-bluestone mb-2">
            Contact
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy tracking-tight text-balance">
            Let&apos;s Discuss Your Property Needs
          </h2>
          <p className="mt-3 text-slate text-base md:text-lg leading-relaxed">
            Request a free, no-obligation estimate. We respond to all inquiries
            within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-light-bg border border-gray-100 rounded-xl p-6">
              <h3 className="text-base font-semibold text-navy mb-5">
                {company.legalName}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-bluestone" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider">
                      Email
                    </p>
                    <p className="text-sm text-navy mt-0.5">
                      {company.contact.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-bluestone" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider">
                      Office
                    </p>
                    <p className="text-sm text-navy mt-0.5">
                      {company.address.street}
                      <br />
                      {company.address.city}, {company.address.state}{" "}
                      {company.address.zip}
                    </p>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(company.address.full)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-bluestone font-medium hover:underline mt-1 inline-block"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-bluestone" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider">
                      Hours
                    </p>
                    <div className="text-sm text-navy mt-0.5 space-y-0.5">
                      <p>{company.hours.weekday}</p>
                      <p>{company.hours.saturday}</p>
                      <p>{company.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
              >
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-navy mb-2">
                  Request Received
                </h3>
                <p className="text-sm text-slate max-w-sm mx-auto">
                  We&apos;ll get back to you within 24 hours. For immediate
                  assistance, email us at {company.contact.email}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-sm font-medium text-bluestone hover:underline"
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-light-bg border border-gray-100 rounded-xl p-6 md:p-8"
              >
                {status === "error" && (
                  <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3 mb-5">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {errorMsg}
                  </div>
                )}

                {/* Name row */}
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-xs font-semibold text-navy mb-1.5"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      required
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-bluestone focus:ring-1 focus:ring-bluestone/20"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-xs font-semibold text-navy mb-1.5"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      required
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-bluestone focus:ring-1 focus:ring-bluestone/20"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                {/* Company */}
                <div className="mb-4">
                  <label
                    htmlFor="company"
                    className="block text-xs font-semibold text-navy mb-1.5"
                  >
                    Company Name{" "}
                    <span className="text-slate font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-bluestone focus:ring-1 focus:ring-bluestone/20"
                    placeholder="Company name"
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-navy mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-bluestone focus:ring-1 focus:ring-bluestone/20"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold text-navy mb-1.5"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-bluestone focus:ring-1 focus:ring-bluestone/20"
                      placeholder="(555) 555-5555"
                    />
                  </div>
                </div>

                {/* Service + Property Type */}
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs font-semibold text-navy mb-1.5"
                    >
                      Service Required
                    </label>
                    <select
                      name="service"
                      id="service"
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-bluestone focus:ring-1 focus:ring-bluestone/20"
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="propertyType"
                      className="block text-xs font-semibold text-navy mb-1.5"
                    >
                      Property Type
                    </label>
                    <select
                      name="propertyType"
                      id="propertyType"
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-bluestone focus:ring-1 focus:ring-bluestone/20"
                    >
                      <option value="">Select type...</option>
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Multi-Family</option>
                      <option>Vacant / REO</option>
                    </select>
                  </div>
                </div>

                {/* Property Address */}
                <div className="mb-4">
                  <label
                    htmlFor="propertyAddress"
                    className="block text-xs font-semibold text-navy mb-1.5"
                  >
                    Property Address
                  </label>
                  <input
                    type="text"
                    name="propertyAddress"
                    id="propertyAddress"
                    className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-bluestone focus:ring-1 focus:ring-bluestone/20"
                    placeholder="Street address"
                  />
                </div>

                {/* City, State, ZIP */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-4">
                  <div className="col-span-2">
                    <label
                      htmlFor="city"
                      className="block text-xs font-semibold text-navy mb-1.5"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-bluestone focus:ring-1 focus:ring-bluestone/20"
                      placeholder="City"
                    />
                  </div>
                  <div className="col-span-1">
                    <label
                      htmlFor="state"
                      className="block text-xs font-semibold text-navy mb-1.5"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      id="state"
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-bluestone focus:ring-1 focus:ring-bluestone/20"
                      placeholder="GA"
                      maxLength={2}
                    />
                  </div>
                  <div className="col-span-1 sm:col-span-2">
                    <label
                      htmlFor="zip"
                      className="block text-xs font-semibold text-navy mb-1.5"
                    >
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      name="zip"
                      id="zip"
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-bluestone focus:ring-1 focus:ring-bluestone/20"
                      placeholder="30338"
                      maxLength={10}
                    />
                  </div>
                </div>

                {/* Preferred contact method */}
                <div className="mb-4">
                  <label
                    htmlFor="contactMethod"
                    className="block text-xs font-semibold text-navy mb-1.5"
                  >
                    Preferred Contact Method
                  </label>
                  <select
                    name="contactMethod"
                    id="contactMethod"
                    className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-bluestone focus:ring-1 focus:ring-bluestone/20"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="either">Either</option>
                  </select>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-navy mb-1.5"
                  >
                    Project Description
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-bluestone focus:ring-1 focus:ring-bluestone/20 resize-y"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2 bg-bluestone hover:bg-bluestone-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm px-6 py-3.5 rounded-lg transition-colors"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Request
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
