"use client"

import { useEffect, useMemo, useState } from "react"

declare global {
  interface Window {
    openCookieSettings?: () => void
    openPrivacyPolicy?: () => void
  }
}
import LayoverModal from "./layover-modal"

type ConsentValue = "accepted" | "declined"

function readConsentCookie(): ConsentValue | null {
  if (typeof document === "undefined") return null
  const match = document.cookie.match(/(?:^|; )cookie_consent=([^;]+)/)
  if (!match) return null
  const value = decodeURIComponent(match[1])
  return value === "accepted" || value === "declined" ? value : null
}

function writeConsentCookie(value: ConsentValue) {
  const oneYearSeconds = 60 * 60 * 24 * 365
  const secure = typeof window !== "undefined" && window.location.protocol === "https:" ? "; Secure" : ""
  document.cookie = `cookie_consent=${encodeURIComponent(value)}; Max-Age=${oneYearSeconds}; Path=/; SameSite=Lax${secure}`
}

export function getIsConsentAccepted(): boolean {
  if (typeof document === "undefined") return false
  return readConsentCookie() === "accepted"
}

export default function CookieConsent() {
  const [open, setOpen] = useState(false)
  const [selection, setSelection] = useState<ConsentValue>("declined")
  const [hasExistingConsent, setHasExistingConsent] = useState(false)

  // Determine initial visibility on first mount
  useEffect(() => {
    const existing = readConsentCookie()
    if (!existing) {
      setOpen(true)
      setSelection("declined")
      setHasExistingConsent(false)
    } else {
      setSelection(existing)
      setHasExistingConsent(true)
    }
  }, [])

  // Expose a global opener so the footer can trigger settings
  useEffect(() => {
    window.openCookieSettings = () => setOpen(true)
    return () => {
      if (window.openCookieSettings) {
        delete window.openCookieSettings
      }
    }
  }, [])

  const essentialCookies = useMemo(
    () => [
      {
        name: "cookie_consent",
        purpose: "Stores your cookie preferences",
        retention: "12 months",
      },
    ],
    [],
  )

  const nonEssentialCookies = useMemo(
    () => [
      {
        name: "Analytics (Vercel Analytics)",
        purpose: "Helps us understand site usage and performance",
        retention: "No cookies used; only enabled after consent",
      },
    ],
    [],
  )

  function applyConsent(value: ConsentValue) {
    writeConsentCookie(value)
    setSelection(value)
    setOpen(false)
    // Notify listeners (e.g., analytics gate)
    window.dispatchEvent(new CustomEvent("cookie-consent-changed", { detail: { value } }))
  }

  return (
    <LayoverModal
      open={open}
      title="Cookie settings"
      onRequestClose={() => {
        if (hasExistingConsent) setOpen(false)
      }}
      allowClose={hasExistingConsent}
    >
      <div className="space-y-5">
          <p className="text-sm text-muted-foreground">
            We use essential cookies to make this site work. We would also like to enable optional analytics to improve our product.
          </p>
          <div className="grid gap-4">
            <section>
              <h4 className="font-medium">Essential cookies</h4>
              <p className="text-sm text-muted-foreground mb-2">Always active. Required for basic functionality.</p>
              <ul className="text-sm list-disc pl-5 space-y-1">
                {essentialCookies.map((c) => (
                  <li key={c.name}><span className="font-medium">{c.name}</span>: {c.purpose} — {c.retention}</li>
                ))}
              </ul>
            </section>
            <section>
              <h4 className="font-medium">Optional analytics</h4>
              <p className="text-sm text-muted-foreground mb-2">Enable privacy-friendly analytics to help us improve the site.</p>
              <label className="inline-flex items-center gap-3 select-none">
                <input
                  type="checkbox"
                  checked={selection === "accepted"}
                  onChange={(e) => setSelection(e.target.checked ? "accepted" : "declined")}
                  className="size-4"
                />
                <span className="text-sm">Allow analytics (non-essential)</span>
              </label>
              <ul className="text-sm list-disc pl-5 mt-2 space-y-1">
                {nonEssentialCookies.map((c) => (
                  <li key={c.name}><span className="font-medium">{c.name}</span>: {c.purpose} — {c.retention}</li>
                ))}
              </ul>
            </section>
          </div>
          <p className="text-xs text-muted-foreground">
            For more details, see our{' '}
            <button
              type="button"
              onClick={() => window.openPrivacyPolicy?.()}
              className="underline underline-offset-4 hover:text-foreground"
            >
              Privacy policy
            </button>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-end pt-2">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm"
              onClick={() => applyConsent("declined")}
            >
              Decline non-essential
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm"
              onClick={() => applyConsent("accepted")}
            >
              Allow all
            </button>
          </div>
      </div>
    </LayoverModal>
  )
}


