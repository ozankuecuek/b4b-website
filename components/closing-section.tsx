"use client"

import { useState } from "react"
import { useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { HyperText } from "./magicui/hyper-text"

export default function ClosingSection() {
  const [step, setStep] = useState<"initial" | "reveal-newspaper" | "reveal-quote">("initial")
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <section ref={sectionRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-24 lg:py-32" style={{ backgroundColor: 'hsl(225, 84%, 24%)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />
      </div>
      {/* Main content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Step 1: Time machine + button */}
        {step === "initial" && (
          <div className="flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 drop-shadow-lg text-center font-primary" style={{ color: 'white' }}>
              Step into the Future
            </h2>
            <button
              className="px-8 py-4 rounded-full text-xl font-semibold shadow-lg focus:outline-none transition-all font-primary border border-white/20"
              style={{
                backgroundColor: 'hsl(198, 89%, 82%)',
                color: 'hsl(225, 84%, 24%)',
                boxShadow: '0 4px 32px 0 hsl(198, 89%, 82%, 0.15)',
              }}
              onClick={() => {
                setStep("reveal-newspaper")
                setTimeout(() => {
                  sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }, 50)
              }}
            >
              Let&apos;s go
            </button>
          </div>
        )}

        {/* Step 2 & 3: Headline and Take me back button */}
        {(step === "reveal-newspaper" || step === "reveal-quote") && (
          <div className="flex flex-col items-center w-full mb-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg text-center font-primary" style={{ color: 'white' }}>
              Step into the Future
            </h2>
            <button
              className="px-8 py-4 rounded-full text-xl font-semibold shadow-lg focus:outline-none transition-all font-primary border border-white/20"
              style={{
                backgroundColor: 'hsl(198, 89%, 82%)',
                color: 'hsl(225, 84%, 24%)',
                boxShadow: '0 4px 32px 0 hsl(198, 89%, 82%, 0.15)',
              }}
              onClick={() => setStep(step === 'reveal-newspaper' ? 'initial' : 'reveal-newspaper')}
            >
              Go back
            </button>
          </div>
        )}

        {/* Step 2 & 3: Reveal newspaper and quote */}
        {(step === "reveal-newspaper" || step === "reveal-quote") && (
          <div className="flex flex-col md:flex-row items-center gap-10 mt-0 relative w-full justify-center">
            <div
              className={step === "reveal-newspaper" ? "cursor-pointer" : ""}
              onClick={step === "reveal-newspaper" ? () => setStep("reveal-quote") : undefined}
              style={{ zIndex: 10 }}
            >
              <Image
                src="/newspaper_gpt.png"
                alt="Wall Street Journal article highlighting b4b's impact in 2036"
                width={450}
                height={600}
                className="rounded-2xl shadow-2xl border-4"
                style={{ borderColor: "hsl(198, 89%, 82%)" }}
                priority
              />
              {step === "reveal-newspaper" && (
                <div
                  className="text-center mt-4 text-lg font-secondary"
                  style={{ color: 'hsl(198, 89%, 82%)' }}
                >
                  <span className="animate-pulse">Click the newspaper to zoom in...</span>
                </div>
              )}
            </div>
            {step === "reveal-quote" && (
              <div
                className="max-w-xl p-8 rounded-xl shadow-lg border border-gray-200 bg-white/95 flex flex-col gap-4 md:absolute md:left-1/3 md:top-1/2 md:-translate-y-1/2 md:-ml-24 md:z-20"
                style={{ fontFamily: 'Georgia, Times, "Times New Roman", serif', color: '#222', boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)' }}
              >
                <div className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-mono">
                  Excerpt from the Wall Street Journal, 2036
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-3xl text-gray-400 select-none" style={{fontFamily:'serif',lineHeight:1}}>&ldquo;</span>
                  <span className="italic text-lg md:text-xl lg:text-2xl" style={{fontFamily:'Georgia, Times, "Times New Roman", serif'}}>
                    {"Much of that success can be traced back to a quiet revolution that began nearly a decade ago, led by a European platform that dared to rethink how B2B should work: b4b."}
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
} 