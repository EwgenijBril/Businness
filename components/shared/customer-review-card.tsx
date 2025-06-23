import { Star } from "lucide-react"
import Link from "next/link"

interface CustomerReviewCardProps {
  initial: string
  name: string
  rating: number
  text: string
  reviewScreenshotLink: string
}

export function CustomerReviewCard({ initial, name, rating, text, reviewScreenshotLink }: CustomerReviewCardProps) {
  const totalStars = 5
  return (
    <div className="bg-zinc-100 p-6 rounded-lg shadow-md flex flex-col h-full">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center text-white font-semibold text-xl mr-4 flex-shrink-0">
          {initial}
        </div>
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
      <p className="text-zinc-600 text-sm leading-relaxed mb-4 flex-grow">{text}</p>
      <Link
        href={reviewScreenshotLink}
        className="text-sm text-zinc-500 hover:text-brand-red underline mt-auto self-start"
        target="_blank"
        rel="noopener noreferrer"
      >
        СМОТРЕТЬ СКРИНШОТ ОТЗЫВА
      </Link>
    </div>
  )
}
