"use client"

const companiesData = ["DRESS ME", "ELIZABETH JOHNS", "Триумф", "ДЮССЕЛЬДОРФ", "SPA STATION", "PROHIKER", "СКАНДИТОРИЯ"]

export function CompaniesSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-24 overflow-hidden">
      <div className="container">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 md:mb-16 text-center leading-tight">
          <span className="text-brand-red">Регулярно консультирую</span>
          <br className="hidden sm:block" />
          <span className="text-zinc-800">и обучаю сотрудников крупных компаний</span>
        </h2>

        {/* Контейнер для анимации */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-infinite-scroll">
            {/* Первый набор логотипов */}
            {companiesData.map((company, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 mx-6 flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-200 w-48 h-24 flex items-center justify-center">
                  <span className="text-zinc-600 font-medium text-sm text-center leading-tight">{company}</span>
                </div>
              </div>
            ))}
            {/* Второй набор логотипов (для бесшовности) */}
            {companiesData.map((company, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 mx-6 flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-200 w-48 h-24 flex items-center justify-center">
                  <span className="text-zinc-600 font-medium text-sm text-center leading-tight">{company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Стили для бесконечной анимации */}
      <style jsx>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-240px * ${companiesData.length}));
          }
        }
        
        .animate-infinite-scroll {
          animation: infinite-scroll 20s linear infinite;
          width: calc(240px * ${companiesData.length} * 2);
        }
      `}</style>
    </section>
  )
}
