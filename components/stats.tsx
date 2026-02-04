const stats = [
  {
    value: "$48M+",
    label: "Total Funded",
  },
  {
    value: "120+",
    label: "Active Projects",
  },
  {
    value: "15,000+",
    label: "Investors",
  },
  {
    value: "82K tons",
    label: "CO2 Prevented",
  },
]

export function Stats() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
