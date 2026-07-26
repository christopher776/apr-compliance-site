"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

const STORAGE_KEY = "apr_qualified_buyer_ack_v1";

export function QualifiedBuyerGate() {
  const [visible, setVisible] = useState(false);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const ack = window.localStorage.getItem(STORAGE_KEY);
    if (!ack) setVisible(true);
  }, []);

  function handleConfirm() {
    window.localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  function handleDecline() {
    setBlocked(true);
  }

  if (!visible && !blocked) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-8 shadow-2xl">
        <div className="mb-4 flex items-center gap-2 text-slate-700">
          <ShieldCheck className="h-5 w-5" strokeWidth={1.75} />
          <span className="text-xs font-semibold uppercase tracking-wide">Qualified Research Access</span>
        </div>

        {blocked ? (
          <>
            <h2 className="font-serif text-xl font-semibold text-slate-900">Access restricted</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              This site is restricted to qualified research professionals, age 21 and older, purchasing
              analytical-grade reference materials for laboratory research use only. If this describes you, you may
              acknowledge the statement below to continue.
            </p>
            <Button variant="outline" className="mt-6 w-full" onClick={() => setBlocked(false)}>
              Return to acknowledgment
            </Button>
          </>
        ) : (
          <>
            <h2 className="font-serif text-xl font-semibold text-slate-900">Before you continue</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              This site supplies analytical-grade biochemical reference standards and laboratory research materials
              for qualified research customers only. By continuing, you confirm that you are at least 21 years of
              age and a qualified research professional, and that you understand:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-600">
              <li>All materials are strictly for in-vitro laboratory research use only.</li>
              <li>No dosage, administration, or use-in-humans information is provided on this site.</li>
              <li>You accept the site&#39;s Terms of Sale and Compliance Policy.</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <Button className="flex-1 bg-slate-900 hover:bg-slate-800" onClick={handleConfirm}>
                Yes, I qualify
              </Button>
              <Button variant="outline" className="flex-1" onClick={handleDecline}>
                No
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
