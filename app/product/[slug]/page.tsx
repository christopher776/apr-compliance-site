import { notFound } from "next/navigation";
import Link from "next/link";
import { FileCheck2, ShieldAlert, Users, FlaskConical } from "lucide-react";
import { getProduct, priceLabel, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) return notFound();

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        <Link href="/catalog" className="hover:text-slate-900">Catalog</Link> / {product.shortName}
      </p>

      <div className="mt-4 grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.3fr]">
        <div className="flex h-72 items-center justify-center rounded-lg border border-slate-200 bg-slate-50">
          <span className="font-mono text-sm text-slate-400">{product.sku}</span>
        </div>

        <div>
          <h1 className="font-serif text-3xl font-semibold text-slate-900">{product.name}</h1>
          <p className="mt-2 text-sm text-slate-500">
            Analytical-grade biochemical reference material for in-vitro laboratory research only.
          </p>

          <div className="mt-5 flex flex-wrap items-baseline gap-3">
            <span className="text-2xl font-semibold text-slate-900">{priceLabel(product)}</span>
            <span className="text-xs text-slate-500">per unit · qualified research customers only</span>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {product.variants.map((v) => (
              <span
                key={v.label}
                className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700"
              >
                {v.label}
              </span>
            ))}
          </div>

          <Link
            href={`/checkout?product=${product.slug}`}
            className="mt-6 inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Add to Research Order
          </Link>
          <p className="mt-2 text-xs text-slate-500">
            Checkout requires a qualified-research-use acknowledgment before order submission.
          </p>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
        <InfoBlock icon={FlaskConical} title="Intended Use" body={product.intendedUse} />
        <InfoBlock
          icon={Users}
          title="Qualified Customers"
          body="Laboratories, academic researchers, biotech organizations, contract research organizations, or other qualified research customers."
        />
        <InfoBlock icon={FileCheck2} title="Documentation" body={product.documentation} />
        <InfoBlock icon={ShieldAlert} title="Restrictions" body={product.restrictions} />
      </div>

      {product.composition && (
        <div className="mt-10 rounded-lg border border-slate-200 p-6">
          <p className="text-sm font-semibold text-slate-900">Composition</p>
          <table className="mt-4 w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
                <th className="pb-2 pr-4 font-semibold">Compound</th>
                <th className="pb-2 font-semibold">Reference Standard</th>
              </tr>
            </thead>
            <tbody>
              {product.composition.map((c) => (
                <tr key={c.compound} className="border-b border-slate-100 last:border-0">
                  <td className="py-2 pr-4 font-medium text-slate-800">{c.compound}</td>
                  <td className="py-2 text-slate-600">{c.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {product.compositionNote && (
            <p className="mt-4 rounded-md bg-amber-50 p-3 text-xs leading-relaxed text-amber-800">
              {product.compositionNote}
            </p>
          )}
        </div>
      )}

      <div className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-6">
        <p className="text-sm font-semibold text-slate-900">Buyer Acknowledgment</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          By ordering, the buyer confirms qualified research use and agrees not to use this material for human or
          animal consumption or administration. This acknowledgment is required again, in full, at checkout.
        </p>
      </div>
    </div>
  );
}

function InfoBlock({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-lg border border-slate-200 p-5">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-slate-500" strokeWidth={1.75} />
        <p className="text-sm font-semibold text-slate-900">{title}</p>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
    </div>
  );
}
