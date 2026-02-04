import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowUpRight, MapPin } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Solar Farm Initiative",
    location: "Arizona, USA",
    type: "Solar",
    raised: 1250000,
    goal: 1500000,
    investors: 342,
    returns: "8.5%",
  },
  {
    id: 2,
    title: "Offshore Wind Project",
    location: "North Sea, UK",
    type: "Wind",
    raised: 3200000,
    goal: 4000000,
    investors: 891,
    returns: "9.2%",
  },
  {
    id: 3,
    title: "Tidal Energy Station",
    location: "Nova Scotia, Canada",
    type: "Hydro",
    raised: 890000,
    goal: 1200000,
    investors: 256,
    returns: "7.8%",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="mb-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Featured Projects
            </h2>
            <p className="max-w-xl text-muted-foreground">
              Explore our curated selection of verified renewable energy projects currently seeking funding.
            </p>
          </div>
          <Button variant="outline" className="rounded-full gap-2">
            View All Projects
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const progress = (project.raised / project.goal) * 100

            return (
              <Card key={project.id} className="overflow-hidden border-border bg-background">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <Badge variant="secondary" className="mb-3 rounded-full text-xs font-medium">
                        {project.type}
                      </Badge>
                      <h3 className="text-lg font-semibold text-card-foreground">{project.title}</h3>
                      <div className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        {project.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        ${(project.raised / 1000000).toFixed(1)}M raised
                      </span>
                      <span className="font-medium text-foreground">{progress.toFixed(0)}%</span>
                    </div>
                    <Progress value={progress} className="h-1.5" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-semibold text-foreground">{project.investors}</div>
                      <div className="text-sm text-muted-foreground">Investors</div>
                    </div>
                    <div>
                      <div className="text-2xl font-semibold text-accent">{project.returns}</div>
                      <div className="text-sm text-muted-foreground">Est. Return</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button className="w-full rounded-full">Invest Now</Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
