import { useMemo } from 'react';
import { ArrowRight, Eye, TrendingUp } from 'lucide-react';
import { useFetchRecommendations } from '../hooks/useFetchRecommendations';
import Skeleton from '../components/ui/Skeleton';

function getRecommendationLevel(score: number) {
  if (score > 90) return 'Excellent Opportunity';
  if (score >= 80) return 'Strong Opportunity';
  return 'Moderate Opportunity';
}

export default function AIRecommendationsPage() {
  const { data, isLoading, error } = useFetchRecommendations();

  const insightCards = useMemo(
    () => [
      {
        title: 'Lekki',
        description: 'Lekki is the top-scored location for rapid station deployment and strong utilization potential.',
      },
      {
        title: 'Ikeja',
        description: 'Ikeja combines stable demand and strategic business density for reliable network growth.',
      },
      {
        title: 'Yaba',
        description: 'Yaba is an emerging mobility hub where charging readiness is aligned with future growth.',
      },
    ],
    [],
  );

  return (
    <div className="space-y-8">
      <div className="rounded-[28px] border border-slate-700/60 bg-slate-950/80 p-8 shadow-surface">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-cyan">AI Location Recommendations</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">High-confidence site recommendations for EV rollout.</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
              The platform ranks locations by AI score and translates them into priority tiers, so planning teams can focus on actionable deployment opportunities.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-2xl border border-slate-700/80 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 transition hover:bg-slate-800">
              <TrendingUp className="h-4 w-4" /> Refresh insights
            </button>
          </div>
        </div>
        {error ? (
          <div className="mt-6 rounded-3xl border border-amber-500/20 bg-amber-500/10 px-5 py-4 text-sm text-amber-100">
            {error}
          </div>
        ) : null}
      </div>

      <div className="rounded-[28px] border border-slate-700/60 bg-slate-950/80 p-6 shadow-surface">
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-3 text-sm text-slate-200">
            <thead>
              <tr className="text-left text-xs uppercase tracking-[0.28em] text-slate-500">
                <th className="px-4 py-3">Rank</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Demand Score</th>
                <th className="px-4 py-3">Recommendation Tier</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {isLoading
                ? Array.from({ length: 3 }).map((_, index) => (
                    <tr key={index} className="bg-slate-900/70 rounded-3xl">
                      <td className="px-4 py-5"><Skeleton className="h-6 w-16" /></td>
                      <td className="px-4 py-5"><Skeleton className="h-6 w-40" /></td>
                      <td className="px-4 py-5"><Skeleton className="h-6 w-20" /></td>
                      <td className="px-4 py-5"><Skeleton className="h-6 w-36" /></td>
                      <td className="px-4 py-5"><Skeleton className="h-8 w-24" /></td>
                    </tr>
                  ))
                : data.map((item) => (
                    <tr key={item.rank} className="rounded-3xl border border-slate-700/60 bg-slate-900/70 transition hover:bg-slate-800">
                      <td className="px-4 py-5 font-semibold text-white">{item.rank}</td>
                      <td className="px-4 py-5 text-slate-100">{item.location}</td>
                      <td className="px-4 py-5 text-slate-300">{item.score}%</td>
                      <td className="px-4 py-5 text-slate-200">{getRecommendationLevel(item.score)}</td>
                      <td className="px-4 py-5">
                        <button className="inline-flex items-center gap-2 rounded-2xl border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-sm text-slate-100 transition hover:bg-slate-800">
                          <Eye className="h-4 w-4" /> Review details
                        </button>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {insightCards.map((card) => (
          <div key={card.title} className="rounded-[28px] border border-slate-700/60 bg-slate-950/80 p-8 shadow-surface">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">{card.title}</p>
            <p className="mt-4 text-lg font-semibold text-white">{card.title} opportunity</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
