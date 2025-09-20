// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Anuecthing",
  description: "ANU resources at your fingertips.",
  metadataBase: new URL("https://example.com"), // <-- update later
  openGraph: {
    title: "Anuecthing",
    description: "Find events, courses, and campus resources faster.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="body">
        {/* Skip link for keyboard users */}
        <a href="#main" className="skip-link">Skip to main content</a>

        <div className="page">
          <Navbar />
          <main id="main" role="main" className="main">
            {children}
          </main>

          <footer role="contentinfo" className="footer">
            © {new Date().getFullYear()} Anuecthing
          </footer>
        </div>
      </body>
    </html>
  );
}
