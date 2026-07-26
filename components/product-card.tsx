import Link from "next/link";
import { FileCheck2 } from "lucide-react";
import type { Product } from "@/lib/products";
import { priceLabel } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group flex flex-col rounded-lg border border-slate-200 bg-white p-5 transition-colors hover:border-slate-400"
    >
      <div className="mb-4 flex h-32 items-center justify-center rounded-md bg-slate-50 text-slate-300">
        <span className="font-mono text-xs tracking-wide text-slate-400">{product.sku}</span>
      </div>
      <p className="text-sm font-semibold leading-snug text-slate-900">{product.name}</p>
      <p className="mt-1 text-xs text-slate-500">
        {product.variants.map((v) => v.label).join(" · ")}
      </p>
      <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-slate-500">
        <FileCheck2 className="h-3.5 w-3.5" />
        Lot documentation available
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
        <span className="text-sm font-semibold text-slate-900">{priceLabel(product)}</span>
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-600 group-hover:text-slate-900">
          View Documentation →
        </span>
      </div>
    </Link>
  );
}
