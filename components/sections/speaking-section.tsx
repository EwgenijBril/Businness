import Image from "next/image"
import { Button } from "@/components/ui/button"

const speakingImages = [
  {
    id: 1,
    src: "/placeholder.svg?width=400&height=300",
    alt: "Ксения Бриль выступает на конференции с презентацией о результатах в продажах",
  },
  {
    id: 2,
    src: "/placeholder.svg?width=400&height=300",
    alt: "Ксения Бриль на сцене международного форума",
  },
  {
    id: 3,
    src: "/placeholder.svg?width=400&height=300",
    alt: "Ксения Бриль проводит презентацию на бизнес-форуме",
  },
  {
    id: 4,
    src: "/placeholder.svg?width=400&height=300",
    alt: "Ксения Бриль выступает перед аудиторией на конференции",
  },
]

export function SpeakingSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 md:mb-16 text-center leading-tight">
          <span className="text-brand-red">Выступаю в качестве спикера</span>
          <br className="hidden sm:block" />
          <span className="text-zinc-800">на международных форумах</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
          {speakingImages.map((image) => (
            <div key={image.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Block */}
        <div className="bg-zinc-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Декоративный элемент (ракета) */}
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 opacity-10">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M60 10L70 40L100 30L80 60L110 70L80 80L100 90L70 80L60 110L50 80L20 90L40 80L10 70L40 60L20 30L50 40L60 10Z"
                fill="currentColor"
                className="text-zinc-600"
              />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Даю владельцам компании понятную систему управления и увеличения прибыли
            </h3>
            <p className="text-xl text-zinc-300 mb-6">которую легко повторить в каждом бизнесе за 6 недель</p>
            <p className="text-white mb-8 leading-relaxed">
              Напишите в телеграм, чтобы записаться на разбор и уже в этом месяце получить первые результаты в росте
              продаж вашей компании
            </p>
            <Button
              className="bg-brand-red hover:bg-brand-red/90 text-white rounded-full px-10 py-4 text-base font-semibold"
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
