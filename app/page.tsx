import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Featured } from "@/components/Featured";
import { Gallery } from "@/components/Gallery";
import { SocialProof } from "@/components/SocialProof";
import { Location } from "@/components/Location";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Experience />
      <Featured />
      <Gallery />
      <SocialProof />
      <Location />
      <Faq />
      <FinalCta />
    </main>
  );
}
