import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { QualifiedBuyerGate } from "@/components/qualified-buyer-gate";

export const metadata: Metadata = {
  title: "American Peptide Research | Analytical-Grade Laboratory Reference Materials",
  description:
    "Analytical-grade biochemical reference standards and laboratory research materials for qualified research customers. In-vitro research use only. Not for human or animal consumption.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white font-sans text-slate-900 antialiased">
        <QualifiedBuyerGate />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
