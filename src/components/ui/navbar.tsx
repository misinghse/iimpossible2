import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo on the left corner */}
        <Link href="/" className="flex items-center space-x-2">
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center space-x-6">
          <Link href="/about" className="text-foreground/60 hover:text-foreground">
            About Us
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

        {/* Buttons and Mobile Menu */}
        <div className="flex items-center space-x-4">
          <Link href="/overview">
            <Button variant="default" className="hidden md:inline-flex">
              Get Started
            </Button>
          </Link>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4">
                <Link href="/about">
                  <Button variant="ghost" className="w-full text-left">
                    About Us
                  </Button>
                </Link>
                <Link href="/methodology">
                  <Button variant="ghost" className="w-full text-left">
                    Methodology
                  </Button>
                </Link>
                <Link href="/features">
                  <Button variant="ghost" className="w-full text-left">
                    Features
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="ghost" className="w-full text-left">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/overview">
                  <Button variant="default" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
