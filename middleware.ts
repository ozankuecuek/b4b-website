import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Handle locale routing first
  const locales = ['en-en', 'de-de']
  const segments = pathname.split('/')
  const hasLocale = locales.includes(segments[1])
  
  // If no locale in path, redirect to default locale
  if (!hasLocale && pathname === '/') {
    const url = request.nextUrl.clone()
    url.pathname = '/en-en'
    return NextResponse.redirect(url)
  }
  
  // Continue to the requested page
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 