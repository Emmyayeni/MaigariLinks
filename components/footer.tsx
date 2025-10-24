import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="py-16 transition-colors duration-300 bg-[#f5f5f5] dark:bg-[#0a0a0a] text-[#1c1c1c] dark:text-[#cccccc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info with Logo */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo-dark.png" alt="Maigari Links Logo" width={48} height={48} className="w-12 h-12" />
              <div>
                <span className="font-bold block">Maigari Links</span>
                <span className="text-xs font-semibold text-accent">Oil & Gas Ltd</span>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Powering Africa's energy future through reliable, sustainable solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="opacity-80 hover:text-accent transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="opacity-80 hover:text-accent transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#faq" className="opacity-80 hover:text-accent transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contact" className="opacity-80 hover:text-accent transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="opacity-80 hover:text-accent transition">
                  Oil & Gas
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:text-accent transition">
                  Engineering
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:text-accent transition">
                  Logistics
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:text-accent transition">
                  Trading
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <p className="opacity-80">Jos, Plateau State, Nigeria</p>
              </div>
              <div className="flex gap-2">
                <Mail size={16} className="flex-shrink-0 mt-0.5" />
                <a href="mailto:Yusufmagaji3041@gmail.com" className="opacity-80 hover:text-accent transition">
                  Yusufmagaji3041@gmail.com
                </a>
              </div>
              <div className="flex gap-2">
                <Phone size={16} className="flex-shrink-0 mt-0.5" />
                <p className="opacity-80">+234 8169597072</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#1c1c1c]/20 dark:border-[#cccccc]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-80">© 2025 Maigari Links Oil & Gas Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="" className="opacity-80 hover:text-accent transition">
              <Linkedin size={20} />
            </a>
            <a href="https://x.com/MaigariLinks" className="opacity-80 hover:text-accent transition">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
