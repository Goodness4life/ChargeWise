import { Bell, Search, UserCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const routeTitles: Record<string, string> = {
  '/dashboard': 'Infrastructure Intelligence Overview',
  '/dashboard/demand': 'Demand Analysis',
  '/dashboard/recommendations': 'AI Location Recommendations',
  '/dashboard/investment': 'Investment Opportunity Analysis',
  '/dashboard/map': 'Infrastructure Map',
  '/dashboard/reports': 'Reports',
  '/dashboard/settings': 'Settings',
};

export default function Topbar() {
  const location = useLocation();
  const title = routeTitles[location.pathname] || 'Infrastructure Intelligence Overview';

  return (
    <div className="flex flex-col gap-6 border-b border-slate-700/60 pb-6 xl:flex-row xl:items-center xl:justify-between xl:pb-8">
      <div>
        <h1 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-400 sm:text-base">
          Real-time EV charging infrastructure planning insights.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <label className="relative block w-full max-w-sm">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          <input
            type="search"
            placeholder="Search recommendations"
            className="w-full rounded-2xl border border-slate-700/80 bg-slate-900/80 py-3 pl-11 pr-4 text-sm text-slate-200 transition duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
        </label>
        <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700/80 bg-slate-900/80 text-slate-200 transition duration-200 hover:bg-slate-800">
          <Bell className="h-5 w-5" />
        </button>
        <button className="flex h-12 items-center gap-3 rounded-2xl border border-slate-700/80 bg-slate-900/80 px-4 text-sm text-slate-200 transition duration-200 hover:bg-slate-800">
          <UserCircle className="h-6 w-6" />
          <span>Admin</span>
        </button>
      </div>
    </div>
  );
}
