import { Shield, CheckCircle2, Lock, Leaf } from "lucide-react"

const trustElements = [
  {
    icon: Shield,
    title: "Certified & Compliant",
    description: "Registered under CAMA 2020 by Corporate Affairs Commission",
  },
  {
    icon: CheckCircle2,
    title: "Safety First",
    description: "Zero Incident Commitment with comprehensive safety protocols",
  },
  {
    icon: Lock,
    title: "Full Transparency",
    description: "Every transaction tracked and verifiable for complete accountability",
  },
  {
    icon: Leaf,
    title: "Sustainable Operations",
    description: "Eco-friendly energy solutions protecting our environment",
  },
]

export default function Trust() {
  return (
    <section className="py-20 md:py-32 bg-card text-foreground border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built on Trust & Integrity</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We operate with integrity, safety, and full compliance every step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustElements.map((element, index) => {
            const Icon = element.icon
            return (
              <div
                key={index}
                className="bg-background/80 backdrop-blur rounded-xl p-6 border border-border hover:border-accent/60 transition"
              >
                <Icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold mb-2">{element.title}</h3>
                <p className="text-sm text-muted-foreground">{element.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
