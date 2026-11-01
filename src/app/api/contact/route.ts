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

const rateLimit = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + 60_000 });
    return true;
  }
  if (entry.count >= 5) return false;
  entry.count++;
  return true;
}

export async function POST(request: NextRequest) {
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
    console.log("Contact form submission (Resend not configured):", body);
    return NextResponse.json({
      success: true,
      message: "Request received. Email delivery is being configured.",
    });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Bluestone Home Solutions <onboarding@resend.dev>",
      to: contactEmail,
      subject: `New Estimate Request from ${body.name}`,
      html: `
        <h2>New Estimate Request</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${body.name}</td></tr>
          ${body.company ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Company</td><td style="padding:8px;border:1px solid #ddd;">${body.company}</td></tr>` : ""}
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${body.email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:8px;border:1px solid #ddd;">${body.phone}</td></tr>
          ${body.service ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Service</td><td style="padding:8px;border:1px solid #ddd;">${body.service}</td></tr>` : ""}
          ${body.propertyType ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Property Type</td><td style="padding:8px;border:1px solid #ddd;">${body.propertyType}</td></tr>` : ""}
          ${body.propertyAddress ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Property Address</td><td style="padding:8px;border:1px solid #ddd;">${body.propertyAddress}${body.city ? `, ${body.city}` : ""}${body.state ? `, ${body.state}` : ""} ${body.zip || ""}</td></tr>` : ""}
          ${body.contactMethod ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Preferred Contact</td><td style="padding:8px;border:1px solid #ddd;">${body.contactMethod}</td></tr>` : ""}
          ${body.message ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Message</td><td style="padding:8px;border:1px solid #ddd;">${body.message}</td></tr>` : ""}
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
