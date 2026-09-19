function normalizeUrl(value: string): string {
  const trimmed = value.trim().replace(/\/$/, "");
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }
  return `https://${trimmed}`;
}

export function getSiteUrl(): string | undefined {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit?.trim()) {
    return normalizeUrl(explicit);
  }

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProduction?.trim()) {
    return normalizeUrl(vercelProduction);
  }

  const vercel = process.env.VERCEL_URL;
  if (vercel?.trim()) {
    return normalizeUrl(vercel);
  }

  return undefined;
}

export const siteUrl = getSiteUrl();
