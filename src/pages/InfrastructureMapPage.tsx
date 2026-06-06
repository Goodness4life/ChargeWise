const locations = [
  { name: 'Lekki', score: 92, gap: 'High', priority: 'Critical' },
  { name: 'Ikeja', score: 88, gap: 'Medium', priority: 'High' },
  { name: 'Yaba', score: 84, gap: 'Medium', priority: 'High' },
  { name: 'Ajah', score: 76, gap: 'High', priority: 'Medium' },
  { name: 'Victoria Island', score: 89, gap: 'Low', priority: 'High' },
];

export default function InfrastructureMapPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[0.67fr_0.33fr]">
      <div className="rounded-[28px] border border-slate-700/60 bg-slate-950/80 p-6 shadow-surface">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.24em] text-cyan">Infrastructure Map</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Spatial intelligence for strategic station placement.</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">Map-style planning view showing deployment readiness and priority locations for the next expansion phase.</p>
        </div>
        <div className="relative h-72 overflow-hidden rounded-[28px] border border-slate-700/70 bg-slate-900/80 sm:h-[420px] lg:h-[560px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.18),transparent_20%),radial-gradient(circle_at_80%_30%,rgba(6,182,212,0.18),transparent_18%),linear-gradient(135deg,#0b1220_0%,#111827_100%)]" />
          <div className="absolute inset-0 opacity-90">
            <div className="absolute left-12 top-12 h-12 w-12 rounded-full bg-cyan/20" />
            <div className="absolute right-20 top-28 h-16 w-16 rounded-full bg-accent/20" />
            <div className="absolute left-24 bottom-24 h-20 w-20 rounded-full bg-emerald/20" />
            <div className="absolute inset-x-10 top-56 h-0.5 bg-slate-600/40" />
            <div className="absolute inset-y-24 left-48 w-0.5 bg-slate-600/40" />
            <div className="absolute inset-x-24 bottom-40 h-0.5 bg-slate-600/40" />
          </div>
          <div className="absolute left-10 top-10 space-y-6">
            {locations.slice(0, 3).map((location) => (
              <div key={location.name} className="flex items-center gap-3 rounded-3xl bg-slate-900/95 px-4 py-3 text-sm text-slate-200 shadow-lg">
                <div className="h-3 w-3 rounded-full bg-cyan" />
                <div>
                  <p className="font-semibold text-white">{location.name}</p>
                  <p className="text-slate-400">Score {location.score}%</p>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute right-10 bottom-10 space-y-6 text-right">
            {locations.slice(3).map((location) => (
              <div key={location.name} className="flex items-center justify-end gap-3 rounded-3xl bg-slate-900/95 px-4 py-3 text-sm text-slate-200 shadow-lg">
                <div>
                  <p className="font-semibold text-white">{location.name}</p>
                  <p className="text-slate-400">Priority {location.priority}</p>
                </div>
                <div className="h-3 w-3 rounded-full bg-accent" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="rounded-[28px] border border-slate-700/60 bg-slate-950/80 p-6 shadow-surface">
          <p className="text-sm uppercase tracking-[0.24em] text-cyan">Portfolio insights</p>
          <div className="mt-6 space-y-5">
            {locations.map((location) => (
              <div key={location.name} className="rounded-3xl border border-slate-700/70 bg-slate-900/80 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-slate-600/80">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-lg font-semibold text-white">{location.name}</p>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate-400">{location.priority}</span>
                </div>
                <div className="mt-4 grid gap-3 text-sm text-slate-300">
                  <div className="flex items-center justify-between rounded-2xl bg-slate-950/70 px-4 py-3">
                    <span>Demand score</span>
                    <span>{location.score}%</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-slate-950/70 px-4 py-3">
                    <span>Readiness gap</span>
                    <span>{location.gap}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-slate-950/70 px-4 py-3">
                    <span>Deployment priority</span>
                    <span>{location.priority}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
