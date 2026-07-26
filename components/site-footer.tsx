import Link from "next/link";
import { LEGAL_ENTITY, SUPPORT_EMAIL, SUPPORT_PHONE, CORE_DESCRIPTION } from "@/lib/brand";

const columns = [
  {
    title: "Catalog",
    links: [
      { href: "/catalog", label: "All Reference Materials" },
      { href: "/documentation", label: "Documentation & CoA" },
    ],
  },
  {
    title: "Policies",
    links: [
      { href: "/compliance", label: "Compliance Policy" },
      { href: "/terms-of-sale", label: "Terms of Sale" },
      { href: "/shipping-policy", label: "Shipping Policy" },
      { href: "/refund-policy", label: "Refund Policy" },
    ],
  },
  {
    title: "Support",
    links: [{ href: "/contact", label: "Contact" }],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-serif text-base font-semibold text-white">American Peptide Research</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">{CORE_DESCRIPTION}</p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-slate-800 pt-6 text-xs leading-relaxed text-slate-500">
          <p>
            {LEGAL_ENTITY} — Support: {SUPPORT_EMAIL} · {SUPPORT_PHONE}
          </p>
          <p className="mt-2">
            Materials on this site are not intended for human or animal consumption, therapeutic use, clinical use,
            diagnostic use, dietary supplementation, dosing, injection, ingestion, or administration of any kind. Sold
            exclusively to qualified research customers for laboratory research use.
          </p>
        </div>
      </div>
    </footer>
  );
}
