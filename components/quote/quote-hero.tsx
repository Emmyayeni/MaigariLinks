"use client"

import { useRef, useEffect, useState } from "react"

export default function QuoteHero() {
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

  return (
    <section 
      ref={ref} 
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/oil-refinery-industrial-operations.jpg)",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl animate-morph"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl animate-morph"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <h1
          className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 text-white ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="bg-gradient-to-r from-white via-accent to-secondary bg-clip-text text-transparent">
            Get Your Quote
          </span>
        </h1>

        <p
          className={`text-xl text-white/90 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-200 leading-relaxed ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Ready to start your project? Get a detailed quote for our oil & gas services, engineering solutions, 
          and industrial support. We provide competitive pricing with transparent breakdown of all costs.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="#quote-form"
            className="px-8 py-3 bg-gradient-to-r from-accent to-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
          >
            Request Quote
          </a>
          <a
            href="/contact"
            className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            Discuss Project
          </a>
        </div>
      </div>
    </section>
  )
}
