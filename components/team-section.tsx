"use client"

import Image from "next/image"
import { InteractiveGridPattern } from "./magicui/interactive-grid-pattern"

export default function TeamSection() {
  const founders = [
    {
      image: "/ozan.jpg",
      name: "Ozan Kücük",
      role: "CEO & Co-Founder",
      responsibilities: "Strategy & Vision, Product, Operations, Finance, HR",
      creds: "9+ years experience in Venture Development & B2B e-commerce"
    },
    {
      image: "/guido.jpeg",
      name: "Guido Juchert",
      role: "CSO & Co-Founder",
      responsibilities: "Sales, Marketing, Customer Success, Partner Management",
      creds: "15+ years experience Venture Development & Sales"
    },
    {
      image: "/hamit.png",
      name: "Hamit Saka",
      role: "CTO & Co-Founder",
      responsibilities: "System & Integration Architecture, Engineering, DevOps, QA",
      creds: "15+ years experience leading Software Engineering teams"
    }
  ]

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: 'hsl(210, 40%, 98%)' }}>
      {/* Interactive Grid Pattern Background */}
      <InteractiveGridPattern
        width={60}
        height={60}
        squares={[30, 40]}
        className="absolute inset-0 h-full w-full opacity-20"
        squaresClassName="fill-transparent stroke-gray-300/30 hover:fill-gray-300/10"
      />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full mb-6 inline-block tracking-wider uppercase">
              Our Team
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-4xl mx-auto leading-tight">
            Meet the <span className="text-primary">founders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A diverse team of experienced professionals united by a shared vision to transform B2B commerce.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <div 
              key={index}
              className="group relative bg-white border border-border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
            >
              {/* Profile Image */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-sm group-hover:blur-none transition-all duration-300"></div>
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300 bg-gray-100">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover object-center scale-110"
                    sizes="128px"
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-2xl font-bold text-foreground mb-2 leading-tight">
                {founder.name}
              </h3>

              {/* Role */}
              <div className="text-primary font-semibold text-lg mb-4">
                {founder.role}
              </div>

              {/* Responsibilities */}
              <div className="mb-4">
                <p className="text-sm text-foreground leading-relaxed">
                  {founder.responsibilities}
                </p>
              </div>

              {/* Credentials */}
              <div>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                  {founder.creds}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 