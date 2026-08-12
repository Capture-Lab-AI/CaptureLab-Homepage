import { Buyers } from "@/components/buyers";
import { Cta } from "@/components/cta";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Industries } from "@/components/industries";
import { Instrument } from "@/components/instrument";
import { Nav } from "@/components/nav";
import { Portfolio } from "@/components/portfolio";
import { Proof } from "@/components/proof";
import { Turn } from "@/components/turn";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Portfolio />
        <Proof />
        <HowItWorks />
        <Turn />
        <Instrument />
        <Buyers />
        <Industries />
        <Cta />
      </main>
    </>
  );
}
