import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    title: "Automated Execution",
    description: "Streamline your clean energy investments with automated portfolio allocation and rebalancing.",
    illustration: (
      <div className="flex items-center gap-3">
        <div className="flex flex-col gap-2">
          <div className="h-3 w-16 rounded bg-muted" />
          <div className="h-3 w-24 rounded bg-muted" />
          <div className="h-3 w-20 rounded bg-muted" />
        </div>
        <ArrowIcon />
        <div className="h-8 w-16 rounded bg-accent/30" />
      </div>
    ),
  },
  {
    title: "Risk Management",
    description: "Create custom risk policies, monitor portfolio exposure, and take action with real-time alerts.",
    illustration: (
      <div className="flex items-center gap-4 rounded-lg border border-border bg-card px-4 py-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
          <WarningIcon />
        </div>
        <div className="flex flex-col gap-1">
          <div className="h-2.5 w-20 rounded bg-muted" />
          <span className="text-sm font-medium text-foreground">$1,000,000+</span>
        </div>
      </div>
    ),
  },
  {
    title: "Custom Strategies",
    description: "Build custom investment ladders, automate reinvestment and rebalancing for optimal returns.",
    illustration: (
      <div className="relative flex items-end gap-1">
        <div className="flex h-24 w-14 flex-col items-center justify-end rounded-lg bg-accent/20 pb-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/40">
            <DollarIcon />
          </div>
        </div>
        <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs text-white">
          <TrendUpIcon />
        </div>
      </div>
    ),
  },
]

function ArrowIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-muted-foreground">
      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function WarningIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-muted-foreground">
      <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function DollarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-accent">
      <path d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function TrendUpIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
      <path d="M23 6L13.5 15.5L8.5 10.5L1 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 6H23V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function Features() {
  return (
    <section id="solutions" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border bg-card overflow-hidden">
              <CardContent className="p-0">
                <div className="flex h-48 items-center justify-center bg-muted/30 p-6">
                  {feature.illustration}
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-card-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
