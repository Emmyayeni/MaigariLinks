"use client"

import { Zap, Truck, Hammer, Leaf, Package } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    icon: Zap,
    title: "Oil & Gas Exploration",
    description: "Drilling, refining, and lifting of petroleum products.",
    benefit: "Stable energy access and reduced downtime.",
  },
  {
    icon: Truck,
    title: "Petroleum Marketing",
    description: "Diesel, crude oil, LPG, and chemical distribution.",
    benefit: "Competitive pricing and reliable delivery.",
  },
  {
    icon: Hammer,
    title: "Engineering & Construction",
    description: "Roads, bridges, industrial buildings, and fabrication works.",
    benefit: "Durable, cost-effective infrastructure.",
  },
  {
    icon: Leaf,
    title: "Manufacturing & Agro Services",
    description: "Fertilizer, feed, and farm equipment production.",
    benefit: "Boosted productivity and food security.",
  },
  {
    icon: Package,
    title: "General Trading & Supply",
    description: "Procurement of construction and industrial materials.",
    benefit: "Streamlined sourcing and logistics.",
  },
]

export default function Services() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-700 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}
          >
            Our Services
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isVisible ? "0.1s" : "0s" }}
          >
            Comprehensive solutions across energy, engineering, and logistics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`bg-card border border-border rounded-xl p-8 hover:border-accent transition-all duration-700 group hover:shadow-xl hover:-translate-y-3 hover:bg-gradient-to-br hover:from-accent/5 hover:to-secondary/5 ${
                  isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 0.1}s` : "0s",
                }}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:animate-pulse-scale">
                  <Icon className="w-6 h-6 text-accent group-hover:animate-bounce-3d" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-accent font-medium group-hover:translate-x-1 transition-transform">
                    ✓ {service.benefit}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
