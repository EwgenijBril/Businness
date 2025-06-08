import type React from "react"

export function BenefitCard({ icon: Icon, title, items }: { icon: React.ElementType; title: string; items: string[] }) {
  return (
    <div className="bg-white text-zinc-800 p-6 md:p-8 rounded-xl shadow-lg">
      <div className="flex items-center mb-4">
        <Icon className="h-8 w-8 text-brand-red mr-3" />
        <h3 className="text-xl font-bold tracking-tight">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="text-brand-red mr-2 mt-1">•</span>
            <span className="text-zinc-600 text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
