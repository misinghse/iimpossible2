import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo on the left corner */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src="/logo.jpeg" // Adjust to your logo file path
            alt="IIM Possible Logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
            IIM POSSIBLE
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center space-x-6">
          <Link href="/about" className="text-foreground/60 hover:text-foreground">
            About
          </Link>
          <Link href="/methodology" className="text-foreground/60 hover:text-foreground">
            Methodology
          </Link>
          <Link href="/features" className="text-foreground/60 hover:text-foreground">
            Features
          </Link>
          <Link href="/contact" className="text-foreground/60 hover:text-foreground">
          Contact Us
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
        <Link href="/overview" passHref>
          <Button variant="default" className="hidden md:inline-flex">
         Get Started
          </Button>
        </Link>

          {/* Mobile Nav Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4">
                <Link href="/about" className="text-foreground/60 hover:text-foreground">
                  About
                </Link>
                <Link href="/methodology" className="text-foreground/60 hover:text-foreground">
                  Methodology
                </Link>
                <Link href="/features" className="text-foreground/60 hover:text-foreground">
                  Features
                </Link>
                <Link href="/courses" className="text-foreground/60 hover:text-foreground">
                  Courses
                </Link>
                <Button variant="default">Get Started</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
