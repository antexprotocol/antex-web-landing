import { SEO_CONFIG } from "../constant";

export const SeoMeta = () => {
  const c = SEO_CONFIG;
  return (
    <>
      {/* 基础 SEO */}
      <title>{c.title}</title>
      <meta name="description" content={c.description} />
      <meta name="robots" content={c.robots} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={c.type} />
      <meta property="og:title" content={c.title} />
      <meta property="og:description" content={c.description} />
      <meta property="og:url" content={c.url} />
      <meta property="og:image" content={c.image} />
      <meta property="og:locale" content={c.locale} />

      {/* Twitter */}
      <meta name="twitter:card" content={c.twitter.card} />
      <meta name="twitter:site" content={c.twitter.site} />
      <meta name="twitter:creator" content={c.twitter.creator} />
      <meta name="twitter:title" content={c.title} />
      <meta name="twitter:description" content={c.description} />
      <meta name="twitter:image" content={c.image} />

      {/* Apple / iOS */}
      <meta name="apple-mobile-web-app-title" content={c.apple.appName} />
      <meta name="apple-itunes-app" content={`app-id=${c.apple.appId}`} />
    </>
  );
};
