"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What services does Maigari Links provide?",
    answer:
      "We specialize in oil & gas exploration, petroleum marketing, engineering, construction, manufacturing, agro services, and general trading & supply across Nigeria and Africa.",
  },
  {
    question: "Are you licensed to operate in Nigeria?",
    answer:
      "Yes. We are a fully registered private limited company under CAMA 2020, certified by the Corporate Affairs Commission (CAC).",
  },
  {
    question: "Do you handle government or private contracts?",
    answer:
      "Both. We work with government agencies, private firms, and industrial clients nationwide with proven track records.",
  },
  {
    question: "How can I request a quotation or partnership?",
    answer:
      'Simply click "Get a Quote" or fill out our contact form. Our team will respond within 24 hours with a detailed proposal.',
  },
  {
    question: "Where are your operations based?",
    answer:
      "Our head office is located in Kwali, F.C.T Abuja, with operations expanding across Nigeria and neighboring regions.",
  },
  {
    question: "What safety standards do you follow?",
    answer:
      "We maintain 100% compliance with national safety standards and operate under our Zero Incident Commitment policy.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Everything you need to know about Maigari Links
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-border rounded-lg overflow-hidden transition-smooth animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-muted/50 transition-smooth text-left hover:translate-x-1"
              >
                <span className="font-semibold text-foreground">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-accent transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-muted/30 border-t border-border animate-fade-in-down">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
