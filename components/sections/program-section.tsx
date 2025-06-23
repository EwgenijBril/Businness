import { ProgramCard } from "@/components/shared/program-card"
import Image from "next/image" // Убедимся, что Image импортирован

const programsData = [
  {
    type: "ОНЛАЙН-ТРЕНИНГ",
    title: "«ЭТО Я УПРАВЛЯЮ»",
    features: [
      {
        title: "Выстроите дисциплину в коллективе",
        description:
          "Сможете выстроить дисциплину в коллективе, передадите ответственность сотрудникам за их задачи, станете авторитетом",
      },
      {
        title: "Найдете причины проблем в компании",
        description:
          "Сможете находить причины проблем в компании и продажах, составлять эффективный план действий, прогнозировать результат в рамках 2–3 дней, недели и достигать его",
      },
      {
        title: "Делегируете управление командой",
        description:
          "Владельцы компаний смогут делегировать управление командой и продажами профессионально подготовленному руководителю",
      },
      {
        title: "Научитесь управлять командой 2 часа в день",
        description: "Управляющие смогут управлять командой 2 часа в день без хаоса, стресса и саботажа сотрудников.",
      },
    ],
  },
  {
    type: "ПРАКТИЧЕСКИЙ КУРС",
    title: "«ЛИДЕР ПРОДАЖ»",
    features: [
      {
        title: "Увеличите продажи",
        description: "Сможете увеличить продажи благодаря эффективной коммуникации с клиентом и техникам продаж",
      },
      {
        title: "Построите команду",
        description:
          "Сформируете команду эффективных бойцов продаж, которые работают по единой системе, принятой в компании",
      },
      {
        title: "Подготовите скрипты продаж",
        description:
          "Создадите уникальные скрипты для вашего магазина, основанные на ценностях компании, особенностях изделий и сервиса",
      },
      {
        title: "Повысите лояльность к своему бренду",
        description: "Повысите престиж и лояльность к бренду среди клиентов благодаря профессионализму сотрудников",
      },
    ],
  },
]

export function ProgramsSection() {
  return (
    <section className="bg-zinc-100 py-16 md:py-24">
      <div className="container">
        <h2 className="text-4xl sm:text-5xl font-bold text-zinc-800 mb-12 md:mb-16 text-center">
          <span className="text-brand-red">Программы</span> для роста ваших продаж
          <br className="hidden md:block" />и управления командой без стресса
        </h2>
        <div className="grid md:grid-cols-2 gap-8 xl:gap-12">
          {programsData.map((program, index) => (
            <ProgramCard key={index} type={program.type} title={program.title} features={program.features} />
          ))}
        </div>

        {/* Новый блок с цитатой */}
        <div className="mt-20 md:mt-24 max-w-3xl mx-auto">
          <div className="relative bg-zinc-700 text-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">
              Я прекрасно понимаю трудности всех членов компании: продавцов, руководителей и владельцев.
            </h3>
            <p className="text-zinc-300 leading-relaxed">
              Мои клиенты не только получают результат в процессе работы по моим программам, но и фиксируют устойчивый
              результат в росте продаж, сокращении времени на управление, полностью делегируют работу с командой,
              развивают новые направления бизнеса и занимаются творчеством.
            </p>
            {/* Хвостик для речевого пузыря (упрощенный) */}
            <div
              className="absolute left-1/2 bottom-0 transform -translate-x-[calc(50%-40px)] translate-y-[calc(50%-1px)] w-0 h-0 
                         border-l-[20px] border-l-transparent
                         border-t-[25px] border-t-zinc-700
                         border-r-[20px] border-r-transparent
                         sm:left-auto sm:right-[calc(25%-20px)] sm:transform-none sm:translate-y-[calc(50%-1px)] sm:-bottom-0"
            />
          </div>
          <div className="flex items-center mt-8 justify-end pr-0 sm:pr-16 md:pr-24">
            <Image
              src="/ksenia-bril.png" // Используем ранее добавленное изображение
              alt="Ксения Бриль"
              width={80}
              height={80}
              className="rounded-full shadow-md"
            />
            <div className="ml-4">
              <p className="font-semibold text-zinc-800 text-lg">КСЕНИЯ БРИЛЬ</p>
              <p className="text-sm text-zinc-500">Бизнес-тренер для предпринимателей</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
