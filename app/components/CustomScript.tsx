'use client'

import { useEffect } from 'react'

export const STORAGE_KEY = 'qconic:custom-head-script'
const MARK = 'data-qconic-custom'

/**
 * Injects the user-defined snippet (saved on /nastaveni) into <head>.
 * Supports either raw JavaScript or full <script> tags (inline or with src).
 * Mounted once in the root layout so it runs on every page.
 */
export function injectCustomScript(code: string) {
  // Remove any previously injected snippet first.
  document.querySelectorAll(`[${MARK}]`).forEach(el => el.remove())

  const trimmed = code.trim()
  if (!trimmed) return

  // If the snippet contains <script> tags, recreate each one so it executes.
  // (Setting innerHTML alone does not run scripts.)
  if (/<script[\s>]/i.test(trimmed)) {
    const tpl = document.createElement('template')
    tpl.innerHTML = trimmed
    tpl.content.querySelectorAll('script').forEach(old => {
      const el = document.createElement('script')
      for (const attr of Array.from(old.attributes)) el.setAttribute(attr.name, attr.value)
      el.textContent = old.textContent
      el.setAttribute(MARK, '')
      document.head.appendChild(el)
    })
    return
  }

  // Otherwise treat the input as raw JavaScript.
  const el = document.createElement('script')
  el.textContent = trimmed
  el.setAttribute(MARK, '')
  document.head.appendChild(el)
}

export default function CustomScript() {
  useEffect(() => {
    try {
      const code = localStorage.getItem(STORAGE_KEY)
      if (code) injectCustomScript(code)
    } catch {
      // localStorage unavailable — ignore.
    }
  }, [])

  return null
}
