export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-[28px] border border-slate-700/60 bg-slate-950/80 p-8 shadow-surface">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-cyan">Reports</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Enterprise summaries for EV network planning.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">Export structured data and executive summaries for stakeholder review and board-ready decision support.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button className="rounded-2xl border border-slate-700/80 bg-slate-900/80 px-4 py-3 text-sm font-semibold text-slate-100 transition duration-200 hover:bg-slate-800">Generate PDF</button>
            <button className="rounded-2xl border border-slate-700/80 bg-slate-900/80 px-4 py-3 text-sm font-semibold text-slate-100 transition duration-200 hover:bg-slate-800">Export CSV</button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-[28px] border border-slate-700/60 bg-slate-950/80 p-8 shadow-surface">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Infrastructure Summary</p>
          <p className="mt-4 text-xl font-semibold text-white">Station coverage and network readiness.</p>
          <p className="mt-3 text-sm leading-6 text-slate-300">Capture the current network footprint, identify gaps, and prioritize sites for planned rollout.</p>
        </div>
        <div className="rounded-[28px] border border-slate-700/60 bg-slate-950/80 p-8 shadow-surface">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Demand Analysis Summary</p>
          <p className="mt-4 text-xl font-semibold text-white">Predictive utilization and regional demand.</p>
          <p className="mt-3 text-sm leading-6 text-slate-300">Trend breakdown of charging activity, daily demand spikes, and market readiness for expansion.</p>
        </div>
        <div className="rounded-[28px] border border-slate-700/60 bg-slate-950/80 p-8 shadow-surface">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Investment Opportunity Summary</p>
          <p className="mt-4 text-xl font-semibold text-white">ROI and payback expectations.</p>
          <p className="mt-3 text-sm leading-6 text-slate-300">Clear insight into financial performance, risk posture, and opportunity prioritization for funding rounds.</p>
        </div>
      </div>
    </div>
  );
}
