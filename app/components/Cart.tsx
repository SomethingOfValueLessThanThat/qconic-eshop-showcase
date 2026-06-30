'use client'

import Image from 'next/image'
import { ShoppingBag, X } from 'lucide-react'
import { useCart } from './CartProvider'

export default function Cart() {
  const { items, remove, total, isOpen, setOpen } = useCart()
  const freeShipping = 1000
  const remaining = Math.max(0, freeShipping - total)
  const progress = Math.min(100, (total / freeShipping) * 100)
  const count = items.reduce((s, i) => s + i.qty, 0)

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-border bg-background shadow-xl transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-semibold">Košík</h2>
            <span className="rounded-md bg-muted px-1.5 py-0.5 text-xs font-medium text-muted-foreground">{count}</span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="grid h-8 w-8 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            aria-label="Zavřít košík"
          >
            <X className="h-[18px] w-[18px]" strokeWidth={2} />
          </button>
        </div>

        {/* Free shipping progress */}
        {items.length > 0 && (
          <div className="border-b border-border px-5 py-3">
            <p className="text-xs text-muted-foreground">
              {remaining > 0 ? (
                <>Přidej za <span className="font-semibold text-foreground">{remaining} Kč</span> a máš dopravu zdarma</>
              ) : (
                <span className="font-semibold text-foreground">Doprava zdarma odemčena ✓</span>
              )}
            </p>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>
        )}

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 pb-16 text-center">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-muted text-muted-foreground">
                <ShoppingBag className="h-5 w-5" strokeWidth={2} />
              </div>
              <p className="text-sm font-medium text-foreground">Košík je prázdný</p>
              <button onClick={() => setOpen(false)} className="text-xs font-medium text-muted-foreground underline underline-offset-4 hover:text-foreground">
                Pokračovat v nákupu
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {items.map(item => (
                <li key={item.id} className="flex gap-3 py-4">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-border bg-muted">
                    <Image src={item.image} alt={item.name} fill className="object-cover p-1.5" sizes="64px" />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <p className="truncate text-sm font-medium text-foreground">{item.name}</p>
                      <span className="shrink-0 text-sm font-semibold tabular-nums">{item.price * item.qty} Kč</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{item.qty} × {item.price} Kč</span>
                      <button
                        onClick={() => remove(item.id)}
                        className="text-xs font-medium text-muted-foreground underline underline-offset-2 transition-colors hover:text-foreground"
                      >
                        Odebrat
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border px-5 py-4">
            <div className="mb-1 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Mezisoučet</span>
              <span className="font-semibold tabular-nums">{total} Kč</span>
            </div>
            <p className="mb-3 text-xs text-muted-foreground">Daně a doprava se spočítají u pokladny.</p>
            <button className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
              K pokladně — {total} Kč
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
