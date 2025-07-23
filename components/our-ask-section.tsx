"use client"

import { TrendingUp, Target, Rocket, Euro, Users } from "lucide-react"

export default function OurAskSection() {
  const milestones = [
    {
      icon: Target,
      title: "Product Launch",
      description: "Product development and initial supplier onboarding",
      timeframe: "Months 1-5"
    },
    {
      icon: Users,
      title: "First Revenues",
      description: "Onboard initial buyers and generate first revenue",
      timeframe: "Months 6-7"
    },
    {
      icon: TrendingUp,
      title: "Scale & Growth",
      description: "Expand market reach and finalize post-revenue seed funding",
      timeframe: "Months 8-9"
    }
  ]

  const fundingBreakdown = [
    { category: "Salaries", percentage: 80.8, amount: "€780k", subheadline: "Gradually increasing headcount to 18" },
    { category: "Sales & Marketing Expenditure", percentage: 14, amount: "€135k", subheadline: "Travel, Network Events, Advertising" },
    { category: "Other OPEX & CAPEX", percentage: 5.2, amount: "€50k", subheadline: "COGS, employee tools, office space, administrative costs" }
  ]

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: 'hsl(225, 84%, 24%)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-white bg-white/10 px-4 py-2 rounded-full mb-6 inline-block tracking-wider uppercase backdrop-blur-sm border border-white/20">
            Our Ask
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-5xl mx-auto leading-tight">
            Seeking <span style={{ color: 'hsl(198, 89%, 82%)' }} className="relative">
              €965k
            </span> for 15% equity
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            This funding will give us a <strong className="text-white">9-month runway</strong> to launch the product and generate our first revenues ahead of our seed round.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Funding Breakdown */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                <Euro className="w-7 h-7" style={{ color: 'hsl(198, 89%, 82%)' }} />
                Funding Breakdown
              </h3>
              <div className="space-y-6">
                {fundingBreakdown.map((item, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="text-lg font-medium text-white">{item.category}</h4>
                      <span className="text-xl font-bold" style={{ color: 'hsl(198, 89%, 82%)' }}>{item.amount}</span>
                    </div>
                    <div className="text-white/70 text-sm mb-2">{item.subheadline}</div>
                    <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          backgroundColor: 'hsl(198, 89%, 82%)',
                          width: `${item.percentage}%`
                        }}
                      />
                    </div>
                    <div className="mt-2 text-right">
                      <span className="text-sm text-white/60">{item.percentage}% of funding</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Roadmap & Milestones */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                <Rocket className="w-7 h-7" style={{ color: 'hsl(198, 89%, 82%)' }} />
                9-Month Roadmap
              </h3>
              <div className="space-y-6">
                {milestones.map((milestone, index) => {
                  const Icon = milestone.icon
                  return (
                    <div key={index} className="relative">
                      {/* Connecting line */}
                      {index < milestones.length - 1 && (
                        <div className="absolute left-6 top-14 w-0.5 h-16 bg-gradient-to-b from-white/20 to-transparent" />
                      )}
                      
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-medium text-white">{milestone.title}</h4>
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/10 text-white/80 border border-white/20">
                              {milestone.timeframe}
                            </span>
                          </div>
                          <p className="text-white/70 leading-relaxed">{milestone.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 