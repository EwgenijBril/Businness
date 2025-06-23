import { Button } from "@/components/ui/button"

interface ProgramFeature {
  title: string
  description: string
}

interface ProgramCardProps {
  type: string
  title: string
  features: ProgramFeature[]
  buttonText?: string
  buttonLink?: string
}

export function ProgramCard({ type, title, features, buttonText = "ПОДРОБНЕЕ", buttonLink = "#" }: ProgramCardProps) {
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg flex flex-col h-full">
      <p className="text-brand-red font-semibold text-sm mb-1 tracking-wide">{type}</p>
      <h3 className="text-2xl font-bold text-zinc-800 mb-6">{title}</h3>
      <div className="space-y-5 mb-8 flex-grow">
        {features.map((feature, index) => (
          <div key={index}>
            <h4 className="font-semibold text-zinc-700 mb-1">{feature.title}</h4>
            <p className="text-sm text-zinc-500 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
      <Button
        variant="default"
        className="bg-zinc-700 hover:bg-zinc-800 text-white rounded-full px-8 py-3 text-sm mt-auto w-full sm:w-auto self-start"
        asChild={!!buttonLink}
      >
        {buttonLink ? <a href={buttonLink}>{buttonText}</a> : buttonText}
      </Button>
    </div>
  )
}
