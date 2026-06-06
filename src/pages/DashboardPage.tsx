import DemandBarChart from './charts/DemandBarChart';
import InvestmentPieChart from './charts/InvestmentPieChart';
import UtilizationLineChart from './charts/UtilizationLineChart';
import MetricCard from '../components/ui/MetricCard';

const metrics = [
  {
    label: 'Deployment Opportunities',
    value: '24',
    description: 'Priority locations surfaced for immediate network expansion.',
    accent: 'accent',
  },
  {
    label: 'Demand Confidence',
    value: '87%',
    description: 'Strength of demand for top-scored deployment areas.',
    accent: 'cyan',
  },
  {
    label: 'Investment Signal',
    value: '31%',
    description: 'Average signal strength for investment-ready corridors.',
    accent: 'emerald',
  },
  {
    label: 'Existing Stations',
    value: '112',
    description: 'Current charging assets shaping network coverage.',
    accent: 'accent',
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[28px] border border-slate-700/60 bg-slate-950/80 p-8 shadow-surface">
        <p className="text-sm uppercase tracking-[0.24em] text-cyan">Executive overview</p>
        <h2 className="mt-4 text-3xl font-semibold text-white">Real-time infrastructure intelligence for EV deployment.</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
          ChargeWise AI turns demand signals and network readiness into a clear deployment story, so your team can prioritize the right locations and move from planning to execution.
        </p>
      </section>

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

      <section className="grid gap-6 xl:grid-cols-3">
        <div className="blur-panel rounded-[28px] border border-slate-700/60 p-8 shadow-surface">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">What is happening</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">Demand is concentrated in key corridors.</h3>
          <p className="mt-4 text-sm leading-6 text-slate-300">ChargeWise has identified the strongest EV demand pockets so deployment teams can focus on high-impact sites first.</p>
        </div>
        <div className="blur-panel rounded-[28px] border border-slate-700/60 p-8 shadow-surface">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Why it matters</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">Prioritize network growth with confidence.</h3>
          <p className="mt-4 text-sm leading-6 text-slate-300">Invest in corridors with strong demand and limited coverage to maximize utilization and improve service accessibility.</p>
        </div>
        <div className="blur-panel rounded-[28px] border border-slate-700/60 p-8 shadow-surface">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Recommended action</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">Convert insights into rollout decisions.</h3>
          <p className="mt-4 text-sm leading-6 text-slate-300">Use the dashboard to sequence deployments, align funding, and accelerate approval for your highest-priority locations.</p>
        </div>
      </section>
    </div>
  );
}
