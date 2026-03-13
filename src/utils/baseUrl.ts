/**
 * BASE resolver funguje ve Vite i na GitHub Pages.
 * Priorita: env.BASE_URL -> <base href> -> document.baseURI -> "/"
 */
function ensureTrailingSlash(path: string): string {
  return path.endsWith("/") ? path : `${path}/`;
}

type ImportMetaEnvLike = {
  BASE_URL?: string;
};

export function computeBaseUrl(
  env: ImportMetaEnvLike | undefined,
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
  const env = import.meta.env as ImportMetaEnvLike | undefined;
  const baseTagHref =
    typeof document !== "undefined"
      ? document.querySelector("base")?.getAttribute("href") ?? null
      : null;
  const baseURI = typeof document !== "undefined" ? document.baseURI : null;

  return computeBaseUrl(env, baseTagHref, baseURI);
}

export const BASE = getBaseUrl();
