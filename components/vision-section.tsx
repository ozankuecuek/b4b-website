"use client"

import { InteractiveGridPattern } from "./magicui/interactive-grid-pattern"

export default function VisionSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: 'hsl(0 21% 84%)' }}>
      {/* Interactive Grid Pattern Background */}
      <InteractiveGridPattern
        width={60}
        height={60}
        squares={[40, 30]}
        className="absolute inset-0 h-full w-full opacity-30"
        squaresClassName="fill-transparent stroke-gray-400/40 hover:fill-gray-400/20"
      />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full mb-6 inline-block tracking-wider uppercase">
              Mission & Vision
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-4xl mx-auto leading-tight">
            Guiding <span className="text-primary">our journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our purpose and the future we are working towards.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission */}
          <div 
            className="group relative border border-border rounded-2xl p-10 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            style={{
              backgroundImage: 'url(/alina-grubnyak-ZiQkhI7417A-unsplash.jpg)',
              backgroundSize: '100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* White overlay */}
            <div className="absolute inset-0 bg-white/85 rounded-2xl"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight flex items-center gap-2">
                <span className="text-primary">Mission</span>
                <span className="text-muted-foreground text-base font-normal">· What we do</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                By harnessing <span className="font-semibold text-foreground">federated identities</span>, much like social logins in B2C, and interoperable integration standards, we aim to empower businesses to innovate, collaborate, and grow sustainably.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div 
            className="group relative border border-border rounded-2xl p-10 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            style={{
              backgroundImage: 'url(/green-prophet-WUHtXGyJa_Q-unsplash.jpg)',
              backgroundSize: '120%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* White overlay */}
            <div className="absolute inset-0 bg-white/85 rounded-2xl"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight flex items-center gap-2">
                <span className="text-primary">Vision</span>
                <span className="text-muted-foreground text-base font-normal">· Why we do it</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                We envision a global network of interconnected B2B organizations where companies of every size and sector freely discover one another, form trusted partnerships, and seamlessly exchange value in a digital world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 