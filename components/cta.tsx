import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-destructive via-destructive to-destructive/90">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-destructive-foreground mb-6">
          Let's Power Tomorrow Starting Today
        </h2>
        <p className="text-lg text-destructive-foreground/90 mb-8 max-w-2xl mx-auto">
          Maigari Links Oil & Gas Ltd is committed to providing reliable, efficient, and sustainable energy solutions
          for a better Nigeria.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold gap-2" asChild>
            <a href="/contact">Start a Project <ArrowRight size={20} /></a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-destructive-foreground text-destructive-foreground hover:bg-destructive-foreground/10 bg-transparent"
            asChild
          >
            <a href="/contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
