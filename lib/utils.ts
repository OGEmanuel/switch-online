import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import gif1 from "../public/yt.webp";
import gif2 from "../public/tao.webp";
import gif3 from "../public/isbaeu.webp";
import gif4 from "../public/insta.webp";
import gif5 from "../public/facebook.webp";
import gif6 from "../public/enioluwa.webp";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export function preloadGifs(): Promise<void[]> {
//   const gifUrls: string[] = [
//     "/yt.webp",
//     "/tao.webp",
//     "/isbaeu.webp",
//     "/insta.webp",
//     "/facebook.webp",
//     "/enioluwa.webp",
//     // Add more URLs as needed
//   ];

//   const preloadPromises: Promise<void>[] = gifUrls.map(
//     (url) =>
//       new Promise<void>((resolve, reject) => {
//         const img = new Image();
//         img.onload = () => resolve();
//         img.onerror = () =>
//           reject(new Error(`Failed to preload image: ${url}`));
//         img.src = url;
//       })
//   );

//   return Promise.all(preloadPromises);
// }
