import { Button } from "@/components/ui/button"
import { XCircle, CheckCircle2 } from "lucide-react"

const problemsList = [
  "слышите отмазки сотрудников, о том, что «клиентов нет», «я все предложила», «им ничего не надо», «продаж нет, потому что жарко»",
  "не выполняется план продаж, обороты не растут, и вы «топчитесь на месте»",
  "устали объяснять одно и то же сотрудникам, они плохо работают, и вы не знаете, как на это повлиять",
  "не можете построить чёткую систему управления, в компании творится хаос",
  "не понимаете, как выстроить систему управления так, чтобы масштабировать бизнес и достигать цели компании",
  "не понимаете, как и какие задачи делегировать",
]

const solutionBenefits = [
  "определим причины проблем, которые тормозят рост ваших продаж и создают хаос в управлении",
  "составим план действий достижения желаемого результата",
]

export function ProblemSolvingSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container">
        <h2 className="text-4xl sm:text-5xl font-bold text-zinc-800 mb-12 md:mb-16 text-center leading-tight">
          Если эти <span className="text-brand-red">проблемы</span> вы до сих пор
          <br className="hidden sm:block" />
          не смогли решить самостоятельно
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 items-start">
          {/* Левая колонка: Проблемы */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
            <ul className="space-y-5">
              {problemsList.map((problem, index) => (
                <li key={index} className="flex items-start">
                  <XCircle className="w-6 h-6 text-brand-red mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-zinc-700 text-sm leading-relaxed">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Правая колонка: Решение/CTA */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-zinc-800 mb-2">Напишите мне в Телеграм</h3>
            <p className="text-zinc-500 text-sm mb-6">чтобы забронировать время разбора</p>

            <ul className="space-y-4 mb-8">
              {solutionBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-zinc-700 text-sm leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mb-8">
              <p className="text-zinc-800 text-lg">
                Стоимость: <span className="line-through text-zinc-400">15 000₽</span>{" "}
                <span className="font-bold text-xl">4900₽</span>
              </p>
            </div>

            <Button
              className="bg-brand-red hover:bg-brand-red/90 text-white rounded-lg px-8 py-4 text-base font-semibold w-full"
              asChild
            >
              <a href="https://t.me/your_telegram_username" target="_blank" rel="noopener noreferrer">
                НАПИСАТЬ В ТЕЛЕГРАМ
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
