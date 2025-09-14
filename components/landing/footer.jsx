import { Building2, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-sidebar border-t border-sidebar-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-sidebar-accent" />
              <span className="text-xl font-bold text-sidebar-foreground">BuildTracker</span>
            </div>
            <p className="text-sidebar-foreground/80 leading-relaxed max-w-md">
              Streamline your construction projects with real-time tracking, seamless communication, and transparent
              progress updates.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sidebar-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-sidebar-foreground/80 hover:text-sidebar-accent transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sidebar-foreground/80 hover:text-sidebar-accent transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#support" className="text-sidebar-foreground/80 hover:text-sidebar-accent transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sidebar-foreground mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-sidebar-foreground/80">
                <Mail className="h-4 w-4" />
                <span>hello@buildtracker.com</span>
              </li>
              <li className="flex items-center space-x-2 text-sidebar-foreground/80">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-sidebar-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sidebar-border mt-8 pt-8 text-center">
          <p className="text-sidebar-foreground/60">© 2024 BuildTracker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
