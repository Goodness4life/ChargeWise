import { NavLink } from 'react-router-dom';
import {
  Activity,
  BarChart3,
  MapPin,
  Sparkles,
  Settings,
  Wallet,
  FileText,
} from 'lucide-react';

export const navItems = [
  { label: 'Dashboard', path: '/dashboard', icon: Activity },
  { label: 'Demand Analysis', path: '/dashboard/demand', icon: BarChart3 },
  { label: 'AI Recommendations', path: '/dashboard/recommendations', icon: Sparkles },
  { label: 'Investment Insights', path: '/dashboard/investment', icon: Wallet },
  { label: 'Infrastructure Map', path: '/dashboard/map', icon: MapPin },
  { label: 'Reports', path: '/dashboard/reports', icon: FileText },
  { label: 'Settings', path: '/dashboard/settings', icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="hidden w-72 shrink-0 flex-col border-r border-slate-700/70 bg-slate-950/90 px-6 py-8 text-slate-300 xl:flex">
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-cyan/20 text-accent">
          <span className="text-lg font-semibold">C</span>
        </div>
        <div>
          <p className="text-base font-semibold text-white">ChargeWise AI</p>
          <p className="text-xs text-slate-500">EV planning platform</p>
        </div>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `group flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-medium transition duration-200 hover:bg-slate-800 ${
                  isActive ? 'bg-slate-800 text-white' : 'text-slate-400'
                }`
              }
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="mt-auto rounded-3xl border border-slate-700/70 bg-slate-950/80 p-5 text-sm text-slate-400">
        <p className="font-semibold text-slate-100">ChargeWise AI Enterprise</p>
        <p className="mt-2 text-xs leading-5 text-slate-500">Operational planning, investment scoring, and location analytics in one secure workspace.</p>
      </div>
    </aside>
  );
}
