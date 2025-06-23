import type React from "react"
import { HeroSection } from "@/components/sections/hero-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { CasesSection } from "@/components/sections/cases-section"
import { ConsultationSection } from "@/components/sections/consultation-section"
import { ProgramsSection } from "@/components/sections/program-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ProblemSolvingSection } from "@/components/sections/problem-solving-section"
import { AboutMeSection } from "@/components/sections/about-me-section"
import { CompaniesSection } from "@/components/sections/companies-section"
import { SpeakingSection } from "@/components/sections/speaking-section"
import { TelegramSection } from "@/components/sections/telegram-section"
import { Footer } from "@/components/sections/footer-section"

// ... (существующий код LandingPage и InfoCard)

// Добавляем новый компонент BenefitCard
function BenefitCard({ icon: Icon, title, items }: { icon: React.ElementType; title: string; items: string[] }) {
  return (
    <div className="bg-white text-zinc-800 p-6 md:p-8 rounded-xl shadow-lg">
      <div className="flex items-center mb-4">
        <Icon className="h-8 w-8 text-brand-red mr-3" />
        <h3 className="text-xl font-bold tracking-tight">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-brand-red mr-2 mt-1">•</span>
            <span className="text-zinc-600 text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Модифицируем компонент LandingPage, добавляя новую секцию
export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <CasesSection />
      <ConsultationSection />
      <ProgramsSection />
      <TestimonialsSection />
      <ProblemSolvingSection />
      <AboutMeSection />
      <CompaniesSection />
      <SpeakingSection />
      <TelegramSection />
      <Footer />
    </>
  )
}

// Компонент InfoCard остается без изменений
function InfoCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-[#444444] rounded-xl p-4 md:p-6">
      {" "}
      {/* Убедимся, что фон InfoCard соответствует предыдущему запросу */}
      <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 text-white">{title}</h3>
      <p className="text-xs md:text-sm text-zinc-300">{description}</p>
    </div>
  )
}
