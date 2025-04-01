import "@/app/styles.css";

import type { Metadata } from "next";

import { roboto } from "@/app/fonts";
import { cn } from "@/shared/utils";

export const metadata: Metadata = {
  title: "Posts",
  description: "Posts page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("font-sans bg-white", roboto.variable, roboto.className)}
      >
        {children}
      </body>
    </html>
  );
}
