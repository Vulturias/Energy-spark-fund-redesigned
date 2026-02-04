import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Ready to invest in the future?
          </h2>
          <p className="mb-10 text-lg text-muted-foreground leading-relaxed">
            Join thousands of investors backing innovative clean energy projects. Start building your sustainable portfolio today with as little as $10.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="rounded-full px-8 py-6 text-base gap-2">
              Get Started
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
