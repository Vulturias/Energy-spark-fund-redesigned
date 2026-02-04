import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent/50 to-background py-20 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--chart-2)/0.08),transparent_50%)]" />
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Powering a Sustainable Future</span>
          </div>
          
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Fund the Future of{" "}
            <span className="text-primary">Clean Energy</span>
          </h1>
          
          <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
            Join thousands of investors backing innovative renewable energy projects. 
            Make an impact while earning sustainable returns on your investment.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2">
              Start Investing
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Explore Projects
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-muted-foreground">
            No minimum investment required. Start with as little as $10.
          </p>
        </div>
      </div>
    </section>
  )
}
