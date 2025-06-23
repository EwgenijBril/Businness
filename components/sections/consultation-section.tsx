import { TestimonialCard } from "@/components/shared/testimonial-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image" // Добавить если еще не импортирован
import { PlayCircle } from "lucide-react" // Для иконки на видео

const testimonials = [
  {
    name: "Ксения Низовских",
    rating: 5,
    text: "Ксю, ну такая бомбовая у нас беседа получилась! Признаться, совсем не ожидала! За 9 лет работы в своей сфере наконец осознала, где мои провалы.",
  },
  {
    name: "Ольга Федоренко",
    rating: 4,
    text: "Результат уже сейчас виден, так как конверсия за неделю выросла на 3%, при том что количество людей не увеличилось.",
  },
]

export function ConsultationSection() {
  return (
    <section className="bg-brand-background text-white py-16 md:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
          {/* Левая колонка */}
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">Записывайтесь на разбор</h2>
            <p className="text-xl text-zinc-300">
              чтобы понять причины проблем в вашей компании и составить план достижения желаемого результата
            </p>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  name={testimonial.name}
                  rating={testimonial.rating}
                  text={testimonial.text}
                  // Аватар можно будет добавить позже, если будут URL
                />
              ))}
            </div>
          </div>

          {/* Правая колонка */}
          <div className="bg-transparent p-0 md:p-8 rounded-lg space-y-6">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-zinc-100 text-zinc-800 px-4 py-2 rounded-full text-sm font-medium">Zoom</span>
              <span className="bg-zinc-100 text-zinc-800 px-4 py-2 rounded-full text-sm font-medium">60 минут</span>
              <span className="bg-zinc-100 text-zinc-800 px-4 py-2 rounded-full text-sm font-medium">4900₽</span>
            </div>

            <p className="text-zinc-300 leading-relaxed">
              Разбор — это личный созвон в Zoom, на котором я проведу подробный аудит вашего бизнеса, помогу определить
              причины проблем, которые тормозят рост продаж и создают хаос в управлении.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Уже через час у вас будет чёткое понимание проблем, которые нужно решить в первую очередь и план действий
              для достижения результата.
            </p>
            <div>
              <p className="text-2xl font-semibold">
                Стоимость — <span className="line-through text-zinc-400 text-xl">15 000₽</span> 4900₽
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Button className="bg-brand-red hover:bg-brand-red/90 text-white rounded-full px-10 py-7 text-base font-semibold w-full sm:w-auto">
                НАПИСАТЬ В ТЕЛЕГРАМ
              </Button>
              <p className="text-xs text-zinc-400 max-w-xs sm:max-w-none text-center sm:text-left">
                Напишите ваш вопрос в Телеграм, и мы договоримся об онлайн-встрече.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Новый блок: Получите бесплатно мини-курс */}
      <div className="container mx-auto mt-16 pt-16 border-t border-zinc-700">
        {" "}
        {/* Добавлен класс container и mx-auto для центрирования */}
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Левая колонка: Форма */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">Получите бесплатно мини-курс из 5 уроков</h2>
            <p className="text-xl text-zinc-300">
              «5 способов, как руководителю увеличить продажи через работу с продавцами»
            </p>
            <p className="text-zinc-300">Заполните форму, и я отправлю вам мини-курс в Телеграм.</p>
            <form className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Ваши имя и фамилия"
                  className="bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-white rounded-md"
                />
              </div>
              <div>
                {/* Для телефона можно использовать более специализированный компонент или маску ввода в реальном проекте */}
                <Input
                  type="tel"
                  placeholder="+7 (999) 999-99-99"
                  className="bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-white rounded-md"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    className="border-zinc-500 data-[state=checked]:bg-brand-red data-[state=checked]:border-brand-red mt-1"
                  />
                  <label htmlFor="terms" className="text-xs text-zinc-400">
                    Я согласен(-на) с обработкой персональных данных в соответствии с{" "}
                    <a href="#" className="underline hover:text-brand-red">
                      Политикой конфиденциальности
                    </a>
                  </label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="newsletter"
                    className="border-zinc-500 data-[state=checked]:bg-brand-red data-[state=checked]:border-brand-red mt-1"
                  />
                  <label htmlFor="newsletter" className="text-xs text-zinc-400">
                    Я согласен(-на) на{" "}
                    <a href="#" className="underline hover:text-brand-red">
                      получение рекламных рассылок
                    </a>
                  </label>
                </div>
              </div>
              <Button
                type="submit"
                className="bg-zinc-100 hover:bg-zinc-200 text-zinc-900 rounded-full px-10 py-4 text-base font-semibold w-full sm:w-auto"
              >
                Получить мини-курс
              </Button>
            </form>
          </div>

          {/* Правая колонка: Изображение ноутбука */}
          <div className="relative flex justify-center items-center">
            <Image
              src="/placeholder.svg?width=600&height=400"
              alt="Мини-курс превью"
              width={600}
              height={400}
              className="rounded-lg object-contain"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black/30 rounded-lg">
              <PlayCircle className="w-20 h-20 text-white/80 hover:text-white transition-colors cursor-pointer" />
            </div>
            {/* Текстовые оверлеи на изображении, если нужно точно воспроизвести */}
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-4 w-3/4">
              <p className="text-brand-red font-semibold text-sm md:text-base leading-tight">
                5 СПОСОБОВ УВЕЛИЧИТЬ ПРОДАЖИ ЧЕРЕЗ РАБОТУ С ПРОДАВЦАМИ
              </p>
              <p className="text-white text-xs md:text-sm mt-2">Урок 3 из 5</p>
              <p className="text-white text-xs md:text-sm mt-1">Работа со страхами и отмазками сотрудников</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
