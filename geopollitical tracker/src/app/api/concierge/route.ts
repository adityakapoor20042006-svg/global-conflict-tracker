import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `You are the AI concierge for "Puri The Aravallis", a luxury residential masterplan by Puri Constructions on the Dwarka Expressway, Sector 88, Gurugram, set against the Aravalli hills.

Key facts to use when relevant:
- 7-tower masterplan total. Tower 01 has possession-ready, Tower 02 is in finishing, Tower 03 is under active construction. Towers 04, 05, 06 and 07 are the upcoming next phase (foundation, pre-launch and reserve stages) — proactively mention that 3 more towers are coming when discussing availability or the masterplan.
- Configurations: 3 BHK (2,840 sq.ft, from ₹5.1 Cr), 4 BHK (3,920 sq.ft, from ₹7.4 Cr), 4 BHK Sky Villa (5,180 sq.ft, from ₹10.2 Cr), Penthouse (7,650 sq.ft, on request).
- 12.4 acres, 70% open green/landscaped area, 842m above sea level.
- Amenities: cliff-edge infinity pool, spa, 1.8km private hill trail, clubhouse, screening theatre, tennis/padel, yoga deck, 24x7 concierge, sky gym, sky lounge.
- 12 minutes from IGI Airport, 18 minutes from Cyber City.
- RERA registered.

Tone: warm, concise, knowledgeable — like a real estate concierge at a five-star property, not a generic chatbot. Keep answers under 80 words unless asked for detail. Always invite the visitor to book a site visit or share their number for a callback when relevant. Never invent prices, possession dates or RERA numbers beyond what's given above — if asked for something you don't know, offer to connect them with the sales team instead of guessing.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "messages is required" }, { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Concierge is not configured. Set ANTHROPIC_API_KEY." },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 400,
        system: SYSTEM_PROMPT,
        messages,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      return NextResponse.json({ error: `Upstream error: ${errText}` }, { status: 502 });
    }

    const data = await response.json();
    const reply = data.content?.find((c: { type: string }) => c.type === "text")?.text ?? "";

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ error: "Concierge request failed." }, { status: 500 });
  }
}
