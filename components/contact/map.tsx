"use client"

import { useRef, useEffect, useState } from "react"

export default function Map() {
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
    <section ref={ref} className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div
          className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.5555555555555!2d8.8916667!3d9.9166667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104d6b5b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sUniversity%20of%20Jos!5e0!3m2!1sen!2sng!4v1234567890"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
