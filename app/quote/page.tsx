import Header from "@/components/header"
import QuoteHero from "@/components/quote/quote-hero"
import QuoteForm from "@/components/quote/quote-form"
import QuoteInfo from "@/components/quote/quote-info"
import Footer from "@/components/footer"

export const metadata = {
  title: "Get a Quote - Maigari Links Oil & Gas Ltd",
  description: "Request a detailed quote for our oil & gas services, engineering solutions, and industrial support across Nigeria.",
}

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <QuoteHero />
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <QuoteForm />
            <QuoteInfo />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
