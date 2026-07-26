import { FileCheck2, Mail } from "lucide-react";
import { SUPPORT_EMAIL } from "@/lib/brand";

const sampleRows = [
  { test: "Identity (HPLC)", method: "Reverse-phase HPLC", result: "Conforms" },
  { test: "Purity", method: "HPLC-UV", result: "≥ 98%" },
  { test: "Endotoxin", method: "LAL kinetic chromogenic", result: "Within lab reference range" },
  { test: "Mass Confirmation", method: "LC-MS", result: "Conforms to expected mass" },
];

export default function DocumentationPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Documentation</p>
      <h1 className="mt-2 font-serif text-3xl font-semibold text-slate-900">Certificates of Analysis &amp; Lot Documentation</h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">
        Every reference material listed in our catalog is supported by lot-level documentation, including a
        Certificate of Analysis (CoA) generated from independent analytical testing. CoAs are made available to
        qualified research customers on request.
      </p>

      <div className="mt-8 rounded-lg border border-slate-200 p-6">
        <div className="flex items-center gap-2">
          <FileCheck2 className="h-4 w-4 text-slate-500" strokeWidth={1.75} />
          <p className="text-sm font-semibold text-slate-900">Sample Certificate of Analysis — Illustrative</p>
        </div>
        <table className="mt-4 w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
              <th className="pb-2 pr-4 font-semibold">Test</th>
              <th className="pb-2 pr-4 font-semibold">Method</th>
              <th className="pb-2 font-semibold">Result</th>
            </tr>
          </thead>
          <tbody>
            {sampleRows.map((r) => (
              <tr key={r.test} className="border-b border-slate-100 last:border-0">
                <td className="py-2 pr-4 font-medium text-slate-800">{r.test}</td>
                <td className="py-2 pr-4 text-slate-600">{r.method}</td>
                <td className="py-2 text-slate-600">{r.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-4 rounded-md bg-amber-50 p-3 text-xs leading-relaxed text-amber-800">
          Developer note: replace this illustrative table with the current, lot-specific CoA data (or an embedded
          PDF/document link) before launch.
        </p>
      </div>

      <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-6">
        <p className="text-sm font-semibold text-slate-900">Request a Certificate of Analysis</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Email the product name and lot number to our documentation team and we will send the current CoA on file.
        </p>
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="mt-4 inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
        >
          <Mail className="h-4 w-4" />
          Email Documentation Team
        </a>
      </div>
    </div>
  );
}
