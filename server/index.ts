import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BOT_USER_AGENTS = [
  "googlebot",
  "bingbot",
  "yandexbot",
  "duckduckbot",
  "slurp",
  "baiduspider",
  "facebookexternalhit",
  "twitterbot",
  "linkedinbot",
  "whatsapp",
  "telegrambot",
  "applebot",
  "gptbot",
  "chatgpt-user",
  "perplexitybot",
  "claudebot",
  "google-extended",
  "anthropic-ai",
  "cohere-ai",
];

function isBot(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return BOT_USER_AGENTS.some((bot) => ua.includes(bot));
}

function generateMetaHTML(route: string, staticPath: string): string {
  const baseHTML = fs.readFileSync(
    path.join(staticPath, "index.html"),
    "utf-8",
  );

  const pageData: Record<string, { title: string; description: string }> = {
    "/": {
      title:
        "J3 Cargo | UK to Nigeria Shipping — Fast, Reliable, Stress-Free",
      description:
        "J3 Cargo offers fast, reliable air freight and sea freight shipping from the UK to Nigeria. Free London collection, customs clearance, and door-to-door delivery to all 36 Nigerian states. Air freight from £65.",
    },
    "/about": {
      title: "About J3 Cargo — UK to Nigeria Shipping Experts",
      description:
        "Learn about J3 Cargo Services, a trusted UK-based cargo company specialising in air freight and sea freight shipping from London to Nigeria. Based in Bow, East London.",
    },
    "/services": {
      title: "Shipping Services — Air Freight & Sea Freight UK to Nigeria",
      description:
        "J3 Cargo shipping services: air freight (5-7 days, from £65), sea freight (4-6 weeks), professional packaging, and customs clearance. Free London collection.",
    },
    "/routes": {
      title: "Shipping Routes — UK, China & USA to Nigeria",
      description:
        "J3 Cargo international shipping routes: UK to Nigeria, China to Nigeria, USA to Nigeria. Air freight and sea freight options with competitive pricing.",
    },
    "/rates": {
      title: "Shipping Rates — UK to Nigeria Pricing by State",
      description:
        "Transparent shipping rates from UK to Nigeria. Per-kg pricing for all 36 Nigerian states. Air freight from £65. Fixed prices for TVs, laptops, appliances.",
    },
    "/track": {
      title: "Track Your Shipment — J3 Cargo",
      description:
        "Track your J3 Cargo shipment in real time. Enter your tracking number to see the status of your UK to Nigeria delivery.",
    },
    "/faq": {
      title: "FAQ — UK to Nigeria Shipping Questions Answered",
      description:
        "Frequently asked questions about shipping from UK to Nigeria. Delivery times, pricing, customs clearance, prohibited items, tracking, and insurance.",
    },
    "/blog": {
      title: "Blog — UK to Nigeria Shipping Guides & Tips",
      description:
        "Expert guides on shipping from UK to Nigeria. Air freight vs sea freight, customs clearance, prohibited items, costs, and delivery times.",
    },
    "/contact": {
      title: "Contact J3 Cargo — Get a Shipping Quote",
      description:
        "Contact J3 Cargo for a free shipping quote. Call +44 78 2371 8667, email info@j3cargo.com, or visit us at 429-431 Wick Lane, Bow, London.",
    },
  };

  const page = pageData[route] || pageData["/"]!;

  let html = baseHTML.replace(
    /<title>.*?<\/title>/,
    `<title>${page.title}</title>`,
  );
  html = html.replace(
    /<meta name="description" content=".*?" \/>/,
    `<meta name="description" content="${page.description}" />`,
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "J3 Cargo Services",
    url: "https://j3cargo.com",
    logo: "https://j3cargo.com/logo.png",
    description:
      "UK to Nigeria shipping specialists offering air freight and sea freight services with door-to-door delivery to all 36 Nigerian states.",
    telephone: "+44 78 2371 8667",
    email: "info@j3cargo.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "429-431 Wick Lane",
      addressLocality: "Bow",
      addressRegion: "London",
      addressCountry: "GB",
    },
    sameAs: [
      "https://www.instagram.com/j3cargo/",
      "https://www.facebook.com/J3CargoServices/",
    ],
  };

  const noscriptContent = `
    <noscript>
      <h1>${page.title}</h1>
      <p>${page.description}</p>
      <h2>J3 Cargo Services — UK to Nigeria Shipping</h2>
      <p>Air freight from £65, delivery in 5-7 working days. Sea freight 4-6 weeks. Free London collection. Door-to-door delivery to all 36 Nigerian states.</p>
      <h3>Services</h3>
      <ul>
        <li>Air Freight — 5-7 working days to Lagos, from £65 up to 8kg</li>
        <li>Sea Freight — 4-6 weeks, full or shared containers</li>
        <li>Professional Packaging — free at our London warehouse</li>
        <li>Customs Clearance — licensed agents, 2-day air freight clearing</li>
      </ul>
      <h3>Contact</h3>
      <p>Phone: +44 78 2371 8667 | Email: info@j3cargo.com | Address: 429-431 Wick Lane, Bow, London</p>
    </noscript>`;

  html = html.replace(
    "</head>",
    `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>\n</head>`,
  );
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root"></div>${noscriptContent}`,
  );

  return html;
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  app.get("*", (req, res) => {
    const userAgent = req.headers["user-agent"] || "";

    if (isBot(userAgent)) {
      const html = generateMetaHTML(req.path, staticPath);
      res.set("Content-Type", "text/html");
      res.send(html);
    } else {
      res.sendFile(path.join(staticPath, "index.html"));
    }
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
