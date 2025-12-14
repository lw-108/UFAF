// app/fonts.ts
import localFont from "next/font/local";

export const garet = localFont({
  src: [
    {
      path: "../public/fonts/garet.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-garet",
});

export const leagueSpartan = localFont({
  src: [
    {
      path: "../public/fonts/LeagueSpartan.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-league",
});

export const nsec = localFont({
  src: [
    {
      path: "../public/fonts/NSEC.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-nsec",
});
