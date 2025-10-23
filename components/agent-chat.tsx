"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X, Send, PhoneCall } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

interface Message {
  id: string
  text: string
  sender: "user" | "agent"
  timestamp: Date
}

export default function AgentChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm the Maigari Links assistant. How can I help you today?\n\nFor urgent support, click the WhatsApp button below to chat with our team directly!",
      sender: "agent",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  const whatsappNumber = "+2348169597072"
  
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello Maigari Links! I need support.")
    window.open(`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${message}`, '_blank')
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate agent response
    setTimeout(() => {
      const agentResponses = [
        "Thank you for your inquiry! Our team specializes in oil & gas services, petroleum marketing, engineering, construction, and logistics. What service are you interested in?\n\nNeed immediate help? Click the WhatsApp button below!",
        "We provide comprehensive energy solutions across Nigeria and Africa. Would you like to know more about our specific services or request a quote?\n\nFor instant support, connect with us on WhatsApp!",
        "Great question! We're certified by the Corporate Affairs Commission (CAC) and fully compliant with CAMA 2020 regulations. How can we assist you further?\n\nPrefer to chat on WhatsApp? Click the button below!",
        "Our team is available Monday-Friday, 8:00 AM - 6:00 PM. You can also reach us at Yusufmagaji3041@gmail.com or call our office in Kwali, Abuja.\n\nFor faster response, message us on WhatsApp at +234 816 959 7072!",
        "We'd love to partner with you! Please share more details about your project, and we'll provide a customized solution.\n\nConnect instantly via WhatsApp for real-time discussion!",
      ]

      const randomResponse = agentResponses[Math.floor(Math.random() * agentResponses.length)]

      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        sender: "agent",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, agentMessage])
      setIsLoading(false)
    }, 800)
  }

  return (
    <>
      {/* Chat Widget Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 ${
          isOpen ? "bg-accent text-accent-foreground" : "bg-accent hover:bg-accent/90 text-accent-foreground"
        }`}
        aria-label="Open chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-2rem)] rounded-2xl shadow-2xl overflow-hidden animate-scale-in transition-all duration-300 ${
            theme === "dark" ? "bg-card border border-border" : "bg-white border border-border"
          }`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-accent to-secondary p-4 text-white">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="font-bold text-lg">Maigari Links Assistant</h3>
                <p className="text-sm opacity-90">We typically reply within minutes</p>
              </div>
              <button
                onClick={openWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg"
                aria-label="Chat on WhatsApp"
                title="Chat on WhatsApp"
              >
                <PhoneCall size={20} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4 bg-background">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} animate-fade-in-up`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.sender === "user"
                      ? "bg-accent text-accent-foreground rounded-br-none"
                      : "bg-muted text-foreground rounded-bl-none"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted text-foreground px-4 py-2 rounded-lg rounded-bl-none">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-foreground rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-foreground rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-foreground rounded-full animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="border-t border-border p-4 bg-background">
            <div className="mb-3">
              <button
                type="button"
                onClick={openWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-md"
              >
                <PhoneCall size={18} />
                Chat on WhatsApp: {whatsappNumber}
              </button>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="sm"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                disabled={isLoading || !input.trim()}
              >
                <Send size={18} />
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
