import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  company?: string;
  email: string;
  phone: string;
  service?: string;
  propertyAddress?: string;
  city?: string;
  state?: string;
  zip?: string;
  propertyType?: string;
  message?: string;
  contactMethod?: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60_000;
const RATE_LIMIT_MAX = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count++;
  return true;
}

// Prevent unbounded memory growth
function pruneRateLimitMap() {
  const now = Date.now();
  if (rateLimit.size > 1000) {
    rateLimit.forEach((val, key) => {
      if (now > val.resetAt) rateLimit.delete(key);
    });
  }
}

export async function POST(request: NextRequest) {
  pruneRateLimitMap();

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      { status: 429 }
    );
  }

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  if (!body.name?.trim() || !body.email?.trim() || !body.phone?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and phone are required." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(body.email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail =
    process.env.CONTACT_EMAIL || "service@bluestonehomellc.com";

  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured — form submission dropped");
    return NextResponse.json(
      { error: "Our contact system is temporarily unavailable. Please email us directly at service@bluestonehomellc.com." },
      { status: 503 }
    );
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const s = (v: string) => escapeHtml(v);
    await resend.emails.send({
      from: "Bluestone Home Solutions <onboarding@resend.dev>",
      to: contactEmail,
      subject: `New Estimate Request from ${s(body.name)}`,
      html: `
        <h2>New Estimate Request</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${s(body.name)}</td></tr>
          ${body.company ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Company</td><td style="padding:8px;border:1px solid #ddd;">${s(body.company)}</td></tr>` : ""}
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${s(body.email)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:8px;border:1px solid #ddd;">${s(body.phone)}</td></tr>
          ${body.service ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Service</td><td style="padding:8px;border:1px solid #ddd;">${s(body.service)}</td></tr>` : ""}
          ${body.propertyType ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Property Type</td><td style="padding:8px;border:1px solid #ddd;">${s(body.propertyType)}</td></tr>` : ""}
          ${body.propertyAddress ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Property Address</td><td style="padding:8px;border:1px solid #ddd;">${s(body.propertyAddress)}${body.city ? `, ${s(body.city)}` : ""}${body.state ? `, ${s(body.state)}` : ""} ${body.zip ? s(body.zip) : ""}</td></tr>` : ""}
          ${body.contactMethod ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Preferred Contact</td><td style="padding:8px;border:1px solid #ddd;">${s(body.contactMethod)}</td></tr>` : ""}
          ${body.message ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Message</td><td style="padding:8px;border:1px solid #ddd;">${s(body.message)}</td></tr>` : ""}
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email delivery failed:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json(
      { error: "Failed to send your request. Please try again or email us directly at service@bluestonehomellc.com." },
      { status: 500 }
    );
  }
}
