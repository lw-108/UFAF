// app/contact/page.tsx
import { Mail, Phone, MapPin, MessageSquare, Send, User, MailIcon, PhoneIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container px-4 py-16 mx-auto text-center">
        <h1 className="mb-6 text-5xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text">
          Get In Touch
        </h1>
        <p className="max-w-3xl mx-auto mb-10 text-xl text-muted-foreground">
          Have questions or want to collaborate? Reach out to us and we'll get back to you as soon as possible.
        </p>
      </div>

      {/* Main Content */}
      <div className="container px-4 pb-20 mx-auto">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Form */}
          <div className="p-8 border rounded-3xl bg-card border-border">
            <h2 className="mb-6 text-2xl font-bold text-foreground">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">First Name</label>
                  <div className="relative">
                    <User className="absolute w-4 h-4 left-3 top-3 text-muted-foreground" />
                    <Input placeholder="John" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email Address</label>
                <div className="relative">
                  <MailIcon className="absolute w-4 h-4 left-3 top-3 text-muted-foreground" />
                  <Input type="email" placeholder="john@example.com" className="pl-10" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Phone Number</label>
                <div className="relative">
                  <PhoneIcon className="absolute w-4 h-4 left-3 top-3 text-muted-foreground" />
                  <Input type="tel" placeholder="+1 (555) 123-4567" className="pl-10" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute w-4 h-4 left-3 top-3 text-muted-foreground" />
                  <Textarea placeholder="Your message here..." className="min-h-[150px] pl-10" />
                </div>
              </div>
              
              <Button className="w-full" size="lg">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="p-8 border rounded-3xl bg-card border-border">
              <h3 className="mb-6 text-2xl font-bold text-foreground">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">contact@ufillacademy.com</p>
                    <p className="text-sm text-muted-foreground">We reply within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri, 9am-5pm EST</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Office</h4>
                    <p className="text-muted-foreground">123 Education Street</p>
                    <p className="text-muted-foreground">Boston, MA 02115</p>
                    <p className="text-sm text-muted-foreground">United States</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="p-8 border rounded-3xl bg-card border-border">
              <h3 className="mb-6 text-2xl font-bold text-foreground">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">What are your response times?</h4>
                  <p className="text-sm text-muted-foreground">We typically respond within 24 hours during business days.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Do you offer custom solutions?</h4>
                  <p className="text-sm text-muted-foreground">Yes, we provide custom educational technology solutions.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Can I schedule a demo?</h4>
                  <p className="text-sm text-muted-foreground">Absolutely! Contact us to schedule a personalized demo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support CTA with Pattern */}
        <div className="relative mt-20 overflow-hidden rounded-3xl bg-linear-to-br from-primary via-primary/90 to-primary/80">
          {/* Wave Pattern */}
          <div className="absolute inset-0">
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="wave-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M0,50 Q25,25 50,50 T100,50" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                  <path d="M0,70 Q25,95 50,70 T100,70" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                </pattern>
                <pattern id="dots-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                  <circle cx="25" cy="25" r="2" fill="rgba(255,255,255,0.2)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#wave-pattern)" />
              <rect width="100%" height="100%" fill="url(#dots-pattern)" opacity="0.3" />
              
              {/* Floating icons */}
              <circle cx="15%" cy="85%" r="30" fill="rgba(255,255,255,0.05)" />
              <circle cx="90%" cy="15%" r="40" fill="rgba(255,255,255,0.05)" />
            </svg>
          </div>

          <div className="relative px-8 py-12 text-center">
            <h3 className="mb-4 text-3xl font-bold text-white">Need Immediate Support?</h3>
            <p className="max-w-2xl mx-auto mb-8 text-white/90">
              Our support team is available to help you with any questions or technical issues.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary">
                <Phone className="w-4 h-4 mr-2" />
                Call Support
              </Button>
              <Button size="lg" variant="ghost" className="text-white border-white hover:bg-white/10">
                <Mail className="w-4 h-4 mr-2" />
                Email Support
              </Button>
              <Button size="lg" variant="ghost" className="text-white border-white hover:bg-white/10">
                <MessageSquare className="w-4 h-4 mr-2" />
                Live Chat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}