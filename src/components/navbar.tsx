"use client";

import { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";
import { company } from "@/lib/company";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About Us" },
  { href: "#why", label: "Why Choose Us" },
  { href: "#areas", label: "Service Areas" },
  { href: "#portfolio", label: "Our Work" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy shadow-lg shadow-navy/10"
          : "bg-navy/95 backdrop-blur-sm"
      }`}
    >
      <div className="container-main">
        <div className="flex h-16 items-center justify-between md:h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden="true"
            >
              <rect x="2" y="6" width="12" height="20" rx="2" fill="#C4873B" />
              <rect
                x="18"
                y="6"
                width="12"
                height="20"
                rx="2"
                fill="#fff"
                opacity="0.9"
              />
              <rect
                x="10"
                y="10"
                width="12"
                height="12"
                rx="2"
                fill="#356B94"
              />
            </svg>
            <span className="text-white font-semibold text-sm tracking-tight">
              BLUESTONE{" "}
              <span className="text-bluestone-200">HOME</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-bluestone hover:bg-bluestone-400 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              <Mail className="w-4 h-4" />
              Free Estimate
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-1"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10">
          <div className="container-main py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white text-sm font-medium py-2.5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 bg-bluestone text-white text-sm font-semibold px-5 py-3 rounded-lg"
            >
              <Mail className="w-4 h-4" />
              Request a Free Estimate
            </a>
            {company.contact.email && (
              <p className="text-white/50 text-xs mt-3 pt-3 border-t border-white/10">
                {company.contact.email}
              </p>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
