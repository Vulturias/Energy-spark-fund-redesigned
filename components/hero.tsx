import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-sm text-muted-foreground">Announcing $48M in Clean Energy Funding</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
          </div>
          
          <h1 className="mb-8 text-balance text-4xl font-normal tracking-tight text-foreground md:text-5xl lg:text-6xl lg:leading-tight">
            Clean Energy Investing<br />
            for Everyone
          </h1>
          
          <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-muted-foreground leading-relaxed">
            Quickly deploy your capital into verified renewable energy projects. Our platform powers sustainable investing for firms representing $3B+ in assets.
          </p>
          
          <Button size="lg" className="rounded-full px-8 py-6 text-base gap-2">
            Request Access
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
