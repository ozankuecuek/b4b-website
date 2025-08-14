"use client"

import { useEffect, useState } from "react"

declare global {
  interface Window {
    openCookieSettings?: () => void
    openPrivacyPolicy?: () => void
  }
}
import LayoverModal from "./layover-modal"
import { useTranslations } from "@/lib/i18n"

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
  const t = useTranslations()
  const [open, setOpen] = useState(false)
  const [, setSelection] = useState<ConsentValue>("declined")
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
      title={t.cookies.title}
      onRequestClose={() => {
        if (hasExistingConsent) setOpen(false)
      }}
      allowClose={hasExistingConsent}
    >
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">{t.cookies.description}</p>
        <p className="text-xs text-muted-foreground">
          {t.cookies.learnMorePrefix}{' '}
          <button
            type="button"
            onClick={() => window.openPrivacyPolicy?.()}
            className="underline underline-offset-4 hover:text-foreground cursor-pointer"
          >
            {t.cookies.learnMore}
          </button>
          .
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-end pt-2">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm cursor-pointer"
            onClick={() => applyConsent("declined")}
          >
            {t.cookies.reject}
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm cursor-pointer"
            onClick={() => applyConsent("accepted")}
          >
            {t.cookies.accept}
          </button>
        </div>
      </div>
    </LayoverModal>
  )
}


