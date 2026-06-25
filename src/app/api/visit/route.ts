import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // 1. Extract visitor information from request headers
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
    const userAgent = req.headers.get("user-agent") || "unknown";
    
    // Geolocation headers (provided by modern Vercel/Netlify hosting environments)
    const country = req.headers.get("x-vercel-ip-country") || "unknown";
    const region = req.headers.get("x-vercel-ip-country-region") || "unknown";
    const city = req.headers.get("x-vercel-ip-city") || "unknown";

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.NOTIFICATION_EMAIL || "amine.mejjati.pro@gmail.com";

    if (!apiKey) {
      // Log warning to server console, but do not throw 500 error to visitor
      console.warn("RESEND_API_KEY environment variable is not configured. Visit notification email skipped.");
      return NextResponse.json({ success: false, message: "Email API key not configured." });
    }

    // 2. Format the system report notification in our Gotham/Cyan visual aesthetic
    const emailBody = {
      from: "Batcave Systems <onboarding@resend.dev>",
      to: toEmail,
      subject: `🚨 [PORTFOLIO VISIT] - Secure Access Detected`,
      html: `
        <div style="font-family: monospace; background-color: #050608; color: #E2E4E8; padding: 24px; border: 1px solid #00D9FF; border-radius: 8px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00D9FF; border-bottom: 1px solid rgba(0, 217, 255, 0.2); padding-bottom: 8px; margin-top: 0; font-size: 16px; letter-spacing: 2px;">
            SECURE ACCESS SIGNAL DETECTED
          </h2>
          <table style="width: 100%; font-size: 13px; border-collapse: collapse; margin-top: 16px;">
            <tr style="border-bottom: 1px solid rgba(0, 217, 255, 0.1);">
              <td style="padding: 10px 0; color: #00D9FF; font-weight: bold; width: 140px;">TIMESTAMP:</td>
              <td style="padding: 10px 0; color: #ffffff;">${new Date().toLocaleString("en-US", { timeZone: "UTC" })} UTC</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(0, 217, 255, 0.1);">
              <td style="padding: 10px 0; color: #00D9FF; font-weight: bold;">IP ADDRESS:</td>
              <td style="padding: 10px 0; color: #ffffff; font-family: Courier, monospace;">${ip}</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(0, 217, 255, 0.1);">
              <td style="padding: 10px 0; color: #00D9FF; font-weight: bold;">GEOLOCATION:</td>
              <td style="padding: 10px 0; color: #ffffff;">${city}, ${region}, ${country}</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(0, 217, 255, 0.1);">
              <td style="padding: 10px 0; color: #00D9FF; font-weight: bold;">BROWSER/AGENT:</td>
              <td style="padding: 10px 0; color: #ffffff; word-break: break-all; font-size: 11px;">${userAgent}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; font-size: 10px; color: rgba(0, 217, 255, 0.4); border-top: 1px dashed rgba(0, 217, 255, 0.1); padding-top: 12px;">
            // ALL SECURITY LOGS SECURED. AUTOMATED REPORT FROM WAYNE_NET CENTRAL.
          </div>
        </div>
      `,
    };

    // 3. Dispatch the email using the Resend REST API
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(emailBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Resend API request failed:", errorText);
      return NextResponse.json({ success: false, error: errorText });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error dispatching visit notification:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
