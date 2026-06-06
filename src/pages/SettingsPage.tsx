export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-[28px] border border-slate-700/60 bg-slate-950/80 p-8 shadow-surface">
        <p className="text-sm uppercase tracking-[0.24em] text-cyan">Profile</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-700/70 bg-slate-900/80 p-6">
            <p className="text-sm text-slate-400">Name</p>
            <p className="mt-2 text-lg font-semibold text-white">ChargeWise Admin</p>
          </div>
          <div className="rounded-3xl border border-slate-700/70 bg-slate-900/80 p-6">
            <p className="text-sm text-slate-400">Email</p>
            <p className="mt-2 text-lg font-semibold text-white">admin@chargewise.ai</p>
          </div>
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-700/60 bg-slate-950/80 p-8 shadow-surface">
        <p className="text-sm uppercase tracking-[0.24em] text-cyan">Theme</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {['Dark', 'Adaptive', 'System'].map((option) => (
            <button key={option} className="rounded-3xl border border-slate-700/70 bg-slate-900/80 px-6 py-4 text-left text-slate-200 transition hover:bg-slate-800">
              <p className="font-semibold text-white">{option}</p>
              <p className="mt-1 text-sm text-slate-400">{option === 'Dark' ? 'Recommended' : 'Enterprise theme'}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-700/60 bg-slate-950/80 p-8 shadow-surface">
        <p className="text-sm uppercase tracking-[0.24em] text-cyan">Notifications</p>
        <div className="mt-6 space-y-4">
          {[
            { label: 'Daily planning alerts', enabled: true },
            { label: 'Critical infrastructure updates', enabled: true },
            { label: 'Weekly investor summaries', enabled: false },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between rounded-3xl border border-slate-700/70 bg-slate-900/80 px-5 py-4">
              <div>
                <p className="font-semibold text-white">{item.label}</p>
                <p className="mt-1 text-sm text-slate-400">{item.enabled ? 'Enabled' : 'Disabled'}</p>
              </div>
              <div className={`rounded-full px-3 py-1 text-xs ${item.enabled ? 'bg-emerald/15 text-emerald' : 'bg-slate-800 text-slate-400'}`}>
                {item.enabled ? 'ON' : 'OFF'}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[28px] border border-slate-700/60 bg-slate-950/80 p-8 shadow-surface">
          <p className="text-sm uppercase tracking-[0.24em] text-cyan">API Configuration</p>
          <div className="mt-6 space-y-4 rounded-3xl border border-slate-700/70 bg-slate-900/80 p-6">
            <p className="text-sm text-slate-400">Recommendation API Endpoint</p>
            <p className="text-lg font-semibold text-white">https://06nwru8m2b.execute-api.us-east-1.amazonaws.com/pod/recommendations</p>
          </div>
        </div>
        <div className="rounded-[28px] border border-slate-700/60 bg-slate-950/80 p-8 shadow-surface">
          <p className="text-sm uppercase tracking-[0.24em] text-cyan">AWS Integration Status</p>
          <div className="mt-6 rounded-3xl border border-slate-700/70 bg-slate-900/80 p-6">
            <p className="text-lg font-semibold text-white">Active</p>
            <p className="mt-3 text-sm leading-6 text-slate-400">AWS API Gateway and Lambda are configured for recommendation delivery and backend orchestration.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
