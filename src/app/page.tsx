import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { WhyChooseUs } from "@/components/why-choose-us";
import { ServiceAreas } from "@/components/service-areas";
import { Portfolio } from "@/components/portfolio";
import { WhoWeWorkWith } from "@/components/who-we-work-with";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <ServiceAreas />
        <Portfolio />
        <WhoWeWorkWith />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
