import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LearnOS — Student Dashboard",
  description: "Next-gen learning dashboard powered by Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-bg-base min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
