import Image from 'next/image'
import Link from 'next/link'
import CartButton from './CartButton'

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid h-14 grid-cols-[1fr_auto_1fr] items-center">
          {/* Left nav */}
          <nav className="hidden items-center gap-5 text-sm font-medium text-muted-foreground sm:flex">
            <Link href="/#produkty" className="transition-colors hover:text-foreground">Kolekce</Link>
            <Link href="/#o-nas" className="transition-colors hover:text-foreground">O značce</Link>
          </nav>

          {/* Logo */}
          <Link href="/" className="select-none justify-self-start sm:justify-self-center">
            <Image
              src="/qconic-logo.svg"
              alt="QCONIC"
              width={156}
              height={36}
              priority
              className="h-6 w-auto"
            />
          </Link>

          {/* Right */}
          <div className="flex items-center gap-1.5 justify-self-end">
            <Link
              href="/#o-nas"
              className="hidden h-9 items-center rounded-md px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground md:inline-flex"
            >
              Kontakt
            </Link>
            <CartButton />
          </div>
        </div>
      </div>
    </header>
  )
}
