"use client"

import { ShieldCheck, Zap, CreditCard, RefreshCw } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useState, useEffect } from "react"
import type { CarouselApi } from "@/components/ui/carousel"
import { InteractiveGridPattern } from "./magicui/interactive-grid-pattern"

export default function SolutionSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [canScrollPrev, setCanScrollPrev] = useState(false)

  useEffect(() => {
    if (!api) return

    const updateCanScroll = () => {
      setCanScrollPrev(api.canScrollPrev())
    }

    updateCanScroll()
    api.on("select", updateCanScroll)
    api.on("reInit", updateCanScroll)

    return () => {
      api?.off("select", updateCanScroll)
    }
  }, [api])
  const solutionFeatures = [
    {
      icon: ShieldCheck,
      title: "Trusted Digital Identities",
      description: "We issue verified, trusted identities to B2B buyers, eliminating the need for complex onboarding processes to build trust.",
      highlight: "Trust"
    },
    {
      icon: CreditCard,
      title: "Credit Risk Coverage", 
      description: "We assume the credit risk for all transactions between verified B2B buyers and suppliers who accept b4b as an Identity Provider.",
      highlight: "Credit line"
    },
    {
      icon: Zap,
      title: "Instant Everything",
      description: "By eliminating all trust and risk barriers, we enable instant onboarding, instant credit lines and instant shipping orders.",
      highlight: "Transaction"
    },
    {
      icon: RefreshCw,
      title: "Translation Engine",
      description: "A translation engine maps all data points between buyer procurement suites and supplier storefronts through a standardized data catalogue.",
      highlight: "Sync"
    }
  ]

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/annie-spratt-hCb3lIB8L8E-unsplash.jpg)'
        }}
      />
      
      {/* White Overlay */}
      <div className="absolute inset-0 bg-white/70" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/60 via-blue-50/40 to-indigo-50/60" />
      
      {/* Interactive Grid Pattern Background */}
      <InteractiveGridPattern
        width={60}
        height={60}
        squares={[40, 30]}
        className="absolute inset-0 h-full w-full opacity-25"
        squaresClassName="fill-transparent stroke-blue-400/40 hover:fill-blue-300/15"
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full mb-6 inline-block tracking-wider uppercase">
              Solution
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-4xl mx-auto leading-tight">
            Federated <span className="text-primary">Identity &</span>
            <br className="hidden sm:block" />
            <span className="text-primary">Integration Service</span>
            <br className="hidden md:block" />
            for B2B e-commerce
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            b4b makes B2B e-commerce as easy as social logins in B2C.
          </p>
        </div>

        {/* Main Solution Features Carousel */}
        <div className="max-w-7xl mx-auto px-4 pb-16">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            setApi={setApi}
            className="w-full px-12 py-12"
          >
            <CarouselContent className="-ml-2 md:-ml-4 py-4">
              {solutionFeatures.map((feature, index) => {
                const Icon = feature.icon
                
                // Define unique themes for each card
                const getCardTheme = (index: number) => {
                  switch (index) {
                    case 0: // First card - Clean White theme
                      return {
                        bg: 'bg-white/90 border-white/30',
                        hoverBg: 'hover:bg-white',
                        gradientBorder: 'bg-gradient-to-br from-primary/20 via-transparent to-blue-600/20',
                        iconBg: 'bg-gradient-to-br from-primary/10 to-blue-600/10 group-hover:from-primary/20 group-hover:to-blue-600/20',
                        iconColor: 'text-primary group-hover:text-blue-600',
                        badgeColor: 'text-primary bg-primary/10',
                        titleColor: 'text-foreground group-hover:text-primary',
                        descColor: 'text-muted-foreground'
                      }
                    case 1: // Second card - Medium Grey theme
                      return {
                        bg: 'bg-slate-100/90 border-slate-200/50',
                        hoverBg: 'hover:bg-slate-50',
                        gradientBorder: 'bg-gradient-to-br from-slate-400/20 via-transparent to-slate-600/20',
                        iconBg: 'bg-gradient-to-br from-slate-300/40 to-slate-400/40 group-hover:from-slate-400/50 group-hover:to-slate-500/50',
                        iconColor: 'text-slate-600 group-hover:text-slate-700',
                        badgeColor: 'text-slate-700 bg-slate-200/60',
                        titleColor: 'text-slate-800 group-hover:text-slate-900',
                        descColor: 'text-slate-600'
                      }
                    case 2: // Third card - Non Photo Blue theme
                      return {
                        bg: 'bg-[hsl(198,89%,82%)] border-[hsl(198,89%,82%)]/30',
                        hoverBg: 'hover:bg-[hsl(198,89%,85%)]',
                        gradientBorder: 'bg-gradient-to-br from-white/20 via-transparent to-blue-900/20',
                        iconBg: 'bg-gradient-to-br from-white/30 to-blue-900/10 group-hover:from-white/40 group-hover:to-blue-900/20',
                        iconColor: 'text-[hsl(225,84%,24%)] group-hover:text-[hsl(225,84%,20%)]',
                        badgeColor: 'text-[hsl(225,84%,24%)] bg-white/40',
                        titleColor: 'text-[hsl(225,84%,24%)] group-hover:text-[hsl(225,84%,20%)]',
                        descColor: 'text-[hsl(225,84%,24%)]/90'
                      }
                     case 3: // Fourth card - Dark Royal Blue theme
                       return {
                         bg: 'bg-[hsl(225,84%,24%)] border-[hsl(225,84%,24%)]/20',
                         hoverBg: 'hover:bg-[hsl(225,84%,20%)]',
                         gradientBorder: 'bg-gradient-to-br from-[hsl(198,89%,82%)]/20 via-transparent to-white/10',
                         iconBg: 'bg-gradient-to-br from-[hsl(198,89%,82%)]/10 to-white/10 group-hover:from-[hsl(198,89%,82%)]/20 group-hover:to-white/20',
                         iconColor: 'text-[hsl(198,89%,82%)] group-hover:text-white',
                         badgeColor: 'text-[hsl(198,89%,82%)] bg-[hsl(198,89%,82%)]/10',
                         titleColor: 'text-[hsl(198,89%,82%)] group-hover:text-white',
                         descColor: 'text-white/80'
                       }
                    default:
                      return getCardTheme(0) // fallback to first theme
                  }
                }
                
                const theme = getCardTheme(index)
                
                return (
                  <CarouselItem key={index} className="pl-2 md:pl-4 py-4 md:basis-1/2 lg:basis-2/5 xl:basis-2/5">
                    <div className={`group relative ${theme.bg} ${theme.hoverBg} backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full`}>
                      {/* Gradient border effect */}
                      <div className={`absolute inset-0 rounded-3xl ${theme.gradientBorder} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      
                      {/* Content */}
                      <div className="relative z-10">
                        {/* Icon with animated background */}
                        <div className="mb-6">
                          <div className={`w-16 h-16 ${theme.iconBg} rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                            <Icon className={`w-8 h-8 ${theme.iconColor} transition-colors duration-300`} />
                          </div>
                        </div>
                        
                        {/* Highlight badge */}
                        <div className="inline-block mb-4">
                          <span className={`text-xs font-bold ${theme.badgeColor} px-3 py-1 rounded-full tracking-wider uppercase`}>
                            {feature.highlight}
                          </span>
                        </div>
                        
                        {/* Title and description */}
                        <h3 className={`text-2xl font-bold ${theme.titleColor} mb-4 leading-tight transition-colors duration-300`}>
                          {feature.title}
                        </h3>
                        <p className={`${theme.descColor} leading-relaxed text-lg`}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            {canScrollPrev && <CarouselPrevious />}
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  )
} 