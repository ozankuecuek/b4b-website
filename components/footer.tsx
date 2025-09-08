"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button"
import { ChevronRightIcon, CheckIcon } from "lucide-react"
import LayoverModal from "@/components/layover-modal"
import { useTranslations } from "@/lib/i18n"

export default function Footer() {
  const t = useTranslations()
  
  // Footer links (Imprint / Privacy) 
  type LegalModal = "imprint" | "privacy" | null
  const [openLegal, setOpenLegal] = useState<LegalModal>(null)
  
  // Waitlist form state
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenLegal(null)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])
  
  useEffect(() => {
    window.openPrivacyPolicy = () => setOpenLegal("privacy")
    return () => {
      if (window.openPrivacyPolicy) {
        delete window.openPrivacyPolicy
      }
    }
  }, [])

  return (
    <>
      <footer className="bg-primary py-6 sm:py-8 lg:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Container that aligns with solution cards */}
          <div className="max-w-7xl mx-auto">
            {/* Mobile and Tablet: Use standard padding to match solution cards */}
            <div className="block xl:hidden mx-4 sm:mx-6 md:mx-8">
              <div className="flex flex-col space-y-6 md:space-y-8 lg:space-y-0 lg:flex-row lg:items-center lg:justify-between">
                
                {/* Legal links - Left side on desktop, top on mobile */}
                <nav className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 md:space-x-6 items-start sm:items-center lg:items-center">
                  <Link
                    href="#imprint"
                    onClick={(e) => { e.preventDefault(); setOpenLegal("imprint") }}
                    className="text-sm md:text-base text-white/80 hover:text-white underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm transition-colors py-1"
                  >
                    {t.hero.legal.imprint}
                  </Link>
                  <Link
                    href="#privacy"
                    onClick={(e) => { e.preventDefault(); setOpenLegal("privacy") }}
                    className="text-sm md:text-base text-white/80 hover:text-white underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm transition-colors py-1"
                  >
                    {t.hero.legal.privacyPolicy}
                  </Link>
                  <button
                    type="button"
                    onClick={() => window.openCookieSettings?.()}
                    className="text-sm md:text-base text-white/80 hover:text-white underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm transition-colors cursor-pointer py-1"
                  >
                    {t.hero.legal.cookieSettings}
                  </button>
                </nav>

                {/* Waitlist CTA - Bottom on mobile, right side on desktop */}
                <div className="flex flex-col items-start sm:items-center lg:items-end space-y-3 sm:space-y-4 w-full lg:w-auto lg:flex-shrink-0">
                  <div className="flex flex-col w-full sm:flex-row sm:max-w-md lg:max-w-none items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
                    <Input
                      type="email"
                      placeholder={t.hero.emailPlaceholder}
                      aria-label={t.hero.emailAria}
                      required
                      className={`w-full sm:flex-1 lg:w-64 xl:w-72 px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-white/20 focus-visible:border-white focus-visible:ring-white/70 rounded-md ${subscribed ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-white/95 text-gray-900 placeholder-gray-600'}`}
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      disabled={subscribed}
                    />
                    <AnimatedSubscribeButton
                      className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap px-4 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-medium"
                      style={{
                        backgroundColor: 'hsl(198 89% 82%)',
                        color: 'hsl(225 84% 24%)',
                        border: 'none',
                      }}
                      subscribedStyle={{
                        backgroundColor: '#DECCCC',
                        color: 'hsl(225 84% 24%)',
                        border: 'none',
                      }}
                      subscribeStatus={subscribed}
                      onClick={async e => {
                        if (e) e.preventDefault()
                        if (subscribed || isSubmitting) return
                        setSubmitError(null)
                        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
                        if (!isValid) {
                          setSubmitError(t.hero.invalidEmail)
                          return
                        }
                        try {
                          setIsSubmitting(true)
                          const res = await fetch('/api/waitlist', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ email, source: 'footer' }),
                          })
                          if (!res.ok) {
                            throw new Error('Request failed')
                          }
                          setSubscribed(true)
                        } catch {
                          setSubmitError(t.hero.errors.generic)
                        } finally {
                          setIsSubmitting(false)
                        }
                      }}
                    >
                      <span className="group inline-flex items-center justify-center">
                        <span className="hidden sm:inline">{isSubmitting ? t.hero.submitSubmitting : t.hero.submitJoin}</span>
                        <span className="sm:hidden">{isSubmitting ? 'Joining...' : 'Join'}</span>
                        <ChevronRightIcon className="ml-1 sm:ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                      <span className="group inline-flex items-center justify-center">
                        <CheckIcon className="mr-1 sm:mr-2 size-4" />
                        <span className="hidden sm:inline">{t.hero.submitThanks}</span>
                        <span className="sm:hidden">Thanks!</span>
                      </span>
                    </AnimatedSubscribeButton>
                  </div>
                  {submitError && (
                    <p className="text-xs sm:text-sm text-red-200 self-start sm:self-center lg:self-end">{submitError}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Desktop: Use same margins as solution cards (ml-8 -mr-6) */}
            <div className="hidden xl:block ml-8 -mr-6">
              <div className="flex flex-col space-y-6 md:space-y-8 lg:space-y-0 lg:flex-row lg:items-center lg:justify-between">
                
                {/* Legal links - Left side on desktop, top on mobile */}
                <nav className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 md:space-x-6 items-start sm:items-center lg:items-center">
                  <Link
                    href="#imprint"
                    onClick={(e) => { e.preventDefault(); setOpenLegal("imprint") }}
                    className="text-sm md:text-base text-white/80 hover:text-white underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm transition-colors py-1"
                  >
                    {t.hero.legal.imprint}
                  </Link>
                  <Link
                    href="#privacy"
                    onClick={(e) => { e.preventDefault(); setOpenLegal("privacy") }}
                    className="text-sm md:text-base text-white/80 hover:text-white underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm transition-colors py-1"
                  >
                    {t.hero.legal.privacyPolicy}
                  </Link>
                  <button
                    type="button"
                    onClick={() => window.openCookieSettings?.()}
                    className="text-sm md:text-base text-white/80 hover:text-white underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm transition-colors cursor-pointer py-1"
                  >
                    {t.hero.legal.cookieSettings}
                  </button>
                </nav>

                {/* Waitlist CTA - Bottom on mobile, right side on desktop */}
                <div className="flex flex-col items-start sm:items-center lg:items-end space-y-3 sm:space-y-4 w-full lg:w-auto lg:flex-shrink-0">
                  <div className="flex flex-col w-full sm:flex-row sm:max-w-md lg:max-w-none items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
                    <Input
                      type="email"
                      placeholder={t.hero.emailPlaceholder}
                      aria-label={t.hero.emailAria}
                      required
                      className={`w-full sm:flex-1 lg:w-64 xl:w-72 px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-white/20 focus-visible:border-white focus-visible:ring-white/70 rounded-md ${subscribed ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-white/95 text-gray-900 placeholder-gray-600'}`}
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      disabled={subscribed}
                    />
                    <AnimatedSubscribeButton
                      className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap px-4 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-medium"
                      style={{
                        backgroundColor: 'hsl(198 89% 82%)',
                        color: 'hsl(225 84% 24%)',
                        border: 'none',
                      }}
                      subscribedStyle={{
                        backgroundColor: '#DECCCC',
                        color: 'hsl(225 84% 24%)',
                        border: 'none',
                      }}
                      subscribeStatus={subscribed}
                      onClick={async e => {
                        if (e) e.preventDefault()
                        if (subscribed || isSubmitting) return
                        setSubmitError(null)
                        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
                        if (!isValid) {
                          setSubmitError(t.hero.invalidEmail)
                          return
                        }
                        try {
                          setIsSubmitting(true)
                          const res = await fetch('/api/waitlist', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ email, source: 'footer' }),
                          })
                          if (!res.ok) {
                            throw new Error('Request failed')
                          }
                          setSubscribed(true)
                        } catch {
                          setSubmitError(t.hero.errors.generic)
                        } finally {
                          setIsSubmitting(false)
                        }
                      }}
                    >
                      <span className="group inline-flex items-center justify-center">
                        <span className="hidden sm:inline">{isSubmitting ? t.hero.submitSubmitting : t.hero.submitJoin}</span>
                        <span className="sm:hidden">{isSubmitting ? 'Joining...' : 'Join'}</span>
                        <ChevronRightIcon className="ml-1 sm:ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                      <span className="group inline-flex items-center justify-center">
                        <CheckIcon className="mr-1 sm:mr-2 size-4" />
                        <span className="hidden sm:inline">{t.hero.submitThanks}</span>
                        <span className="sm:hidden">Thanks!</span>
                      </span>
                    </AnimatedSubscribeButton>
                  </div>
                  {submitError && (
                    <p className="text-xs sm:text-sm text-red-200 self-start sm:self-center lg:self-end">{submitError}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal modals */}
      <LayoverModal
        open={!!openLegal}
        title={openLegal === "imprint" ? t.hero.legal.modalTitles.imprint : t.hero.legal.modalTitles.privacy}
        onRequestClose={() => setOpenLegal(null)}
        zIndex={openLegal === "privacy" ? 60 : 50}
      >
        {openLegal === "imprint" ? <ImprintContent /> : <PrivacyContent />}
      </LayoverModal>
    </>
  )
}

function ImprintContent() {
  const t = useTranslations()
  return (
    <div className="prose prose-sm max-w-none">
      <p><strong>{t.hero.legal.imprintContent.serviceProvider}</strong></p>
      <p>
        {t.hero.legal.imprintContent.company.name}<br />
        {t.hero.legal.imprintContent.company.street}<br />
        {t.hero.legal.imprintContent.company.city}
      </p>
      <p>
        <strong>{t.hero.legal.imprintContent.representedBy}</strong><br />
        {t.hero.legal.imprintContent.company.managingDirector}
      </p>
      <p>
        <strong>{t.hero.legal.imprintContent.contact}</strong><br />
        E‑mail: {t.hero.legal.imprintContent.company.email}
      </p>
    </div>
  )
}

function PrivacyContent() {
  const t = useTranslations()
  return (
    <div className="prose prose-sm max-w-none">
      <p className="text-muted-foreground">{t.hero.legal.privacyContent.lastUpdatedPrefix} {new Date().toISOString().slice(0, 10)}</p>
      <p>{t.hero.legal.privacyContent.intro}</p>
      <p>{t.hero.legal.privacyContent.controller}</p>
      <p>{t.hero.legal.privacyContent.dataWeProcess}</p>
      <p>{t.hero.legal.privacyContent.purposes}</p>
      <p>{t.hero.legal.privacyContent.legalBases}</p>
      <p>{t.hero.legal.privacyContent.recipients}</p>
      <p>{t.hero.legal.privacyContent.transfers}</p>
      <p>{t.hero.legal.privacyContent.retention}</p>
      <p>{t.hero.legal.privacyContent.rights}</p>
      <p>{t.hero.legal.privacyContent.withdrawal}</p>
      <p>{t.hero.legal.privacyContent.complaint}</p>
      <p>{t.hero.legal.privacyContent.minors}</p>
    </div>
  )
}
