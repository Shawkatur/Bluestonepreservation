"use client";

import { motion } from "framer-motion";
import {
  UserCheck,
  MessageSquare,
  Layers,
  FileText,
  CheckSquare,
  HeartHandshake,
} from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "One Team, One Call",
    description:
      "You deal with one crew for all your property work. No juggling contractors.",
  },
  {
    icon: MessageSquare,
    title: "We Keep You in the Loop",
    description:
      "You'll know what's happening with your property every step of the way.",
  },
  {
    icon: Layers,
    title: "We Handle All of It",
    description:
      "Maintenance, repairs, preservation, cleanups, and more, all under one roof.",
  },
  {
    icon: FileText,
    title: "Photos and Reports",
    description:
      "We document everything: before and after photos, service records, and condition reports.",
  },
  {
    icon: CheckSquare,
    title: "Quality Work",
    description:
      "We do the job right the first time and make sure it holds up.",
  },
  {
    icon: HeartHandshake,
    title: "Built Around You",
    description:
      "Whether you're a homeowner, property manager, or investor, we work around your needs.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why" className="section-padding bg-navy text-white">
      <div className="container-main">
        <div className="max-w-2xl mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-bluestone-200 mb-2">
            Why Bluestone
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-balance">
            A Reliable Partner for Your Property Needs
          </h2>
          <p className="mt-3 text-white/60 text-base md:text-lg leading-relaxed">
            What sets us apart from other property service providers in the
            Metro Atlanta area.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="bg-white/5 border border-white/8 rounded-xl p-6 hover:bg-white/8 transition-colors"
            >
              <feature.icon className="w-6 h-6 text-bluestone-200 mb-4" />
              <h3 className="text-base font-semibold mb-1.5">
                {feature.title}
              </h3>
              <p className="text-sm text-white/55 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
