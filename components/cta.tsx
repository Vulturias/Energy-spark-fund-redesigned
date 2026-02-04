import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const benefits = [
  "Start investing with just $10",
  "Earn 7-12% annual returns",
  "Track impact in real-time",
  "Withdraw anytime",
]

export function CTA() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 text-center md:p-12 lg:p-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            Ready to Make an Impact?
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/90">
            Join our community of conscious investors and start funding the clean energy revolution today.
          </p>

          <div className="mb-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-primary-foreground/90">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" className="gap-2">
              Create Free Account
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
