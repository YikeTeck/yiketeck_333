import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const defaultLocale = 'en'
const locales = ['en', 'it', 'zh']

export function middleware(request: NextRequest) {
  // Get the pathname of the request (e.g. /, /about, /contact)
  const pathname = request.nextUrl.pathname

  // Check if pathname starts with /en, /it, or /zh
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // If no locale found, redirect to the default locale
  const locale = defaultLocale

  // e.g. incoming request is /about
  // The new URL is now /en/about
  return NextResponse.redirect(
    new URL(
      `/${locale}${pathname === '/' ? '' : pathname}`,
      request.url
    )
  )
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, favicon.ico, etc.)
    '/((?!api|_next/static|_next/image|images|favicon.ico).*)',
  ],
}