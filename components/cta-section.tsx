"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button"
import { ChevronRightIcon, CheckIcon } from "lucide-react"

export default function CtaSection() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  return (
    <section className="relative pt-3 pb-14 lg:pt-5 lg:pb-16 bg-primary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Join the waitlist
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Be the first to get updates and early access when we launch.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-3">
            <Input
              type="email"
              placeholder="Your e-mail address"
              aria-label="Your e-mail address"
              required
              className={`w-full sm:w-1/2 px-4 py-3 border border-primary-foreground/20 focus-visible:border-primary-foreground focus-visible:ring-primary-foreground/70 ${subscribed ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-white/95 text-gray-900 placeholder-gray-600'}`}
              value={email}
              onChange={e => setEmail(e.target.value)}
              disabled={subscribed}
            />
            <AnimatedSubscribeButton
              className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap"
              style={{
                backgroundColor: 'hsl(198 89% 82%)',
                color: 'hsl(225 84% 24%)',
                border: 'none',
              }}
              subscribedStyle={{
                backgroundColor: '#DECCCC',
                color: 'hsl(225 84% 24%)',
                border: 'none',
              }}
              subscribeStatus={subscribed}
              onClick={async e => {
                if (e) e.preventDefault()
                if (subscribed || isSubmitting) return
                setSubmitError(null)
                const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
                if (!isValid) {
                  setSubmitError('Please enter a valid email.')
                  return
                }
                try {
                  setIsSubmitting(true)
                  const res = await fetch('/api/waitlist', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, source: 'cta' }),
                  })
                  if (!res.ok) {
                    throw new Error('Request failed')
                  }
                  setSubscribed(true)
                } catch (err) {
                  setSubmitError('Something went wrong. Please try again.')
                } finally {
                  setIsSubmitting(false)
                }
              }}
            >
              <span className="group inline-flex items-center">
                {isSubmitting ? 'Submitting…' : 'Join the waitlist'}
                <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="group inline-flex items-center">
                <CheckIcon className="mr-2 size-4" />
                Thanks!
              </span>
            </AnimatedSubscribeButton>
          </div>
          {submitError && (
            <p className="text-sm text-red-200 mt-1">{submitError}</p>
          )}
          <p className="text-sm text-primary-foreground/70">
            Launching in Germany in 2026 — stay up to date and get early access!
          </p>
        </div>
      </div>
    </section>
  )
}


