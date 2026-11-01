"use client";

import {
  Shield,
  Home,
  Wrench,
  Trash2,
  ClipboardCheck,
  AlertTriangle,
} from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/lib/services";

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Home,
  Wrench,
  Trash2,
  ClipboardCheck,
  AlertTriangle,
};

export function Services() {
  return (
    <section id="services" className="section-padding bg-light-bg">
      <div className="container-main">
        <div className="max-w-2xl mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-bluestone mb-2">
            What We Do
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy tracking-tight text-balance">
            Complete Property Solutions Under One Roof
          </h2>
          <p className="mt-3 text-slate text-base md:text-lg leading-relaxed">
            Dependable services to maintain, protect, restore, and improve
            residential and commercial properties.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Shield;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white border border-gray-100 rounded-xl p-6 hover:border-bluestone/30 hover:shadow-lg hover:shadow-bluestone/5 transition-all group"
              >
                <div className="w-11 h-11 rounded-lg bg-navy flex items-center justify-center mb-4 group-hover:bg-bluestone transition-colors">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {service.items.slice(0, 4).map((item) => (
                    <li
                      key={item}
                      className="text-xs font-medium bg-light-bg text-slate px-2.5 py-1 rounded-full"
                    >
                      {item}
                    </li>
                  ))}
                  {service.items.length > 4 && (
                    <li className="text-xs font-medium text-bluestone px-2.5 py-1">
                      +{service.items.length - 4} more
                    </li>
                  )}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
