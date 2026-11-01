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
    title: "Single Point of Contact",
    description:
      "Simplify project coordination through one dependable service partner.",
  },
  {
    icon: MessageSquare,
    title: "Reliable Communication",
    description:
      "Clear service requests, updates, and communication throughout the process.",
  },
  {
    icon: Layers,
    title: "Comprehensive Solutions",
    description:
      "Access coordinated maintenance, repairs, preservation, and improvement services.",
  },
  {
    icon: FileText,
    title: "Detailed Documentation",
    description:
      "Organized service records, before-and-after photos, and transparent reporting.",
  },
  {
    icon: CheckSquare,
    title: "Attention to Quality",
    description:
      "Focus on proper workmanship, property condition, and consistent results.",
  },
  {
    icon: HeartHandshake,
    title: "Customer-Focused Service",
    description:
      "Adapt solutions to the priorities of homeowners, property managers, and commercial clients.",
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
