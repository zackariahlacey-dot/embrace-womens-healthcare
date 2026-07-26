import type { NextConfig } from "next";
import path from "path";

/**
 * Content Security Policy — tuned for this site:
 *   - 'unsafe-inline' on script-src: required for Next.js hydration data (__NEXT_DATA__ etc.)
 *   - 'unsafe-eval' on script-src: kept in dev for HMR; harmless in prod for this static-ish site
 *   - 'unsafe-inline' on style-src: required by Framer Motion (runtime inline styles) and Google Fonts stylesheet
 *   - cdn.jotfor.ms: JotForm embed handler script
 *   - hipaa.jotform.com / www.jotform.com: JotForm iframe + XHR
 *   - fonts.googleapis.com / fonts.gstatic.com: Google Fonts
 *   - images.unsplash.com: allow-listed image host (matches next.config images.remotePatterns)
 */
const cspDirectives = [
  "default-src 'self'",
  // Scripts: self + JotForm CDNs + Google reCAPTCHA (JotForm uses it for spam protection)
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.jotform.com https://*.jotfor.ms https://www.google.com https://www.gstatic.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.jotform.com https://*.jotfor.ms",
  "font-src 'self' data: https://fonts.gstatic.com https://*.jotform.com https://*.jotfor.ms",
  // Images: allow-listed hosts + JotForm-hosted user uploads + data URIs for inline SVG
  "img-src 'self' data: blob: https://images.unsplash.com https://*.jotform.com https://*.jotfor.ms https://www.google.com https://www.gstatic.com",
  // Frames: JotForm form iframe + nested reCAPTCHA iframe + JotForm success/redirect pages on any subdomain
  "frame-src 'self' https://*.jotform.com https://*.jotfor.ms https://www.google.com https://recaptcha.google.com",
  // XHR/fetch: JotForm submission + reCAPTCHA verification
  "connect-src 'self' https://*.jotform.com https://*.jotfor.ms https://www.google.com https://www.gstatic.com",
  // Media (in case JotForm embeds any audio/video widgets)
  "media-src 'self' https://*.jotform.com https://*.jotfor.ms",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self' https://*.jotform.com https://*.jotfor.ms",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: cspDirectives },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Permissions-Policy",
    value:
      'camera=(self "https://hipaa.jotform.com"), microphone=(self "https://hipaa.jotform.com"), geolocation=(self "https://hipaa.jotform.com"), payment=(self "https://hipaa.jotform.com"), interest-cohort=(), browsing-topics=()',
  },
];

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/sliding-scale",
        destination: "/fee-schedule",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
