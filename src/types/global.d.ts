export {};

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
    lintrk: (action: string, payload: Record<string, any>) => void;
  }
}
