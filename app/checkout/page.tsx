"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { getProduct, priceLabel } from "@/lib/products";
import { CHECKOUT_ACKNOWLEDGMENT, RETATRUTIDE_ACKNOWLEDGMENT } from "@/lib/brand";

function CheckoutInner() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("product");
  const product = slug ? getProduct(slug) : undefined;
  const [checked, setChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const acknowledgment = product?.isRetatrutide ? RETATRUTIDE_ACKNOWLEDGMENT : CHECKOUT_ACKNOWLEDGMENT;

  if (submitted) {
    return (
      <div className="mx-auto max-w-lg px-6 py-24 text-center">
        <CheckCircle className="mx-auto h-10 w-10 text-emerald-600" strokeWidth={1.5} />
        <h1 className="mt-4 font-serif text-2xl font-semibold text-slate-900">Research order recorded</h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          Your qualified-research-use acknowledgment has been logged with this demo order. In production, this step
          hands off to the payment processor&#39;s server checkout flow after the acknowledgment is captured.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-14">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Checkout</p>
      <h1 className="mt-2 font-serif text-2xl font-semibold text-slate-900">Complete Research Order</h1>

      <div className="mt-6 rounded-lg border border-slate-200 p-5">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-slate-800">{product ? product.name : "Reference Material Order"}</span>
          <span className="font-semibold text-slate-900">{product ? priceLabel(product) : "—"}</span>
        </div>
        <p className="mt-1 text-xs text-slate-500">
          {product ? product.sku : "Select a reference material from the catalog to populate this demo order."}
        </p>
      </div>

      <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-5">
        <div className="flex items-start gap-3">
          <Checkbox id="ack" checked={checked} onCheckedChange={(v) => setChecked(v === true)} className="mt-0.5" />
          <label htmlFor="ack" className="text-sm leading-relaxed text-slate-700">
            {acknowledgment}
          </label>
        </div>
      </div>

      <p className="mt-3 text-xs text-slate-500">
        Age and qualified-research-professional status were confirmed on entry to this site. This checkout
        acknowledgment is a required, separate control and is logged with the order record.
      </p>

      <Button
        disabled={!checked}
        onClick={() => setSubmitted(true)}
        className="mt-6 w-full bg-slate-900 hover:bg-slate-800 disabled:opacity-40"
      >
        Submit Research Order
      </Button>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-2xl px-6 py-14 text-sm text-slate-500">Loading…</div>}>
      <CheckoutInner />
    </Suspense>
  );
}
