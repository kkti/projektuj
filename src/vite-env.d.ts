/// <reference types="vite/client" />

/* (volitelné) – když chceš mít proměnné vypsané explicitně: */
interface ImportMetaEnv {
  readonly BASE_URL: string;
  readonly MODE: string;
  readonly DEV: boolean;
  readonly PROD: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
