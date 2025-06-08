"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react" // Для мобильного меню
import { useState } from "react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "#cases", label: "Кейсы" },
    { href: "#format", label: "Формат работы" },
    { href: "#reviews", label: "Отзывы" },
    { href: "#about", label: "Обо мне" },
  ]

  return (
    <header className="flex items-center justify-between py-6 relative z-50">
      <div>
        <h2 className="text-lg font-bold tracking-wider">КСЕНИЯ БРИЛЬ</h2>
        <p className="text-xs text-zinc-400">бизнес-тренер для предпринимателей</p>
      </div>
      <nav className="hidden lg:flex items-center space-x-8">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="text-sm hover:text-zinc-300 transition-colors">
            {link.label}
          </Link>
        ))}
      </nav>
      <Button
        variant="outline"
        className="hidden lg:inline-flex border-white text-white bg-transparent hover:bg-brand-red hover:text-white hover:border-transparent rounded-full px-6"
      >
        Контакты
      </Button>
      <div className="lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Открыть меню"
        >
          <Menu className="h-6 w-6 text-white" />
        </Button>
      </div>
      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-brand-background/95 backdrop-blur-sm p-6 rounded-md shadow-xl z-50">
          <nav className="flex flex-col space-y-4 mb-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg text-center hover:text-brand-red transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button
            variant="outline"
            className="w-full border-white text-white bg-transparent hover:bg-brand-red hover:text-white hover:border-transparent rounded-full px-6 py-3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Контакты
          </Button>
        </div>
      )}
    </header>
  )
}

// Убедитесь, что в app/page.tsx или layout.tsx есть 'use client' если Header использует useState
// Если Header используется только в серверных компонентах, то useState нужно будет вынести в отдельный клиентский компонент-обертку для мобильного меню.
// Для простоты, предположим, что HeroSection (и, следовательно, Header) может быть клиентским компонентом или его родитель.
// Если HeroSection строго серверный, то для мобильного меню потребуется отдельный клиентский компонент.
// Я добавлю 'use client' в HeroSection для работы мобильного меню.
