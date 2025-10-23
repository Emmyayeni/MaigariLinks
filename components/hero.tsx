"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const backgroundImages = [
    "/refinery-industrial.png",
    "/alex-waldbrand-oRIQHQCg3fw-unsplash.jpg",
    "/pilmo-kang-H72SCCTZPE8-unsplash.jpg",
    "/tasos-mansour-NRfNe4ys_bM-unsplash (1).jpg",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      )
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [backgroundImages.length])

  return (
    <section className="relative overflow-hidden py-32 md:py-48">
      {/* Background Image Carousel */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundAttachment: "fixed",
          }}
        />
      ))}
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/60"></div>
      
      {/* Carousel indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? "bg-white scale-110" 
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          {/* <div className="inline-block bg-gradient-to-r from-accent/30 to-secondary/30 text-accent px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm animate-bounce-in">
            🌍 Powering Africa's Energy Future
          </div> */}

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance animate-slide-and-fade"
            style={{ animationDelay: "0.1s" }}
          >
            Reliable Energy. Sustainable Growth. Industrial Excellence.
          </h1>

          <p
            className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto animate-slide-and-fade"
            style={{ animationDelay: "0.2s" }}
          >
            Delivering trusted oil & gas services, engineering solutions, and industrial support that power businesses
            and communities across Nigeria and Africa.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 pt-4 justify-center animate-slide-and-fade"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-secondary hover:opacity-90 text-white gap-2 transition-smooth hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-accent/50"
              asChild
            >
              <a href="/quote">Get a Free Quote <ArrowRight size={20} /></a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent transition-smooth hover:scale-110 active:scale-95"
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
