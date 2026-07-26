import { Mail, Phone, Clock, Building } from "lucide-react";
import { LEGAL_ENTITY, SUPPORT_EMAIL, SUPPORT_PHONE, SUPPORT_HOURS } from "@/lib/brand";

const items = [
  { icon: Building, label: "Legal Entity", value: LEGAL_ENTITY },
  { icon: Mail, label: "Support Email", value: SUPPORT_EMAIL },
  { icon: Phone, label: "Support Phone", value: SUPPORT_PHONE },
  { icon: Clock, label: "Support Hours", value: SUPPORT_HOURS },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-14">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Support</p>
      <h1 className="mt-2 font-serif text-3xl font-semibold text-slate-900">Contact & Support</h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">
        Support is available by email and phone for order status, documentation requests, and account questions
        from qualified research customers.
      </p>

      <div className="mt-8 space-y-4">
        {items.map((i) => (
          <div key={i.label} className="flex items-start gap-3 rounded-lg border border-slate-200 p-4">
            <i.icon className="mt-0.5 h-4 w-4 text-slate-500" strokeWidth={1.75} />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{i.label}</p>
              <p className="mt-0.5 text-sm text-slate-800">{i.value}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 rounded-md bg-amber-50 p-3 text-xs leading-relaxed text-amber-800">
        Developer note: legal entity, address, support email, and phone above are placeholder values for this
        reference build. Replace with verified business information before launch.
      </p>
    </div>
  );
}
