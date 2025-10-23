"use client"

import { useRef, useEffect, useState } from "react"
import { Clock, CheckCircle, FileText, Phone, Mail, Calculator } from "lucide-react"

export default function QuoteInfo() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const quoteProcess = [
    {
      icon: FileText,
      title: "Submit Request",
      description: "Fill out our detailed quote form with your project requirements",
      delay: 0,
    },
    {
      icon: Calculator,
      title: "Analysis & Pricing",
      description: "Our experts analyze your needs and prepare competitive pricing",
      delay: 1,
    },
    {
      icon: CheckCircle,
      title: "Quote Delivery",
      description: "Receive your detailed quote within 24 hours via email",
      delay: 2,
    },
    {
      icon: Phone,
      title: "Consultation",
      description: "Optional follow-up call to discuss details and answer questions",
      delay: 3,
    },
  ]

  const whatsIncluded = [
    "Detailed cost breakdown",
    "Project timeline estimate",
    "Resource requirements",
    "Quality assurance standards",
    "Safety protocols",
    "Warranty information",
    "Payment terms",
    "Next steps outline",
  ]

  return (
    <div ref={ref} className="space-y-8">
      {/* Quote Process */}
      <div
        className={`bg-card border border-border rounded-2xl p-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h3 className="text-2xl font-bold mb-6 text-foreground">How It Works</h3>
        <div className="space-y-6">
          {quoteProcess.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className={`flex gap-4 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: isVisible ? `${step.delay * 0.1}s` : "0s" }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* What's Included */}
      <div
        className={`bg-card border border-border rounded-2xl p-8 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h3 className="text-2xl font-bold mb-6 text-foreground">What's Included in Your Quote</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {whatsIncluded.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
              }`}
              style={{ transitionDelay: isVisible ? `${0.5 + index * 0.05}s` : "0s" }}
            >
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Contact */}
      <div
        className={`bg-gradient-to-r from-accent/10 to-secondary/10 border border-accent/20 rounded-2xl p-8 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h3 className="text-xl font-bold mb-4 text-foreground">Need It Faster?</h3>
        <p className="text-muted-foreground mb-6">
          For urgent projects or complex requirements, speak directly with our team for expedited quotes.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="tel:+234"
            className="flex items-center gap-2 px-4 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 hover:scale-105 text-center justify-center"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <a
            href="mailto:Yusufmagaji3041@gmail.com"
            className="flex items-center gap-2 px-4 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all duration-300 hover:scale-105 text-center justify-center"
          >
            <Mail className="w-4 h-4" />
            Email Us
          </a>
        </div>
      </div>

      {/* Response Time */}
      <div
        className={`bg-card border border-border rounded-2xl p-6 text-center transition-all duration-1000 delay-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
        <h3 className="text-lg font-bold text-foreground mb-2">Guaranteed Response</h3>
        <p className="text-muted-foreground">
          We guarantee to send your detailed quote within <span className="text-accent font-semibold">24 hours</span> of submission.
        </p>
      </div>
    </div>
  )
}
