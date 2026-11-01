import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[680px] flex items-center bg-navy overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/house-exterior.jpg"
          alt="Residential property maintained by Bluestone Home Solutions"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/80 to-navy/50" />
      </div>

      <div className="container-main relative z-10 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 text-bluestone-100 text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-bluestone-300 rounded-full" />
            Atlanta, Georgia
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.1] tracking-tight text-balance">
            Professional Property Maintenance &amp; Preservation Solutions
          </h1>

          <p className="mt-5 text-base md:text-lg text-white/70 leading-relaxed max-w-xl">
            Bluestone Home Solutions LLC delivers dependable property
            maintenance, preservation, repairs, and improvement services. From
            routine upkeep to comprehensive property restoration, we help
            property owners and managers protect their investments.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-bluestone hover:bg-bluestone-400 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm"
            >
              Request a Free Estimate
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border border-white/25 hover:border-white/50 hover:bg-white/5 text-white font-medium px-7 py-3.5 rounded-lg transition-all text-sm"
            >
              Explore Our Services
              <ChevronDown className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-x-10 gap-y-4">
            <div>
              <p className="text-xs text-white/50 uppercase tracking-wider font-medium">
                Email Us
              </p>
              <p className="text-sm text-white/90 mt-0.5">
                service@bluestonehomellc.com
              </p>
            </div>
            <div>
              <p className="text-xs text-white/50 uppercase tracking-wider font-medium">
                Location
              </p>
              <p className="text-sm text-white/90 mt-0.5">
                Atlanta, GA 30338
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
