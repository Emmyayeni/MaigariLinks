"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitted(true)
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            service: "",
            message: "",
          })
          setSubmitted(false)
        }, 3000)
      } else {
        setError(data.error || 'Failed to send message. Please try again.')
      }
    } catch (err) {
      console.error('Form submission error:', err)
      setError('Failed to send message. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      ref={ref}
      id="contact-form"
      className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-accent/50 transition-all duration-300">
        <h2 className="text-3xl font-bold mb-2 text-foreground">Send us a Message</h2>
        <p className="text-muted-foreground mb-8">We'll get back to you within 24 hours</p>

        {submitted ? (
          <div className="bg-accent/10 border border-accent rounded-lg p-6 text-center animate-bounce-in">
            <div className="text-accent text-4xl mb-3">✓</div>
            <h3 className="text-xl font-semibold text-accent mb-2">Message Sent!</h3>
            <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you shortly.</p>
          </div>
        ) : (
          <>
            {error && (
              <div className="bg-destructive/10 border border-destructive rounded-lg p-4 mb-6 text-center">
                <p className="text-destructive text-sm">{error}</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="animate-stagger-1">
                <label className="block text-sm font-medium mb-2 text-foreground">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div className="animate-stagger-2">
                <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="animate-stagger-3">
                <label className="block text-sm font-medium mb-2 text-foreground">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                  placeholder="+234 (0) XXX XXX XXXX"
                />
              </div>
              <div className="animate-stagger-4">
                <label className="block text-sm font-medium mb-2 text-foreground">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                  placeholder="Your company"
                />
              </div>
            </div>

            <div className="animate-stagger-5">
              <label className="block text-sm font-medium mb-2 text-foreground">Service Interested In</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
              >
                <option value="">Select a service</option>
                <option value="oil-gas">Oil & Gas Exploration</option>
                <option value="petroleum">Petroleum Marketing</option>
                <option value="engineering">Engineering & Construction</option>
                <option value="manufacturing">Manufacturing & Agro Services</option>
                <option value="trading">General Trading & Supply</option>
              </select>
            </div>

            <div className="animate-stagger-1" style={{ animationDelay: "0.6s" }}>
              <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 resize-none"
                placeholder="Tell us about your project or inquiry..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-accent to-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105 animate-stagger-2 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ animationDelay: "0.6s" }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          </>
        )}
      </div>
    </div>
  )
}
