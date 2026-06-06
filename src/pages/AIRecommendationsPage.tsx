import { useMemo, useState, useEffect } from 'react';
import { Eye, TrendingUp } from 'lucide-react';
import { useFetchRecommendations, RecommendationItem } from '../hooks/useFetchRecommendations';
import Skeleton from '../components/ui/Skeleton';

function getRecommendationLevel(score: number) {
  if (score > 90) return 'Excellent Opportunity';
  if (score >= 80) return 'Strong Opportunity';
  return 'Moderate Opportunity';
}

function getActionAdvice(score: number) {
  if (score > 90) return 'Prioritize this location for immediate deployment approval and investor briefing.';
  if (score >= 80) return 'Advance planning with a strong funding case and local deployment assessment.';
  return 'Monitor demand conditions and stage support while preparing future deployment options.';
}

export default function AIRecommendationsPage() {
  const { data, isLoading, refresh } = useFetchRecommendations();
  const [selectedRecommendation, setSelectedRecommendation] = useState<RecommendationItem | null>(null);

  useEffect(() => {
    if (!isLoading && data.length) {
      setSelectedRecommendation((prev) => {
        if (prev) {
          return data.find((item) => item.rank === prev.rank) ?? data[0];
        }
        return data[0];
      });
    }
  }, [data, isLoading]);

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
            <button
              type="button"
              onClick={refresh}
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-700/80 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 transition duration-200 hover:bg-slate-800"
            >
              <TrendingUp className="h-4 w-4" /> Refresh insights
            </button>
          </div>
        </div>
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
                        <button
                          type="button"
                          onClick={() => setSelectedRecommendation(item)}
                          className="inline-flex items-center gap-2 rounded-2xl border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-sm text-slate-100 transition duration-200 hover:bg-slate-800"
                        >
                          <Eye className="h-4 w-4" /> Review details
                        </button>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedRecommendation ? (
        <div className="rounded-[28px] border border-slate-700/60 bg-slate-950/80 p-8 shadow-surface">
          <p className="text-sm uppercase tracking-[0.24em] text-cyan">Recommendation insight</p>
          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold text-white">{selectedRecommendation.location}</h3>
              <p className="mt-3 text-sm text-slate-300">
                This recommendation is based on the AI platform’s location scoring and ranking model. It provides a clear deployment signal for location planning teams.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-700/70 bg-slate-900/80 p-5">
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span>Recommendation score</span>
                <span className="font-semibold text-white">{selectedRecommendation.score}%</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span>Priority tier</span>
                <span className="font-semibold text-white">{getRecommendationLevel(selectedRecommendation.score)}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span>Suggested action</span>
                <span className="max-w-xs text-right text-white">{getActionAdvice(selectedRecommendation.score)}</span>
              </div>
            </div>
          </div>
        </div>
      ) : null}

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
