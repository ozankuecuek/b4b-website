"use client"

import { CreditCard, Settings, RotateCcw } from "lucide-react"
import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"



export default function ProblemSection() {
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
        threshold: 0.1, // Much lower threshold for better mobile experience
        rootMargin: '-20px' // Minimal margin to ensure early triggering
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const problemCards = [
    {
      icon: CreditCard,
      title: "Credit Risk Burden",
      description: "Buyers prefer deferred payment terms to optimize cash flow, requiring suppliers to absorb the credit risk of large, potentially unpaid invoices.",
    },
    {
      icon: Settings,
      title: "Complex Onboarding",
      description: "To stay safe, suppliers impose a time-consuming and demanding onboarding process, discouraging potential partnerships before they even start.",
    },
    {
      icon: RotateCcw,
      title: "Tedious Synchronization",
      description: "After onboarding, the buyer experience remains tedious: account and order data must constantly be synchronized with their procurement suite, either manually or with a costly one-off integration.",
    },
  ] as const

  return (
    <section data-section="problem" ref={sectionRef} className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: '#E7ECEF' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block">
            <span className="text-xs sm:text-sm font-semibold text-primary bg-primary/10 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6 inline-block tracking-wider uppercase">
              THE PROBLEM
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 max-w-4xl mx-auto leading-tight">
            B2B e-commerce faces
            <span className="text-primary"> significant friction</span> today
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            It is very cumbersome for buyers and suppliers alike to discover one another and build new trade relations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10 md:gap-12 max-w-7xl mx-auto">
          {problemCards.map((card, index) => {
            const Icon = card.icon
            // Set specific images for each card
            let imageSrc = '/sigmund-R-jYl5zpSHk-unsplash.webp'  // Default to sigmund R image
            if (index === 0) imageSrc = '/sigmund-R-jYl5zpSHk-unsplash.webp'  // First card gets the sigmund R image
            if (index === 1) imageSrc = '/cut_joel-danielson-dw4StX7U5Yw-unsplash.webp'  // Second card gets the cut joel danielson image
            if (index === 2) imageSrc = '/sigmund-obBafVj9pSM-unsplash.webp'  // Third card gets the sigmund obBaf image
            
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
                    ? `translateY(30px) scale(0.95)`
                    : 'translateY(0) scale(1)',
                  transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
                }}
              >
                {/* Mobile and Tablet: Overlapping layout with central alignment */}
                <div className="block xl:hidden">
                  {/* Image Card */}
                  <div className={`relative mb-0 transition-all duration-700 ease-out ${
                    !isVisible ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                  }`}
                  style={{ transitionDelay: isVisible ? `${index * 150 + 100}ms` : '0ms' }}>
                    <figure className="relative rounded-2xl shadow-xl overflow-hidden">
                      <Image
                        src={imageSrc}
                        alt={card.title}
                        width={400}
                        height={256}
                        className={`block h-48 sm:h-56 md:h-64 object-cover rounded-2xl w-full ${
                          index === 1 ? 'object-[center_60%]' : ''
                        }`}
                      />
                      
                      {/* Subtle overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-2xl" />
                    </figure>

                    {/* Shadow underneath for depth */}
                    <div className="absolute inset-0 -z-10 transform translate-y-2 translate-x-1 rounded-2xl bg-gray-300/30 blur-sm" />
                  </div>

                  {/* Content Card - Overlapping the image with central alignment and safe margins */}
                  <div className={`relative -mt-8 sm:-mt-12 md:-mt-16 mx-4 sm:mx-6 md:mx-8 transition-all duration-700 ease-out z-10 ${
                    !isVisible ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                  }`}
                  style={{ transitionDelay: isVisible ? `${index * 150 + 200}ms` : '0ms' }}>
                    <div className="bg-white rounded-xl shadow-xl p-4 sm:p-6 border border-gray-100">
                      {/* Icon indicator */}
                      <div className="flex items-center mb-3 sm:mb-4">
                        <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">{card.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{card.description}</p>

                      {/* Progress indicator */}
                      <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                        <div className="flex gap-1">
                          {[0, 1, 2].map((barIndex) => (
                            <div
                              key={barIndex}
                              className={`h-1 w-4 rounded-full ${
                                barIndex <= index ? 'bg-primary' : 'bg-gray-200'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Shadow underneath for depth */}
                    <div className="absolute inset-0 -z-10 transform translate-y-3 translate-x-2 rounded-xl bg-gray-300/20 blur-sm" />
                  </div>
                </div>

                {/* Desktop: Complex overlapping layout */}
                <div className="hidden xl:block">
                  {/* For second card (index 1), position content above image */}
                  {index === 1 ? (
                    <>
                      {/* Content Card - Above image for second card */}
                      <div className={`relative mb-0 ml-8 -mr-6 transition-all duration-700 ease-out z-10 ${
                        !isVisible ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                      }`}
                      style={{ transitionDelay: isVisible ? `${index * 150 + 150}ms` : '0ms' }}>
                        <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                          {/* Icon indicator */}
                          <div className="flex items-center mb-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                              <Icon className="h-5 w-5" />
                            </div>
                          </div>

                          <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{card.title}</h3>
                          <p className="text-gray-600 leading-relaxed text-sm">{card.description}</p>

                          {/* Bottom accent line */}
                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <div className="flex gap-1">
                              {[0, 1, 2].map((barIndex) => (
                                <div
                                  key={barIndex}
                                  className={`h-1 w-4 rounded-full ${
                                    barIndex <= index ? 'bg-primary' : 'bg-gray-200'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Shadow underneath for depth */}
                        <div className="absolute inset-0 -z-10 transform translate-y-3 translate-x-2 rounded-xl bg-gray-300/20 blur-sm" />
                      </div>

                      {/* Image Card - Below content for second card */}
                      <div className={`relative -mt-4 transition-all duration-700 ease-out ${
                        !isVisible ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                      }`}
                      style={{ transitionDelay: isVisible ? `${index * 150 + 250}ms` : '0ms' }}>
                        <figure className="relative inline-block rounded-2xl shadow-xl overflow-hidden">
                          <Image
                            src={imageSrc}
                            alt={card.title}
                            width={400}
                            height={300}
                            className="block h-auto rounded-2xl w-full"
                          />
                          
                          {/* Subtle overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-2xl" />
                        </figure>

                        {/* Shadow underneath for depth */}
                        <div className="absolute inset-0 -z-10 transform translate-y-2 translate-x-1 rounded-2xl bg-gray-300/30 blur-sm" />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Image Card - Elevated (for first and third cards) */}
                      <div className={`relative mb-0 transition-all duration-700 ease-out ${
                        !isVisible ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                      }`}
                      style={{ transitionDelay: isVisible ? `${index * 150 + 100}ms` : '0ms' }}>
                        <figure className="relative inline-block rounded-2xl shadow-xl overflow-hidden">
                          <Image
                            src={imageSrc}
                            alt={card.title}
                            width={400}
                            height={300}
                            className="block h-auto rounded-2xl w-full"
                          />
                          
                          {/* Subtle overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-2xl" />
                        </figure>

                        {/* Shadow underneath for depth */}
                        <div className="absolute inset-0 -z-10 transform translate-y-2 translate-x-1 rounded-2xl bg-gray-300/30 blur-sm" />
                      </div>

                      {/* Content Card - Barely overlapping the image (for first and third cards) */}
                      <div className={`relative -mt-4 ml-8 -mr-6 transition-all duration-700 ease-out z-10 ${
                        !isVisible ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                      }`}
                      style={{ transitionDelay: isVisible ? `${index * 150 + 200}ms` : '0ms' }}>
                        <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                          {/* Icon indicator */}
                          <div className="flex items-center mb-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                              <Icon className="h-5 w-5" />
                            </div>
                          </div>

                          <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{card.title}</h3>
                          <p className="text-gray-600 leading-relaxed text-sm">{card.description}</p>

                          {/* Bottom accent line */}
                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <div className="flex gap-1">
                              {[0, 1, 2].map((barIndex) => (
                                <div
                                  key={barIndex}
                                  className={`h-1 w-4 rounded-full ${
                                    barIndex <= index ? 'bg-primary' : 'bg-gray-200'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Shadow underneath for depth */}
                        <div className="absolute inset-0 -z-10 transform translate-y-3 translate-x-2 rounded-xl bg-gray-300/20 blur-sm" />
                      </div>
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom summary */}
        <div className={`mt-12 sm:mt-16 text-center transition-all duration-700 ease-out ${
          !isVisible ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}
        style={{ transitionDelay: isVisible ? '600ms' : '0ms' }}>
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">The result?</span> What should be simple business discovery becomes an expensive, time-consuming barrier that limits growth potential for both buyers and suppliers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


