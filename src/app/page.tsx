import HeroSection from '@/components/sections/hero-section'
import ExpertiseSection from '@/components/sections/expertise-section'
import FeaturedInsight from '@/components/sections/featured-insight'
import EngagementFilter from '@/components/sections/engagement-filter'

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <ExpertiseSection />
      <FeaturedInsight />
      <EngagementFilter />
    </main>
  )
}