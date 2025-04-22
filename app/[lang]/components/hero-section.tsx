import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection({ dict }: { dict: any }) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-green-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              {dict.title}
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{dict.subtitle}</p>
          </div>
          <div className="space-x-4">
            <Link href="#we-need-you">
              <Button className="bg-green-600 hover:bg-green-700">{dict.cta}</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
