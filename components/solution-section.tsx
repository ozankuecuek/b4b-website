"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Shield, CreditCard, Cog } from "lucide-react"

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
        threshold: 0.1, // Much lower threshold for better mobile experience
        rootMargin: '-20px' // Minimal margin to ensure early triggering
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const solutionCards = [
    {
      tag: "Trust",
      icon: Shield,
      title: "Instant Onboarding",
      description: "We issue trusted digital identities to B2B buyers which they can use to access all B2B online shops that accept b4b as an Identity Provider - with one click, much like social logins in B2C.",
    },
    {
      tag: "Transaction",
      icon: CreditCard,
      title: "Instant Orders",
      description: "We issue an instant credit line to B2B buyers and assume the credit risk for all transactions within the b4b federation so B2B buyers can place instant shipping orders with zero risk for B2B suppliers.",
    },
    {
      tag: "Transformation",
      icon: Cog,
      title: "Instant Synchronization",
      description: "b4b serves as the connective tissue by running standard integrations and a translation engine that maps all data points between buyer procurement systems and supplier storefronts, using a standardized data catalogue.",
    },
  ] as const

  return (
    <section data-section="solution" ref={sectionRef} className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 overflow-hidden" style={{ backgroundColor: 'hsl(var(--chart-3))' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block">
            <span className="text-xs sm:text-sm font-semibold text-primary bg-primary/10 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6 inline-block tracking-wider uppercase">
              OUR SOLUTION
            </span>
          </div>
          <h2 className="font-bold text-foreground mb-4 sm:mb-6 max-w-4xl mx-auto leading-tight" style={{ fontSize: 'clamp(1.875rem, 4vw + 1rem, 3.75rem)' }}>
            One account, <span className="text-primary">many shops</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2 sm:px-4 font-medium" style={{ fontSize: 'clamp(1rem, 2vw + 0.5rem, 1.25rem)' }}>
            b4b <em></em> removes all technical and commercial barriers between B2B buyers and B2B suppliers so they can freely discover one another, form trusted partnerships, and seamlessly exchange value in a digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10 md:gap-12 max-w-7xl mx-auto">
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
                    ? `translateY(30px) scale(0.95)`
                    : 'translateY(0) scale(1)',
                  transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
                }}
              >
                {/* Mobile and Tablet: Content card layout */}
                <div className="block xl:hidden">
                  {/* Content Card */}
                  <div className={`relative transition-all duration-700 ease-out z-10 ${
                    !isVisible ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                  }`}
                  style={{ transitionDelay: isVisible ? `${index * 150 + 100}ms` : '0ms' }}>
                    <div className="bg-white rounded-xl shadow-xl p-4 sm:p-6 border border-gray-100 min-h-72 sm:min-h-72 md:min-h-80 flex flex-col">
                      {/* Icon and tag indicator */}
                      <div className="flex items-center mb-3 sm:mb-4 flex-shrink-0">
                        <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg mr-3">
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-2.5 py-1 rounded-full text-xs sm:text-sm font-medium">
                          <span>{card.tag}</span>
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight flex-shrink-0">{card.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base flex-grow">{card.description}</p>

                      {/* Progress indicator */}
                      <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100 flex-shrink-0">
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

                {/* Desktop: Content card layout */}
                <div className="hidden xl:block">
                  {/* Content Card */}
                  <div className={`relative ml-8 -mr-6 transition-all duration-700 ease-out z-10 ${
                    !isVisible ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                  }`}
                  style={{ transitionDelay: isVisible ? `${index * 150 + 100}ms` : '0ms' }}>
                    <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100 h-80 flex flex-col">
                      {/* Icon and tag indicator */}
                      <div className="flex items-center mb-4 flex-shrink-0">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg mr-3">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-2.5 py-1 rounded-full text-xs font-medium">
                          <span>{card.tag}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight flex-shrink-0">{card.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm flex-grow">{card.description}</p>

                      {/* Bottom accent line */}
                      <div className="mt-4 pt-4 border-t border-gray-100 flex-shrink-0">
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
              </div>
            )
          })}
        </div>

        {/* European Business Wallet Validation */}
        <EuropeanBusinessWalletValidation isVisible={isVisible} />
      </div>
    </section>
  )
}

function EuropeanBusinessWalletValidation({ isVisible }: { isVisible: boolean }) {
  const [selectedTab, setSelectedTab] = useState<'suppliers' | 'buyers'>('suppliers');

  const supplierSteps = [
    { step: "1", title: "Reach out to us now", description: "We provide a detailed overview of our ecosystem and resolve all commercial barriers between you and B2B buyers by ensuring that insurance arrangements are in place to protect you and the network from the risks associated with trade credit. We have an exclusive arrangement with our insurance partner that sets you up instantly with low rates and the winning formula: You only pay for actual orders received through the b4b network." },
    { step: "2", title: "Connect your store", description: "We resolve all technical barriers between you and B2B buyers by connecting your store with our platform so we can exchange verified business & user identites, covered credit lines and order information. Integrate once and for all as we will ensure mapping all relevant data points to the procurement suites of our B2B buyers." },
    { step: "3", title: "Accept b4b as an Identity Provider", description: "On your login page, place a button that says 'Sign in with b4b' so you can instantly onboard B2B buyers that are part of the b4b network. When a B2B buyer signs in to your store with b4b for the first time, we provide you with all data you need to process instant shipping orders. We keep you updated on all relevant account information of our B2B buyers - credit limits, billing or shipping addresses, user roles and permissions, etc." }
  ];

  const buyerSteps = [
    { step: "1", title: "Create b4b account", description: "We expect to launch in Germany in 2026. During registration, we verify your business and personal information as well as your authority to represent your company. It takes less than 10 minutes. Once registered, you can add colleagues to your account and manage their roles & rights. " },
    { step: "2", title: "Start shopping", description: "Once equipped with a b4b account, you can seamlessly sign in to any B2B online shop that recognizes b4b as an Identity Provider. During your initial sign in with a shop, we securely share your relevant account details, such as billing and shipping addresses, users, roles, and permissions while we set up an exclusive credit line for you with that shop, so you can start purchasing on account right away." },
    { step: "3", title: "One central hub, many connections", description: "The b4b Dashboard gives you a clear overview of all orders you’ve placed across the entire b4b network. Any time you update your account details, we automatically notify all connected B2B online shops to keep your information consistent and up to date." }
  ];

  return (
    <div className={`relative mt-8 sm:mt-12 md:mt-16 transition-all duration-700 ease-out ${
      !isVisible ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
    }`}
    style={{ transitionDelay: isVisible ? '700ms' : '0ms' }}>
      {/* Container that aligns with solution cards */}
      <div className="max-w-7xl mx-auto">
        {/* Mobile and Tablet: Use standard padding to match solution cards */}
        <div className="relative block xl:hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 rounded-2xl sm:rounded-3xl" />
          <div className="relative bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden">
            <Image
              src="/green-prophet-WUHtXGyJa_Q-unsplash.webp"
              alt="Background"
              fill
              className="object-cover rounded-2xl sm:rounded-3xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              priority={false}
              quality={75}
            />
            {/* Primary color overlay for readability */}
            <div className="absolute inset-0 bg-primary/90 rounded-2xl sm:rounded-3xl" />
            <div className="relative">
              <div className="w-full">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl sm:rounded-2xl blur-xl" />
                  <div className="relative bg-white/5 border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
                    <div className="text-center mb-4 sm:mb-6">
                      <h4 className="font-bold text-white mb-3 sm:mb-4 leading-tight" style={{ fontSize: 'clamp(1.5rem, 4vw + 0.5rem, 2.25rem)' }}>How to join the <span className="text-accent">b4b network</span></h4>
                      
                      {/* Toggle */}
                      <div className="relative bg-white/10 rounded-full p-1 flex gap-1 mb-4 sm:mb-6 w-fit mx-auto">
                        <button
                          onClick={() => setSelectedTab('suppliers')}
                          className={`relative px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                            selectedTab === 'suppliers'
                              ? 'bg-white text-primary shadow-sm'
                              : 'text-white/80 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          For Suppliers
                        </button>
                        <button
                          onClick={() => setSelectedTab('buyers')}
                          className={`relative px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                            selectedTab === 'buyers'
                              ? 'bg-white text-primary shadow-sm'
                              : 'text-white/80 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          For Buyers
                        </button>
                      </div>
                    </div>
                    
                    {/* Dynamic Content */}
                    <div className="space-y-3 sm:space-y-4">
                      {(selectedTab === 'suppliers' ? supplierSteps : buyerSteps).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 sm:gap-3">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                            <span className="text-white text-xs sm:text-sm font-semibold">{item.step}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h5 className="text-white font-semibold mb-1 leading-tight" style={{ fontSize: 'clamp(1rem, 2.5vw + 0.25rem, 1.25rem)' }}>{item.title}</h5>
                            <p className="text-white/70 leading-relaxed" style={{ fontSize: 'clamp(0.875rem, 2vw + 0.125rem, 1.125rem)' }}>{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/20">
                      <p className="text-white/70 text-center italic" style={{ fontSize: 'clamp(0.75rem, 2vw + 0.125rem, 1rem)' }}>
                        {selectedTab === 'suppliers' 
                          ? 'Join as a supplier and reach verified B2B buyers instantly'
                          : 'Join as a buyer and access trusted suppliers with instant credit lines'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Use same margins as solution cards (ml-8 -mr-6) */}
        <div className="relative hidden xl:block ml-8 -mr-6">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 rounded-2xl sm:rounded-3xl" />
          <div className="relative bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden">
            <Image
              src="/green-prophet-WUHtXGyJa_Q-unsplash.webp"
              alt="Background"
              fill
              className="object-cover rounded-2xl sm:rounded-3xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              priority={false}
              quality={75}
            />
            {/* Primary color overlay for readability */}
            <div className="absolute inset-0 bg-primary/90 rounded-2xl sm:rounded-3xl" />
            <div className="relative">
              <div className="w-full">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl sm:rounded-2xl blur-xl" />
                  <div className="relative bg-white/5 border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
                    <div className="text-center mb-4 sm:mb-6">
                      <h4 className="font-bold text-white mb-3 sm:mb-4 leading-tight" style={{ fontSize: 'clamp(1.5rem, 4vw + 0.5rem, 2.25rem)' }}>How to join the <span className="text-accent">b4b network</span></h4>
                      
                      {/* Toggle */}
                      <div className="relative bg-white/10 rounded-full p-1 flex gap-1 mb-4 sm:mb-6 w-fit mx-auto">
                        <button
                          onClick={() => setSelectedTab('suppliers')}
                          className={`relative px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                            selectedTab === 'suppliers'
                              ? 'bg-white text-primary shadow-sm'
                              : 'text-white/80 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          For Suppliers
                        </button>
                        <button
                          onClick={() => setSelectedTab('buyers')}
                          className={`relative px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                            selectedTab === 'buyers'
                              ? 'bg-white text-primary shadow-sm'
                              : 'text-white/80 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          For Buyers
                        </button>
                      </div>
                    </div>
                    
                    {/* Dynamic Content */}
                    <div className="space-y-3 sm:space-y-4">
                      {(selectedTab === 'suppliers' ? supplierSteps : buyerSteps).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 sm:gap-3">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                            <span className="text-white text-xs sm:text-sm font-semibold">{item.step}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h5 className="text-white font-semibold mb-1 leading-tight" style={{ fontSize: 'clamp(1rem, 2.5vw + 0.25rem, 1.25rem)' }}>{item.title}</h5>
                            <p className="text-white/70 leading-relaxed" style={{ fontSize: 'clamp(0.875rem, 2vw + 0.125rem, 1.125rem)' }}>{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/20">
                      <p className="text-white/70 text-center italic" style={{ fontSize: 'clamp(0.75rem, 2vw + 0.125rem, 1rem)' }}>
                        {selectedTab === 'suppliers' 
                          ? 'Join as a supplier and reach verified B2B buyers instantly'
                          : 'Join as a buyer and access trusted suppliers with instant credit lines'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
