"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcher({ lang, label }: { lang: string; label: string }) {
  const pathname = usePathname()

  const switchLocale = (locale: string) => {
    // Replace the current locale in the path with the new one
    const newPath = pathname.replace(`/${lang}`, `/${locale}`)
    return newPath
  }

  const targetLang = lang === "en" ? "es" : "en"

  return (
    <Link href={switchLocale(targetLang)}>
      <Button variant="ghost" size="sm" className="flex items-center gap-1">
        <Globe className="h-4 w-4" />
        <span>{label}</span>
      </Button>
    </Link>
  )
}
