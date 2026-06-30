import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { Truck, Undo2, ShieldCheck, ArrowRight } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    name: "QCONIC Tričko",
    price: 699,
    description: "Prémiová bavlna 180 g/m², pohodlný volný střih.",
    bgColor: "#e9e5df",
    tag: "Nejprodávanější",
    image: "/tshirt.png",
  },
  {
    id: 2,
    name: "QCONIC Přívěsek",
    price: 299,
    description: "Kovový přívěsek s gravírovaným logem. Délka 3 cm.",
    bgColor: "#dfe3e9",
    tag: "Novinka",
    image: "/neckless.png",
  },
  {
    id: 3,
    name: "QCONIC Čepice",
    price: 599,
    description: "Kšiltovka s výšivkou loga, nastavitelný pásek.",
    bgColor: "#dfe9df",
    image: "/cap.png",
  },
];

const FEATURES = [
  { title: "Doprava zdarma", text: "Od 1 000 Kč, doručení do 2 dnů.", icon: Truck },
  { title: "Vrácení do 30 dnů", text: "Bez otázek, bez stresu.", icon: Undo2 },
  { title: "Bezpečná platba", text: "Šifrovaně, kartou i Apple Pay.", icon: ShieldCheck },
];

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <Cart />

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pt-14 pb-10 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-border bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Kolekce 2026 — právě naskladněno
          </div>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            Minimalismus, který nosíš.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            QCONIC je značka pro lidi, co milují čisté linie a kvalitní materiály. Žádný hluk — jen základy, které vydrží.
          </p>
          <div className="mt-7 flex items-center justify-center gap-2.5">
            <a
              href="#produkty"
              className="inline-flex h-11 items-center justify-center gap-1.5 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Nakupovat kolekci
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#o-nas"
              className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-background px-5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              Náš příběh
            </a>
          </div>
        </section>

        {/* Products */}
        <section id="produkty" className="mx-auto max-w-6xl px-6 pt-12">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-foreground">Kolekce</h2>
              <p className="mt-1 text-sm text-muted-foreground">Tři kusy. Nekonečno kombinací.</p>
            </div>
            <span className="text-sm text-muted-foreground">{PRODUCTS.length} produkty</span>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-6xl px-6 pt-12">
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="flex items-start gap-3 bg-card p-5">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-muted text-foreground">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{f.title}</h3>
                    <p className="mt-0.5 text-xs leading-snug text-muted-foreground">{f.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Brand statement */}
        <section className="mx-auto max-w-6xl px-6 pt-12">
          <div className="rounded-xl bg-primary px-8 py-14 text-center sm:px-16 sm:py-20">
            <p className="mx-auto max-w-2xl text-xl font-semibold leading-snug tracking-tight text-primary-foreground sm:text-3xl">
              „Méně, ale lépe.“ Každý kus navrhujeme tak, aby tě přežil — ne aby skončil v koši za sezónu.
            </p>
            <p className="mt-5 text-sm font-medium text-primary-foreground/50">— Tým QCONIC</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
