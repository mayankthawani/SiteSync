
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-20 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
            Track Your Construction Progress{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              In Real-Time
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty max-w-2xl mx-auto">
            Streamline your construction projects with daily updates, seamless contractor-to-site manager assignments,
            and transparent progress tracking for homeowners.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Sign In
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/5 bg-transparent"
            >
              <Play className="mr-2 h-4 w-4" />
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
