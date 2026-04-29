import { NextResponse } from "next/server";
import { createHash } from "crypto";

export async function POST(req: Request) {
  const { email, tag } = await req.json();

  if (!email || !tag) {
    return NextResponse.json({ error: "Email and tag required." }, { status: 400 });
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const server = process.env.MAILCHIMP_SERVER_PREFIX;

  if (!apiKey || !audienceId || !server) {
    return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
  }

  const hash = createHash("md5").update(email.toLowerCase()).digest("hex");

  await fetch(
    `https://${server}.api.mailchimp.com/3.0/lists/${audienceId}/members/${hash}/tags`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tags: [{ name: tag, status: "active" }] }),
    }
  );

  return NextResponse.json({ success: true });
}
