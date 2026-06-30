import { MotionProvider } from "@/components/landing/motion-provider";
import { Nav } from "@/components/landing/nav";
import { Hero } from "@/components/landing/hero";
import { Backed } from "@/components/landing/backed";
import { Audience } from "@/components/landing/audience";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Integrations } from "@/components/landing/integrations";
import { Trust } from "@/components/landing/trust";
import { Pilot } from "@/components/landing/pilot";
import { FinalCTA } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <MotionProvider>
      <main className="min-h-screen bg-bg">
        <Nav />
        <Hero />
        <Backed />
        <Audience />
        <HowItWorks />
        <Integrations />
        <Trust />
        <Pilot />
        <FinalCTA />
        <Footer />
      </main>
    </MotionProvider>
  );
}
