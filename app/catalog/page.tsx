"use client";

import { Suspense, useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { products, categories } from "@/lib/products";
import { cn } from "@/lib/utils";

function CatalogInner() {
  const searchParams = useSearchParams();
  const initial = searchParams.get("category") || "all";
  const [active, setActive] = useState(initial);

  useEffect(() => {
    setActive(searchParams.get("category") || "all");
  }, [searchParams]);

  const filtered = useMemo(() => {
    if (active === "all") return products;
    return products.filter((p) => p.category === active);
  }, [active]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Catalog</p>
      <h1 className="mt-2 font-serif text-3xl font-semibold text-slate-900">Reference Materials</h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
        Analytical-grade biochemical reference standards for qualified laboratory research customers. Lot-level
        documentation and Certificate of Analysis access are available for every material listed below.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c.slug}
            onClick={() => setActive(c.slug)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors",
              active === c.slug
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-300 text-slate-600 hover:border-slate-500 hover:text-slate-900"
            )}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-10 text-sm text-slate-500">No reference materials found in this category.</p>
      )}
    </div>
  );
}

export default function CatalogPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-6xl px-6 py-12 text-sm text-slate-500">Loading catalog…</div>}>
      <CatalogInner />
    </Suspense>
  );
}
