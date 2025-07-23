import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Get the authorization header
  const authorization = request.headers.get('authorization')
  
  // If no authorization header, request basic auth
  if (!authorization) {
    return new NextResponse('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    })
  }

  // Check if it's basic auth
  if (!authorization.startsWith('Basic ')) {
    return new NextResponse('Invalid authentication method', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    })
  }

  // Decode the base64 credentials
  const base64Credentials = authorization.split(' ')[1]
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii')
  const [username, password] = credentials.split(':')

  // Get credentials from environment variables
  const expectedUsername = process.env.BASIC_AUTH_USERNAME
  const expectedPassword = process.env.BASIC_AUTH_PASSWORD

  // Check if environment variables are set
  if (!expectedUsername || !expectedPassword) {
    console.error('BASIC_AUTH_USERNAME and BASIC_AUTH_PASSWORD environment variables must be set')
    return new NextResponse('Server configuration error', {
      status: 500,
    })
  }

  // Check if both username and password match
  if (username !== expectedUsername || password !== expectedPassword) {
    return new NextResponse('Invalid credentials', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    })
  }

  // Authentication successful, continue to the requested page
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