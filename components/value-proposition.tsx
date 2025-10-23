"use client"

import { CheckCircle2 } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const values = [
  {
    title: "Comprehensive Energy Expertise",
    description: "From exploration to distribution, we handle every aspect of the energy supply chain.",
  },
  {
    title: "Engineering & Construction Excellence",
    description: "Infrastructure that drives development with proven track record and quality standards.",
  },
  {
    title: "Trusted Nationwide Logistics",
    description: "Fast, reliable petroleum supply chain management across Nigeria and beyond.",
  },
  {
    title: "Sustainability & Safety First",
    description: "We protect people and the environment with certified safety protocols.",
  },
  {
    title: "Certified & Compliant",
    description: "Registered under Nigeria's Companies and Allied Matters Act (CAMA, 2020).",
  },
]

export default function ValueProposition() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-700 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}
          >
            Why Choose Maigari Links?
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isVisible ? "0.1s" : "0s" }}
          >
            We don't just move energy we build futures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-accent transition-all duration-700 group hover:-translate-y-2 hover:bg-gradient-to-br hover:from-accent/5 hover:to-secondary/5 ${
                isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 0.08}s` : "0s",
              }}
            >
              <div className="flex gap-4">
                <CheckCircle2
                  className="w-6 h-6 text-accent flex-shrink-0 mt-1 animate-bounce-3d group-hover:animate-flip"
                  style={{ animationDelay: `${index * 0.2}s` }}
                />
                <div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
