import Link from "next/link"
import { Leaf } from "lucide-react"

export function Footer({ lang, dict }: { lang: string; dict: any }) {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Leaf className="h-5 w-5 text-green-600" />
          <span className="text-sm font-medium">Ecologicamentes</span>
        </div>

        <p className="text-sm text-muted-foreground">{dict.rights}</p>

        <div className="flex items-center gap-4">
          <Link href={`/${lang}/contact`} className="text-sm font-medium text-muted-foreground hover:text-foreground">
            {dict.contact}
          </Link>
          <Link
            href="https://twitter.com/ecologicamentes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Twitter
          </Link>
          <Link
            href="https://instagram.com/ecologicamentes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  )
}
