import type { Metadata } from "next";
import Header from "../components/Header";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import SettingsForm from "../components/SettingsForm";

export const metadata: Metadata = {
  title: "Nastavení — QCONIC",
  description: "Vlastní skript a konfigurace.",
};

export default function SettingsPage() {
  return (
    <>
      <Header />
      <Cart />

      <main className="mx-auto max-w-3xl px-6 pt-12 pb-10">
        <p className="mb-1.5 text-sm font-medium text-muted-foreground">Nastavení</p>
        <h1 className="mb-8 text-2xl font-bold tracking-tight text-foreground">Vlastní skript</h1>
        <SettingsForm />
      </main>

      <Footer />
    </>
  );
}
