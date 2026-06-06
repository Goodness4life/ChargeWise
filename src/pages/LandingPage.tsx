import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const metrics = [
  { label: 'Candidate Locations Analyzed', value: '100+' },
  { label: 'Recommendation Confidence', value: '95%' },
  { label: 'Planning Cycle Reduction', value: '40%' },
  { label: 'Faster Investment Decisions', value: '3x' },
];

const features = [
  {
    title: 'AI Location Intelligence',
    description: 'Score candidate sites using demand signals, location readiness, and investment potential.',
  },
  {
    title: 'Investment Insights',
    description: 'Surface deployment opportunities that align with ROI expectations and funding priorities.',
  },
  {
    title: 'Infrastructure Analytics',
    description: 'Track network readiness, utilization momentum, and high-priority expansion corridors.',
  },
  {
    title: 'Cloud-Powered Scalability',
    description: 'Built on AWS serverless services for resilient, demo-ready delivery.',
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-deepnavy text-slate-100">
      <header className="border-b border-slate-700/60 px-6 py-5 backdrop-blur-xl sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/20 text-accent">C</div>
            <div>
              <p className="text-lg font-semibold text-white">ChargeWise AI</p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">EV infrastructure planning</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#features" className="transition hover:text-white">Capabilities</a>
            <a href="#solutions" className="transition hover:text-white">Architecture</a>
            <a href="/dashboard" className="transition hover:text-white">Dashboard</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
          <Link to="/dashboard" className="rounded-2xl border border-slate-700/70 bg-slate-900/80 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-800">
            Launch Dashboard
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:py-16">
        <section className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex rounded-full bg-slate-900/70 px-4 py-2 text-xs uppercase tracking-[0.4em] text-cyan">
              Enterprise EV planning
            </div>
            <div className="space-y-6">
              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                AI-Powered EV Infrastructure Planning
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Turn predictive city and grid signals into prioritized charging deployments, helping planners move from concept to capital-ready execution.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/dashboard">
                <Button>Launch Dashboard</Button>
              </Link>
              <a href="#solutions">
                <Button variant="secondary">View Architecture</Button>
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[36px] border border-slate-700/70 bg-slate-950/80 p-6 shadow-surface transition duration-300 hover:-translate-y-0.5 hover:border-slate-600/70">
            <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-cyan/20 to-transparent" />
            <div className="relative grid gap-5 sm:grid-cols-2">
              <div className="rounded-[28px] border border-slate-700/80 bg-slate-900/80 p-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-slate-600/80">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Demand analytics</p>
                <p className="mt-4 text-xl font-semibold text-white">Lekki & Victoria Island</p>
                <p className="mt-2 text-sm text-slate-400">Traffic, commercial activity, and EV use cases mapped in real time.</p>
              </div>
              <div className="rounded-[28px] border border-slate-700/80 bg-slate-900/80 p-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-slate-600/80">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Recommendation score</p>
                <p className="mt-4 text-4xl font-semibold text-white">92%</p>
                <p className="mt-2 text-sm text-slate-400">Excellent opportunity for rapid deployment.</p>
              </div>
              <div className="rounded-[28px] border border-slate-700/80 bg-slate-900/80 p-5 shadow-lg sm:col-span-2 transition duration-300 hover:-translate-y-1 hover:border-slate-600/80">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>Infrastructure intensity</span>
                  <span>High priority</span>
                </div>
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-accent to-cyan" />
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-3xl bg-slate-900/80 p-4">
                    <p className="text-sm text-slate-400">Coverage</p>
                    <p className="mt-3 text-2xl font-semibold text-white">68%</p>
                  </div>
                  <div className="rounded-3xl bg-slate-900/80 p-4">
                    <p className="text-sm text-slate-400">ROI</p>
                    <p className="mt-3 text-2xl font-semibold text-white">34%</p>
                  </div>
                  <div className="rounded-3xl bg-slate-900/80 p-4">
                    <p className="text-sm text-slate-400">Confidence</p>
                    <p className="mt-3 text-2xl font-semibold text-white">95%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-6 left-1/2 w-[calc(100%-3rem)] -translate-x-1/2 rounded-[28px] border border-slate-700/80 bg-slate-900/80 p-5 shadow-2xl">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Regional network</p>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-slate-300">
                <div>
                  <p className="font-semibold text-white">Infrastructure Gaps</p>
                  <p className="mt-2 text-slate-400">7 high-priority corridors identified.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">EV Adoption</p>
                  <p className="mt-2 text-slate-400">Steady improvement over the last 6 months.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 grid gap-6 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-[28px] border border-slate-700/70 bg-slate-900/70 p-6 shadow-surface backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-slate-500/70">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">{metric.label}</p>
              <p className="mt-4 text-3xl font-semibold text-white">{metric.value}</p>
            </div>
          ))}
        </section>

        <section id="features" className="mt-20 grid gap-8 lg:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-[32px] border border-slate-700/70 bg-slate-950/80 p-8 shadow-surface transition hover:-translate-y-1 hover:border-slate-600">
              <p className="text-lg font-semibold text-white">{feature.title}</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">{feature.description}</p>
            </div>
          ))}
        </section>

        <section id="solutions" className="mt-20 rounded-[32px] border border-slate-700/70 bg-slate-950/80 p-10 shadow-surface">
          <div className="grid gap-6 lg:grid-cols-[0.6fr_1fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-cyan">Cloud architecture</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Enterprise infrastructure for resilient EV planning.</h2>
              <p className="mt-4 max-w-xl text-slate-300">
                ChargeWise AI combines high-resolution location intelligence, investment modeling, and operational dashboards so stakeholders can make faster, confident infrastructure decisions.
              </p>
            </div>
            <div className="grid gap-4 rounded-[28px] border border-slate-700/70 bg-slate-900/80 p-6">
              <div className="rounded-3xl bg-slate-950/70 p-5">
                <p className="text-sm text-slate-500">Data ingestion</p>
                <p className="mt-3 text-lg font-semibold text-white">Traffic, population, and grid capacity feeds.</p>
              </div>
              <div className="rounded-3xl bg-slate-950/70 p-5">
                <p className="text-sm text-slate-500">AI scoring</p>
                <p className="mt-3 text-lg font-semibold text-white">Opportunity ranking with confidence thresholds.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-20 rounded-[32px] border border-slate-700/70 bg-slate-950/80 p-10 shadow-surface">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-cyan">Contact</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Start planning charging networks with data you can trust.</h2>
              <p className="mt-4 text-slate-300">If you are building electric mobility infrastructure, ChargeWise AI gives you the analytics surface and executive reporting you need.</p>
            </div>
            <div className="space-y-4">
              <div className="rounded-3xl border border-slate-700/70 bg-slate-900/80 p-6">
                <p className="text-sm text-slate-500">Enterprise inquiries</p>
                <p className="mt-3 text-lg font-semibold text-white">hello@chargewise.ai</p>
              </div>
              <div className="rounded-3xl border border-slate-700/70 bg-slate-900/80 p-6">
                <p className="text-sm text-slate-500">Office</p>
                <p className="mt-3 text-lg font-semibold text-white">Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
