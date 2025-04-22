import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { getDictionary } from "./dictionaries"

const inter = Inter({ subsets: ["latin"] })

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }]
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const dict = await getDictionary(params.lang)

  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header lang={params.lang} dict={dict.navigation} />
            <main className="flex-1">{children}</main>
            <Footer lang={params.lang} dict={dict.footer} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
