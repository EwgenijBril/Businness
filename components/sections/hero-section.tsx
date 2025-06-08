import Image from "next/image"
import { Header } from "@/components/shared/header"
import { InfoCard } from "@/components/shared/info-card"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="bg-brand-background text-white font-sans antialiased lg:min-h-screen flex flex-col overflow-hidden">
      <div className="container flex flex-col flex-grow">
        <Header />
        <main className="flex-grow flex flex-col justify-center py-16 lg:pt-44 lg:pb-0 relative">
          <div className="grid grid-cols-1 lg:grid-cols-10 items-center">
            {/* Левая часть: Только текст и кнопка (занимает 3 из 5 колонок на lg) */}
            <div className="lg:col-span-7 space-y-10 md:space-y-12 order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold max-w-5xl">
                Помогу увеличить продажи до 65% и делегировать управление командой
              </h1>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Button className="bg-brand-red hover:bg-brand-red/90 text-white rounded-full px-10 py-7 text-base font-semibold w-full sm:w-auto flex-shrink-0">
                  СМОТРЕТЬ КЕЙСЫ
                </Button>
                <p className="text-sm text-zinc-300 max-w-xs">
                  Узнайте, как клиенты в 2,2 раза увеличивают прибыль после внедрения моей методики
                </p>
              </div>
            </div>

            {/* Правая часть: Изображение (занимает 2 из 5 колонок на lg) */}
            <div className="lg:col-span-2 order-2 relative flex justify-center">
              <div className="relative lg:absolute lg:transform lg:-translate-y-[50%] lg:top-[-25%] lg:pt-10">
                <Image
                  src="/ksenia-bril.png"
                  alt="Ксения Бриль, бизнес-тренер"
                  width={716}
                  height={986}
                 className="object-contain w-auto h-auto max-w-[500px] max-h-[100vh] sm:max-w-[700px] md:max-w-[800px]  lg:max-w-[900px] lg:max-h-[100vh] xl:max-w-[600px] xl:max-h-[90vh] 2xl:max-w-[716px] 2xl:max-h-[95vh]"
                  priority
                />
                {/* Подпись под изображением */}
                <div className="absolute bottom-6 left-24 text-left">
                  <p className="font-semibold text-sm md:text-base">● КСЕНИЯ БРИЛЬ</p>
                  <p className="text-xs text-zinc-300 pl-3">бизнес-тренер для предпринимателей</p>
                </div>
              </div>
            </div>
          </div>

          {/* Три карточки - отдельный блок, который идет третьим на мобильных */}
          <div className="order-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl z-10 relative lg:pt-10">
              <InfoCard title="14 лет" description="опыт в продажах — от продавца до директора магазина Lacoste" />
              <InfoCard title="Более 3 млн ₽" description="за месяц к обороту компании делают мои клиенты" />
              <InfoCard title="Спикер" description="на международных форумах для предпринимателей" />
            </div>
          </div>
        </main>
      </div>
    </section>
  )
}
