"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";

import {
  Archive,
  FileText,
  Grid3x3,
  Hash,
  HelpCircle,
  LogOut,
  Menu,
  Newspaper,
  Phone,
  Settings,
  Sun,
  User,
  Users,
  X,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const LINKS = [
  { icon: User, title: "Account", href: "/account" },
  { icon: Archive, title: "Blocks", href: "/blocks" },
  { icon: Archive, title: "Docs", href: "/docs" },
];

const MEGA_MENU_SECTIONS = [
  {
    label: "Explore",
    items: [
      {
        title: "Products",
        description: "Browse all products.",
        icon: Grid3x3,
        href: "/products",
      },
      {
        title: "Blog",
        description: "Articles and insights.",
        icon: Newspaper,
        href: "/blog",
      },
    ],
  },
  {
    label: "Company",
    items: [
      {
        title: "About Us",
        description: "Learn about us.",
        icon: Users,
        href: "/about",
      },
      {
        title: "News",
        description: "Latest updates.",
        icon: Sun,
        href: "/news",
      },
      {
        title: "Special Offers",
        description: "Exclusive deals.",
        icon: Hash,
        href: "/offers",
      },
    ],
  },
  {
    label: "Support",
    items: [
      {
        title: "Contact",
        description: "Talk to our team.",
        icon: Phone,
        href: "/contact",
      },
      {
        title: "Support",
        description: "Help center.",
        icon: HelpCircle,
        href: "/support",
      },
    ],
  },
];

function NavList() {
  const pathname = usePathname();

  return (
    <>
      {LINKS.map(({ icon: Icon, title, href }) => (
        <Link
          key={title}
          href={href}
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-all border border-transparent hover:border-dashed hover:border-primary hover:bg-muted active:scale-[0.97] data-[active=true]:border data-[active=true]:border-dashed data-[active=true]:border-primary data-[active=true]:bg-primary data-[active=true]:text-white"
          data-active={pathname === href}
        >
          <Icon className="w-4 h-4" />
          {title}
        </Link>
      ))}
    </>
  );
}

function ProfileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="w-8 h-8 border-2 border-dashed cursor-pointer border-primary">
          <AvatarImage
            src="https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?auto=format"
            alt="Profile"
          />
          <AvatarFallback>CT</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="border border-dashed rounded-md"
      >
        <DropdownMenuItem>
          <User className="w-4 h-4 mr-2" /> My Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="w-4 h-4 mr-2" /> Edit Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <HelpCircle className="w-4 h-4 mr-2" /> Support
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-destructive">
          <LogOut className="w-4 h-4 mr-2" /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

interface MenuItemProps {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

function MenuItem({ title, description, icon: Icon, href }: MenuItemProps) {
  return (
    <Link
      href={href}
      className="hover:bg-accent hover:scale-[1.02] active:scale-[0.95] transition-all flex items-start gap-3 rounded-md border border-transparent hover:border-dashed p-3"
    >
      <div className="flex items-center justify-center p-2 border border-dashed rounded-md bg-muted">
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <p className="mb-1 text-sm font-semibold leading-none">{title}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
}


export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Return simplified version during SSR to avoid hydration mismatches
  if (!isMounted) {
    return (
      <div className="flex justify-center w-full">
        <nav className="fixed top-0 w-full px-6 py-3 mx-auto border-b border-dashed shadow-lg z-999 max-w-7xl bg-background/40 backdrop-blur-xl border-white/20 supports-backdrop-filter:backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-sm font-semibold">
              <div className="flex items-end px-0 py-0">
                <span className="text-blue-600 text-[70px] uppercase font-nsec leading-none">
                  U
                </span>
                <div className="flex flex-col items-start -mt-2 -ml-1 -space-y-2">
                  <span className="font-league text-[16px] sm:text-[18px] md:text-[20px] dark:text-white text-black">
                    FILL
                  </span>
                  <span className="font-league text-[16px] sm:text-[18px] md:text-[20px] dark:text-white text-black">
                    ACADEMY
                  </span>
                </div>
              </div>
            </Link>
            <div className="flex items-center gap-2">
              <div className="lg:hidden">
                <div className="border border-dashed rounded-md h-9 w-9" />
              </div>
              <button
                className="border border-dashed rounded-md lg:hidden h-9 w-9"
                disabled
              >
                <Menu className="w-4 h-4" />
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  }

  return (
    <div className="flex justify-center w-full">
      <nav className="fixed top-0 w-full px-6 py-3 mx-auto border-b border-dashed shadow-lg max-w-7xl z-999 bg-background/40 backdrop-blur-xl border-white/20 supports-backdrop-filter:backdrop-blur-xl">
        {/* flex container */}
        <div className="flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold">
            <div className="flex items-end px-0 py-0">
              <span className="text-blue-600 text-[70px] uppercase font-nsec leading-none">
                U
              </span>
              <div className="flex flex-col items-start -mt-2 -ml-1 -space-y-2">
                <span className="font-league text-[16px] sm:text-[18px] md:text-[20px] dark:text-white text-black">
                  FILL
                </span>
                <span className="font-league text-[16px] sm:text-[18px] md:text-[20px] dark:text-white text-black">
                  ACADEMY
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Section */}
          <div className="items-center hidden gap-5 lg:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="flex items-center h-auto px-3 py-2 border border-dashed rounded-md">
                    <FileText className="w-4 h-4 mr-2" />
                    Pages
                  </NavigationMenuTrigger>

                  <NavigationMenuContent>
                    <div className="grid w-[800px] grid-cols-3 gap-4 p-4 border border-dashed rounded-md bg-background/90">
                      {MEGA_MENU_SECTIONS.map((section, sIndex) => (
                        <div key={sIndex} className="space-y-2">
                          <h4 className="text-xs font-semibold text-muted-foreground">
                            {section.label}
                          </h4>
                          {section.items.map((item, i) => (
                            <MenuItem key={`${item.title}-${i}`} {...item} />
                          ))}
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavList />
          </div>

          {/* Mobile Toggle + Mobile ThemeToggle (mobile only) */}
          <div className="flex items-center gap-2">
            {/* ThemeToggle for mobile only */}
            <div className="lg:hidden">
              <ThemeToggle />
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setOpenNav(!openNav)}
              className="lg:hidden"
              aria-label="Toggle menu"
            >
              {openNav ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </Button>
          </div>

          {/* Right Icons (desktop only) */}
          <div className="items-center hidden gap-3 lg:flex">
            {/* ThemeToggle for desktop only */}
            <div className="hidden lg:flex">
              <ThemeToggle />
            </div>

            <ProfileMenu />
          </div>
        </div>

        {/* Mobile Menu */}
        <Collapsible open={openNav}>
          <CollapsibleContent className="mt-4">
            <div className="border border-dashed rounded-md max-h-[calc(100vh-120px)] overflow-y-auto overscroll-contain scroll-smooth p-4">
              {MEGA_MENU_SECTIONS.map((section, i) => (
                <div key={i} className="mb-3">
                  <h3 className="text-xs font-semibold text-muted-foreground">
                    {section.label}
                  </h3>
                  <div className="mt-2 space-y-1">
                    {section.items.map((item, index) => (
                      <MenuItem key={`${item.title}-${index}`} {...item} />
                    ))}
                  </div>
                </div>
              ))}
              <div className="mt-4 space-y-2">
                <NavList />
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </nav>
    </div>
  );
}