"use client"

import { useRef, useEffect, useState } from "react"
import { Mail, Phone, MapPin, Clock, Globe } from "lucide-react"

export default function ContactInfo() {
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

  const contactItems = [
    {
      icon: MapPin,
      title: "Head Office",
      details:
        "Jos, Plateau State, Nigeria",
      delay: 0,
    },
    {
      icon: Mail,
      title: "Email",
      details: "Yusufmagaji3041@gmail.com",
      link: "mailto:Yusufmagaji3041@gmail.com",
      delay: 1,
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+234 8169597072",
      link: "tel:+234 8169597072",
      delay: 2,
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday – Friday, 8:00 AM – 6:00 PM",
      delay: 3,
    },
    {
      icon: Globe,
      title: "Service Areas",
      details: "Plateau, FCT, and Northern Nigeria",
      delay: 4,
    },
  ]

  return (
    <div ref={ref} className="space-y-4">
      {contactItems.map((item, index) => {
        const Icon = item.icon
        return (
          <div
            key={index}
            className={`bg-card border border-border rounded-2xl p-6 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 group cursor-pointer transform hover:scale-105 animate-stagger-${(index % 5) + 1} ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ animationDelay: `${item.delay * 0.1}s` }}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300"
                  >
                    {item.details}
                  </a>
                ) : (
                  <p className="text-muted-foreground text-sm">{item.details}</p>
                )}
              </div>
            </div>
          </div>
        )
      })}

      {/* Social Links */}
      <div className="bg-gradient-to-r from-accent/10 to-secondary/10 border border-accent/20 rounded-2xl p-6 mt-6 animate-stagger-5">
        <h3 className="font-semibold text-foreground mb-4">Connect With Us</h3>
        <div className="flex gap-3">
          <a
            href="#"
            className="w-10 h-10 bg-accent/20 hover:bg-accent text-accent hover:text-accent-foreground rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            title="WhatsApp"
          >
            <span className="text-lg">💬</span>
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-accent/20 hover:bg-accent text-accent hover:text-accent-foreground rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            title="LinkedIn"
          >
            <span className="text-lg">🔗</span>
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-accent/20 hover:bg-accent text-accent hover:text-accent-foreground rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            title="Facebook"
          >
            <span className="text-lg">f</span>
          </a>
        </div>
      </div>
    </div>
  )
}
