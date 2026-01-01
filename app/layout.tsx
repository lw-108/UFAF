import type { Metadata } from "next";
import { garet, leagueSpartan, nsec } from "./fonts";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "U-Fill Academy",
  description: "Empowering the future — Fill your knowledge, fill your future",
  icons: [
    {
      url: "https://i.ibb.co/bSvPxfM/noto-serif-bold.webp", // Your PNG file
      type: "image/png",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${garet.variable} ${leagueSpartan.variable} ${nsec.variable}`}>
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}