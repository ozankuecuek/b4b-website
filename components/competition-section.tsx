"use client"

import { 
  Target, 
  ShoppingCart, 
  Network, 
  Shield, 
  Zap, 
  Users, 
  ChevronRight,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Globe,
  Search,
  Info
} from "lucide-react"
import { ShineBorder } from "./magicui/shine-border"

export default function CompetitionSection() {
  return (
    <section className="relative bg-white py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full mb-6 inline-block tracking-wider uppercase">
              Competition
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-4xl mx-auto leading-tight">
            BNPL is a feature,<br />
            <span className="text-primary">b4b is a platform!</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          B2B BNPL providers confirm demand but worsen the buyer experience by adding another account to manage.
          </p>
        </div>

        <div className="space-y-24">
          <BNPLThreatSection />
          <ComparisonTable />
        </div>
      </div>
    </section>
  );
}

function BNPLThreatSection() {
  const bnplStrengths = [
    {
      title: "Simplicity for Merchants",
      description: "Adding BNPL is often as simple as integrating a new payment method at checkout.",
      icon: Zap
    },
    {
      title: "Clear Value Proposition", 
      description: "Direct, measurable benefit: increase conversion rate and average order value.",
      icon: TrendingUp
    },
    {
      title: "Laser Focus",
      description: "Solving the single biggest point of friction: payment at checkout.",
      icon: Target
    }
  ]

  return (
    <div className="bg-primary/5 rounded-3xl p-8 lg:p-12">
      <div className="flex items-center gap-3 mb-6">
        <Info className="h-6 w-6 text-primary" />
        <h3 className="text-2xl font-bold text-foreground">
          Where BNPL Providers Excel
        </h3>
      </div>
      
      <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
        B2B BNPL providers like Mondu, Hokodo, and Billie have a simple and effective proposition. 
        <span className="font-medium text-primary"> If b4b was only a better way to offer financing at checkout, it would not be enough to stand out.</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bnplStrengths.map((strength, index) => {
          const Icon = strength.icon
          return (
            <div key={index} className="bg-card rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">{strength.title}</h4>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {strength.description}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function ComparisonTable() {
  const comparisonData = [
    {
      dimension: "Point of Engagement", 
      bnpl: "At the checkout page",
      b4b: "Throughout the whole journey",
      b4bAdvantage: true
    },
    {
      dimension: "Value to the Buyer",
      bnpl: "Great payment terms",
      b4b: "A universal 'passport' for instant supplier discovery and purchases on account + centralized administration fo all e-commerce activities",
      b4bAdvantage: true
    },
    {
      dimension: "Value to the Merchant",
      bnpl: "Instantly convert sales to new customers and improve cash flow",
      b4b: "Acquire new, pre-verified customers through automated onboaring and sell risk-free on own terms",
      b4bAdvantage: true
    },
    {
      dimension: "The 'Aha!' Moment",
      bnpl: "Great, I can pay for this in 60 days",
      b4b: "Wow, I can log into many new shops with one click, order on account instantly and manage everything through a single dashboard.",
      b4bAdvantage: true
    },
    {
      dimension: "Operating Model",
      bnpl: "Requires a banking license, increasing operating costs and leading to a relatively high MDR, typically 1.5%–3%.",
      b4b: "Operating as an insurance broker allows a lean model and a more attractive 1% MDR.",
      b4bAdvantage: true
    }
  ]

  return (
    <div>
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-4">
          <span className="text-gray-700">BNPL</span> vs. <span className="text-primary">b4b</span>
        </h3>
        
        <p className="text-lg lg:text-xl text-muted-foreground italic font-medium max-w-3xl mx-auto leading-relaxed">
          "We are not building yet another Payment Service Provider,<br />
          <span className="text-primary">
            we build a network company that has finance built-in.
          </span>"
        </p>
      </div>
      
      <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 overflow-hidden">
        <div className="space-y-6">
          {comparisonData.map((row, index) => (
            <div key={index} className={`relative overflow-hidden bg-white rounded-xl p-6 shadow-sm ${
              row.dimension === "Value to the Buyer" ? "border-2 border-primary/30" : ""
            }`}>
              {row.dimension === "Value to the Buyer" && (
                <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} duration={25} />
              )}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  <h4 className="font-semibold text-gray-900 mb-2">{row.dimension}</h4>
                </div>
                <div className="lg:col-span-1">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-600">BNPL Provider</span>
                    </div>
                    <p className="text-gray-700 text-sm">{row.bnpl}</p>
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-primary">b4b</span>
                    </div>
                    <p className="text-gray-700 text-sm">{row.b4b}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

 