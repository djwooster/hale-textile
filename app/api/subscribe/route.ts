import { NextResponse } from "next/server";
import { createHash } from "crypto";

async function applyTag(server: string, apiKey: string, audienceId: string, email: string) {
  const hash = createHash("md5").update(email.toLowerCase()).digest("hex");
  await fetch(
    `https://${server}.api.mailchimp.com/3.0/lists/${audienceId}/members/${hash}/tags`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tags: [{ name: "Newsletter", status: "active" }] }),
    }
  );
}

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required." }, { status: 400 });
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const server = process.env.MAILCHIMP_SERVER_PREFIX;

  if (!apiKey || !audienceId || !server) {
    return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
  }

  const response = await fetch(
    `https://${server}.api.mailchimp.com/3.0/lists/${audienceId}/members`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email_address: email, status: "subscribed" }),
    }
  );

  const data = await response.json();

  if (response.ok) {
    await applyTag(server, apiKey, audienceId, email);
    return NextResponse.json({ success: true });
  }

  if (data.title === "Member Exists") {
    await applyTag(server, apiKey, audienceId, email);
    return NextResponse.json({ error: "You're already subscribed." }, { status: 400 });
  }

  return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
}
