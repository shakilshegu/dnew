import Image from "next/image";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import HubFeaturesSection from "./components/HubFeaturesSection";
import TechnologySection from "./components/TechnologySection";
import NetworkSection from "./components/NetworkSection";
import CommunitySection from "./components/CommunitySection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <StatsSection />
        <HubFeaturesSection />
        <TechnologySection />
        <NetworkSection />
        <CommunitySection />
      </main>
    </>
  );
}
