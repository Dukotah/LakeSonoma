import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Log for debugging / future integration
    console.log("[Contact/Booking API]", body.type, body);

    // Here you would integrate with:
    // - Singenuity booking API
    // - Email service (Resend, SendGrid, etc.)
    // - CRM (HubSpot, etc.)

    return NextResponse.json({ success: true, message: "Received" }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Failed to process" }, { status: 500 });
  }
}
