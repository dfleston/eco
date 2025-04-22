import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Recycle, BookOpen } from "lucide-react"

export function WhatWeSeek({ dict }: { dict: any }) {
  const icons = [
    <Leaf key="leaf" className="h-6 w-6 text-green-600" />,
    <Recycle key="recycle" className="h-6 w-6 text-green-600" />,
    <BookOpen key="book" className="h-6 w-6 text-green-600" />,
  ]

  return (
    <section id="what-we-seek" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{dict.title}</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {dict.description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
          {dict.items.map((item: any, index: number) => (
            <Card key={index} className="flex flex-col items-center text-center">
              <CardHeader>
                <div className="flex justify-center mb-2">{icons[index]}</div>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
