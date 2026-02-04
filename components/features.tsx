import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Globe, Lock, PiggyBank, Recycle, Shield } from "lucide-react"

const features = [
  {
    icon: PiggyBank,
    title: "Low Minimum Investment",
    description: "Start investing with as little as $10. Build your portfolio at your own pace with fractional ownership.",
  },
  {
    icon: BarChart3,
    title: "Transparent Returns",
    description: "Track your investments in real-time with detailed analytics and performance metrics.",
  },
  {
    icon: Shield,
    title: "Verified Projects",
    description: "Every project undergoes rigorous due diligence and third-party verification before listing.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Fund projects worldwide and contribute to the global transition to renewable energy.",
  },
  {
    icon: Lock,
    title: "Secure Platform",
    description: "Bank-level security with encrypted transactions and regulated custody of your investments.",
  },
  {
    icon: Recycle,
    title: "Sustainable Growth",
    description: "Earn competitive returns while supporting projects that create lasting environmental impact.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Why Choose Energy Spark?
          </h2>
          <p className="text-lg text-muted-foreground">
            We make sustainable investing accessible, transparent, and impactful for everyone.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border bg-card transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
