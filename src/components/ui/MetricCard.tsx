import { ReactNode } from 'react';

interface MetricCardProps {
  label: string;
  value: string;
  description: string;
  accent?: 'accent' | 'emerald' | 'cyan';
}

const badgeStyles = {
  accent: 'bg-accent/10 text-accent',
  emerald: 'bg-emerald/10 text-emerald',
  cyan: 'bg-cyan/10 text-cyan',
};

export default function MetricCard({ label, value, description, accent = 'accent' }: MetricCardProps) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-slate-700/60 bg-slate-900/80 p-6 shadow-surface transition duration-300 hover:-translate-y-1 hover:border-slate-500/70 hover:bg-slate-900/95">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan via-accent to-emerald opacity-80" />
      <div className="relative">
        <div className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${badgeStyles[accent]}`}>
          {label}
        </div>
        <p className="mt-6 text-4xl font-semibold tracking-tight text-white">{value}</p>
        <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
      </div>
    </div>
  );
}
