"use client"

export default function OurAskSection() {
  return (
    <section className="relative bg-white py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full mb-6 inline-block tracking-wider uppercase">
            Our Ask
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-4xl mx-auto leading-tight">
            Seeking <span className="text-primary">€800k</span> for 15% equity
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            This funding will give us a 9&nbsp;month runway to launch the product and generate our first revenues ahead of our seed round.
          </p>
        </div>
      </div>
    </section>
  )
} 