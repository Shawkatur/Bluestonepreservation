"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { BeforeAfterSlider } from "./before-after-slider";
import { portfolioProjects, portfolioCategories } from "@/lib/services";

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const filtered =
    activeFilter === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeFilter);

  const closeLightbox = useCallback(() => setLightboxSrc(null), []);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-main">
        <div className="max-w-2xl mb-8 md:mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-bluestone mb-2">
            Our Work
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy tracking-tight text-balance">
            Our Work Speaks for Itself
          </h2>
          <p className="mt-3 text-slate text-base md:text-lg leading-relaxed">
            See the difference our team makes. Drag the slider to compare before
            and after on each project.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {portfolioCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                activeFilter === cat.id
                  ? "bg-navy text-white"
                  : "bg-light-bg text-slate hover:bg-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className="relative">
                  <BeforeAfterSlider
                    beforeSrc={project.beforeImage}
                    afterSrc={project.afterImage}
                    beforeAlt={project.beforeAlt}
                    afterAlt={project.afterAlt}
                  />
                  {/* Zoom button */}
                  <button
                    onClick={() => setLightboxSrc(project.afterImage)}
                    className="absolute bottom-3 left-3 bg-white/90 hover:bg-white text-navy p-2 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity z-20"
                    aria-label={`View full image: ${project.title}`}
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>
                <div className="mt-3 px-0.5">
                  <h3 className="text-sm font-semibold text-navy">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate mt-0.5">
                    {project.categoryLabel}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-slate py-12">
            No projects in this category yet.
          </p>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
              aria-label="Close lightbox"
            >
              <X className="w-7 h-7" />
            </button>
            <Image
              src={lightboxSrc}
              alt="Project detail"
              width={1200}
              height={900}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
