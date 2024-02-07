/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CLIENT_ID: string;
  readonly VITE_REDIRECT_URI: string;
  readonly VITE_VK_API_KEY: string;
  readonly VITE_BACKEND_HOST: string;
}

interface ImportMeta {
  readonly localEnv: ImportMetaEnv;
}
