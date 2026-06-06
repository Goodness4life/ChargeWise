import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const investmentData = [
  { name: 'High', value: 45 },
  { name: 'Medium', value: 32 },
  { name: 'Low', value: 23 },
];
const COLORS = ['#10B981', '#06B6D4', '#3B82F6'];

export default function InvestmentPieChart() {
  return (
    <div className="blur-panel rounded-[28px] border border-slate-700/60 p-6 shadow-surface">
      <div className="mb-6">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Investment Potential Distribution</p>
        <p className="mt-2 text-lg font-semibold text-white">Location opportunity segmentation</p>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={investmentData} dataKey="value" nameKey="name" innerRadius={58} outerRadius={98} paddingAngle={4}>
              {investmentData.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ background: '#111827', border: '1px solid rgba(148,163,184,0.12)' }}
            />
            <Legend verticalAlign="bottom" align="center" iconType="circle" wrapperStyle={{ color: '#9CA3AF' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
