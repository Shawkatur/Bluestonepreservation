import { company } from "@/lib/company";
import { Mail, MapPin, ExternalLink } from "lucide-react";

const quickLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About Us" },
  { href: "/#why", label: "Why Choose Us" },
  { href: "/#areas", label: "Service Areas" },
  { href: "/#portfolio", label: "Our Work" },
  { href: "/#contact", label: "Contact" },
];

const serviceLinks = [
  "Property Preservation",
  "Property Maintenance",
  "Repairs & Renovations",
  "Debris Removal",
  "Property Inspections",
  "Emergency Services",
];

export function Footer() {
  return (
    <footer className="bg-navy text-white/60">
      <div className="container-main pt-14 pb-6 md:pt-20 md:pb-8">
        {/* Top grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-10 border-b border-white/8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <svg
                width="28"
                height="28"
                viewBox="0 0 32 32"
                fill="none"
                aria-hidden="true"
              >
                <rect x="2" y="6" width="12" height="20" rx="2" fill="#356B94" />
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
                  fill="#12243A"
                />
              </svg>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-[0.9rem] tracking-tight">
                  BLUESTONE
                </span>
                <span className="text-bluestone-200 font-medium text-[0.55rem] tracking-[0.08em] uppercase">
                  Home Solutions
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Property maintenance, preservation, repairs, and field services
              for homes and commercial buildings across Metro Atlanta.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((name) => (
                <li key={name}>
                  <a
                    href="/#services"
                    className="text-sm hover:text-white transition-colors"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 text-bluestone-200 flex-shrink-0" />
                <span className="text-sm">{company.contact.email}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-bluestone-200 flex-shrink-0" />
                <div className="text-sm">
                  <p>{company.address.street}</p>
                  <p>
                    {company.address.city}, {company.address.state}{" "}
                    {company.address.zip}
                  </p>
                </div>
              </li>
              <li>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(company.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-bluestone-200 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  Get Directions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-xs">
          <p>
            &copy; {new Date().getFullYear()} {company.legalName}. All Rights
            Reserved.
          </p>
          <div className="flex gap-5">
            <a
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="hover:text-white transition-colors"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
