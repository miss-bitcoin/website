export const runtime = "nodejs";

import { put } from "@vercel/blob";

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

    // Files
    const fullBody = form.get("fullBodyPhoto");
    const facePhoto = form.get("facePhoto");
    const introVideo = form.get("introVideo");

    if (!(fullBody instanceof File) || fullBody.size === 0) {
      return json(400, { error: "Full-body photo is required." });
    }
    if (!(facePhoto instanceof File) || facePhoto.size === 0) {
      return json(400, { error: "Front face photo is required." });
    }
    if (!(introVideo instanceof File) || introVideo.size === 0) {
      return json(400, { error: "Intro video is required." });
    }

    // File size limits (tweak as you want)
    const MAX_IMAGE_MB = 15;
    const MAX_VIDEO_MB = 250;
    const tooBig = (file, maxMb) => file.size > maxMb * 1024 * 1024;

    if (tooBig(fullBody, MAX_IMAGE_MB)) {
      return json(400, { error: `Full-body photo is too large (max ${MAX_IMAGE_MB}MB).` });
    }
    if (tooBig(facePhoto, MAX_IMAGE_MB)) {
      return json(400, { error: `Front face photo is too large (max ${MAX_IMAGE_MB}MB).` });
    }
    if (tooBig(introVideo, MAX_VIDEO_MB)) {
      return json(400, { error: `Intro video is too large (max ${MAX_VIDEO_MB}MB).` });
    }

    // Upload to Vercel Blob
    const safeKey = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    const basePath = `miss-bitcoin/applications/${safeKey}`;

    const [fullBodyUp, faceUp, videoUp] = await Promise.all([
      put(`${basePath}/full-body-${fullBody.name}`, fullBody, {
        access: "public",
        contentType: fullBody.type || "application/octet-stream",
      }),
      put(`${basePath}/face-${facePhoto.name}`, facePhoto, {
        access: "public",
        contentType: facePhoto.type || "application/octet-stream",
      }),
      put(`${basePath}/video-${introVideo.name}`, introVideo, {
        access: "public",
        contentType: introVideo.type || "application/octet-stream",
      }),
    ]);

    // Airtable write (attachments must be URLs)
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

      "Full-body photo": [{ url: fullBodyUp.url }],
      "Front face photo": [{ url: faceUp.url }],
      "Intro video": [{ url: videoUp.url }],

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