// app/contact/page.tsx
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  User,
  MailIcon,
  PhoneIcon,
  PhoneCall,
  MessageCircle,
  Globe2,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { NavbarWithMegaMenu } from "@/components/NavbarWithMegaMenu";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <div className="fixed top-0 left-0 z-50 w-full">
        <NavbarWithMegaMenu />
      </div>

      {/* Hero Section */}
      <div className="container px-4 py-16 mx-auto mt-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-primary/10 text-primary border-primary/20">
          <PhoneCall className="w-5 h-5" />
          <span className="text-sm font-semibold">Contact Us</span>
        </div>
        <h1 className="mb-4 font-serif text-5xl tracking-tight md:text-7xl">
          Get In <span className="text-primary">Touch</span>
        </h1>
        <p className="max-w-3xl mx-auto mb-10 text-xl text-muted-foreground">
          Have questions or want to collaborate? Reach out to us and we'll get
          back to you as soon as possible.
        </p>
      </div>

      {/* Main Content */}
      <div className="container px-4 pb-20 mx-auto">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Form */}
          <div className="p-8 border rounded-3xl bg-card border-border">
            <h2 className="mb-6 text-2xl font-bold text-foreground">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    First Name
                  </label>
                  <div className="relative">
                    <User className="absolute w-4 h-4 left-3 top-3 text-muted-foreground" />
                    <Input placeholder="Siddharth" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Last Name
                  </label>
                  <Input placeholder="Abhimanyu" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Email Address
                </label>
                <div className="relative">
                  <MailIcon className="absolute w-4 h-4 left-3 top-3 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="ufillacademy@gmail.com"
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Phone Number
                </label>
                <div className="relative">
                  <PhoneIcon className="absolute w-4 h-4 left-3 top-3 text-muted-foreground" />
                  <Input
                    type="tel"
                    placeholder="+91 9876543210"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute w-4 h-4 left-3 top-3 text-muted-foreground" />
                  <Textarea
                    placeholder="Your message here..."
                    className="min-h-37.5 pl-10"
                  />
                </div>
              </div>

              <Button className="w-full" size="lg">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg">
                <Mail className="w-6 h-6 -mt-2 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Email</h4>
                <a
                  href="mailto:ufillacademy@gmail.com"
                  className="transition-colors text-primary hover:text-primary/80 hover:underline"
                >
                  ufillacademy@gmail.com
                </a>
                <p className="text-sm text-muted-foreground">
                  We try to reply ASAP
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg">
                <Phone className="w-6 h-6 -mt-2 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Phone</h4>
                <div className="space-y-1">
                  <a
                    href="tel:+918939976607"
                    className="block transition-colors text-primary hover:text-primary/80 hover:underline"
                  >
                    +91 8939976607
                  </a>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Mon-Fri, 9am-5pm IST
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg">
                <MapPin className="w-6 h-6 -mt-2 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">
                  Office Location
                </h4>
                <div className="space-y-1">
                  <a
                    href="https://maps.google.com/?q=Salem+Tamil+Nadu+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-colors text-primary hover:text-primary/80 hover:underline"
                  >
                    Salem, Tamil Nadu, India
                  </a>
                  <a
                    href="https://maps.google.com/?q=Salem+Tamil+Nadu+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm transition-colors text-muted-foreground hover:text-primary hover:underline"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg">
                <Globe2 className="w-6 h-6 -mt-2.5 ml-1 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">
                  Connect With Us
                </h4>
                <div className="flex gap-4 mt-2">
                  <a
                    href="https://wa.me/918939976607"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 transition-colors rounded-full hover:bg-green-500/30"
                    title="WhatsApp"
                  >
                    <IconBrandWhatsapp className="w-5 h-5 text-green-500" />
                  </a>
                  <a
                    href="https://www.facebook.com/ufillacademy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 transition-colors rounded-full hover:bg-blue-500/30"
                    title="Facebook"
                  >
                    <Facebook className="w-5 h-5 text-blue-500" />
                  </a>
                  <a
                    href="https://www.instagram.com/u_fill_academy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 transition-colors rounded-full hover:bg-pink-500/30"
                    title="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-pink-500" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/ufill-academy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 transition-colors rounded-full hover:bg-blue-700/30"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-blue-700" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="p-8 mt-12 border rounded-3xl bg-card border-border">
          <h3 className="mb-6 text-2xl font-bold text-foreground">
            Frequently Asked Questions
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="mb-2 font-semibold text-foreground">
                What are your response times?
              </h4>
              <p className="text-sm text-muted-foreground">
                We typically respond within 24 hours during business days.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-foreground">
                Do you offer custom solutions?
              </h4>
              <p className="text-sm text-muted-foreground">
                Yes, we provide custom educational technology solutions.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-foreground">
                Can I schedule a demo?
              </h4>
              <p className="text-sm text-muted-foreground">
                Absolutely! Contact us to schedule a personalized demo.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-foreground">
                What payment methods do you accept?
              </h4>
              <p className="text-sm text-muted-foreground">
                We accept all major credit cards, UPI, and bank transfers.
              </p>
            </div>
          </div>
          <div className="flex justify-end mt-8">
            <a href="/faq">
              <Button>
                <MessageCircle className="w-4 h-4 mr-2" />
                More FAQs
              </Button>
            </a>
          </div>
        </div>

        {/* Support CTA with Pattern */}
        <div className="relative mt-20 overflow-hidden rounded-3xl bg-linear-to-br from-primary via-primary/90 to-primary/80">
          {/* Wave Pattern */}
          <div className="absolute inset-0">
            <svg
              className="absolute inset-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="wave-pattern"
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M0,50 Q25,25 50,50 T100,50"
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="2"
                  />
                  <path
                    d="M0,70 Q25,95 50,70 T100,70"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="2"
                  />
                </pattern>
                <pattern
                  id="dots-pattern"
                  x="0"
                  y="0"
                  width="50"
                  height="50"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="25" cy="25" r="2" fill="rgba(255,255,255,0.2)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#wave-pattern)" />
              <rect
                width="100%"
                height="100%"
                fill="url(#dots-pattern)"
                opacity="0.3"
              />

              {/* Floating icons */}
              <circle cx="15%" cy="85%" r="30" fill="rgba(255,255,255,0.05)" />
              <circle cx="90%" cy="15%" r="40" fill="rgba(255,255,255,0.05)" />
            </svg>
          </div>

          <div className="relative px-8 py-12 text-center">
            <h3 className="mb-4 text-3xl font-bold text-white">
              Need Immediate Support?
            </h3>
            <p className="max-w-2xl mx-auto mb-8 text-white/90">
              Our support team is available to help you with any questions or
              technical issues.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+918939976607">
                <Button size="lg" variant="secondary">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Support
                </Button>
              </a>
              <a href="mailto:ufillacademy@gmail.com">
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-white border-white hover:bg-white/10"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Support
                </Button>
              </a>
              <a
                href="https://wa.me/918939976607"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-white border-white hover:bg-white/10"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  WhatsApp Chat
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
