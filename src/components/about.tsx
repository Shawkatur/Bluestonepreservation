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
              We Take Care of Your Property
            </h2>
            <div className="space-y-4 text-slate text-[0.95rem] leading-relaxed">
              <p>
                Bluestone Home Solutions LLC is a property services company
                based in Atlanta, Georgia. We work on residential and
                commercial properties, and we do the job right.
              </p>
              <p>
                Keeping a property in good shape matters. We pay attention to
                the details and make sure the work gets done the way it should.
              </p>
              <p>
                We work with homeowners, real estate investors, and property
                managers. Our goal is simple: do good work, keep you informed,
                and be the team you can count on.
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
