"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle, MapPin, Star } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "Professional Service" },
  { icon: CheckCircle, label: "Dependable Workmanship" },
  { icon: Star, label: "Free Estimates" },
  { icon: MapPin, label: "Locally Owned" },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/3] rounded-xl overflow-hidden"
          >
            <Image
              src="/images/property-exterior.jpg"
              alt="Well-maintained property exterior by Bluestone Home Solutions"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/10 to-transparent" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-bluestone mb-2">
              About Us
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-bold text-navy tracking-tight text-balance mb-5">
              Dedicated to Protecting &amp; Improving Your Property
            </h2>
            <div className="space-y-4 text-slate text-[0.95rem] leading-relaxed">
              <p>
                Bluestone Home Solutions LLC is an Atlanta-based property
                services company focused on delivering practical, dependable
                solutions for residential and commercial properties.
              </p>
              <p>
                We understand the importance of protecting property value,
                maintaining safe conditions, and completing work with attention
                to detail.
              </p>
              <p>
                Whether supporting individual property owners, real estate
                investors, or property management organizations, we aim to build
                long-term relationships through consistent service and
                professional accountability.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {badges.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 bg-bluestone/8 text-bluestone text-xs font-semibold px-3.5 py-2 rounded-full"
                >
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
