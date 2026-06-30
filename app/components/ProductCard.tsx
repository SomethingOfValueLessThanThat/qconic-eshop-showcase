'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Check, Plus } from 'lucide-react'
import { useCart } from './CartProvider'

type Props = {
  id: number
  name: string
  price: number
  description: string
  bgColor: string
  tag?: string
  image: string
}

export default function ProductCard({ id, name, price, description, bgColor, tag, image }: Props) {
  const { add } = useCart()
  const [added, setAdded] = useState(false)

  function handleAdd() {
    add({ id, name, price, image })
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-md">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden" style={{ backgroundColor: bgColor }}>
        {tag && (
          <span className="absolute left-2.5 top-2.5 z-10 rounded-md border border-border bg-background/90 px-2 py-0.5 text-xs font-medium text-foreground backdrop-blur">
            {tag}
          </span>
        )}
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, 33vw"
        />
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-foreground">{name}</h3>
            <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-muted-foreground">{description}</p>
          </div>
          <span className="shrink-0 text-sm font-semibold tabular-nums text-foreground">{price} Kč</span>
        </div>
        <button
          onClick={handleAdd}
          className="mt-auto inline-flex h-9 items-center justify-center gap-1.5 rounded-md bg-primary text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {added ? (
            <><Check className="h-4 w-4" /> Přidáno</>
          ) : (
            <><Plus className="h-4 w-4" /> Přidat do košíku</>
          )}
        </button>
      </div>
    </article>
  )
}
