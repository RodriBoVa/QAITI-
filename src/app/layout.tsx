import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QAITI – Qatar Artificial Intelligence & Technology Initiative",
  description: "Preparing the Human Mind for the AI Era. A national AI and technology preparedness platform designed to equip students, empower teachers, and build the human capability required for the age of artificial intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
