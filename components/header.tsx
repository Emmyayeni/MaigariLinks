"use client"

import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    
    // Close mobile menu if open
    setIsOpen(false)
    
    // If we're not on the home page, navigate to home page with hash
    if (pathname !== '/') {
      router.push(`/#${sectionId}`)
    } else {
      // If we're on home page, just scroll to the section
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  useEffect(() => {
    // Handle scrolling to section after navigation from another page
    if (pathname === '/' && window.location.hash) {
      const sectionId = window.location.hash.substring(1)
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-theme">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Bigger and responsive */}
          <a href="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity duration-300">
            <Image
              src="/logo-dark.png"
              alt="Maigari Links Logo"
              width={64}
              height={64}
              className="transition-all duration-300 w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18"
              priority
              fetchPriority="high"
              loading="eager"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmw=="
            />
            <div className="block">
              <span className="font-bold text-base sm:text-lg md:text-xl text-foreground block leading-tight">
                Maigari Links
              </span>
              <span className="text-xs sm:text-sm text-accent font-semibold block leading-tight">
                Oil & Gas Ltd
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#services" 
              onClick={(e) => handleSectionClick(e, 'services')}
              className="relative text-foreground hover:text-accent transition-all duration-300 font-medium group cursor-pointer"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleSectionClick(e, 'about')}
              className="relative text-foreground hover:text-accent transition-all duration-300 font-medium group cursor-pointer"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#faq" 
              onClick={(e) => handleSectionClick(e, 'faq')}
              className="relative text-foreground hover:text-accent transition-all duration-300 font-medium group cursor-pointer"
            >
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* CTA Buttons & Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-accent/10 transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              {mounted ? theme === "light" ? <Moon size={20} /> : <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <Button 
              variant="outline" 
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 font-semibold"
              asChild
            >
              <a href="/contact">Contact Us</a>
            </Button>
            <Button className="bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25 font-semibold" asChild>
              <a href="/quote">Get Quote</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full transition-theme"
              aria-label="Toggle theme"
            >
              {mounted ? theme === "light" ? <Moon size={20} /> : <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-6 pt-4 space-y-4 transition-all duration-300 animate-fade-in border-t border-border/50 mt-4">
            <a 
              href="#services" 
              onClick={(e) => handleSectionClick(e, 'services')}
              className="block text-foreground hover:text-accent transition-all duration-300 py-2 px-3 rounded-lg hover:bg-accent/10 font-medium cursor-pointer"
            >
              Services
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleSectionClick(e, 'about')}
              className="block text-foreground hover:text-accent transition-all duration-300 py-2 px-3 rounded-lg hover:bg-accent/10 font-medium cursor-pointer"
            >
              About
            </a>
            <a 
              href="#faq" 
              onClick={(e) => handleSectionClick(e, 'faq')}
              className="block text-foreground hover:text-accent transition-all duration-300 py-2 px-3 rounded-lg hover:bg-accent/10 font-medium cursor-pointer"
            >
              FAQ
            </a>
            <div className="flex gap-3 pt-4">
              <Button 
                variant="outline" 
                className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-semibold"
                asChild
              >
                <a href="/contact">Contact</a>
              </Button>
              <Button className="flex-1 bg-gradient-to-r from-accent to-secondary text-white hover:from-accent/90 hover:to-secondary/90 transition-all duration-300 font-semibold" asChild>
                <a href="/quote">Quote</a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
