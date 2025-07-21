"use client"

import {
  Globe,
  Zap,
  ShieldCheck,
  CheckCircle,
  ArrowRightLeft,
  ShoppingCart,
  Users,
} from "lucide-react"
import { InteractiveGridPattern } from "./magicui/interactive-grid-pattern"

type Benefit = {
  title: string
  icon: any
  description: string
}

export default function BusinessModelSection() {
  const merchantBenefits: Benefit[] = [
    {
      title: "New customer acquisition",
      icon: Globe,
      description: "Access to a cross-border network of pre-verified buyers.",
    },
    {
      title: "Instant onboarding",
      icon: Zap,
      description: "Buyers arrive fully trusted and ready to purchase in seconds.",
    },
    {
      title: "Outsourced KYB onboarding",
      icon: CheckCircle,
      description: "b4b handles business and identity verification",
    },
    {
      title: "Zero trade-credit risk",
      icon: ShieldCheck,
      description: "Every invoice is insured against non-payment.",
    },
  ]

  const buyerBenefits: Benefit[] = [
    {
      title: "Access every federated shop",
      icon: Globe,
      description: "One login unlocks cross-border purchasing power.",
    },
    {
      title: "Instant credit lines",
      icon: Zap,
      description: "Order on account from day one — no paperwork, no delays.",
    },
    {
      title: "Centralised administration",
      icon: Users,
      description: "Many onlineshops, single dashboard.",
    },
    {
      title: "Unified order catalogue",
      icon: CheckCircle,
      description: "All orders in one place with easy integrationcapabilities.",
    },
  ]

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: 'hsl(225, 84%, 24%)' }}>
      {/* Interactive Grid Pattern Background */}
      <InteractiveGridPattern
        width={60}
        height={60}
        squares={[40, 30]}
        className="absolute inset-0 h-full w-full opacity-15"
        squaresClassName="fill-transparent stroke-white/20 hover:fill-white/10"
      />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Intro */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-sm font-semibold bg-white/10 px-4 py-2 rounded-full mb-6 inline-block tracking-wider uppercase" style={{ color: 'hsl(198, 89%, 82%)' }}>
              Business Model
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
            We charge a modest<br />
            <span style={{ color: 'hsl(198, 89%, 82%)' }}>1%&nbsp;Merchant&nbsp;Discount&nbsp;Rate</span><br />
            on all transactions
          </h2>
          <div className="mt-8 text-center max-w-3xl mx-auto">
            <ShieldCheck className="w-10 h-10 mx-auto mb-4" style={{ color: 'hsl(198, 89%, 82%)' }} />
            <p className="text-lg text-white/80 leading-relaxed">
              b4b operates as an insurance broker and directs <strong>half of the MDR</strong> into a trade-credit insurance pool, keeping operations lean by avoiding carrying credit risk ourselves.
            </p>
          </div>
        </div>

        {/* Value columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ValueCard
            heading="Suppliers contribute ↓"
            subheading="They pay the MDR & integrate with b4b"
            list={merchantBenefits}
            color="from-white/10 via-transparent to-blue-300/10"
          />
          <ValueCard
            heading="Buyers contribute ↓"
            subheading="They direct their purchasing volume"
            list={buyerBenefits}
            color="from-blue-300/10 via-transparent to-white/10"
          />
        </div>
      </div>
    </section>
  )
}

function ValueCard({
  heading,
  subheading,
  list,
  color,
}: {
  heading: string
  subheading: string
  list: Benefit[]
  color: string
}) {
  return (
    <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${color} pointer-events-none`}
      />
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-2 text-white">{heading}</h3>
        <p className="text-sm text-white/70 mb-6">{subheading}</p>

        <ul className="space-y-4">
          {list.map((item, idx) => {
            const Icon = item.icon
            return (
              <li key={idx} className="flex items-start gap-4">
                <div className="flex-none w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mt-1">
                  <Icon className="w-4 h-4" style={{ color: 'hsl(198, 89%, 82%)' }} />
                </div>
                <div>
                  <h4 className="font-semibold text-white leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-white/70 text-sm">
                    {item.description}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
} 