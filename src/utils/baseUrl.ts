/**
 * BASE resolver (funguje ve Vite i sandboxu).
 * Priorita: env.BASE_URL -> <base href> -> document.baseURI -> "/"
 * Vrací vždy s trailing slashem.
 */
function ensureTrailingSlash(path: string): string {
  return path.endsWith("/") ? path : `${path}/`;
}

export function computeBaseUrl(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  env: any,
  baseHref: string | null,
  baseURI: string | null
): string {
  const fromEnv = env?.BASE_URL;
  if (typeof fromEnv === "string" && fromEnv.length > 0) {
    return ensureTrailingSlash(fromEnv);
  }
  const href = baseHref ?? baseURI ?? "/";
  try {
    const url = new URL(
      href,
      typeof window !== "undefined" ? window.location.origin : "http://localhost"
    );
    return ensureTrailingSlash(url.pathname || "/");
  } catch {
    return "/";
  }
}

export function getBaseUrl(): string {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const env = (import.meta as any)?.env;
  const baseTagHref =
    typeof document !== "undefined"
      ? document.querySelector("base")?.getAttribute("href") ?? null
      : null;
  const baseURI = typeof document !== "undefined" ? document.baseURI : null;
  return computeBaseUrl(env, baseTagHref, baseURI);
}

/** DŮLEŽITÉ: BASE pro obrázky na GitHub Pages (/projektuj/) i v sandboxu */
export const BASE = getBaseUrl();
