import { Buyers } from "@/components/buyers";
import { Cta } from "@/components/cta";
import { Hero } from "@/components/hero";
import { Instrument } from "@/components/instrument";
import { Nav } from "@/components/nav";
import { Proof } from "@/components/proof";
import { Turn } from "@/components/turn";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Proof />
        <Turn />
        <Instrument />
        <Buyers />
        <Cta />
      </main>
    </>
  );
}
