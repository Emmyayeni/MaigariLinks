import Header from "@/components/header"
import ContactHero from "@/components/contact/contact-hero"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import Map from "@/components/contact/map"
import Footer from "@/components/footer"

export const metadata = {
  title: "Contact Us - Maigari Links Oil & Gas Ltd",
  description: "Get in touch with Maigari Links for oil & gas services, engineering solutions, and industrial support.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ContactHero />
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
      <Map />
      <Footer />
    </main>
  )
}
