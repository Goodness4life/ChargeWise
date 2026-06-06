const insights = [
  {
    name: 'Lekki',
    roi: '34%',
    payback: '2.8 Years',
    risk: 'Low',
    note: 'Top-ranked for immediate deployment and stable forecasting.',
  },
  {
    name: 'Ikeja',
    roi: '29%',
    payback: '3.1 Years',
    risk: 'Low',
    note: 'Strong business cluster with consistent utilization expectations.',
  },
  {
    name: 'Yaba',
    roi: '26%',
    payback: '3.5 Years',
    risk: 'Medium',
    note: 'Best for growth-stage investment and future demand capture.',
  },
];

export default function InvestmentInsightsPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-[28px] border border-slate-700/60 bg-slate-950/80 p-8 shadow-surface">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-cyan">Investment Opportunity Analysis</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Capital-ready profiles for strategic deployment.</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
              Compare location performance signals, risk posture, and payback expectations to align deployment decisions with investor priorities and capital planning.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {insights.map((item) => (
          <div key={item.name} className="rounded-[28px] border border-slate-700/60 bg-slate-950/80 p-8 shadow-surface transition duration-300 hover:-translate-y-1 hover:border-slate-600/70">
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-white">{item.name}</p>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400">{item.risk} Risk</span>
            </div>
            <p className="mt-4 text-sm text-slate-400">{item.note}</p>
            <div className="mt-8 space-y-4 text-sm text-slate-300">
              <div className="rounded-3xl bg-slate-900/80 p-5">
                <p className="text-slate-500">Projected ROI</p>
                <p className="mt-2 text-2xl font-semibold text-white">{item.roi}</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-5">
                <p className="text-slate-500">Payback Period</p>
                <p className="mt-2 text-2xl font-semibold text-white">{item.payback}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
