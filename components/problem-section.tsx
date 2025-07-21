"use client"

import { UserX, CreditCard, Settings, RotateCcw } from "lucide-react"
import { InteractiveGridPattern } from "./magicui/interactive-grid-pattern"

export default function ProblemSection() {
  const problemCards = [
    {
      icon: CreditCard,
      title: "Credit Risk Burden",
      description: "Buyers prefer deferred payment terms to optimize cash flow, requiring suppliers to absorb the credit risk of large, potentially unpaid invoices."
    },
    {
      icon: Settings,
      title: "Complex Onboarding",
      description: "To stay safe, suppliers impose a time-consuming and demanding onboarding process, discouraging potential partnerships before they even start."
    },
    {
      icon: RotateCcw,
      title: "Tedious Synchronization",
      description: "After onboarding, the buyer experience remains tedious: account and order data must constantly be synchronized with their procurement suite, either manually or with a costly one-off integration."
    }
  ]

  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* Interactive Grid Pattern Background */}
      <InteractiveGridPattern
        width={60}
        height={60}
        squares={[40, 30]}
        className="absolute inset-0 h-full w-full opacity-30"
        squaresClassName="fill-transparent stroke-gray-300/40 hover:fill-gray-200/20"
      />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full mb-6 inline-block tracking-wider uppercase">
              Problem
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-4xl mx-auto leading-tight">
            B2B e-commerce faces 
            <span className="text-primary"> significant friction</span> today
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          It is very cumbersome for buyers and suppliers alike to discover one another and build new trade relations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problemCards.map((card, index) => {
            const Icon = card.icon
            return (
              <div
                key={index}
                className={`group relative border border-border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  index === 0 
                    ? 'bg-cover bg-top bg-no-repeat' 
                    : index === 1 || index === 2
                    ? 'bg-cover bg-center bg-no-repeat' 
                    : 'bg-card'
                }`}
                style={
                  index === 0 ? {
                    backgroundImage: 'url(/jonathan-borba-qcoeAJRc-bg-unsplash.jpg)'
                  } : index === 1 ? {
                    backgroundImage: 'url(/bruce-mars-y5rArUefkgM-unsplash.jpg)'
                  } : index === 2 ? {
                    backgroundImage: 'url(/card_3_problem.png)'
                  } : {}
                }
              >
                {/* Overlay for all cards with background images */}
                {(index === 0 || index === 1 || index === 2) && (
                  <div className={`absolute inset-0 rounded-2xl ${
                    index === 0 ? 'bg-primary/85' : 'bg-white/80'
                  }`}></div>
                )}
                
                {/* Content wrapper with relative positioning */}
                <div className="relative z-10">
                  {/* Icon container with subtle background */}
                  <div className="mb-6">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                      index === 0 
                        ? 'bg-white/20 group-hover:bg-white/30'
                        : index === 1 || index === 2
                        ? 'bg-gray-900/20 group-hover:bg-gray-900/30' 
                        : 'bg-primary/10 group-hover:bg-primary/20'
                    }`}>
                      <Icon className={`w-7 h-7 ${
                        index === 0 
                          ? 'text-white' 
                          : index === 1 || index === 2 
                          ? 'text-gray-900' 
                          : 'text-primary'
                      }`} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className={`text-xl font-semibold mb-4 leading-tight ${
                    index === 0 
                      ? 'text-white' 
                      : index === 1 || index === 2 
                      ? 'text-gray-900' 
                      : 'text-foreground'
                  }`}>
                    {card.title}
                  </h3>
                  <p className={`leading-relaxed ${
                    index === 0 
                      ? 'text-white/90' 
                      : index === 1 || index === 2 
                      ? 'text-gray-800' 
                      : 'text-muted-foreground'
                  }`}>
                    {card.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom summary */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">The result?</span> What should be simple business discovery 
              becomes an expensive, time-consuming barrier that limits growth potential for both buyers and suppliers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 