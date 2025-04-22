"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { LanguageSwitcher } from "./language-switcher"

export function Header({ lang, dict }: { lang: string; dict: any }) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: `/${lang}#what-we-seek`, label: dict.whatWeSeek },
    { href: `/${lang}#we-need-you`, label: dict.weNeedYou },
    { href: `/${lang}#merchandising`, label: dict.merchandising },
    { href: `/${lang}#workshops`, label: dict.workshops },
    { href: `/${lang}#mission`, label: dict.mission },
    { href: `/${lang}#team`, label: dict.team },
    { href: `/${lang}#business-model`, label: dict.businessModel },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center gap-2 font-bold text-xl">
          <span className="text-green-600">Ecologica</span>
          <span>mentes</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher lang={lang} label={dict.switchLocale} />
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] sm:w-[350px]">
            <div className="flex flex-col gap-6 mt-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <LanguageSwitcher lang={lang} label={dict.switchLocale} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
