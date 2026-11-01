"use client";

import { motion } from "framer-motion";
import {
  Home,
  Building2,
  TrendingUp,
  Landmark,
  Briefcase,
  Globe,
  FileCheck,
  Building,
} from "lucide-react";
import { clientTypes } from "@/lib/services";

const iconMap: Record<string, React.ElementType> = {
  Home,
  Building2,
  TrendingUp,
  Landmark,
  Briefcase,
  Globe,
  FileCheck,
  Building,
};

export function WhoWeWorkWith() {
  return (
    <section className="section-padding bg-light-bg">
      <div className="container-main">
        <div className="max-w-2xl mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-bluestone mb-2">
            Our Clients
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy tracking-tight text-balance">
            Who We Work With
          </h2>
          <p className="mt-3 text-slate text-base md:text-lg leading-relaxed">
            From homeowners to national service companies, we work with all
            kinds of property clients across Metro Atlanta.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {clientTypes.map((client, i) => {
            const Icon = iconMap[client.icon] || Building;
            return (
              <motion.div
                key={client.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-white border border-gray-100 rounded-xl p-5 hover:border-bluestone/20 hover:shadow-md transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center mb-3">
                  <Icon className="w-[18px] h-[18px] text-bluestone" />
                </div>
                <h3 className="text-sm font-semibold text-navy mb-1.5">
                  {client.title}
                </h3>
                <p className="text-xs text-slate leading-relaxed">
                  {client.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
