interface PolicySection {
  heading: string;
  body: string[];
}

export function PolicyPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  sections: PolicySection[];
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{eyebrow}</p>
      <h1 className="mt-2 font-serif text-3xl font-semibold text-slate-900">{title}</h1>
      {intro && <p className="mt-4 text-sm leading-relaxed text-slate-600">{intro}</p>}

      <div className="mt-8 space-y-8">
        {sections.map((s) => (
          <div key={s.heading}>
            <h2 className="font-serif text-lg font-semibold text-slate-900">{s.heading}</h2>
            <div className="mt-2 space-y-2">
              {s.body.map((p, i) => (
                <p key={i} className="text-sm leading-relaxed text-slate-600">
                  {p}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
