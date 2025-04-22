import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users } from "lucide-react"

export function WeNeedYou({ dict }: { dict: any }) {
  return (
    <section id="we-need-you" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-md bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                <Users className="mr-1 h-4 w-4" />
                <span>{dict.title}</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{dict.title}</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {dict.description}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#contact">
                <Button className="bg-green-600 hover:bg-green-700">{dict.cta}</Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Volunteers working together"
              className="aspect-square overflow-hidden rounded-xl object-cover object-center"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
