import DemandBarChart from './charts/DemandBarChart';
import InvestmentPieChart from './charts/InvestmentPieChart';
import UtilizationLineChart from './charts/UtilizationLineChart';
import MetricCard from '../components/ui/MetricCard';

const metrics = [
  {
    label: 'Priority Locations',
    value: '24',
    description: 'High-value sites recommended for immediate deployment.',
    accent: 'accent',
  },
  {
    label: 'Demand Signal',
    value: '87%',
    description: 'Current demand confidence across targeted deployment zones.',
    accent: 'cyan',
  },
  {
    label: 'Investment Momentum',
    value: '31%',
    description: 'Relative readiness signal for capital allocation and rollout timing.',
    accent: 'emerald',
  },
  {
    label: 'Network Baseline',
    value: '112',
    description: 'Existing charging assets shaping coverage and gap analysis.',
    accent: 'accent',
  },
];

export default function DemandAnalysisPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-[28px] border border-slate-700/60 bg-slate-950/80 p-8 shadow-surface">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-cyan">Demand Analysis</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Quantify demand and prioritize network expansion.</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
              Evaluate demand intensity across target corridors and turn demand signals into a prioritized deployment roadmap.
            </p>
          </div>
        </div>
      </div>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((item) => (
          <MetricCard
            key={item.label}
            label={item.label}
            value={item.value}
            description={item.description}
            accent={item.accent as 'accent' | 'emerald' | 'cyan'}
          />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <DemandBarChart />
        <div className="space-y-6">
          <UtilizationLineChart />
          <InvestmentPieChart />
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="blur-panel rounded-[28px] border border-slate-700/60 p-8 shadow-surface">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Deployment priority</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">Focus on demand-led corridors.</h3>
          <p className="mt-4 text-sm leading-6 text-slate-300">Identifying the strongest demand corridors helps shape a deployment cadence that minimizes risk and accelerates uptake.</p>
        </div>
        <div className="blur-panel rounded-[28px] border border-slate-700/60 p-8 shadow-surface">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Growth outlook</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">Predict regional development signals.</h3>
          <p className="mt-4 text-sm leading-6 text-slate-300">Use the demand model to align infrastructure investment with emerging urban activity and charging adoption trends.</p>
        </div>
        <div className="blur-panel rounded-[28px] border border-slate-700/60 p-8 shadow-surface">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Action plan</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">Turn insights into execution steps.</h3>
          <p className="mt-4 text-sm leading-6 text-slate-300">Translate score-based demand intelligence into deployment sequencing, stakeholder planning, and investor-ready site briefs.</p>
        </div>
      </div>
    </div>
  );
}
