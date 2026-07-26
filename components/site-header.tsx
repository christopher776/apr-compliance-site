"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FlaskConical, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/catalog", label: "Catalog" },
  { href: "/documentation", label: "Documentation" },
  { href: "/compliance", label: "Compliance" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <FlaskConical className="h-6 w-6 text-slate-700" strokeWidth={1.75} />
          <span className="font-serif text-lg font-semibold tracking-tight text-slate-900">
            American Peptide Research
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium text-slate-600 transition-colors hover:text-slate-900",
                pathname === item.href && "text-slate-900"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/documentation"
          className="hidden items-center gap-1.5 rounded-md border border-slate-300 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-700 transition-colors hover:border-slate-500 hover:text-slate-900 md:flex"
        >
          <FileText className="h-3.5 w-3.5" />
          Request CoA
        </Link>
      </div>
    </header>
  );
}
