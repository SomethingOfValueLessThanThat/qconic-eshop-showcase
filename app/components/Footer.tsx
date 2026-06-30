import Image from 'next/image'
import NewsletterForm from './NewsletterForm'

export default function Footer() {
  const cols = [
    { title: 'Obchod', links: ['Trička', 'Přívěsky', 'Čepice', 'Novinky', 'Dárkové poukazy'] },
    { title: 'Pomoc', links: ['Doprava', 'Vrácení zboží', 'Velikosti', 'Časté dotazy', 'Kontakt'] },
    { title: 'Značka', links: ['Náš příběh', 'Udržitelnost', 'Kariéra', 'Pro média'] },
  ]

  return (
    <footer id="o-nas" className="mt-20 border-t border-border bg-muted/40">
      {/* Newsletter */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-foreground">Zůstaň ve smyčce.</h3>
            <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Přihlas se k odběru a buď první, kdo se dozví o nových dropech, limitkách a tichých slevách. Žádný spam.
            </p>
            <NewsletterForm />
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-3 gap-6">
            {cols.map(col => (
              <div key={col.title}>
                <h4 className="mb-3 text-sm font-semibold text-foreground">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.links.map(link => (
                    <li key={link}>
                      <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Big wordmark */}
      <div className="overflow-hidden border-t border-border py-10">
        <Image
          src="/qconic-logo.svg"
          alt="QCONIC"
          width={156}
          height={36}
          className="mx-auto h-14 w-auto opacity-20 md:h-20"
        />
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-5 text-sm text-muted-foreground sm:flex-row">
          <p>© 2026 QCONIC. Všechna práva vyhrazena.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="transition-colors hover:text-foreground">Instagram</a>
            <a href="#" className="transition-colors hover:text-foreground">TikTok</a>
            <a href="#" className="transition-colors hover:text-foreground">Ochrana soukromí</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
