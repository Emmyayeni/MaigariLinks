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
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built on Trust & Integrity</h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            We operate with integrity, safety, and full compliance every step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustElements.map((element, index) => {
            const Icon = element.icon
            return (
              <div
                key={index}
                className="bg-primary-foreground/10 backdrop-blur rounded-xl p-6 border border-primary-foreground/20 hover:border-accent transition"
              >
                <Icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold mb-2">{element.title}</h3>
                <p className="text-sm text-primary-foreground/80">{element.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
