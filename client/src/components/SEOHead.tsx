import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  type?: "website" | "article";
  image?: string;
  publishedDate?: string;
  noindex?: boolean;
}

const BASE_URL = "https://j3cargo.com";

export default function SEOHead({
  title,
  description,
  path,
  keywords,
  type = "website",
  image,
  publishedDate,
  noindex = false,
}: SEOHeadProps) {
  const fullTitle = path === "/" ? title : `${title} | J3 Cargo`;
  const url = `${BASE_URL}${path}`;
  const ogImage = image || `${BASE_URL}/logo.png`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="J3 Cargo Services" />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Geo targeting */}
      <meta name="geo.region" content="GB-LND" />
      <meta name="geo.placename" content="London" />

      {/* Article-specific */}
      {type === "article" && publishedDate && (
        <meta property="article:published_time" content={publishedDate} />
      )}
    </Helmet>
  );
}
