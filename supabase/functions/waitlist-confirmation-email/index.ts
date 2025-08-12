// supabase/functions/waitlist-confirmation-email/index.ts
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const FROM_EMAIL = Deno.env.get("FROM_EMAIL") ?? "B4B <hello@b4b.network>";
const FUNCTION_TOKEN = Deno.env.get("FUNCTION_TOKEN"); // optional shared secret

serve(async (req) => {
  try {
    if (!RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return new Response("Server misconfigured", { status: 500 });
    }
    if (FUNCTION_TOKEN && req.headers.get("x-function-token") !== FUNCTION_TOKEN) {
      return new Response("Unauthorized", { status: 401 });
    }

    const { email, source } = await req.json();
    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response("Invalid email", { status: 400 });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [email],
        subject: "You're on the B4B waitlist 🎉",
        html: `<p>Thanks for joining the B4B waitlist${source ? ` (via ${source})` : ""}!</p>`,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Resend error", res.status, text);
      return new Response(JSON.stringify({ error: "provider_error", status: res.status, body: text }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), { headers: { "Content-Type": "application/json" } });
  } catch (e) {
    console.error("Function error", e);
    return new Response("Bad request", { status: 400 });
  }
}, { verifyJwt: false });