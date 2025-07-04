"use client"
import { HeroSection } from "@/components/sections/hero-section"
import { CountdownSection } from "@/components/sections/countdown-section"
import { SegmentsCards } from "@/components/sections/segments-cards"
import { SegmentDetail } from "@/components/sections/segment-detail"
import { SponsorsSection } from "@/components/sections/sponsors-section"
import { OrganizersSection } from "@/components/sections/organizers-section"
import { Footer } from "@/components/sections/footer"
import { useCountdown } from "@/hooks/use-countdown"
import { segments } from "@/data/segments"
import { organizers } from "@/data/organizers"

export default function RobotronicsFest() {
  const timeLeft = useCountdown("2025-07-25T00:00:00")

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <HeroSection />
      <CountdownSection timeLeft={timeLeft} />
      <SegmentsCards />

      {/* Individual Segment Sections */}
      {segments.map((segment) => (
        <SegmentDetail key={segment.id} segment={segment} />
      ))}

      <SponsorsSection />
      <OrganizersSection organizers={organizers} />
      <Footer />
    </div>
  )
}
