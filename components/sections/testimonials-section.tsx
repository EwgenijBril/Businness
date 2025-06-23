import { CustomerReviewCard } from "@/components/shared/customer-review-card"
import { Button } from "@/components/ui/button"

const testimonialsData = [
  {
    id: 1,
    initial: "Е",
    name: "Елизавета Рязанова",
    rating: 5,
    text: "Ксения, благодарю за интенсив, хочу поделиться нашими результатами после прохождения! У нас снова кейс. Ты знаешь, что в этот раз мы брали новых сотрудников, которые ранее не обучались. Так вот их показатели выросли: конверсия была 33%, стала 58-82%; средний чек был 1500, стал 4510; КТЧ был 2,2, стал 3,3. Эти цифры ещё раз подтверждают твой профессиональный подход к своему делу! С помощью твоей системы можно работать даже в межсезонье в хороший +, это очень круто! Для меня большое открытие, что за короткий срок можно сделать такой результат. Спасибо!",
    reviewScreenshotLink: "#", // Placeholder
  },
  {
    id: 2,
    initial: "Е",
    name: "Елена Орлова",
    rating: 5,
    text: "У нас очередной рекорд — 4,11 КТЧ за месяц. Я ооочень рада. Не перестану говорить тебе огромное спасибо. Ты просто супер тренер.",
    reviewScreenshotLink: "#", // Placeholder
  },
  {
    id: 3,
    initial: "М",
    name: "Мария Шкода",
    rating: 5,
    text: "Ксения, привет! У Лены прорыв! Она так выросла она выстроила работу продавцов уже с пониманием и осознанным подходом, применяет инструменты. Я уехала в отпуск, и они дали джазу — повыполняли личные планы на 140%. В общем, сказала, что работает дальше. Кстати, ещё вырастила свой авторитет.",
    reviewScreenshotLink: "#", // Placeholder
  },
  {
    id: 4,
    initial: "Л",
    name: "Лариса",
    rating: 5,
    text: "Добрый вечер! Сегодня у меня первый рабочий день после интенсива. На рабочий день ставила цель — повышение конверсии. Сегодня успешно отрабатывала возражения на всех этапах продаж. В целом, день прошёл хорошо. Почти все входящие ушли от нас с покупками. Конверсия на сегодняшний день 20,7%. План выполнен на 182%.",
    reviewScreenshotLink: "#", // Placeholder
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-brand-background text-white py-16 md:py-24">
      <div className="container">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">Клиенты совершают прорыв в продажах</h2>
        <p className="text-xl text-zinc-300 mb-12 md:mb-16 text-center">
          после обучения по моей системе — вот, что они пишут
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonialsData.map((testimonial) => (
            <CustomerReviewCard
              key={testimonial.id}
              initial={testimonial.initial}
              name={testimonial.name}
              rating={testimonial.rating}
              text={testimonial.text}
              reviewScreenshotLink={testimonial.reviewScreenshotLink}
            />
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <Button
            variant="default"
            size="lg"
            className="bg-zinc-700 hover:bg-zinc-600 text-white rounded-full px-10 py-7 text-base font-semibold"
          >
            СМОТРЕТЬ ДРУГИЕ ОТЗЫВЫ
          </Button>
        </div>
      </div>
    </section>
  )
}
