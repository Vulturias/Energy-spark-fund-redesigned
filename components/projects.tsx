import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { MapPin, Sun, Wind, Waves } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Solar Farm Initiative",
    location: "Arizona, USA",
    icon: Sun,
    type: "Solar",
    raised: 1250000,
    goal: 1500000,
    investors: 342,
    returns: "8.5%",
    status: "Funding",
  },
  {
    id: 2,
    title: "Offshore Wind Project",
    location: "North Sea, UK",
    icon: Wind,
    type: "Wind",
    raised: 3200000,
    goal: 4000000,
    investors: 891,
    returns: "9.2%",
    status: "Funding",
  },
  {
    id: 3,
    title: "Tidal Energy Station",
    location: "Nova Scotia, Canada",
    icon: Waves,
    type: "Hydro",
    raised: 890000,
    goal: 1200000,
    investors: 256,
    returns: "7.8%",
    status: "Funding",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our curated selection of verified renewable energy projects seeking funding.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const progress = (project.raised / project.goal) * 100

            return (
              <Card key={project.id} className="overflow-hidden border-border bg-card">
                <div className="h-40 bg-gradient-to-br from-primary/20 via-primary/10 to-accent flex items-center justify-center">
                  <project.icon className="h-16 w-16 text-primary/60" />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-card-foreground">{project.title}</h3>
                      <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        {project.location}
                      </div>
                    </div>
                    <Badge variant="secondary" className="shrink-0">
                      {project.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium text-foreground">{progress.toFixed(0)}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-semibold text-foreground">
                        ${(project.raised / 1000000).toFixed(1)}M
                      </div>
                      <div className="text-xs text-muted-foreground">Raised</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-foreground">{project.investors}</div>
                      <div className="text-xs text-muted-foreground">Investors</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-primary">{project.returns}</div>
                      <div className="text-xs text-muted-foreground">Est. Return</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Invest Now</Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
