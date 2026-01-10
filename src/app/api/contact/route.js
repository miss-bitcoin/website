export const runtime = "nodejs";

function json(status, data) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req) {
  try {
    const token = process.env.AIRTABLE_TOKEN;
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableName = process.env.AIRTABLE_TABLE_NAME;

    if (!token || !baseId || !tableName) {
      return json(500, { error: "Server is missing Airtable env vars." });
    }

    const body = await req.json().catch(() => null);
    if (!body) return json(400, { error: "Invalid JSON." });

    // 🐝 Honeypot check — bots will fill this, humans won't
    if (body.company) {
      // Pretend success, but do NOT write to Airtable
      return json(200, { success: true });
    }

    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const category = (body.category || "").trim();
    const message = (body.message || "").trim();

    if (!name || !email || !message) {
      return json(400, { error: "Name, email, and message are required." });
    }

    // basic email check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json(400, { error: "Please enter a valid email address." });
    }

    const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(
      tableName
    )}`;

    const airtableRes = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Name: name,
              Email: email,
              Category: category || "General",
              Message: message,
            },
          },
        ],
      }),
    });

    const airtableJson = await airtableRes.json().catch(() => ({}));

    if (!airtableRes.ok) {
      return json(500, {
        error: "Airtable write failed.",
        details: airtableJson?.error || airtableJson,
      });
    }

    return json(200, { success: true });
  } catch (err) {
    return json(500, { error: "Unexpected server error." });
  }
}