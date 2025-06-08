import { BenefitCard } from "@/components/shared/benefit-card"
import { TrendingUp, Clock } from "lucide-react"

export function BenefitsSection() {
  const salesBenefits = [
    "вывести компанию из убыточности",
    "повысить свой личный доход и обороты компании",
    "повысить конверсию и средний чек в продажах минимум на 30%",
    "выйти на стабильный прирост выручки",
  ]

  const teamBenefits = [
    "наладить дисциплину в коллективе и быть авторитетом",
    "научить сотрудников выполнять задачи с 1 раза без манипуляций и саботажа",
    "замотивировать сотрудников на выполнение плана продаж и целей компании",
    "делегировать управление командой и продажами",
  ]

  return (
    <section className="bg-[#444444] py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="lg:col-span-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">Обращайтесь ко мне, если хотите</h2>
          </div>
          <div className="lg:col-span-8 space-y-8">
            <BenefitCard icon={TrendingUp} title="УВЕЛИЧИТЬ ПРОДАЖИ КОМПАНИИ" items={salesBenefits} />
            <BenefitCard icon={Clock} title="УПРАВЛЯТЬ КОМАНДОЙ 2 ЧАСА В ДЕНЬ" items={teamBenefits} />
          </div>
        </div>
      </div>
    </section>
  )
}
