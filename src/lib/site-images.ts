import { useEffect, useState } from "react";
let config: Record<string, string> | undefined;
let loading: Promise<Record<string, string>> | undefined;
function getImages() {
  if (config) return Promise.resolve(config);
  loading ||= fetch("/api/site-images").then((r) => r.ok ? r.json() : {}).catch(() => ({}));
  return loading.then((images) => (config = images));
}
export function useSiteImage(slot: string, fallback: string) {
  const [src, setSrc] = useState(() => config?.[slot] || fallback);
  useEffect(() => { getImages().then((images) => setSrc(images[slot] || fallback)); }, [slot, fallback]);
  return src;
}