import express from "express";
import multer from "multer";
import nodemailer from "nodemailer";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const MAX_FILES = 5;

function clean(value, limit = 4000) {
  return String(value ?? "").trim().slice(0, limit);
}

function escapeHtml(value) {
  return clean(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function configuredValue(...names) {
  return names.map((name) => clean(process.env[name], 500)).find(Boolean) || "";
}

function required(...names) {
  const value = configuredValue(...names);
  if (!value || /YOUR_.*PASSWORD|CHANGE_ME|PLACEHOLDER/i.test(value)) {
    const error = new Error("Email service is not configured yet.");
    error.status = 503;
    throw error;
  }
  return value;
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean(value, 320));
}

function originGuard(req, res, next) {
  const origin = req.get("origin");
  const origins = clean(process.env.ALLOWED_ORIGIN, 2000)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  if (origin && origins.length && !origins.includes(origin)) {
    return res.status(403).json({ success: false, message: "This website is not allowed to submit this form." });
  }
  if (origin) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
  }
  if (req.method === "OPTIONS") return res.sendStatus(204);
  return next();
}

function transport() {
  const port = Number(required("SMTP_PORT", "MAIL_PORT"));
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    const error = new Error("Email service port is invalid.");
    error.status = 503;
    throw error;
  }

  return nodemailer.createTransport({
    host: required("SMTP_HOST", "MAIL_HOST"),
    port,
    secure: configuredValue("SMTP_SECURE", "MAIL_SECURE").toLowerCase() === "true" || port === 465,
    auth: {
      user: required("SMTP_USER", "MAIL_USER"),
      pass: required("SMTP_PASS", "MAIL_PASS"),
    },
    connectionTimeout: 15_000,
    greetingTimeout: 15_000,
    socketTimeout: 20_000,
  });
}

async function send(subject, fields, replyTo, attachments = []) {
  const from = required("MAIL_FROM", "SMTP_FROM", "SMTP_USER", "MAIL_USER");
  const fromName = clean(process.env.MAIL_FROM_NAME || "GlassCo Website", 100);
  const to = required("MAIL_TO");
  const toName = clean(process.env.MAIL_TO_NAME, 100);
  const entries = Object.entries(fields).filter(([, value]) => clean(value));
  const text = entries.map(([label, value]) => `${label}: ${clean(value)}`).join("\n");
  const rows = entries
    .map(([label, value]) => `<tr><th align="left">${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`)
    .join("");

  await transport().sendMail({
    from: `${fromName} <${from}>`,
    to: toName ? `${toName} <${to}>` : to,
    replyTo: `${replyTo.name} <${replyTo.email}>`,
    subject,
    text,
    html: `<h2>${escapeHtml(subject)}</h2><table>${rows}</table>`,
    attachments,
  });
}

function mailError(error, res) {
  console.error("[mail]", error.message);
  const message = error.status ? error.message : "Unable to send your message right now. Please try again later.";
  res.status(error.status || 500).json({ ok: false, success: false, error: message, message });
}

export function createContactRouter() {
  const router = express.Router();
  router.use(originGuard);
  router.post("/", async (req, res) => {
    const name = clean(req.body?.name, 160);
    const email = clean(req.body?.email, 320);
    const message = clean(req.body?.message);
    if (!name || !isEmail(email) || !message) {
      return res.status(400).json({ success: false, message: "Please enter your name, a valid email address, and a message." });
    }

    try {
      await send(
        "New website contact enquiry",
        { Name: name, Email: email, Phone: clean(req.body?.phone, 80), Service: clean(req.body?.service, 160), Message: message },
        { name, email },
      );
      res.json({ ok: true, success: true, message: "Thank you. Your message has been sent." });
    } catch (error) {
      mailError(error, res);
    }
  });
  return router;
}

export function createQuoteRouter() {
  const router = express.Router();
  const upload = multer({ storage: multer.memoryStorage(), limits: { files: MAX_FILES, fileSize: MAX_FILE_SIZE } });
  router.use(originGuard);
  router.post("/", upload.array("files[]", MAX_FILES), async (req, res) => {
    const name = clean(req.body?.name || req.body?.fullName, 160);
    const email = clean(req.body?.email, 320);
    if (!name || !isEmail(email)) {
      return res.status(400).json({ success: false, message: "Please enter your name and a valid email address." });
    }

    try {
      const fields = Object.fromEntries(
        Object.entries(req.body || {})
          .filter(([key]) => key !== "files[]")
          .map(([key, value]) => [key.replace(/([A-Z])/g, " $1").replace(/^./, (letter) => letter.toUpperCase()), clean(value)]),
      );
      fields.Name = name;
      fields.Email = email;
      const attachments = (req.files || []).map((file) => ({
        filename: clean(file.originalname, 180).replace(/[^a-zA-Z0-9._-]/g, "_"),
        content: file.buffer,
        contentType: file.mimetype,
      }));
      await send("New website quote request", fields, { name, email }, attachments);
      res.json({ ok: true, success: true, message: "Thank you. Your quote request has been sent." });
    } catch (error) {
      mailError(error, res);
    }
  });
  router.use((error, _req, res, _next) => {
    if (error instanceof multer.MulterError) {
      return res.status(400).json({ success: false, message: "Attachments must be no more than 5 files, up to 10 MB each." });
    }
    return mailError(error, res);
  });
  return router;
}
