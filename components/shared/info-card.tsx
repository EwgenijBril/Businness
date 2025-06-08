export function InfoCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-[#444444] rounded-xl p-4 md:p-6">
      <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 text-white">{title}</h3>
      <p className="text-xs md:text-sm text-zinc-300">{description}</p>
    </div>
  )
}
