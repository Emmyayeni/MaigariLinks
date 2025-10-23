import Header from "@/components/header"
import Hero from "@/components/hero"
import ValueProposition from "@/components/value-proposition"
import Services from "@/components/services"
import SocialProof from "@/components/social-proof"
import Explainer from "@/components/explainer"
import Trust from "@/components/trust"
import FAQ from "@/components/faq"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import AgentChat from "@/components/agent-chat"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ValueProposition />
      <Services />
      <SocialProof />
      <Explainer />
      <Trust />
      <FAQ />
      <CTA />
      <Footer />
      <AgentChat />
    </main>
  )
}
