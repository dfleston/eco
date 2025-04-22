import { type NextRequest, NextResponse } from "next/server"
import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"

// List of supported locales
const locales = ["en", "es"]
const defaultLocale = "es"

// Get the preferred locale from the request
function getLocale(request: NextRequest) {
  const headers = new Headers(request.headers)
  const acceptLanguage = headers.get("accept-language") || ""

  // Create a negotiator instance with the headers
  const negotiatorHeaders = { "accept-language": acceptLanguage }
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

  return match(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    // e.g. incoming request is /products
    // The new URL is now /en/products
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith("/") ? pathname : `/${pathname}`}`, request.url),
    )
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next|api|favicon.ico).*)",
  ],
}
