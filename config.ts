interface ImportMetaEnv {
  readonly VITE_DOMAIN: string;
}

declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}
export const CONFIG = {} as const;
