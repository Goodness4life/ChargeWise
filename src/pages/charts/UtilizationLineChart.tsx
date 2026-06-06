import { Line, LineChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const utilizationData = [
  { month: 'Jan', utilization: 58 },
  { month: 'Feb', utilization: 62 },
  { month: 'Mar', utilization: 68 },
  { month: 'Apr', utilization: 72 },
  { month: 'May', utilization: 78 },
  { month: 'Jun', utilization: 82 },
  { month: 'Jul', utilization: 84 },
  { month: 'Aug', utilization: 88 },
  { month: 'Sep', utilization: 85 },
  { month: 'Oct', utilization: 87 },
  { month: 'Nov', utilization: 90 },
  { month: 'Dec', utilization: 92 },
];

export default function UtilizationLineChart() {
  return (
    <div className="blur-panel rounded-[28px] border border-slate-700/60 p-6 shadow-surface">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Charging Utilization Trend</p>
          <p className="mt-2 text-lg font-semibold text-white">Weekly infrastructure consumption</p>
        </div>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={utilizationData} margin={{ top: 12, right: 16, left: -10, bottom: 0 }}>
            <CartesianGrid stroke="#1F2937" opacity={0.6} vertical={false} />
            <XAxis dataKey="month" tick={{ fill: '#9CA3AF', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#9CA3AF', fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip
              cursor={{ stroke: '#3B82F6', strokeWidth: 2 }}
              contentStyle={{ background: '#111827', border: '1px solid rgba(148,163,184,0.12)' }}
            />
            <Line type="monotone" dataKey="utilization" stroke="#06B6D4" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
