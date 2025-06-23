import { Star, UserCircle2 } from "lucide-react"

interface TestimonialCardProps {
  avatar?: string // URL to actual avatar if available
  name: string
  rating: number // Number of filled stars (0-5)
  text: string
}

export function TestimonialCard({ avatar, name, rating, text }: TestimonialCardProps) {
  const totalStars = 5
  return (
    <div className="bg-zinc-100 p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {avatar ? (
          <img src={avatar || "/placeholder.svg"} alt={name} className="w-12 h-12 rounded-full mr-4" />
        ) : (
          <UserCircle2 className="w-12 h-12 text-zinc-400 mr-4" />
        )}
        <div>
          <h4 className="font-semibold text-zinc-800">{name}</h4>
          <div className="flex items-center">
            {[...Array(totalStars)].map((_, index) => (
              <Star
                key={index}
                className={`w-5 h-5 ${index < rating ? "text-yellow-400 fill-yellow-400" : "text-zinc-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-zinc-600 text-sm">{text}</p>
    </div>
  )
}
