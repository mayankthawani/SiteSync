import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    content:
      "BuildTracker made it so easy to stay updated on our home renovation. The daily photos and progress reports gave us complete peace of mind.",
    rating: 5,
  },
  {
    name: "Mike Chen",
    role: "General Contractor",
    content:
      "The assignment system is a game-changer. I can easily delegate tasks to site managers and track everything in one place.",
    rating: 5,
  },
  {
    name: "Lisa Rodriguez",
    role: "Site Manager",
    content:
      "Finally, a tool that makes communication between contractors, managers, and homeowners seamless. Highly recommended!",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Trusted by construction professionals
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            See what our users have to say about BuildTracker.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>

                  <blockquote className="text-card-foreground leading-relaxed mb-4">"{testimonial.content}"</blockquote>

                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                      <span className="text-sm font-semibold text-white">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
