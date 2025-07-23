import HeroSection from "@/components/hero-section"
import ProblemSection from "@/components/problem-section"
import SolutionSection from "@/components/solution-section"
import MarketOpportunitySection from "@/components/market-opportunity-section"
import MarketValidationSection from "@/components/market-validation-section"
import CompetitionSection from "@/components/competition-section"
import BusinessModelSection from "@/components/business-model-section"
import GoToMarketSection from "@/components/go-to-market-section"
import VisionSection from "@/components/vision-section"
import TeamSection from "@/components/team-section"
import OurAskSection from "@/components/our-ask-section"
import ClosingSection from "@/components/closing-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BusinessModelSection />
      <MarketOpportunitySection />
      <MarketValidationSection />
      <CompetitionSection />
      <GoToMarketSection />
      <VisionSection />
      <TeamSection />
      <OurAskSection />
      <ClosingSection />
    </>
  )
}
