import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Box & Beyond | Premium Moving, Without the Chaos",
  description: "Box & Beyond is a premium, end-to-end moving partner for people who value ease, care, and professionalism in Dubai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
