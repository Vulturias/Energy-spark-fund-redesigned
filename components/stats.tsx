import { DollarSign, Leaf, Users, Zap } from "lucide-react"

const stats = [
  {
    icon: DollarSign,
    value: "$48M+",
    label: "Total Funded",
    description: "Invested in clean energy",
  },
  {
    icon: Zap,
    value: "120+",
    label: "Projects",
    description: "Successfully completed",
  },
  {
    icon: Users,
    value: "15K+",
    label: "Investors",
    description: "Active community members",
  },
  {
    icon: Leaf,
    value: "82K",
    label: "Tons CO2",
    description: "Emissions prevented",
  },
]

export function Stats() {
  return (
    <section className="border-y border-border bg-secondary/30 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground md:text-3xl">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
