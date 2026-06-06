import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';
import Sidebar, { navItems } from '../components/ui/Sidebar';
import Topbar from '../components/ui/Topbar';

export default function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-deepnavy text-slate-100">
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1">
          <div className="border-b border-slate-700/60 bg-slate-950/95 px-4 py-4 backdrop-blur-xl xl:hidden">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-cyan/20 text-accent">
                  <span className="text-lg font-semibold">C</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">ChargeWise AI</p>
                  <p className="text-xs text-slate-500">EV planning workspace</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMenuOpen((value) => !value)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-700/80 bg-slate-900/80 text-slate-200 transition hover:bg-slate-800"
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {menuOpen ? (
            <div className="xl:hidden border-b border-slate-700/60 bg-slate-950/95 px-4 py-5 shadow-2xl">
              <div className="mx-auto flex max-w-7xl flex-col gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `rounded-3xl px-4 py-3 text-sm font-medium transition duration-200 ${
                          isActive ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-900/80'
                        }`
                      }
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-4 w-4 text-slate-400" />
                        <span>{item.label}</span>
                      </div>
                    </NavLink>
                  );
                })}
              </div>
            </div>
          ) : null}

          <div className="px-4 py-6 sm:px-6 xl:px-10 xl:py-8">
            <Topbar />
            <div className="mt-8 space-y-8">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
