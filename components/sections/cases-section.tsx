"use client"

import React, { useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

interface CaseData {
  id: number
  clientName: string
  clientDescription: string
  clientAvatar: string
  reviewLink?: string
  request?: string[]
  results: string[]
  revenueGrowth?: { month: string; oldValue: number; newValue: number; percentage: string }[]
  detailedCaseLink?: string
}

const casesData: CaseData[] = [
  {
    id: 1,
    clientName: "ЕЛЕНА ОРЛОВА",
    clientDescription: "Владелица магазина женского белья «Триумф» в городе Магнитогорск",
    clientAvatar: "/placeholder.svg?width=80&height=80",
    reviewLink: "#",
    results: [
      "сделали заветный 1 млн рублей впервые за 23 года",
      "увеличили продажи на на 66% по сравнению с прошлым годом при снижении трафика на 30%",
      "Елена больше не продает сама — наняла третьего продавца",
      "освободила время, чтобы заниматься любимым делом — садом",
    ],
    revenueGrowth: [
      { month: "август", oldValue: 30, newValue: 47, percentage: "+47%" },
      { month: "сентябрь", oldValue: 25, newValue: 39, percentage: "+39%" },
      { month: "октябрь", oldValue: 40, newValue: 66, percentage: "+66%" },
    ],
    detailedCaseLink: "#",
  },
  {
    id: 2,
    clientName: "ЖАННА СПИРИНА",
    clientDescription: "Владелица туристической компании «Награда за труд» в городе Тюмени",
    clientAvatar: "/placeholder.svg?width=80&height=80",
    reviewLink: "#",
    request: [
      "не понимала, как правильно влиять на эффективность работы сотрудников и контролировать их",
      "не понимала, как структурировать процесс управления, был беспорядок в делах",
      "не знала, какие функции должен выполнять новый руководитель и как делегировать управление командой",
    ],
    results: [
      "увеличили количество входящих заявок на 30%",
      "менеджеры стали выполнять планы по холодным звонкам",
      "ввели ежедневные планерки для постановки целей и задач на день",
      "4 из 5 сотрудников после собрания сделали продажи",
      "появилось чёткое понимание, как наладить систему управления командой",
      "новый руководитель стал уверенно управлять командой",
    ],
    revenueGrowth: [],
    detailedCaseLink: "#",
  },
  {
    id: 3,
    clientName: "ЕЛИЗАВЕТА РЯЗАНОВА",
    clientDescription: "Владелица 2-х магазинов женской одежды «Elizabeth Johns» г. Москва и г. Белгород",
    clientAvatar: "/placeholder.svg?width=80&height=80",
    reviewLink: "#",
    results: [
      "увеличили оборот компании за месяц на 3,3 млн ₽",
      "в жаркий сентябрь +25 продали теплую коллекцию (раньше это казалось невозможным) и установили рекордные показатели конверсии и среднего чека за 10 лет",
      "наладили дисциплину и повысили зарплату сотрудникам",
      "готовят открытие новых магазинов в Москве",
    ],
    revenueGrowth: [
      { month: "сентябрь", oldValue: 50, newValue: 110, percentage: "+120%" },
      { month: "октябрь", oldValue: 50, newValue: 76, percentage: "+52%" },
      { month: "ноябрь", oldValue: 50, newValue: 56, percentage: "+12%" },
      { month: "декабрь", oldValue: 50, newValue: 75, percentage: "+50%" },
    ],
    detailedCaseLink: "#",
  },
  {
    id: 4,
    clientName: "МИЛЯ ИБРАГИМОВА",
    clientDescription: "Основательница «Академии психологической практики» в городе Тюмени",
    clientAvatar: "/placeholder.svg?width=80&height=80",
    reviewLink: "#",
    request: [
      "понимала, что несистемное управление тормозит масштабирование компании",
      "не понимала, как делегировать управление проектами новому руководителю",
      "все бизнес-процессы были завязаны на владелице компании",
      "ежедневные горящие задачи отнимали все силы",
    ],
    results: [
      "Миля делегировала управление командой и продажами",
      "разделили обязанности между владельцем и руководителем",
      "новый руководитель стал уверенно управлять командой",
      "сместили фокус внимания в продажах с малоприбыльных проектов на более доходные",
      "изменили подход с обработки входящих заявок на активные продажи",
    ],
    revenueGrowth: [],
    detailedCaseLink: "#",
  },
  {
    // Data for МАРИЯ ЛОКОТЬ
    id: 5,
    clientName: "МАРИЯ ЛОКОТЬ",
    clientDescription: "собственник бренда «Dress me», производства женской одежды и ателье в городе Новосибирске",
    clientAvatar: "/placeholder.svg?width=80&height=80",
    reviewLink: "#", // Placeholder
    request: [
      "хочет делегировать обучение новых сотрудников",
      "не понимала, как делегировать управление командой двух отделов и процессы продаж компании",
      "только назначила на должность управляющих для онлайн и офлайн продавцов компании — хочет понять, как правильно отслеживать их работу",
    ],
    results: [
      "увеличили прирост выручки за год на 97%",
      "Мария работает 3 дня в неделю",
      "освободилась от проведения собеседований и разборов резюме, больше не занимается обучением сотрудников",
      "делегировала процесс управления командой и продажами профессионально подготовленным руководителям",
      "«Теперь мне не нужно на 150% погружаться в работу каждого сотрудника», — говорит Мария",
    ],
    revenueGrowth: [], // No revenue growth chart in the screenshot
    detailedCaseLink: "#", // Placeholder
  },
]

function BarChart({ data }: { data: CaseData["revenueGrowth"] }) {
  if (!data || data.length === 0) {
    return null
  }
  const actualMaxNewValue = Math.max(...data.map((item) => item.newValue), 0)
  const maxScaleValue = actualMaxNewValue === 0 ? 10 : actualMaxNewValue / 0.87

  return (
    <div className="flex justify-around items-end h-48 space-x-2 pt-4">
      {data.map((item) => (
        <div key={item.month} className="flex flex-col items-center w-1/3">
          <div className="text-xs text-zinc-500 mb-1">{item.percentage}</div>
          <div className="flex items-end w-full max-w-[40px] h-32">
            <div
              className="bg-zinc-300 w-1/2 rounded-t-sm"
              style={{ height: `${Math.max(0, item.oldValue / maxScaleValue) * 100}%` }}
              title={`Прошлый год: ${item.oldValue}`}
            ></div>
            <div
              className="bg-brand-red w-1/2 rounded-t-sm"
              style={{ height: `${Math.max(0, item.newValue / maxScaleValue) * 100}%` }}
              title={`Текущий год: ${item.newValue}`}
            ></div>
          </div>
          <div className="text-xs text-zinc-600 mt-2">{item.month}</div>
        </div>
      ))}
    </div>
  )
}

function CaseCard({ caseItem }: { caseItem: CaseData }) {
  const showRequestSection = caseItem.request && caseItem.request.length > 0
  const showRevenueGrowthSection = caseItem.revenueGrowth && caseItem.revenueGrowth.length > 0

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8">
        <div className="flex items-center mb-4 sm:mb-0">
          <Image
            src={caseItem.clientAvatar || "/placeholder.svg?width=64&height=64&query=avatar"}
            alt={caseItem.clientName}
            width={64}
            height={64}
            className="rounded-full mr-4"
          />
          <div>
            <h3 className="font-semibold text-lg text-zinc-800">{caseItem.clientName}</h3>
            <p className="text-xs text-zinc-500 max-w-xs">{caseItem.clientDescription}</p>
          </div>
        </div>
        {caseItem.reviewLink && (
          <Button
            variant="default"
            className="bg-zinc-700 hover:bg-zinc-800 text-white rounded-full px-6 py-3 text-sm w-full sm:w-auto"
          >
            ЧИТАТЬ ОТЗЫВ {caseItem.clientName.split(" ")[0].toUpperCase()}
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {showRequestSection ? (
          <div>
            <h4 className="text-brand-red font-semibold text-sm mb-3 tracking-wider">ЗАПРОС</h4>
            <ul className="space-y-2">
              {caseItem.request?.map((item, index) => (
                <li key={index} className="flex items-start text-sm text-zinc-700">
                  <span className="text-brand-red mr-2 mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <h4 className="text-brand-red font-semibold text-sm mb-3 tracking-wider">РЕЗУЛЬТАТ</h4>
            <ul className="space-y-2">
              {caseItem.results.map((result, index) => (
                <li key={index} className="flex items-start text-sm text-zinc-700">
                  <span className="text-brand-red mr-2 mt-1">•</span>
                  {result}
                </li>
              ))}
            </ul>
          </div>
        )}

        {showRequestSection ? (
          <div>
            <h4 className="text-brand-red font-semibold text-sm mb-3 tracking-wider">РЕЗУЛЬТАТ</h4>
            <ul className="space-y-2">
              {caseItem.results.map((result, index) => (
                <li key={index} className="flex items-start text-sm text-zinc-700">
                  <span className="text-brand-red mr-2 mt-1">•</span>
                  {result}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          showRevenueGrowthSection && (
            <div>
              <h4 className="text-brand-red font-semibold text-sm mb-1 tracking-wider">РОСТ ВЫРУЧКИ К ПРОШЛОМУ ГОДУ</h4>
              <BarChart data={caseItem.revenueGrowth} />
            </div>
          )
        )}
      </div>

      {showRequestSection && showRevenueGrowthSection && (
        <div className="mt-6 md:mt-8">
          <h4 className="text-brand-red font-semibold text-sm mb-1 tracking-wider">РОСТ ВЫРУЧКИ К ПРОШЛОМУ ГОДУ</h4>
          <BarChart data={caseItem.revenueGrowth} />
        </div>
      )}

      {caseItem.detailedCaseLink && (
        <div className="mt-6 text-center">
          <a href={caseItem.detailedCaseLink} className="text-sm text-zinc-500 hover:text-brand-red underline">
            Читать подробный кейс
          </a>
        </div>
      )}
    </div>
  )
}

export function CasesSection() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  useEffect(() => {
    if (!api) {
      return
    }
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const handleButtonClick = (index: number) => {
    api?.scrollTo(index)
  }

  return (
    <section className="bg-zinc-100 py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-800 mb-3 text-center md:text-left">
          Мои <span className="text-brand-red">клиенты</span> увеличивают
          <br className="hidden md:block" /> прибыль компании
        </h2>
        <p className="text-zinc-600 text-base md:text-lg mb-8 md:mb-12 text-center md:text-left max-w-2xl mx-auto md:mx-0">
          за счет понятной системы управления, которую вы сможете повторить
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8 md:mb-12">
          {casesData.map((caseItem, index) => (
            <Button
              key={caseItem.id}
              onClick={() => handleButtonClick(index)}
              variant={current === index ? "default" : "outline"}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm transition-all duration-300",
                current === index
                  ? "bg-brand-red text-white border-brand-red"
                  : "text-brand-red border-brand-red hover:bg-brand-red/10",
              )}
            >
              {caseItem.id} КЕЙС
            </Button>
          ))}
        </div>

        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {casesData.map((caseItem) => (
              <CarouselItem key={caseItem.id}>
                <CaseCard caseItem={caseItem} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
