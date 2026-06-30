const ITEMS = [
  'Doprava zdarma od 1 000 Kč',
  'Nová kolekce 2026',
  'Vyrobeno s důrazem na detail',
  'Vrácení do 30 dnů',
]

export default function AnnouncementBar() {
  // Duplicate the list so the marquee loops seamlessly.
  const loop = [...ITEMS, ...ITEMS]

  return (
    <div className="overflow-hidden bg-primary text-primary-foreground">
      <div className="flex w-max animate-marquee whitespace-nowrap py-1.5">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center text-xs font-medium text-primary-foreground/70">
            <span className="px-6">{item}</span>
            <span className="text-primary-foreground/30">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
