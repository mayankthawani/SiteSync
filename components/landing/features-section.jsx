import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "Daily Updates",
    description:
      "Get real-time progress updates on your construction project every day. Stay informed with photos, milestones, and detailed reports.",
  },
  {
    icon: Users,
    title: "Contractor Assignments",
    description:
      "Seamlessly assign projects to site managers and track team performance. Streamline communication between all stakeholders.",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description:
      "Visualize your project timeline with interactive charts and progress indicators. Never miss a deadline or milestone again.",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Everything you need to manage construction
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Powerful features designed to keep your construction projects on track and stakeholders informed.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-card-foreground">{feature.title}</CardTitle>
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
      </div>
    </section>
  )
}
