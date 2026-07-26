import Link from "next/link";
import { ClipboardCheck, FlaskConical, ShieldCheck, Truck, ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { CORE_DESCRIPTION } from "@/lib/brand";
import { products, categories } from "@/lib/products";

const signals = [
  { icon: ClipboardCheck, title: "Lot-Level Documentation", body: "Certificate of Analysis and lot records available for every reference material." },
  { icon: ShieldCheck, title: "Qualified-Buyer Checkout", body: "Every order requires a qualified research-use acknowledgment before processing." },
  { icon: FlaskConical, title: "Third-Party Analytical Testing", body: "Independent laboratory testing (Horizon / endotoxin panels) referenced on request." },
  { icon: Truck, title: "USA-Based Supplier", body: "Domestic fulfillment with documented, trackable shipping." },
];

const featuredSlugs = [
  "retatrutide-reference-material",
  "tesamorelin-reference-material",
  "cjc-1295-ipamorelin-reference-blend",
  "nad-reference-material",
  "bpc-157-reference-material",
  "ghk-cu-reference-material",
];

export default function HomePage() {
  const featured = products.filter((p) => featuredSlugs.includes(p.slug));

  return (
    <div>
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Laboratory Research Materials Supplier
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
            Analytical-grade biochemical reference standards for qualified laboratory research.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600">{CORE_DESCRIPTION}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              View Catalog <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/documentation"
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-500 hover:text-slate-900"
            >
              Request Documentation
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {signals.map((s) => (
            <div key={s.title} className="rounded-lg border border-slate-200 p-5">
              <s.icon className="h-5 w-5 text-slate-500" strokeWidth={1.75} />
              <p className="mt-3 text-sm font-semibold text-slate-900">{s.title}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-2xl font-semibold text-slate-900">Reference Material Categories</h2>
          <Link href="/catalog" className="text-sm font-semibold text-slate-600 hover:text-slate-900">
            View all →
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {categories
            .filter((c) => c.slug !== "all")
            .map((c) => (
              <Link
                key={c.slug}
                href={`/catalog?category=${c.slug}`}
                className="rounded-lg border border-slate-200 p-4 text-center text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
              >
                {c.label}
              </Link>
            ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-2xl font-semibold text-slate-900">Frequently Ordered Reference Materials</h2>
          <Link href="/catalog" className="text-sm font-semibold text-slate-600 hover:text-slate-900">
            View catalog →
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="rounded-xl border border-slate-200 bg-white p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Compliance Statement</p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
              Every material listed on this site is sold exclusively to qualified research customers — laboratories,
              academic researchers, biotech organizations, and contract research organizations — for in-vitro
              research, analytical method development, identity verification, and laboratory evaluation only. Read
              our full Compliance Policy for qualified-buyer requirements, prohibited uses, and documentation
              standards.
            </p>
            <Link href="/compliance" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
              Read the Compliance Policy <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
