import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AboutMeSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Левая колонка: Изображение */}
          <div className="relative">
            <Image
              src="/about_me.jpg" // Новое изображение
              alt="Ксения Бриль"
              width={600}
              height={750} // Примерное соотношение, можно уточнить
              className="rounded-lg object-cover shadow-xl mx-auto"
            />
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-black/30 backdrop-blur-sm p-3 rounded-md">
              <p className="font-semibold text-white text-sm md:text-base flex items-center">
                <span className="w-2 h-2 bg-white rounded-full inline-block mr-2"></span>
                КСЕНИЯ БРИЛЬ
              </p>
              <p className="text-xs text-zinc-200 pl-4">бизнес-тренер для предпринимателей</p>
            </div>
          </div>

          {/* Правая колонка: Текст */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-red leading-tight">Где я — там успех!</h2>
            <p className="text-xl md:text-2xl text-zinc-700 leading-relaxed">
              Уже 5 лет я помогаю руководителям и владельцам розничных компаний делегировать, увеличивать продажи и
              управлять командой без надрыва, уделяя этому всего 2 часа в день.
            </p>
            <div className="space-y-4 text-sm text-zinc-600 leading-relaxed">
              <p>
                Свою карьеру с 2009 года я строила от продавца до директора магазина почти «вслепую». Тогда не было
                обучения для руководителей, и вырабатывать эффективные методы управления и продаж мне приходилось
                опытным путём.
              </p>
              <p>
                Я работала в федеральных сетях Lacoste, Rendez-Vous, Mascotte, за выдающиеся показатели была приглашена
                на ужин в Лувр с вице-президентом компании Lacoste, открывала магазины площадью 350 м², создавала
                команды с 0 до 30 сотрудников и работала тренером в банке. Поэтому я детально понимаю, что происходит
                внутри самых крупных компаний, и какие факторы помогают им увеличивать прибыль из года в год.
              </p>
            </div>
            <Button
              variant="outline"
              className="border-zinc-700 text-zinc-700 hover:bg-zinc-700 hover:text-white rounded-full px-8 py-3 text-sm"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                СМОТРЕТЬ ОБРАЗОВАТЕЛЬНУЮ ЛИЦЕНЗИЮ
              </a>
            </Button>
          </div>
        </div>
        {/* Статистика и опыт - новый блок */}
        <div className="mt-16 md:mt-24 grid lg:grid-cols-12 gap-8 items-center">
          {/* Левая часть: Текст */}
          <div className="lg:col-span-5">
            <p className="text-xl md:text-2xl text-zinc-700 leading-relaxed">
              Свой опыт и знания я оформила в понятную систему продаж и управления, которая приносит моим клиентам до{" "}
              <span className="text-brand-red font-semibold">+65% к обороту компании ежемесячно.</span>
            </p>
          </div>

          {/* Правая часть: Карточки со статистикой */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Карточка 1 */}
            <div className="bg-white p-5 rounded-xl shadow-md">
              <p className="text-3xl md:text-4xl font-bold text-zinc-800 mb-1">14 лет</p>
              <p className="text-sm text-zinc-500">опыт в продажах</p>
            </div>

            {/* Карточка 2 */}
            <div className="bg-white p-5 rounded-xl shadow-md">
              <p className="text-3xl md:text-4xl font-bold text-zinc-800 mb-1">&gt; 3 млн</p>
              <p className="text-sm text-zinc-500">за месяц к обороту компании делают мои клиенты</p>
            </div>

            {/* Карточка 3 */}
            <div className="bg-white p-5 rounded-xl shadow-md">
              <p className="text-3xl md:text-4xl font-bold text-zinc-800 mb-1">до 30</p>
              <p className="text-sm text-zinc-500">человек было в командах под моим управлением</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
