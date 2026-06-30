'use client'

import { useEffect, useState } from 'react'
import { Save, Trash2, Check, Info } from 'lucide-react'
import { STORAGE_KEY, injectCustomScript } from './CustomScript'

const EXAMPLE = `// Příklad — vlož svůj JavaScript:
console.log('QCONIC: vlastní skript běží!');

// Nebo celý <script> tag, klidně i externí:
// <script src="https://example.com/widget.js"></script>`

export default function SettingsForm() {
  const [code, setCode] = useState('')
  const [status, setStatus] = useState<'idle' | 'saved' | 'cleared'>('idle')

  // Load saved snippet on mount.
  useEffect(() => {
    try {
      setCode(localStorage.getItem(STORAGE_KEY) ?? '')
    } catch {
      /* ignore */
    }
  }, [])

  function flash(s: 'saved' | 'cleared') {
    setStatus(s)
    setTimeout(() => setStatus('idle'), 2500)
  }

  function handleSave() {
    try {
      localStorage.setItem(STORAGE_KEY, code)
      injectCustomScript(code) // run it immediately on this page too
      flash('saved')
    } catch {
      /* ignore */
    }
  }

  function handleClear() {
    try {
      localStorage.removeItem(STORAGE_KEY)
      injectCustomScript('') // remove any injected snippet
      setCode('')
      flash('cleared')
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
      <label htmlFor="custom-script" className="text-sm font-semibold text-foreground">
        Vlastní skript v <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">&lt;head&gt;</code>
      </label>
      <p className="mt-1.5 mb-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Vlož čistý JavaScript, nebo celý <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">&lt;script&gt;</code> tag
        (i s atributem <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">src</code> pro externí skripty).
        Po uložení se vloží do hlavičky stránky a spustí se na celém webu.
      </p>

      <textarea
        id="custom-script"
        value={code}
        onChange={e => setCode(e.target.value)}
        spellCheck={false}
        placeholder={EXAMPLE}
        rows={13}
        className="w-full resize-y rounded-md border border-input bg-background p-3 font-mono text-[13px] leading-relaxed text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus-visible:border-foreground focus-visible:ring-2 focus-visible:ring-ring/30"
      />

      <div className="mt-4 flex flex-wrap items-center gap-2.5">
        <button
          onClick={handleSave}
          className="inline-flex h-9 items-center justify-center gap-1.5 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Save className="h-4 w-4" /> Uložit a spustit
        </button>
        <button
          onClick={handleClear}
          className="inline-flex h-9 items-center justify-center gap-1.5 rounded-md border border-border bg-background px-4 text-sm font-medium text-foreground transition-colors hover:bg-accent"
        >
          <Trash2 className="h-4 w-4" /> Vymazat
        </button>

        {status === 'saved' && (
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600">
            <Check className="h-4 w-4" /> Uloženo — projeví se na celém webu
          </span>
        )}
        {status === 'cleared' && (
          <span className="text-sm font-medium text-muted-foreground">Vymazáno</span>
        )}
      </div>

      <div className="mt-6 flex items-start gap-2.5 rounded-md border border-border bg-muted/50 p-3.5 text-sm leading-relaxed text-muted-foreground">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
        <p>
          <strong className="font-semibold text-foreground">Poznámka:</strong> Skript se ukládá lokálně do tvého prohlížeče
          (<code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">localStorage</code>) — neodesílá se nikam na server.
          Spouštíš ho na vlastní stránce; vkládej jen kód, kterému důvěřuješ.
        </p>
      </div>
    </div>
  )
}
