"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect, useLayoutEffect, useRef, useState, useMemo } from "react"
import Link from "next/link"
import LayoverModal from "@/components/layover-modal"
import { Zap, CreditCard, ShoppingCart, ShieldCheck, ChevronRightIcon, CheckIcon } from "lucide-react"
import { HyperText } from "@/components/magicui/hyper-text"
import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button"
import StickyLogoLang from "@/components/sticky-logo-lang"
import { useTranslations } from "@/lib/i18n"

export default function HeroSection() {
  const t = useTranslations()
  // Animation state for preview
  const [clicked, setClicked] = useState(false)
  const [cursorStep, setCursorStep] = useState(0)
  const [cursorClicked, setCursorClicked] = useState(false)
  // Unused ref removed
  const previewRef = useRef<HTMLDivElement>(null)
  const b4bButtonRef = useRef<HTMLButtonElement>(null)
  // Maintain consistent card height between login and benefits sides
  const [cardHeight, setCardHeight] = useState<number | null>(null)


  // Logo color state based on background
  const [isOnWhiteBackground, setIsOnWhiteBackground] = useState(false)
  const [isOnBusinessModelSection, setIsOnBusinessModelSection] = useState(false)
  const [isOnOurAskSection, setIsOnOurAskSection] = useState(false)
  const [isOnClosingSection, setIsOnClosingSection] = useState(false)

  // Path data for smoother, curvy cursor motion
  const [cursorPath, setCursorPath] = useState<string>("")
  // Offset-distance percentage landmarks for each cursorStep along the path
  const distanceSteps = [0, 35, 65, 85, 100] as const

  // === Animation timing helpers ===
  const spinDuration = 1000 // ms – duration of the card spin after click

  type BenefitItem = {
    icon: React.ComponentType<{ className?: string; size?: number }>
    label: string
    highlight?: boolean
  }

  const benefitsData: BenefitItem[] = useMemo(() => [
    { icon: Zap, label: t.hero.benefits.instantOnboarding },
    { icon: CreditCard, label: t.hero.benefits.instantCreditLine },
    { icon: ShoppingCart, label: t.hero.benefits.instantOrders },
    { icon: ShieldCheck, label: t.hero.benefits.zeroRisk, highlight: true },
  ], [t.hero.benefits.instantOnboarding, t.hero.benefits.instantCreditLine, t.hero.benefits.instantOrders, t.hero.benefits.zeroRisk])

  // Staggered benefit reveal state
  const [visibleBenefits, setVisibleBenefits] = useState(0)

  // Add state for email and subscribed
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  // Footer links (Imprint / Privacy) replicated locally
  type LegalModal = "imprint" | "privacy" | null
  const [openLegal, setOpenLegal] = useState<LegalModal>(null)
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

  // Scroll detection for logo color change
  useEffect(() => {
    const handleScroll = () => {
      // Detect BusinessModelSection
      const businessModelSection = document.querySelector('section[data-section="business-model"]')
      if (businessModelSection) {
        const rect = businessModelSection.getBoundingClientRect()
        // Only set true if the section is fully within the viewport, with a 64px buffer
        const buffer = 64
        const fullyVisible = rect.top >= buffer && rect.bottom <= window.innerHeight - buffer
        setIsOnBusinessModelSection(fullyVisible)
      }
      // Detect 'Zero trade-credit risk' element
      const zeroRiskEl = Array.from(document.querySelectorAll('h4')).find(el => el.textContent?.includes('Zero trade-credit risk'))
      if (zeroRiskEl) {
        const rect = zeroRiskEl.getBoundingClientRect()
        // Check if any part of the element is visible in the viewport
        const isVisible = rect.bottom > 0 && rect.top < window.innerHeight
        setIsOnBusinessModelSection(isVisible)
      } else {
        setIsOnBusinessModelSection(false)
      }
      // Detect 'Other OPEX & CAPEX' element in OurAskSection
      const opexEl = Array.from(document.querySelectorAll('h4')).find(el => el.textContent?.includes('Other OPEX & CAPEX'))
      if (opexEl) {
        const rect = opexEl.getBoundingClientRect()
        const isVisible = rect.bottom > 0 && rect.top < window.innerHeight
        setIsOnOurAskSection(isVisible)
      } else {
        setIsOnOurAskSection(false)
      }
      // Detect 'Step into the Future' element in ClosingSection
      const closingEl = Array.from(document.querySelectorAll('h2')).find(el => el.textContent?.includes('Step into the Future'))
      if (closingEl) {
        const rect = closingEl.getBoundingClientRect()
        const isVisible = rect.bottom > 0 && rect.top < window.innerHeight
        setIsOnClosingSection(isVisible)
      } else {
        setIsOnClosingSection(false)
      }
      // Existing logic for white background (optional, can be refined)
      const problemSection = document.querySelector('section[class*="bg-white"]')
      if (problemSection) {
        const problemRect = problemSection.getBoundingClientRect()
        const whiteBackgroundReached = problemRect.top <= 0
        setIsOnWhiteBackground(whiteBackgroundReached)
      }
    }
    handleScroll()
    let ticking = false
    const scrollListener = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', scrollListener, { passive: true })
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  // Calculate the target position (center of b4b button) after first render
  useLayoutEffect(() => {
    if (previewRef.current && b4bButtonRef.current) {
      const previewRect = previewRef.current.getBoundingClientRect()
      const btnRect = b4bButtonRef.current.getBoundingClientRect()
      const newTarget = {
        x: btnRect.left - previewRect.left + btnRect.width / 2,
        y: btnRect.top - previewRect.top + btnRect.height / 2,
      }

      // Capture the preview card's height to apply to the benefits card later
      setCardHeight(previewRect.height)

      // Build a curvy SVG path from the starting point to the button center
      const points = [
        { x: 40, y: 100 },
        { x: newTarget.x - 120, y: newTarget.y - 150 },
        { x: newTarget.x + 80, y: newTarget.y - 40 },
        { x: newTarget.x + 20, y: newTarget.y + 10 },
        { x: newTarget.x, y: newTarget.y },
      ]

      const rand = (range: number) => (Math.random() - 0.5) * range
      const buildSvgPath = (pts: { x: number; y: number }[]) => {
        if (pts.length < 2) return ""
        let d = `M ${pts[0].x} ${pts[0].y}`
        for (let i = 1; i < pts.length; i++) {
          const prev = pts[i - 1]
          const curr = pts[i]
          // Mid-point as a control point with random jitter for organic feel
          const cx = (prev.x + curr.x) / 2 + rand(60)
          const cy = (prev.y + curr.y) / 2 + rand(60)
          d += ` Q ${cx} ${cy} ${curr.x} ${curr.y}`
        }
        return d
      }

      setCursorPath(buildSvgPath(points))
    }
  }, [])

  useEffect(() => {
    // Use window.setTimeout to ensure numeric ID type in browsers
    const timers: number[] = []
    const startAnimation = () => {
      setCursorStep(0)
      setCursorClicked(false)
      setClicked(false)
      timers.push(window.setTimeout(() => setCursorStep(1), 1200))   // wander1
      timers.push(window.setTimeout(() => setCursorStep(2), 2400))   // wander2
      timers.push(window.setTimeout(() => setCursorStep(3), 3600))   // near button
      timers.push(window.setTimeout(() => setCursorStep(4), 4200))   // hover on button
      timers.push(window.setTimeout(() => setCursorClicked(true), 5200)) // click after 1s on button
      timers.push(window.setTimeout(() => setClicked(true), 5800))   // show benefits
      // Calculate total time until all benefits are revealed
      const revealDuration = spinDuration + (benefitsData.length - 1) * 300 // e.g. 1s spin + staggered reveals
      const extraPause = 6000 // Extra 6 s pause so users can comfortably read the benefits
      const timeUntilClicked = 5800 // Total time (ms) until `clicked` becomes true — keep in sync with timers above
      const loopTime = timeUntilClicked + revealDuration + extraPause
      timers.push(window.setTimeout(() => startAnimation(), loopTime))   // restart animation after the pause
    }
    startAnimation()
    return () => { timers.forEach((id) => window.clearTimeout(id)) }
  }, [benefitsData.length])

  useEffect(() => {
    if (clicked) {
      // reveal benefits one by one after spin
      benefitsData.forEach((_, idx) => {
        setTimeout(() => setVisibleBenefits((prev) => Math.max(prev, idx + 1)), spinDuration + idx * 300)
      })
    } else {
      setVisibleBenefits(0)
    }
  }, [clicked, benefitsData, spinDuration])

  // Remove the old straight-line translation animation and replace it with motion-path-based movement
  const cursorStyle = cursorStep <= 4
    ? ({
        left: 0,
        top: 0,
        offsetPath: `path('${cursorPath}')`,
        offsetDistance: `${distanceSteps[cursorStep]}%`,
        offsetAnchor: 'center',
        transition: 'offset-distance 0.9s cubic-bezier(0.22, 1, 0.36, 1)',
      } as React.CSSProperties)
    : { left: 0, top: 0 }

  // Button hover/click state for animation
  const b4bHovered = cursorStep === 4 && !cursorClicked
  const b4bClicked = cursorClicked

  // Royal blue for cursor
  const royalBlue = 'hsl(225, 84%, 24%)'

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ backgroundColor: 'hsl(225 84% 24%)' }}>
      {/* Background image container */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center hidden [@media_(min-width:1240px)]:block z-10"
           style={{
             backgroundImage: 'url("/getty_unsplash_get_premium_2.webp")',
             backgroundPosition: 'top right',
             clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)'
           }} />

      {/* Main Content */}
      <div className="relative z-20">
        <div className="container mx-auto px-6 lg:px-12">
          
          {/* Logo fixed to top-left, aligned with language selector */}
          <StickyLogoLang isOnWhiteBackground={isOnWhiteBackground} isOnBusinessModelSection={isOnBusinessModelSection} isOnOurAskSection={isOnOurAskSection} isOnClosingSection={isOnClosingSection} />

          {/* Main Content Grid */}
          <div className="flex items-center justify-center min-h-screen pb-20 [@media_(min-width:1240px)]:pb-0">
            <div className="grid grid-cols-1 [@media_(min-width:1240px)]:grid-cols-2 items-center justify-items-center [@media_(min-width:1240px)]:justify-items-start gap-12 w-full pt-32 [@media_(min-width:1240px)]:pt-0">
              
              {/* Left: Text Content */}
              <div className="animate-in fade-in slide-in-from-left-4 duration-1000 text-center [@media_(min-width:1240px)]:text-left [@media_(min-width:1240px)]:pr-16">
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                  {t.hero.titlePrefix}<br />
                  {t.hero.titleMiddle && <>{t.hero.titleMiddle} </>}
                  <span className="relative inline-block highlight-b2b" style={{ color: 'hsl(198 89% 82%)' }}>
                    {t.hero.titleHighlight}
                    {/* Hand-drawn underline SVG */}
                    <svg
                      className="absolute left-0 bottom-0 w-full h-4 pointer-events-none select-none"
                      viewBox="0 0 100 10"
                      preserveAspectRatio="none"
                      style={{ zIndex: -1 }}
                    >
                      <defs>
                        {/* Creates a paint-brush distortion */}
                        <filter id="brush" x="0" y="0" width="100%" height="100%">
                          <feTurbulence type="turbulence" baseFrequency="0.8" numOctaves="4" seed="5" result="turb" />
                          {/* Subtle blur to make edges softer before displacement */}
                          <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="blur" />
                          <feDisplacementMap in="blur" in2="turb" scale="14" xChannelSelector="R" yChannelSelector="G" />
                        </filter>
                      </defs>
                      <path
                        d="M0 6 Q 25 2 50 6 T 100 6"
                        fill="none"
                        stroke="hsl(10 45% 82%)"
                        strokeWidth="14"
                        strokeLinecap="round"
                        filter="url(#brush)"
                        className="underline-path"
                      />
                    </svg>
                  </span>
                </h1>
                
                <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto [@media_(min-width:1240px)]:mx-0">{t.hero.lead}</p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center [@media_(min-width:1240px)]:justify-start gap-3 mb-4">
                  <Input
                    type="email"
                    placeholder={t.hero.emailPlaceholder}
                    aria-label={t.hero.emailAria}
                    required
                    className={`w-full sm:w-1/2 px-4 py-3 border border-white/20 focus-visible:border-white focus-visible:ring-white/70 ${subscribed ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-white/95 text-gray-900 placeholder-gray-600'}`}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    disabled={subscribed}
                  />
                  <AnimatedSubscribeButton
                    className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap"
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
                          body: JSON.stringify({ email, source: 'hero' }),
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
                    <span className="group inline-flex items-center">
                      {isSubmitting ? t.hero.submitSubmitting : t.hero.submitJoin}
                      <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="group inline-flex items-center">
                      <CheckIcon className="mr-2 size-4" />
                      {t.hero.submitThanks}
                    </span>
                  </AnimatedSubscribeButton>
                </div>
                {submitError && (
                  <p className="text-sm text-red-200 mt-1">{submitError}</p>
                )}
                <p className="text-sm text-white/60">
                {t.hero.launchingNote}
                </p>
              </div>

              {/* Right: Visual Component (Login Form Preview & Animation) */}
              <div className="flex justify-center [@media_(min-width:1240px)]:justify-start">
                <div
                  className="animate-in fade-in slide-in-from-right-4 duration-1000 delay-200 relative z-10"
                  style={{
                    transform: clicked ? "rotateY(360deg)" : "rotateY(0deg)",
                    transition: `transform ${spinDuration}ms`,
                    transformStyle: "preserve-3d",
                    perspective: 1000,
                  }}
                >
                  {/* Shadow effect behind the preview card */}
                  <div
                    className="absolute inset-0"
                    aria-hidden="true"
                    style={{
                      zIndex: -1,
                      filter: 'blur(64px)',
                      background: 'rgba(0, 0, 0, 0.55)',
                      borderRadius: '32px',
                      boxShadow: '0 24px 120px 0 rgba(0,0,0,0.75)',
                      pointerEvents: 'none',
                    }}
                  />
                  {/* Mouse cursor animation */}
                  {!clicked && (
                    <div
                      className="absolute z-30 pointer-events-none select-none"
                      style={cursorStyle}
                    >
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <circle cx="16" cy="16" r="10" fill={royalBlue} stroke="#fff" strokeWidth="3" />
                        {cursorClicked && <circle cx="16" cy="16" r="14" fill="#A6E1FA" opacity="0.3" />}
                      </svg>
                    </div>
                  )}
                  {/* Both faces of the flipping card share same fixed height so the size remains identical */}
                  {!clicked ? (
                    <div
                      className="bg-white rounded-2xl p-6 shadow-2xl w-full max-w-sm border border-gray-200 relative"
                      ref={previewRef}
                      style={cardHeight ? { height: cardHeight } : undefined}
                    >
                      <div className="text-gray-800 font-semibold mb-6 text-xl">
                        {t.hero.preview.signInToAccount}
                      </div>
                      <form className="space-y-4 mb-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t.hero.preview.email}</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="email"
                            required
                            className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 bg-white"
                          />
                        </div>
                        <div>
                          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">{t.hero.preview.password}</label>
                          <input
                            type="password"
                            id="password"
                            name="password"
                            autoComplete="current-password"
                            required
                            className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 bg-white"
                          />
                        </div>
                        <Button type="button" size="lg" variant="outline" className="w-full font-normal text-sm">
                          {t.hero.preview.signIn}
                        </Button>
                      </form>
                      <div className="flex items-center my-4">
                        <div className="flex-grow border-t border-gray-200"></div>
                        <span className="mx-3 text-gray-400 text-xs">{t.hero.preview.or}</span>
                        <div className="flex-grow border-t border-gray-200"></div>
                      </div>
                      <Button 
                         ref={b4bButtonRef}
                         onClick={() => {
                           setCursorClicked(true)
                           setClicked(true)
                         }}
                         className={`w-full flex items-center justify-center gap-2 transition-transform duration-150 ${b4bHovered ? 'scale-105 shadow-lg ring-4 ring-primary/20' : ''} ${b4bClicked ? 'scale-95 bg-primary/80' : ''}`}
                         size="lg"
                         style={{ backgroundColor: 'hsl(225 84% 24%)', color: 'white', border: 'none' }}
                      >
                        <span style={{ fontFamily: 'Lexend, sans-serif' }}>{t.hero.preview.signInWith}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 13 115.35 37.55"
                          width="160"
                          height="48"
                          className="size-10"
                        >
                          <defs/>
                          <g fill="#A6E1FA">
                            {/* Runic sign */}
                            <g transform="translate(0, -4.2)">
                              <path d="M3.75 33.80L0 28.55L0 23.95L6.95 17.20L6.95 22.20L3.45 25.70L3.45 26.00L7.20 31.20L3.75 33.80M8.75 41.30L8.75 36.30L12.25 32.80L12.25 32.50L8.50 27.30L11.95 24.70L15.70 29.95L15.70 34.55L8.75 41.30Z"/>
                            </g>
                            {/* Company name "b4b" */}
                            <g transform="translate(21.7, 0)">
                              <path d="M15.95 50.55Q14.15 50.55 12.50 50.05Q10.85 49.55 9.53 48.70Q8.20 47.85 7.32 46.73Q6.45 45.60 6.15 44.40L7.90 43.80L7.45 49.95L0 49.95L0 13L8.05 13L8.05 29.80L6.40 29.20Q6.70 27.90 7.55 26.77Q8.40 25.65 9.70 24.77Q11 23.90 12.55 23.40Q14.10 22.90 15.75 22.90Q19.20 22.90 21.88 24.67Q24.55 26.45 26.10 29.57Q27.65 32.70 27.65 36.70Q27.65 40.75 26.13 43.88Q24.60 47 21.95 48.77Q19.30 50.55 15.95 50.55M13.85 43.80Q15.65 43.80 17 42.90Q18.35 42 19.07 40.42Q19.80 38.85 19.80 36.70Q19.80 34.60 19.07 33Q18.35 31.40 17 30.55Q15.65 29.70 13.85 29.70Q12 29.70 10.65 30.55Q9.30 31.40 8.55 33Q7.80 34.60 7.80 36.70Q7.80 38.85 8.55 40.42Q9.30 42 10.65 42.90Q12 43.80 13.85 43.80ZM46.80 50L46.80 21.70L51.35 21.80L38.70 37.30L37.50 35.80L60.70 35.80L60.70 42.80L33.70 42.80L30.30 36.25L48.15 14.70L55 14.70L55 50L46.80 50ZM81.95 50.55Q80.15 50.55 78.50 50.05Q76.85 49.55 75.53 48.70Q74.20 47.85 73.33 46.73Q72.45 45.60 72.15 44.40L73.90 43.80L73.45 49.95L66 49.95L66 13L74.05 13L74.05 29.80L72.40 29.20Q72.70 27.90 73.55 26.77Q74.40 25.65 75.70 24.77Q77 23.90 78.55 23.40Q80.10 22.90 81.75 22.90Q85.20 22.90 87.88 24.67Q90.55 26.45 92.10 29.57Q93.65 32.70 93.65 36.70Q93.65 40.75 92.13 43.88Q90.60 47 87.95 48.77Q85.30 50.55 81.95 50.55M79.85 43.80Q81.65 43.80 83 42.90Q84.35 42 85.08 40.42Q85.80 38.85 85.80 36.70Q85.80 34.60 85.08 33Q84.35 31.40 83 30.55Q81.65 29.70 79.85 29.70Q78 29.70 76.65 30.55Q75.30 31.40 74.55 33Q73.80 34.60 73.80 36.70Q73.80 38.85 74.55 40.42Q75.30 42 76.65 42.90Q78 43.80 79.85 43.80Z"/>
                            </g>
                          </g>
                        </svg>
                      </Button>
                    </div>
                  ) : (
                    <div
                      className="bg-white rounded-2xl p-6 shadow-2xl w-full max-w-sm border border-gray-200 animate-fade-in flex flex-col justify-center"
                      style={cardHeight ? { height: cardHeight } : undefined}
                    >
                      <div 
                        className="text-gray-800 font-semibold mb-6 text-xl text-center"
                        style={{ fontFamily: 'Lexend, sans-serif' }}
                      >
                        {t.hero.preview.why}
                      </div>
                      <ul className="flex flex-col gap-4">
                        {benefitsData.map((item, idx) => {
                          const Icon = item.icon
                          const isVisible = visibleBenefits > idx
                          const isHighlighted = item.highlight
                          return (
                            <li
                              key={idx}
                              className={`transform transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-90'} ${isHighlighted ? 'flex justify-center' : ''}`}
                            >
                              {isHighlighted ? (
                                 <div className="flex justify-center min-h-[2.5rem] items-center">
                                                                         {isVisible ? (
                                      <HyperText
                                        className="text-primary font-semibold text-lg text-center font-mono uppercase"
                                        duration={1500}
                                        animateOnHover={false}
                                        startOnView={isVisible}
                                      >
                                        {item.label}
                                      </HyperText>
                                    ) : (
                                     <div className="invisible">
                                       <span className="text-primary font-semibold text-lg">{item.label}</span>
                                     </div>
                                   )}
                                 </div>
                               ) : (
                                <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-3 shadow-md">
                                  <Icon className="text-primary w-6 h-6 shrink-0" />
                                  <span 
                                    className="text-gray-800 font-medium"
                                    style={{ fontFamily: 'Lexend, sans-serif' }}
                                  >
                                    {item.label}
                                  </span>
                                </div>
                              )}
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom-left legal/cookie links */}
      <div className="absolute bottom-6 left-6 z-40">
        <nav className="flex items-center gap-6">
          <Link
            href="#imprint"
            onClick={(e) => { e.preventDefault(); setOpenLegal("imprint") }}
            className="text-sm text-white/80 hover:text-white underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm transition-colors"
          >
            {t.hero.legal.imprint}
          </Link>
          <Link
            href="#privacy"
            onClick={(e) => { e.preventDefault(); setOpenLegal("privacy") }}
            className="text-sm text-white/80 hover:text-white underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm transition-colors"
          >
            {t.hero.legal.privacyPolicy}
          </Link>
          <button
            type="button"
            onClick={() => window.openCookieSettings?.()}
            className="text-sm text-white/80 hover:text-white underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm transition-colors cursor-pointer"
          >
            {t.hero.legal.cookieSettings}
          </button>
        </nav>
      </div>

      {/* Legal modals */}
      <LayoverModal
        open={!!openLegal}
        title={openLegal === "imprint" ? t.hero.legal.modalTitles.imprint : t.hero.legal.modalTitles.privacy}
        onRequestClose={() => setOpenLegal(null)}
        zIndex={openLegal === "privacy" ? 60 : 50}
      >
        {openLegal === "imprint" ? <ImprintContent /> : <PrivacyContent />}
      </LayoverModal>
    </div>
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