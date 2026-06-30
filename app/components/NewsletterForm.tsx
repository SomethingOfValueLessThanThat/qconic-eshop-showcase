'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'

export default function NewsletterForm() {
  const [done, setDone] = useState(false)

  if (done) {
    return (
      <p className="mt-5 flex h-9 max-w-md items-center gap-1.5 text-sm font-medium text-foreground">
        <Check className="h-4 w-4 text-emerald-600" /> Hotovo — díky, že jsi ve smyčce.
      </p>
    )
  }

  return (
    <form className="mt-5 flex max-w-md gap-2" onSubmit={(e) => { e.preventDefault(); setDone(true) }}>
      <input
        type="email"
        required
        placeholder="tvuj@email.cz"
        className="h-9 flex-1 rounded-md border border-input bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:border-foreground"
      />
      <button className="inline-flex h-9 shrink-0 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
        Odebírat
      </button>
    </form>
  )
}
