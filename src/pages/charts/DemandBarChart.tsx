import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const chartData = [
  { name: 'Lekki', value: 92 },
  { name: 'Ikeja', value: 86 },
  { name: 'Yaba', value: 81 },
  { name: 'Ajah', value: 74 },
  { name: 'Victoria Island', value: 89 },
  { name: 'Surulere', value: 79 },
];

export default function DemandBarChart() {
  return (
    <div className="blur-panel rounded-[28px] border border-slate-700/60 p-6 shadow-surface">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">EV Demand by Location</p>
          <p className="mt-2 text-lg font-semibold text-white">Regional demand intensity</p>
        </div>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 12, right: 16, left: -10, bottom: 0 }}>
            <CartesianGrid stroke="#1F2937" vertical={false} />
            <XAxis dataKey="name" tick={{ fill: '#9CA3AF', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#9CA3AF', fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip
              cursor={{ fill: 'rgba(255,255,255,0.04)' }}
              contentStyle={{ background: '#111827', border: '1px solid rgba(148,163,184,0.12)' }}
            />
            <Bar dataKey="value" radius={[12, 12, 0, 0]} fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
