"use client"

import Image from "next/image"

export default function ClosingSection() {
  return (
    <section className="relative bg-white py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left: Newspaper Image */}
          <div className="w-full flex justify-center">
            <Image
              src="/newspaper_gpt.png"
              alt="Wall Street Journal article highlighting b4b's impact in 2036"
              width={450}
              height={600}
              className="rounded-2xl"
            />
          </div>

          {/* Right: Quote */}
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-relaxed">
            <span className="italic">
              "Much of that success can be traced back to a quiet revolution that began nearly a decade ago, led by a European platform that dared to rethink how B2B should work: b4b."
            </span>
          </blockquote>
        </div>
      </div>
    </section>
  )
} 