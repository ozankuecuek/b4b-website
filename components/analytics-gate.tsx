"use client"

import { useEffect, useState } from "react"
import { Analytics } from "@vercel/analytics/next"
import { getIsConsentAccepted } from "./cookie-consent"

export default function AnalyticsGate() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    setEnabled(getIsConsentAccepted())
    const onChange = (e: Event) => {
      const custom = e as CustomEvent<{ value: "accepted" | "declined" }>
      setEnabled(custom.detail?.value === "accepted")
    }
    window.addEventListener("cookie-consent-changed", onChange)
    return () => window.removeEventListener("cookie-consent-changed", onChange)
  }, [])

  if (!enabled) return null
  return <Analytics />
}


