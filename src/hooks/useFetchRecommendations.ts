import { useState, useEffect } from 'react';
import { fetchRecommendations } from '../services/api';

export interface RecommendationItem {
  location: string;
  score: number;
  rank: number;
}

const fallbackRecommendations: RecommendationItem[] = [
  { location: 'Lekki', score: 92, rank: 1 },
  { location: 'Ikeja', score: 88, rank: 2 },
  { location: 'Yaba', score: 84, rank: 3 },
];

export const useFetchRecommendations = () => {
  const [data, setData] = useState<RecommendationItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        const payload = await fetchRecommendations();
        if (!mounted) return;
        if (Array.isArray(payload)) {
          setData(payload);
        } else {
          setData(fallbackRecommendations);
        }
      } catch (exception) {
        if (!mounted) return;
        setError('Unable to load recommendations. Showing sample insights.');
        setData(fallbackRecommendations);
      } finally {
        if (!mounted) return;
        setIsLoading(false);
      }
    };

    load();
    return () => {
      mounted = false;
    };
  }, []);

  return { data, isLoading, error };
};
