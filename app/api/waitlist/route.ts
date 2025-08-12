import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export const runtime = 'nodejs'

type WaitlistPayload = {
  email: string
  source?: string
}

function isValidEmail(email: unknown): email is string {
  if (typeof email !== 'string') return false
  if (email.length === 0 || email.length > 320) return false
  // Simple RFC2822-like check; good enough for server validation
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export async function POST(request: Request) {
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    return NextResponse.json(
      { error: 'Server misconfigured' },
      { status: 500 },
    )
  }

  let body: Partial<WaitlistPayload> = {}
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  if (!isValidEmail(body.email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  const email = body.email.toLowerCase()
  const source = (body.source || 'hero').slice(0, 64)
  const userAgent = (request.headers.get('user-agent') || '').slice(0, 512)
  const ipHeader = request.headers.get('x-forwarded-for') || ''
  const ip = ipHeader.split(',')[0]?.trim() || undefined

  const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: { persistSession: false },
  })

  const { error } = await supabase
    .from('waitlist_subscribers')
    .upsert(
      { email, source, user_agent: userAgent, ip },
      { onConflict: 'email' },
    )

  if (error) {
    // Hide raw DB error details from client
    return NextResponse.json({ error: 'Database error' }, { status: 500 })
  }

  // Fire-and-forget invoke of Supabase Edge Function to send confirmation email
  try {
    await supabase.functions.invoke('waitlist-confirmation-email', {
      body: { email, source },
    })
  } catch (_) {
    // Intentionally ignore email errors to not block the user
  }

  return NextResponse.json({ ok: true })
}


