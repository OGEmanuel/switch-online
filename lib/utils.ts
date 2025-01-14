import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function preloadGifs(): Promise<void[]> {
  const gifUrls: string[] = [
    "/yt.webp",
    "/tao.webp",
    "/isbaeu.webp",
    "/insta.webp",
    "/facebook.webp",
    "/enioluwa.webp",
    // Add more URLs as needed
  ];

  const preloadPromises: Promise<void>[] = gifUrls.map(
    (url) =>
      new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () =>
          reject(new Error(`Failed to preload image: ${url}`));
        img.src = url;
      })
  );

  return Promise.all(preloadPromises);
}
