import React from "react";
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaTwitter, 
  FaYoutube, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaBook, 
  FaUserGraduate,
  FaCalendarAlt,
  FaCertificate,
  FaUsers,
  FaHeart
} from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

interface Footer7Props {
  sections?: Array<{
    title: string;
    icon?: React.ReactElement;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
  contactInfo?: {
    address: string;
    phone: string;
    email: string;
    hours: string;
  };
}

const defaultSections = [
  {
    title: "Programs",
    icon: <FaBook className="w-4 h-4" />,
    links: [
      { name: "Summer Camps", href: "/programs/summer-camps" },
      { name: "Weekend Classes", href: "/programs/weekend-classes" },
      { name: "After-School Programs", href: "/programs/after-school" },
      { name: "Holiday Workshops", href: "/programs/holiday-workshops" },
      { name: "Skill Development", href: "/programs/skill-development" },
      { name: "Exam Preparation", href: "/programs/exam-prep" }
    ]
  },
  {
    title: "For Students",
    icon: <FaUserGraduate className="w-4 h-4" />,
    links: [
      { name: "Student Portal", href: "/student-portal" },
      { name: "Course Materials", href: "/materials" },
      { name: "Progress Reports", href: "/reports" },
      { name: "Achievements", href: "/achievements" },
      { name: "Parent Login", href: "/parent-login" },
      { name: "Digital Library", href: "/library" }
    ]
  },
  {
    title: "Quick Links",
    icon: <FaCalendarAlt className="w-4 h-4" />,
    links: [
      { name: "Enroll Now", href: "/enroll" },
      { name: "Schedule & Timings", href: "/schedule" },
      { name: "Fee Structure", href: "/fees" },
      { name: "Scholarships", href: "/scholarships" },
      { name: "Upcoming Events", href: "/events" },
      { name: "Photo Gallery", href: "/gallery" }
    ]
  }
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "https://instagram.com/ufillacademy", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "https://facebook.com/ufillacademy", label: "Facebook" },
  { icon: <FaTwitter className="size-5" />, href: "https://twitter.com/ufillacademy", label: "Twitter" },
  { icon: <FaLinkedin className="size-5" />, href: "https://linkedin.com/company/ufillacademy", label: "LinkedIn" },
  { icon: <FaYoutube className="size-5" />, href: "https://youtube.com/c/ufillacademy", label: "YouTube" }
];

const defaultLegalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Refund Policy", href: "/refund" },
  { name: "Safety Guidelines", href: "/safety" }
];

const defaultContactInfo = {
  address: "123 Learning Street, Education District, Chennai, Tamil Nadu 600001",
  phone: "+91 44 9876 5432",
  email: "admissions@ufillacademy.in",
  hours: "Mon - Sat: 8:00 AM - 7:00 PM"
};

const Footer7 = ({
  sections = defaultSections,
  description = "U FILL ACADEMY provides exceptional summer classes, weekend programs, and after-school learning experiences for children and students. We focus on holistic development through innovative teaching methods.",
  socialLinks = defaultSocialLinks,
  copyright = `© ${new Date().getFullYear()} U Fill Academy. All rights reserved.`,
  legalLinks = defaultLegalLinks,
  contactInfo = defaultContactInfo
}: Footer7Props) => {
  return (
    <footer className="relative py-16 overflow-hidden border-t bg-background">
      <div className="container px-4 mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid gap-10 lg:grid-cols-12">
          
          {/* Brand & Contact Section */}
          <div className="lg:col-span-4">
            <div className="space-y-6">
              
              {/* Logo & Brand */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-20 h-20 bg-transparent">
                  <Image src="/u-robo.png" alt="U Fill Academy Logo" width={500} height={300} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">
                    U FILL ACADEMY
                  </h2>
                  <Badge variant="outline" className="mt-1 text-xs">
                    Excellence in Children Education
                  </Badge>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="w-4 h-4 mt-1 text-muted-foreground" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="w-4 h-4 text-muted-foreground" />
                  <a 
                    href={`tel:${contactInfo.phone}`} 
                    className="text-sm transition-colors hover:text-primary"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="w-4 h-4 text-muted-foreground" />
                  <a 
                    href={`mailto:${contactInfo.email}`} 
                    className="text-sm transition-colors hover:text-primary"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <FaCalendarAlt className="w-4 h-4" />
                  {contactInfo.hours}
                </div>
              </div>

              {/* CTA Button */}
              <Button className="w-full">
                Schedule a Free Demo Class
              </Button>
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="lg:col-span-8">
            <div className="grid gap-8 md:grid-cols-3">
              {sections.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-muted">
                      {section.icon}
                    </div>
                    <h3 className="text-lg font-semibold">
                      {section.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {section.links.map((link, index) => (
                      <li key={index}>
                        <a 
                          href={link.href} 
                          className="text-sm transition-colors text-muted-foreground hover:text-primary hover:underline underline-offset-4"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Certifications & Recognition */}
            <div className="p-6 mt-8 border rounded-lg bg-muted/30">
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div className="text-center md:text-left">
                  <h4 className="mb-3 text-sm font-semibold">Accredited & Certified</h4>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="secondary" className="text-xs">
                      <FaCertificate className="w-3 h-3 mr-1" />
                      ISO 9001:2015
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      <FaUsers className="w-3 h-3 mr-1" />
                      Child Safety Certified
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Udyam Registered
                    </Badge>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <h4 className="mb-3 text-sm font-semibold">Follow Our Journey</h4>
                  <div className="flex items-center justify-center gap-3 md:justify-end">
                    {socialLinks.map((social, idx) => (
                      <a 
                        key={idx}
                        href={social.href} 
                        aria-label={social.label}
                        className="p-2 transition-colors rounded-md bg-background text-muted-foreground hover:text-primary hover:bg-accent"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              {copyright}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Registration: UDYAM-TN-20-0154420 • GSTIN: 33AAAAA0000A1Z5
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {legalLinks.map((link, idx) => (
              <a 
                key={idx}
                href={link.href} 
                className="text-xs transition-colors text-muted-foreground hover:text-primary"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Made with Love */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>Build with</span>
            <FaHeart className="w-3 h-3 text-destructive" />
            <span>for young learners</span>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="p-4 mt-8 text-center border rounded-lg bg-muted/50">
          <p className="text-sm font-medium">
            🚨 Emergency Contact: 1800-123-4567 • 
            <span className="ml-2 font-normal text-muted-foreground">
              Available for parents 24/7
            </span>
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-primary/20 to-transparent"></div>
    </footer>
  );
};

export { Footer7 };