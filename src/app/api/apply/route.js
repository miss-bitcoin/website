export const runtime = "nodejs";

function json(status, data) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function clean(v) {
  return (v ?? "").toString().trim();
}

function requireEnv(name) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Let users paste without https:// and we’ll fix it.
function normalizeUrl(raw) {
  const s = clean(raw);
  if (!s) return "";
  if (/^https?:\/\//i.test(s)) return s;
  return `https://${s}`;
}

// Basic sanity check (not perfect, but enough)
function isProbablyUrl(s) {
  // accepts https://..., http://..., or something with a dot like drive.google.com/...
  return /^https?:\/\//i.test(s) || /\.[a-z]{2,}/i.test(s);
}

export async function POST(req) {
  try {
    // Airtable env
    const token = requireEnv("AIRTABLE_TOKEN");
    const baseId = requireEnv("AIRTABLE_BASE_ID");
    const tableName = requireEnv("AIRTABLE_APPLY_TABLE"); // e.g. "Applications"

    const form = await req.formData().catch(() => null);
    if (!form) return json(400, { error: "Invalid form submission." });

    // Honeypot (hidden field)
    const hp = clean(form.get("company"));
    if (hp) return json(200, { success: true });

    // Required fields
    const firstName = clean(form.get("firstName"));
    const lastName = clean(form.get("lastName"));
    const email = clean(form.get("email"));
    const nationality = clean(form.get("nationality"));
    const ageRaw = clean(form.get("age"));
    const countryResidence = clean(form.get("countryResidence"));

    // Optional (but can still be required client-side)
    const education = clean(form.get("education"));
    const fieldOfStudy = clean(form.get("fieldOfStudy"));
    const profession = clean(form.get("profession"));

    if (!firstName || !lastName || !email || !nationality || !ageRaw || !countryResidence) {
      return json(400, { error: "Please complete all required fields." });
    }

    if (!isValidEmail(email)) {
      return json(400, { error: "Please enter a valid email address." });
    }

    // Age: integer only
    const age = parseInt(ageRaw, 10);
    if (!Number.isFinite(age) || age <= 0 || age > 120) {
      return json(400, { error: "Please enter a valid age." });
    }

    // Questions
    const q = (n) => clean(form.get(`q${n}`));
    for (let i = 1; i <= 10; i++) {
      if (!q(i)) return json(400, { error: `Please answer question ${i}.` });
    }

    // Links (instead of files)
    const fullBodyPhotoLink = normalizeUrl(form.get("fullBodyPhotoLink"));
    const facePhotoLink = normalizeUrl(form.get("facePhotoLink"));
    const introVideoLink = normalizeUrl(form.get("introVideoLink"));

    if (!fullBodyPhotoLink) return json(400, { error: "Full-body photo link is required." });
    if (!facePhotoLink) return json(400, { error: "Front face photo link is required." });
    if (!introVideoLink) return json(400, { error: "Intro video link is required." });

    if (!isProbablyUrl(fullBodyPhotoLink)) return json(400, { error: "Please enter a valid full-body photo link." });
    if (!isProbablyUrl(facePhotoLink)) return json(400, { error: "Please enter a valid front face photo link." });
    if (!isProbablyUrl(introVideoLink)) return json(400, { error: "Please enter a valid intro video link." });

    // Airtable write
    const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`;

    const fields = {
      "First Name": firstName,
      "Last Name": lastName,
      Email: email,
      Nationality: nationality,
      Age: age,
      "Country of Residence": countryResidence,

      "Highest Level of Education Completed": education,
      "Field of Study / Academic Background": fieldOfStudy,
      "Current Profession or Occupation": profession,

      // Keep these as Airtable Attachment fields (URLs only)
      "Full-body photo": fullBodyPhotoLink,
      "Front face photo": facePhotoLink,
      "Intro video": introVideoLink,

      Status: "New",
      Source: "Website",

      // Exact Airtable field names
      "Q1 What does Bitcoin mean to you?": q(1),
      "Q2 When did you first learn about Bitcoin?": q(2),
      "Q3 Tell us your story how did you get involved with Bitcoin?": q(3),
      "Q4 If selected what would you do to help Bitcoin adoption locally?": q(4),
      "Q5 If you had unlimited Bitcoin what would you do with it?": q(5),
      "Q6 What problem in your country can Bitcoin help solve?": q(6),
      "Q7 How would you educate young people about Bitcoin?": q(7),
      "Q8 Have you participated in any social educational or community projects?": q(8),
      "Q9 What makes you different from other candidates?": q(9),
      "Q10 What values should a Miss Bitcoin representative embody?": q(10),
    };

    const airtableRes = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ records: [{ fields }] }),
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
    return json(500, { error: err?.message || "Unexpected server error." });
  }
}