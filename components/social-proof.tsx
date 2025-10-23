"use client"

import { Users, Award, TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function SocialProof() {
  const { ref, isVisible } = useScrollAnimation()
  const [counts, setCounts] = useState({ projects: 0, compliance: 0 })

  useEffect(() => {
    if (!isVisible) return

    const projectsInterval = setInterval(() => {
      setCounts((prev) => ({
        ...prev,
        projects: prev.projects < 10 ? prev.projects + 1 : 10,
      }))
    }, 100)

    return () => clearInterval(projectsInterval)
  }, [isVisible])

  return (
    <section id="social-proof-section" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div
            className={`text-center transition-all duration-700 ${
              isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex justify-center mb-4">
              <TrendingUp className="w-8 h-8 text-accent animate-bounce-3d" />
            </div>
            <div className="text-4xl font-bold text-foreground mb-2">{counts.projects}+</div>
            <p className="text-muted-foreground">Major Supply Projects Completed</p>
          </div>
          <div
            className={`text-center transition-all duration-700 ${
              isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isVisible ? "0.15s" : "0s" }}
          >
            <div className="flex justify-center mb-4">
              <Award className="w-8 h-8 text-accent animate-bounce-3d" style={{ animationDelay: "0.5s" }} />
            </div>
            <div className="text-4xl font-bold text-foreground mb-2">
              100%
            </div>
            <p className="text-muted-foreground">Compliance with Safety Standards</p>
          </div>
          <div
            className={`text-center transition-all duration-700 ${
              isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isVisible ? "0.3s" : "0s" }}
          >
            <div className="flex justify-center mb-4">
              <Users className="w-8 h-8 text-accent animate-bounce-3d" style={{ animationDelay: "1s" }} />
            </div>
            <div className="text-4xl font-bold text-foreground mb-2">
              Growing
            </div>
            <p className="text-muted-foreground">Network Across Northern Nigeria</p>
          </div>
        </div>

        {/* Testimonial */}
        <div
          className={`bg-card border border-border rounded-xl p-8 md:p-12 max-w-3xl mx-auto transition-all duration-700 hover:shadow-xl hover:border-accent ${
            isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: isVisible ? "0.4s" : "0s" }}
        >
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="text-accent text-xl animate-bounce-3d hover:scale-125 transition-transform"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                ★
              </span>
            ))}
          </div>
          <p className="text-lg text-foreground mb-6 leading-relaxed">
            "Maigari Links delivered our diesel and mechanical works ahead of schedule with excellent professionalism.
            Their team demonstrated deep expertise and commitment to quality."
          </p>
          <div>
            <p className="font-semibold text-foreground">Engr. Yusuf Magaji</p>
            <p className="text-muted-foreground">Project Director</p>
          </div>
        </div>

        {/* Trusted By */}
        <div className="mt-16 text-center">
          <p
            className={`text-muted-foreground mb-8 transition-all duration-700 ${
              isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"
            }`}
          >
            Trusted by leading organizations:
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div
              className={`text-foreground font-semibold hover:text-accent transition-all duration-500 ${
                isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isVisible ? "0.1s" : "0s" }}
            >
              Government Agencies
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div
              className={`text-foreground font-semibold hover:text-accent transition-all duration-500 ${
                isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isVisible ? "0.2s" : "0s" }}
            >
              Industrial Partners
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div
              className={`text-foreground font-semibold hover:text-accent transition-all duration-500 ${
                isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isVisible ? "0.3s" : "0s" }}
            >
              Construction Firms
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
