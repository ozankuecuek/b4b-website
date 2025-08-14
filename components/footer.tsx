"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import LayoverModal from "./layover-modal"

type LegalModal = "imprint" | "privacy" | null

export default function Footer() {
  const year = new Date().getFullYear()
  const [open, setOpen] = useState<LegalModal>(null)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  useEffect(() => {
    window.openPrivacyPolicy = () => setOpen("privacy")
    return () => {
      if (window.openPrivacyPolicy) {
        delete window.openPrivacyPolicy
      }
    }
  }, [])

  return (
    <>
      <footer className="border-t bg-background">
        <div className="container mx-auto px-6 lg:px-12 py-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">© {year} b4b. All rights reserved.</p>
          <nav className="flex items-center gap-6">
            <Link
              href="#imprint"
              onClick={(e) => { e.preventDefault(); setOpen("imprint") }}
              className="text-sm text-muted-foreground hover:text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 rounded-sm transition-colors"
            >
              Imprint
            </Link>
            <Link
              href="#privacy"
              onClick={(e) => { e.preventDefault(); setOpen("privacy") }}
              className="text-sm text-muted-foreground hover:text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 rounded-sm transition-colors"
            >
              Privacy policy
            </Link>
            <button
              type="button"
              onClick={() => window.openCookieSettings?.()}
              className="text-sm text-muted-foreground hover:text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 rounded-sm transition-colors"
            >
              Cookie settings
            </button>
          </nav>
        </div>
      </footer>

      <LayoverModal
        open={!!open}
        title={open === "imprint" ? "Imprint" : "Privacy policy"}
        onRequestClose={() => setOpen(null)}
        zIndex={open === "privacy" ? 60 : 50}
      >
        {open === "imprint" ? <ImprintContent /> : <PrivacyContent />}
      </LayoverModal>
    </>
  )
}

function ImprintContent() {
  return (
    <div className="prose prose-sm max-w-none">
      <p><strong>Service provider</strong></p>
      <p>
        b4b GmbH<br />
        Example Street 12<br />
        10115 Berlin, Germany
      </p>
      <p>
        <strong>Represented by</strong><br />
        Jane Doe (Managing Director)
      </p>
      <p>
        <strong>Contact</strong><br />
        E‑mail: info@b4b.example
      </p>
      <p>
        <strong>Commercial register</strong><br />
        Registered at Amtsgericht Berlin (Charlottenburg), HRB 999999
      </p>
      <p>
        <strong>VAT ID</strong><br />
        DE999999999
      </p>
      <p className="text-muted-foreground">
        Content responsibility in accordance with § 18 Abs. 2 MStV: b4b GmbH. This website may contain links to external websites. We have no influence on the content of those sites and therefore cannot accept any liability for them.
      </p>
    </div>
  )
}

function PrivacyContent() {
  return (
    <div className="prose prose-sm max-w-none">
      <p className="text-muted-foreground">Last updated: {new Date().toISOString().slice(0, 10)}</p>
      <p>
        This Privacy Policy explains how we process personal data when you join our waitlist and use this website.
      </p>
      <p>
        <strong>Controller</strong><br />
        b4b GmbH, Example Street 12, 10115 Berlin, Germany<br />
        E‑mail: privacy@b4b.example
      </p>
      <p>
        <strong>Data we process for the waitlist</strong><br />
        When you submit the waitlist form, we process: your e‑mail address (required), the form source (e.g. section of the site), your browser user‑agent and your IP address (automatically transmitted by your browser).
      </p>
      <p>
        <strong>Purposes</strong><br />
        • to register and manage your waitlist subscription and send related updates;<br />
        • to prevent abuse and ensure service security (rate‑limiting, fraud prevention).
      </p>
      <p>
        <strong>Legal bases</strong><br />
        • Art. 6(1)(a) GDPR (consent) for sending waitlist updates to your e‑mail address;<br />
        • Art. 6(1)(f) GDPR (legitimate interests) for processing user‑agent and IP to protect our service against abuse.
      </p>
      <p>
        <strong>Recipients and processors</strong><br />
        We use Supabase (Supabase, Inc.) to host our database and invoke an edge function to send confirmation e‑mails. We also use Vercel Analytics to measure site performance and usage in a privacy‑friendly way. These providers act as processors according to Art. 28 GDPR where applicable.
      </p>
      <p>
        <strong>International data transfers</strong><br />
        Depending on service locations, data may be processed outside the EU/EEA. Where this occurs, we rely on appropriate safeguards such as the EU Standard Contractual Clauses pursuant to Art. 46 GDPR.
      </p>
      <p>
        <strong>Retention</strong><br />
        We store your e‑mail address until you withdraw your consent or until the waitlist project ends, whichever occurs first. Technical log data (IP, user‑agent) used for security is retained for up to 30 days unless longer retention is necessary to investigate incidents.
      </p>
      <p>
        <strong>Your rights</strong><br />
        You have the right to access, rectification, erasure, restriction, data portability, and to object to processing under the conditions of the GDPR. You may withdraw consent at any time with effect for the future.
      </p>
      <p>
        <strong>Withdrawal and contact</strong><br />
        You can withdraw your waitlist consent by contacting us at privacy@b4b.example. We will then stop sending you updates and delete your e‑mail address unless legal obligations require retention.
      </p>
      <p>
        <strong>Right to lodge a complaint</strong><br />
        You can lodge a complaint with your local supervisory authority, e.g., Berliner Beauftragte für Datenschutz und Informationsfreiheit.
      </p>
      <p>
        <strong>Minors</strong><br />
        Our waitlist is intended for persons aged 16 and over.
      </p>
    </div>
  )
}


