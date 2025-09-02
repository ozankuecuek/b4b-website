"use client"

import { Shield, Zap, RefreshCw, Sparkles } from "lucide-react"
import React, { useEffect, useRef, useState } from "react"

export default function SolutionSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: window.innerWidth < 768 ? 0.2 : 0.4, // Lower threshold on mobile
        rootMargin: window.innerWidth < 768 ? '-50px' : '-100px' // Less margin on mobile
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const solutionCards = [
    {
      icon: Shield,
      title: "Trust",
      subtitle: "Instant Onboarding",
      description: "We issue trusted digital identities to B2B buyers which they can use to access all B2B online shops that accept b4b as an Identity Provider - with one click, much like social logins in B2C.",
    },
    {
      icon: Zap,
      title: "Transaction",
      subtitle: "Instant Orders",
      description: "We issue an instant credit line to B2B buyers and assume the credit risk for all transactions within the b4b federation so B2B buyers can place instant shipping orders with zero risk for B2B suppliers.",
    },
    {
      icon: RefreshCw,
      title: "Sync",
      subtitle: "Instant Synchronization",
      description: "b4b serves as the connective tissue by running standard integrations and a translation engine that maps all data points between buyer procurement systems and supplier storefronts, using a standardized data catalogue.",
    },
    {
      icon: Sparkles,
      title: "Efficiency",
      subtitle: "Instant Everything",
      description: "By eliminating all technical and commercial barriers between B2B buyers and B2B suppliers, we enable instant onboarding, instant credit lines, instant supplier discovery, instant trusted partnerships, instant shipping orders and instant synchronization.",
    },
  ] as const

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block">
            <span className="text-xs sm:text-sm font-semibold text-primary bg-primary/10 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6 inline-block tracking-wider uppercase">
              Solution
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 max-w-4xl mx-auto leading-tight">
            We bring the <span className="text-primary">ease of B2C</span> to B2B e-commerce
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 font-medium">
            Our <em>Federated Identity & Integration Service</em> removes all technical and commercial barriers between B2B buyers and B2B suppliers so they can freely discover one another, form trusted partnerships, and seamlessly exchange value in a digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto">
          {solutionCards.map((card, index) => {
            const Icon = card.icon
            
            return (
              <div
                key={index}
                className={`group relative transition-all duration-1000 ease-out hover:-translate-y-2 ${
                  !isVisible 
                    ? 'opacity-0 translate-y-8 scale-95' 
                    : 'opacity-100 translate-y-0 scale-100'
                }`}
                style={{
                  transform: !isVisible 
                    ? `translateX(${index % 2 === 0 ? -40 : 40}px) translateY(${Math.floor(index / 2) * 60}px) scale(0.95)`
                    : 'translateX(0) translateY(0) scale(1)',
                  transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
                  perspective: '1000px'
                }}
              >
                <div className={`bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 h-full transition-all duration-700 ease-out hover:shadow-xl hover:border-primary/20 ${
                  !isVisible ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
                }`}
                style={{ transitionDelay: isVisible ? `${index * 150 + 200}ms` : '0ms' }}>
                  {/* Icon */}
                  <div className="flex items-center mb-6">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>
                  </div>

                  {/* Title and Subtitle */}
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 leading-tight">{card.title}</h3>
                    <h4 className="text-lg sm:text-xl font-semibold text-primary mb-4">{card.subtitle}</h4>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{card.description}</p>

                  {/* Bottom accent */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="w-12 h-1 bg-primary rounded-full opacity-60 group-hover:opacity-100 group-hover:w-16 transition-all duration-300" />
                  </div>
                </div>

                {/* Shadow underneath for depth */}
                <div className="absolute inset-0 -z-10 transform translate-y-3 translate-x-2 rounded-2xl bg-gray-300/10 blur-sm group-hover:bg-gray-300/20 transition-all duration-300" />
              </div>
            )
          })}
        </div>

        {/* Bottom summary */}
        <div className={`mt-12 sm:mt-16 text-center transition-all duration-700 ease-out ${
          !isVisible ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
        }`}
        style={{ transitionDelay: isVisible ? '800ms' : '0ms' }}>
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-primary/5 rounded-2xl p-6 sm:p-8 border border-primary/10">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                <span className="font-semibold text-primary">The outcome:</span> B2B e-commerce becomes as frictionless as B2C, enabling instant business relationships and seamless transactions at scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
