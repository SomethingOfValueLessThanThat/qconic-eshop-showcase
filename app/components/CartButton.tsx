'use client'

import { ShoppingBag } from 'lucide-react'
import { useCart } from './CartProvider'

export default function CartButton() {
  const { items, setOpen } = useCart()
  const count = items.reduce((sum, i) => sum + i.qty, 0)

  return (
    <button
      onClick={() => setOpen(true)}
      className="relative grid h-9 w-9 place-items-center rounded-md text-foreground transition-colors hover:bg-accent"
      aria-label="Otevřít košík"
    >
      <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={2} />
      {count > 0 && (
        <span className="absolute -right-1 -top-1 grid h-[18px] min-w-[18px] place-items-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground ring-2 ring-background">
          {count}
        </span>
      )}
    </button>
  )
}
