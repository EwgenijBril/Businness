import Image from "next/image"
import { Button } from "@/components/ui/button"

export function TelegramSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Левая колонка: Текст */}
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              <span className="text-brand-red">Подписывайтесь</span>
              <br />
              <span className="text-zinc-800">на мой Телеграм-канал</span>
            </h2>
            <p className="text-xl text-zinc-600 leading-relaxed">
              в котором я еженедельно публикую эффективные способы увеличения продаж и управления командой
            </p>
            <Button
              className="bg-brand-red hover:bg-brand-red/90 text-white rounded-full px-10 py-4 text-base font-semibold"
              asChild
            >
              <a href="https://t.me/your_telegram_channel" target="_blank" rel="noopener noreferrer">
                ПОДПИСАТЬСЯ НА ТЕЛЕГРАМ-КАНАЛ
              </a>
            </Button>
          </div>

          {/* Правая колонка: Телефон с Telegram */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/telegram.webp"
                alt="Телеграм-канал Ксении Бриль на телефоне"
                width={400}
                height={600}
                className="w-full max-w-xl h-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
