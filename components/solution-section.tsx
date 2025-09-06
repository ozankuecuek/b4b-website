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
      image: "/3-removebg-preview.png",
      tag: "Trust",
      icon: Shield,
      title: "Instant Onboarding",
      description: "We issue trusted digital identities to B2B buyers which they can use to access all B2B online shops that accept b4b as an Identity Provider - with one click, much like social logins in B2C.",
    },
    {
      image: "/1-removebg-preview.png",
      tag: "Transaction",
      icon: CreditCard,
      title: "Instant Orders",
      description: "We issue an instant credit line to B2B buyers and assume the credit risk for all transactions within the b4b federation so B2B buyers can place instant shipping orders with zero risk for B2B suppliers.",
    },
    {
      image: "/2-removebg-preview.png",
      tag: "Transformation",
      icon: Cog,
      title: "Instant Synchronization",
      description: "b4b serves as the connective tissue by running standard integrations and a translation engine that maps all data points between buyer procurement systems and supplier storefronts, using a standardized data catalogue.",
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

        {/* Solution Cards Container */}
        <div className={`relative max-w-6xl mx-auto transition-all duration-700 ease-out ${
          !isVisible ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}
        style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-transparent to-gray-100/80 rounded-3xl" />
          <div className="relative bg-gray-50/60 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 lg:p-12">
            <div className="space-y-12 sm:space-y-16 md:space-y-20">
              {solutionCards.map((card, index) => (
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
                    transitionDelay: isVisible ? `${index * 150 + 500}ms` : '0ms'
                  }}
                >
                  {/* Alternating layout for visual interest */}
                  {index % 2 === 0 ? (
                    // Even cards: Image on left, content on right (overlapping)
                    <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-0">
                      {/* Image Card */}
                      <div className={`relative w-full lg:w-80 xl:w-96 transition-all duration-700 ease-out ${
                        !isVisible ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                      }`}
                      style={{ transitionDelay: isVisible ? `${index * 150 + 600}ms` : '0ms' }}>
                        <div className="relative w-full h-64 sm:h-72 lg:h-80">
                          <Image
                            src={card.image}
                            alt={`${card.title} illustration`}
                            fill
                            className="object-contain p-8"
                            sizes="(max-width: 1024px) 100vw, 384px"
                          />
                        </div>
                      </div>

                      {/* Content Card - Overlapping the image */}
                      <div className={`relative -mt-8 lg:-mt-0 lg:-ml-6 xl:-ml-8 mx-4 lg:mx-0 lg:flex-1 transition-all duration-700 ease-out z-10 ${
                        !isVisible ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                      }`}
                      style={{ transitionDelay: isVisible ? `${index * 150 + 700}ms` : '0ms' }}>
                        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100 hover:shadow-2xl hover:border-primary/20 transition-all duration-300">
                          {/* Tag and Title */}
                          <div className="mb-4 sm:mb-6">
                            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium mb-3">
                              <card.icon className="w-4 h-4" />
                              <span>{card.tag}</span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary leading-tight">{card.title}</h3>
                          </div>

                          {/* Description */}
                          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-6">{card.description}</p>

                          {/* Bottom accent */}
                          <div className="pt-4 border-t border-gray-100">
                            <div className="w-16 h-1 bg-primary rounded-full opacity-60 group-hover:opacity-100 group-hover:w-24 transition-all duration-300" />
                          </div>
                        </div>

                        {/* Shadow underneath for depth */}
                        <div className="absolute inset-0 -z-10 transform translate-y-4 translate-x-3 rounded-2xl bg-gray-300/20 blur-sm" />
                      </div>
                    </div>
                  ) : (
                    // Odd cards: Content on left, image on right (overlapping)
                    <div className="relative flex flex-col lg:flex-row-reverse items-center lg:items-start gap-0">
                      {/* Image Card */}
                      <div className={`relative w-full lg:w-80 xl:w-96 transition-all duration-700 ease-out ${
                        !isVisible ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                      }`}
                      style={{ transitionDelay: isVisible ? `${index * 150 + 600}ms` : '0ms' }}>
                        <div className="relative w-full h-64 sm:h-72 lg:h-80">
                          <Image
                            src={card.image}
                            alt={`${card.title} illustration`}
                            fill
                            className="object-contain p-8"
                            sizes="(max-width: 1024px) 100vw, 384px"
                          />
                        </div>
                      </div>

                      {/* Content Card - Overlapping the image */}
                      <div className={`relative -mt-8 lg:-mt-0 lg:-mr-6 xl:-mr-8 mx-4 lg:mx-0 lg:flex-1 transition-all duration-700 ease-out z-10 ${
                        !isVisible ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                      }`}
                      style={{ transitionDelay: isVisible ? `${index * 150 + 700}ms` : '0ms' }}>
                        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100 hover:shadow-2xl hover:border-primary/20 transition-all duration-300">
                          {/* Tag and Title */}
                          <div className="mb-4 sm:mb-6">
                            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium mb-3">
                              <card.icon className="w-4 h-4" />
                              <span>{card.tag}</span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary leading-tight">{card.title}</h3>
                          </div>

                          {/* Description */}
                          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-6">{card.description}</p>

                          {/* Bottom accent */}
                          <div className="pt-4 border-t border-gray-100">
                            <div className="w-16 h-1 bg-primary rounded-full opacity-60 group-hover:opacity-100 group-hover:w-24 transition-all duration-300" />
                          </div>
                        </div>

                        {/* Shadow underneath for depth */}
                        <div className="absolute inset-0 -z-10 transform translate-y-4 translate-x-3 rounded-2xl bg-gray-300/20 blur-sm" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
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
    { step: "1", title: "Reach out to us", description: "We provide a detailed overview of our ecosystem and resolve all commercial barriers between you and B2B buyers by ensuring that insurance arrangements are in place to protect you and the network from the risks associated with trade credit. We have an exclusive arrangement with our insurance partner that sets you up instantly with low rates and the winning formula: You only pay for actual orders received through the b4b network." },
    { step: "2", title: "Connect your store", description: "We resolve all technical barriers between you and B2B buyers by connecting your store with our platform so we can exchange verified business & user identites, covered credit lines and order information. Integrate once and for all as we will ensure mapping all relevant data points to the procurement suites of our B2B buyers." },
    { step: "3", title: "Accept b4b as an Identity Provider", description: "On your login page, place a button that says 'Sign in with b4b' so you can instantly onboard B2B buyers that are part of the b4b network. When a B2B buyer signs in to your store with b4b for the first time, we provide you with all data you need to process instant shipping orders. We keep you updated on all relevant account information of our B2B buyers - credit limits, billing or shipping addresses, user roles and permissions, etc." }
  ];

  const buyerSteps = [
    { step: "1", title: "Create Account", description: "Register with your business credentials" },
    { step: "2", title: "Get Verified", description: "Complete identity verification & credit assessment" },
    { step: "3", title: "Start Shopping", description: "Access all b4b suppliers with instant checkout" }
  ];

  return (
    <div className={`relative mt-12 sm:mt-16 transition-all duration-700 ease-out max-w-6xl mx-auto ${
      !isVisible ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
    }`}
    style={{ transitionDelay: isVisible ? '700ms' : '0ms' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 rounded-3xl" />
      <div className="relative bg-background/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 lg:p-12 overflow-hidden">
        <Image
          src="/green-prophet-WUHtXGyJa_Q-unsplash.webp"
          alt="Background"
          fill
          className="object-cover rounded-3xl"
          sizes="100vw"
          priority={false}
          quality={75}
        />
        {/* Primary color overlay for readability */}
        <div className="absolute inset-0 bg-primary/90 rounded-3xl" />
        <div className="relative">
          <div className="w-full">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl" />
              <div className="relative bg-white/5 border border-white/20 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">How to join the <span className="text-accent">b4b network</span></h4>
                  
                  {/* Toggle */}
                  <div className="relative bg-white/10 rounded-full p-1 flex gap-1 mb-6 w-fit mx-auto">
                    <button
                      onClick={() => setSelectedTab('suppliers')}
                      className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                        selectedTab === 'suppliers'
                          ? 'bg-white text-primary shadow-sm'
                          : 'text-white/80 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      For Suppliers
                    </button>
                    <button
                      onClick={() => setSelectedTab('buyers')}
                      className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
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
                <div className="space-y-4">
                  {(selectedTab === 'suppliers' ? supplierSteps : buyerSteps).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-semibold">{item.step}</span>
                      </div>
                      <div>
                        <h5 className="text-white font-semibold text-lg sm:text-xl mb-1">{item.title}</h5>
                        <p className="text-white/70 text-base sm:text-lg leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm sm:text-base text-white/70 text-center italic">
                    {selectedTab === 'suppliers' 
                      ? 'Join as a supplier and reach verified B2B buyers instantly'
                      : 'Join as a buyer and access trusted suppliers with instant credit'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
