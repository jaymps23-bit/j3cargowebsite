import { Helmet } from "react-helmet-async";
import { BUSINESS, FAQ_DATA } from "@/lib/constants";

function JsonLd({ data }: { data: object }) {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "J3 Cargo Services",
    url: "https://j3cargo.com",
    logo: "https://j3cargo.com/logo.png",
    description:
      "UK to Nigeria shipping specialists offering air freight and sea freight services with door-to-door delivery to all 36 Nigerian states.",
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "429-431 Wick Lane",
      addressLocality: "Bow",
      addressRegion: "London",
      addressCountry: "GB",
    },
    sameAs: [BUSINESS.instagram, BUSINESS.facebook],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BUSINESS.phone,
        contactType: "customer service",
        availableLanguage: ["English"],
      },
    ],
  };
  return <JsonLd data={data} />;
}

export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://j3cargo.com/#business",
    name: "J3 Cargo Services",
    image: "https://j3cargo.com/logo.png",
    url: "https://j3cargo.com",
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "429-431 Wick Lane",
      addressLocality: "Bow",
      addressRegion: "London",
      postalCode: "E3",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.5295,
      longitude: -0.0157,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "££",
    areaServed: [
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Nigeria" },
    ],
    serviceType: [
      "Air Freight Shipping",
      "Sea Freight Shipping",
      "Cargo Packaging",
      "Customs Clearance",
    ],
  };
  return <JsonLd data={data} />;
}

export function FAQSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  return <JsonLd data={data} />;
}

export function ServiceSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "Organization",
      name: "J3 Cargo Services",
      url: "https://j3cargo.com",
    },
    serviceType: "Freight Shipping",
    name: "UK to Nigeria Shipping",
    description:
      "Air freight and sea freight shipping from the UK to Nigeria with free London collection, customs clearance, and door-to-door delivery.",
    areaServed: [
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Nigeria" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Shipping Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Air Freight UK to Nigeria",
            description:
              "Fast air freight shipping from UK to Nigeria in 5-7 working days",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "65.00",
            priceCurrency: "GBP",
            description: "Flat rate for parcels up to 8kg",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sea Freight UK to Nigeria",
            description:
              "Cost-effective sea freight for large shipments, 4-6 weeks delivery",
          },
        },
      ],
    },
  };
  return <JsonLd data={data} />;
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://j3cargo.com${item.url}`,
    })),
  };
  return <JsonLd data={data} />;
}

export function ArticleSchema({
  title,
  description,
  slug,
  datePublished,
  image,
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  image: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image,
    url: `https://j3cargo.com/blog/${slug}`,
    datePublished,
    author: {
      "@type": "Organization",
      name: "J3 Cargo Services",
      url: "https://j3cargo.com",
    },
    publisher: {
      "@type": "Organization",
      name: "J3 Cargo Services",
      logo: {
        "@type": "ImageObject",
        url: "https://j3cargo.com/logo.png",
      },
    },
  };
  return <JsonLd data={data} />;
}
