"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary-foreground" fill="currentColor">
              <rect x="4" y="4" width="7" height="7" />
              <rect x="13" y="4" width="7" height="7" />
              <rect x="4" y="13" width="7" height="7" />
            </svg>
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">Energy Spark</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <Link href="#solutions" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Solutions
          </Link>
          <Link href="#projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </Link>
          <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Company
          </Link>
          <Link href="#resources" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Resources
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Log in
          </Link>
          <Button className="rounded-full px-6">
            Request Access
          </Button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto flex flex-col gap-4 p-4">
            <Link href="#solutions" className="text-sm font-medium text-muted-foreground hover:text-foreground py-2">
              Solutions
            </Link>
            <Link href="#projects" className="text-sm font-medium text-muted-foreground hover:text-foreground py-2">
              Projects
            </Link>
            <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground py-2">
              Company
            </Link>
            <Link href="#resources" className="text-sm font-medium text-muted-foreground hover:text-foreground py-2">
              Resources
            </Link>
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground py-2">
                Log in
              </Link>
              <Button className="rounded-full">
                Request Access
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
