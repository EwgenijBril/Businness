import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-zinc-800 text-white">
      {/* Main Footer Content */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Ксения Бриль</h3>
            <p className="text-zinc-400 mb-6">Бизнес-тренер для предпринимателей</p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="https://wa.me/79829020391"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                aria-label="WhatsApp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                </svg>
              </a>
              <a
                href="https://t.me/your_telegram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Telegram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-2">
              <p className="text-zinc-300">+7 982 902-03-91</p>
              <p className="text-zinc-300">bksenia.trening@gmail.com</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Навигация</h4>
            <nav className="space-y-2">
              <Link href="#about" className="block text-zinc-300 hover:text-white transition-colors">
                Обо мне
              </Link>
              <Link href="#format" className="block text-zinc-300 hover:text-white transition-colors">
                Формат работы
              </Link>
              <Link href="#cases" className="block text-zinc-300 hover:text-white transition-colors">
                Кейсы
              </Link>
              <Link href="#reviews" className="block text-zinc-300 hover:text-white transition-colors">
                Отзывы
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Legal Section */}
      <div className="bg-zinc-900 py-6">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-xs text-zinc-500">
            {/* Legal Entity Info */}
            <div>
              <p>ИП Бриль Ксения Александровна</p>
              <p>ОГРНИП 321732300026562</p>
            </div>

            {/* Educational License */}
            <div>
              <p>Образовательная лицензия</p>
              <p>No Л035-01215-72/01114778</p>
              <p>от 02.04.2024</p>
            </div>

            {/* Legal Links */}
            <div className="space-y-1">
              <Link href="/privacy" className="block hover:text-zinc-300 transition-colors">
                Политика конфиденциальности
              </Link>
              <Link href="/data-processing" className="block hover:text-zinc-300 transition-colors">
                Согласие на обработку данных
              </Link>
              <Link href="/marketing-consent" className="block hover:text-zinc-300 transition-colors">
                Согласие на рекламную рассылку
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 pt-4 border-t border-zinc-800">
            <p className="text-xs text-zinc-500">
              Информация, представленная на сайте, носит информационный характер. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
