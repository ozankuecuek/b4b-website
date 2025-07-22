"use client"

import {
  Rocket,
  Users,
  Store,
  Handshake,
  ShieldCheck,
  Globe,
  Boxes,
  Building2,
  Layers3,
  Target,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { useState } from "react"
import { ShineBorder } from "./magicui/shine-border"

export default function GoToMarketSection() {
  return (
    <section className="relative bg-white py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full mb-6 inline-block tracking-wider uppercase">
              Go-to-Market
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-5xl mx-auto leading-tight">
            Solving the <span className="text-primary">Chicken-and-Egg</span> Problem
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            How can we build a network from scretch with limited functional launch scope?
          </p>
        </div>

        <div className="space-y-32">
          <ChickenEggProblem />
          <ResolutionPillars />
          <LaunchStrategy />
        </div>
      </div>
    </section>
  )
}

/* -----------------------------------------------------------------------------
 *  Sub-sections
 * -------------------------------------------------------------------------- */

function ChickenEggProblem() {
  return (
    <div>
      <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto text-center">
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <Users className="h-8 w-8 text-primary mb-4" />
            <h4 className="font-semibold text-gray-900 mb-2">Buyer hesitation</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              No reason to join a network with few reliable suppliers.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <Store className="h-8 w-8 text-primary mb-4" />
            <h4 className="font-semibold text-gray-900 mb-2">Supplier hesitation</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Unwilling to join network without existing buyer community.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ResolutionPillars() {
  const pillars = [
    { 
      pillar: "Early Adopter Exclusivity", 
      action: "We offer exclusive perks, like a reduced MDR or custom integration services, to our early adopters.",
      icon: Handshake,
      bgColor: "bg-secondary/50",
      iconBg: "bg-primary",
      hoverShadow: "group-hover:shadow-primary/20",
      number: "01"
    },
    { 
      pillar: "Geographic Wedge", 
      action: "Germany-first supplier strategy for concentrated market penetration. Other relevant supplier markets are: France, UK, US. Neighbouring countries buyer strategy to add cross-border sales to launch value proposition.",
      icon: Globe,
      bgColor: "bg-secondary/50",
      iconBg: "bg-primary",
      hoverShadow: "group-hover:shadow-primary/20",
      number: "02"
    },
    { 
      pillar: "Vertical Specialization", 
      action: "Deep focus on one industry to maximize network relevance for suppliers and buyers. The vertical must be large enough and the supplier-buyer needs must be constituted in a way that a limited launch scope does not harm our value proposition significantly.",
      icon: Layers3,
      bgColor: "bg-secondary/50", 
      iconBg: "bg-primary",
      hoverShadow: "group-hover:shadow-primary/20",
      number: "03"
    },
  ]

  return (
    <div className="relative">
      <h3 className="text-3xl font-bold text-center mb-16">
        Three <span className="text-primary"> Strategic Pillars</span> to jump-start the network
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {pillars.map(({ pillar, action, icon: Icon, bgColor, iconBg, hoverShadow, number }, i) => (
          <div key={i} className="group relative z-10">
            {/* Pillar Number */}
            <div className="flex justify-center mb-6">
              <div className={`w-16 h-16 rounded-2xl ${iconBg} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                <span className="text-primary-foreground text-xl font-bold">{number}</span>
              </div>
            </div>
            
            {/* Main Card */}
            <div className={`relative overflow-hidden ${bgColor} rounded-3xl px-6 pt-6 pb-4 h-full shadow-lg ${hoverShadow} group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-border ${
              pillar === "Vertical Specialization" ? "border-2 border-primary/30" : ""
            }`}>
              {pillar === "Vertical Specialization" && (
                <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} duration={25} />
              )}
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center group-hover:rotate-6 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {pillar}
                  </h4>
                </div>
                
                <p className="text-muted-foreground leading-relaxed font-medium">
                  {action}
                </p>
                
              </div>
              
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function LaunchStrategy() {
  const verticalPoints = [
    "Industrial Supplies combines MRO & Construction consumables",
    "B2B e-commerce was sized around 113 Billion € in Germany in 2023 (ECC Köln B2B Marktmonitor - 2024)",
    "High repeat volume, with fragmented, yet dense supplier-buyer landscape", 
    "Suppliers are usually wholesalers with wide product selection or manufacturerers with deep product specialization",
  ]

  const buyerCriteria = [
    "Craft workshops, technician services, construction contractors, small manufacturers, installers, facility managers",
    "1% to 5% of turnover allocated to Industrial Supplies spend",
    "Transaction potential between lower and top tier B2B buyers ranges from 50 k to 2.5 m €",
    "Lean procurement team, no EDI or Enterprise ERP & Procurement suites",
    "Suggests a launch scope without translation engine and procurement suite integrations",
    "Limited scope = strategic wedge: Our product is a lean and specialized procurement suite for SMEs"
  ]

  const categories = [
    "Hand & power tools", "Machinery spares", "Fasteners", 
    "Personal Protective Equipment", "Electrical components", 
    "Maintenance chemicals", "Site safety infrastructure", "Office/facility consumables"
  ]

  return (
    <div className="bg-secondary/30 rounded-3xl p-8 lg:p-12">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-foreground mb-4">
          Deep Dive: <span className="text-primary">Vertical Specialization</span>
        </h3>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          We start with the industrial supplies vertical as the market is large enough and our value proposition is strong right off - even with a limited functional launch scope.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        
        {/* Selected Vertical */}
        <div className="bg-background rounded-2xl p-8 shadow-sm border border-border group hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <Layers3 className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-foreground">Selected Vertical</h4>
              <p className="text-primary font-semibold">Industrial Supplies</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Best overlap of buyer needs and supplier relevance in the German market.
          </p>
          <div className="space-y-3">
            {verticalPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Target Buyer */}
        <div className="bg-background rounded-2xl p-8 shadow-sm border border-border group hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <Building2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-foreground">Target Buyers</h4>
              <p className="text-primary font-semibold">SMEs in Industrial Supplies Vertical</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-4 leading-relaxed">
          20-200 employees · €5-50 m revenue
          </p>
          <div className="space-y-3">
            {buyerCriteria.map((criteria, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-muted-foreground leading-relaxed">{criteria}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Coverage */}
      <div className="bg-background rounded-2xl p-8 shadow-sm border border-border mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
            <Boxes className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-foreground">Day 1 Product Coverage</h4>
            <p className="text-primary font-semibold">What supplies do our Target Buyers need?</p>
          </div>
        </div>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Comprehensive coverage of essential industrial supplies to serve 80%+ of SME procurement needs.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {categories.map((category, i) => (
            <div
              key={i}
              className="bg-secondary/50 text-foreground rounded-lg px-4 py-3 text-center text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors border border-border/50">
              {category}
            </div>
          ))}
        </div>
      </div>

      {/* Target Suppliers */}
      <TargetSuppliersCard />
    </div>
  )
}

function TargetSuppliersCard() {
  const [expandedGroups, setExpandedGroups] = useState<Set<number>>(new Set())

  const supplierGroups = [
    {
      id: "G1",
      type: "Electronics & Automation Components",
      companies: ["ABB", "Automation24", "Balluff", "Bürklin Elektronik", "Conrad Electronic (Conrad Business)", "Digi-Key", "Distrelec", "EU Automation", "Farnell (element14)", "Festo", "HARTING", "ifm", "Lenze", "Mouser Electronics", "Pepperl + Fuchs", "Phoenix Contact", "Pilz", "Reichelt Elektronik", "Rittal", "RS Components", "Schmersal", "Schneider Electric", "Sick (SICK AG)", "Unielektro", "Weidmüller", "WIKA"]
    },
    {
      id: "G2",
      type: "Tools, Fasteners & MRO Broadliners", 
      companies: ["Berner", "Brammer", "Brütsch / Rüegger Tools", "BTI", "Contorion", "CRC Industries", "Dresselhaus", "E/D/E group", "Eriks", "Festool", "Förch", "Grainger", "Haberkorn", "Häfele", "Hahn+Kolb", "Henkel (Loctite)", "Hilti", "Hoffmann Group", "Keller & Kalmbach", "Klingspor", "Kontakt Chemie", "LAYER Großhandel", "Makita", "Metabo", "MORAVIA", "REYHER", "Rothenberger", "Rubix", "Sahlberg", "Schrauben-Jäger", "SFS Deutschland", "SVH24", "Toolineo", "Wegertseder", "Würth", "Zoro Tools Germany"]
    },
    {
      id: "G3",
      type: "PPE, Safety & Facility Supplies",
      companies: ["3M", "Arbeitsschutz-Express (ASX)", "Brady", "DENIOS", "Engelbert Strauss", "Hygi.de", "Kärcher", "Kroschke", "Lyreco", "Büromarkt Böttcher AG", "SETON", "uvex Safety", "Wempe Arbeitsschutz", "OTTO Office"]
    },
    {
      id: "G4", 
      type: "Mechanical & Drive Components",
      companies: ["Bosch Rexroth", "igus", "KSB", "Mädler GmbH", "MISUMI", "Nord Drivesystems", "Norelem", "NSK", "Schaeffler", "SEW-Eurodrive", "SKF", "Trelleborg"]
    },
    {
      id: "G5",
      type: "Workplace & Material Handling Equipment",
      companies: ["Fetra", "Jungheinrich", "Kaiser + Kraft", "Manutan", "RAJA (Rajapack)", "UDO Bär"]
    }
  ]

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedGroups)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedGroups(newExpanded)
  }

  return (
    <div className="bg-background rounded-2xl p-8 shadow-sm border border-border">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
          <Handshake className="h-6 w-6 text-primary-foreground" />
        </div>
        <div>
          <h4 className="text-xl font-bold text-foreground">Target B2B Suppliers</h4>
          <p className="text-primary font-semibold">Portfolio Relevance</p>
        </div>
      </div>
      <p className="text-muted-foreground mb-6 leading-relaxed">
        We target suppliers whose portfolios directly align with our target buyer needs.
      </p>
      <div className="space-y-4">
        {supplierGroups.map((group, i) => (
                      <div key={i} className="bg-secondary/30 rounded-xl border border-border/30 hover:bg-secondary/40 transition-colors">
              <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-xs text-primary font-bold bg-primary/20 px-2 py-1 rounded">
                      {group.id}
                    </div>
                    <h5 className="text-lg font-semibold text-foreground">{group.type}</h5>
                  </div>
                  <button
                    onClick={() => toggleExpanded(i)}
                    className="p-1 hover:bg-background rounded transition-colors"
                    aria-label={expandedGroups.has(i) ? 'Collapse companies' : 'Show companies'}
                  >
                    {expandedGroups.has(i) ? (
                      <ChevronUp className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    )}
                  </button>
                </div>
              </div>
            
            {expandedGroups.has(i) && (
              <div className="px-6 pb-6">
                <div className="bg-background rounded-lg p-4 border border-border/50">
                  <p className="text-xs font-medium text-muted-foreground mb-3">Example Companies:</p>
                  <div className="flex flex-wrap gap-2">
                    {group.companies.map((company, companyIndex) => (
                      <span
                        key={companyIndex}
                        className="text-xs bg-secondary/50 text-foreground px-2 py-1 rounded border border-border/30"
                      >
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
        <div className="flex items-start gap-3">
          <Target className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-foreground mb-1">Strategic Consistency</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Even at launch, this supplier-buyer alignment ensures immediate transaction relevance for buyers and suppliers.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

